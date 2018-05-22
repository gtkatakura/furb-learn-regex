import { activitiesService } from 'services/resources';
import actionsFactory from '../core/resources/factory';

export { default as fetchAll } from './fetchAll';

export const { destroy, save } = actionsFactory({
  entityName: 'ACTIVITY',
  resourcesRoute: '/professor/atividades',
  service: activitiesService,
});
