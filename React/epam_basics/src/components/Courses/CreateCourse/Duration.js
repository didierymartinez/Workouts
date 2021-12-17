import { useState } from 'react';
const MINUTES_HOUR = 60;
const addCero = (n) => (n < 9 ? '0' : '') + n;

const Duration = (props) => {
	const [hoursDuration, setHoursDuration] = useState('0');
	const calculateHours = (e) => {
		const quantity = e.target.value;
		const hours = addCero(parseInt(quantity / MINUTES_HOUR));
		const minutes = addCero(quantity % MINUTES_HOUR);
		const txtHours = `${hours}:${minutes}`;
		setHoursDuration(txtHours);
		props.onChange(quantity);
	};

	return (
		<div>
			<h3>Duration</h3>
			<input type='number' onChange={calculateHours}></input>
			Duration: {hoursDuration} hours
		</div>
	);
};
export default Duration;
