import moment from 'moment';

const deadline = value => (
  moment(value).isBefore(moment(), 'day')
    ? 'Informe uma data igual ou superior ao dia de hoje'
    : undefined
);

export default { deadline };
