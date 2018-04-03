import _ from 'lodash';
import Cookies from 'js-cookie';

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

const remove = name => Cookies.remove(name);

export default { all, find, remove };
