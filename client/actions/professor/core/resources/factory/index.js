import destroyFactory from './destroy';
import saveFactory from './save';

const actionsFactory = ({ entityName, service, resourcesRoute }) => ({
  destroy: destroyFactory({ entityName, service }),
  save: saveFactory({ service, redirectTo: resourcesRoute }),
});

export default actionsFactory;
