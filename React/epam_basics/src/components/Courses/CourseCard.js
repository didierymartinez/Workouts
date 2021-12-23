import Button from '../UI/Button';

const CourseCard = (props) => {
	const authors = props.authors.join(',');
	const duration = `${(props.duration / 60).toFixed(2)} hours`;
	const date = props.date.replaceAll('/', '.');

	return (
		<div className='course-card'>
			<section>
				<h1>{props.title}</h1>
				<p>{props.description}</p>
			</section>
			<section>
				Authors: {authors}
				Duration: {duration}
				Created: {date}
				<Button text='Show course'></Button>
			</section>
		</div>
	);
};
export default CourseCard;
