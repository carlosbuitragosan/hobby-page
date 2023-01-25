
const formattedDate = () => {
	const date = new Date();

	let dayOfWeek;
	switch (date.getDay()) {
		case 0:
			dayOfWeek = 'Sunday';
			break;
		case 1:
			dayOfWeek = 'Monday';
			break;
		case 2:
			dayOfWeek = 'Tuesday';
			break;
		case 3:
			dayOfWeek = 'Wednesday';
			break;
		case 4:
			dayOfWeek = 'Thursday';
			break;
		case 5:
			dayOfWeek = 'Friday';
			break;
		case 6:
			dayOfWeek = 'Saturday';
	}

	let month;
	switch(date.getMonth()) {
	case 0:
		month = 'January';
		break;
	case 1:
		month = 'February';
		break;
	case 2:
		month = 'March';
		break;
	case 3:
		month = 'April';
		break;
	case 4:
		month = 'May';
		break;
	case 5:
		month = 'June';
		break;
	case 6:
		month = 'July';
		break;
	case 7:
		month = 'August';
		break;
	case 8:
		month = 'September';
		break;
	case 9:
		month = 'October';
		break;
	case 10:
		month = 'November';
		break;
	case 11:
		month = 'December';
	}
	const dayOfMonth = date.getDate();
	const year = date.getFullYear();

	return `${dayOfWeek} ${month} ${dayOfMonth} ${year}`;
}

document.querySelector('.date').innerHTML = formattedDate();