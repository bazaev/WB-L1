import moment from './moment.min.js';

const date = (date) => {
	return moment(date).format('DD.MM.YYYY')
}

export default date;