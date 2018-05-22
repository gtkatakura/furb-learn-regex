import resourcesServiceFactory from './factory';

export const activitiesService = resourcesServiceFactory('/api/activities');

export const exercisesService = resourcesServiceFactory('/api/exercises');

export const classRoomsService = resourcesServiceFactory('/api/classRooms');
