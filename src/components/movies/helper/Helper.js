import moment from 'moment';

const capitalizeName = name =>
   name
      .split('')
      .map(char => char.toUpperCase())
      .join('');

const friendlyDate = date => moment(date, 'YYYY-MM-DD').format('MMMM D, YYYY');

export { capitalizeName, friendlyDate };
