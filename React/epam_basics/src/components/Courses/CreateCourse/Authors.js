import React, { useEffect, useState } from 'react';
import Button from '../../UI/Button';

const Authors = (props) => {
	const [authorsList, setAuthorsList] = useState(props.authors);
	const [courseAuthors, setCourseAuthors] = useState([]);

	const onAddAuthorCourseHandler = (author) => {
		setCourseAuthors((prevCourseAuthors) => [...prevCourseAuthors, author]);
		setAuthorsList((prevAuthorsList) =>
			prevAuthorsList.filter((a) => a.id !== author.id)
		);
	};

	const onDelAuthorCourseHandler = (author) => {
		setAuthorsList((prevCourseAuthors) => [...prevCourseAuthors, author]);
		setCourseAuthors((prevAuthorsList) =>
			prevAuthorsList.filter((a) => a.id !== author.id)
		);
	};
	useEffect(() => {
		props.onCourseAuthorsChange(courseAuthors);
	}, [courseAuthors]);

	useEffect(() => {
		if (props.addAuthor) {
			setAuthorsList((prev) => [...prev, props.addAuthor]);
		}
	}, [props.addAuthor]);

	return (
		<>
			<h3>Authors</h3>
			{authorsList.map((author, key) => {
				return (
					<div key={key}>
						{author.name}{' '}
						<Button
							onClick={(e) => {
								e.preventDefault();
								onAddAuthorCourseHandler(author);
							}}
							text='Add author'
						></Button>
					</div>
				);
			})}
			<h3>Course authors</h3>
			{courseAuthors.map((author, key) => {
				return (
					<div key={key}>
						{author.name}{' '}
						<Button
							key={author.id}
							onClick={(e) => {
								e.preventDefault();
								onDelAuthorCourseHandler(author);
							}}
							text='Delete author'
						></Button>
					</div>
				);
			})}
		</>
	);
};

export default Authors;
