import { classRoomsService } from 'services/resources';
import actionsFactory from '../core/resources/factory';

export { default as fetchAll } from './fetchAll';
export { default as subscribe } from './subscribe';

export const { destroy, save } = actionsFactory({
  entityName: 'CLASS_ROOM',
  resourcesRoute: '/professor/turmas',
  service: classRoomsService,
});
