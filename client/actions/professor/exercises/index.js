import { exercisesService } from 'services/resources';
import actionsFactory from '../core/resources/factory';

export { default as fetchAll } from './fetchAll';

export const { destroy, save } = actionsFactory({
  entityName: 'EXERCISE',
  resourcesRoute: '/professor/exercicios',
  service: exercisesService,
});
