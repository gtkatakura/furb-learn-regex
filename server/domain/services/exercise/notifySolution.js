const _ = require('lodash');

const mailer = require('../../../mailer');
const StudentRepository = require('../../repositories/student');
const ActivityRepository = require('../../repositories/activity');
const ClassRoomsRepository = require('../../repositories/classRoom');

const notifySolution = async ({ exercise, solution, user }) => {
  const activities = await ActivityRepository.all({
    exercises: exercise._id,
  });

  const student = await StudentRepository.find({
    user,
  });

  const classRooms = await ClassRoomsRepository.all({
    '_id': student.classRooms,
    'classworks.activity': activities,
  }).populate('createdBy');

  if (classRooms.length !== 0) {
    _.each(classRooms, classRoom => {
      const classwork = _.find(classRoom.classworks, currentClassWork => (
        currentClassWork.notifyExerciseConclusions &&
        _.some(activities, activity => activity.equals(currentClassWork.activity))
      ));

      if (classwork) {
        mailer.send({
          to: classRoom.createdBy.email,
          subject: `${classRoom.name} - ${user.name} concluiu um exercício`,
          html: `<b>${exercise.description}</b> resolvido com a seguinte expressão regular: <b>${solution}</b>`,
        });
      }
    });
  }
};

module.exports = notifySolution;
