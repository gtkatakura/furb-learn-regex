const { regex2dfa } = require('regex2dfa/regex2dfa.js');

const solutionIsValid = (exercise, solution) => (
  exercise.regularExpression === solution
  || regex2dfa(exercise.regularExpression) === regex2dfa(solution)
);

module.exports = solutionIsValid;
