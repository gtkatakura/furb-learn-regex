import _ from 'lodash';
import WebApi from '../WebApi';

const getIdentity = resource => (
  _.isInteger(resource)
    ? resource
    : _.get(resource, '_id')
);

const resourcesServiceFactory = url => {
  const resourcesApi = new WebApi(url);

  const all = () => resourcesApi.all();

  const save = resource => {
    const resourceId = getIdentity(resource);

    if (resourceId) {
      return resourcesApi.update(resource);
    }

    return resourcesApi.create(resource);
  };

  const destroy = resource => {
    const resourceId = getIdentity(resource);
    return resourcesApi.withRoute(resourceId).delete();
  };

  return { all, save, destroy };
};

export default resourcesServiceFactory;
