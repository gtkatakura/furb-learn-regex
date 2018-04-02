import _ from 'lodash';

const all = () => (
  document.cookie.split('; ')
    .map(element => {
      const [name, value] = element.split('=');
      return {
        name,
        value: decodeURIComponent(value),
      };
    })
);

const find = name => _.get(all().find(cookie => cookie.name === name), 'value');

export default { all, find };
