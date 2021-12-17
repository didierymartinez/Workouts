import { useEffect, useRef, useState } from 'react';
import uuid from 'react-uuid';
import Button from '../../UI/Button';
import Authors from './Authors';
import Duration from './Duration';

const CreateCourse = (props) => {
	const newAuthor = useRef();
	const [dataNewAuthor, setDataNewAuthor] = useState(null);
	const [newCourse, setNewCourse] = useState({
		id: null,
		title: '',
		description: '',
		creationDate: null,
		duration: null,
		authors: [],
	});

	const handleChanges = (e) => {
		setNewCourse((prev) => {
			prev[e.target.id] = e.target.value;
			return { ...prev };
		});
	};

	const setNewDuration = (duration) => {
		setNewCourse((prev) => {
			return { ...prev, duration: duration };
		});
	};

	const courseAuthorsChange = (authors) => {
		const idsAuthors = authors.map((author) => author.id);
		setNewCourse((prev) => {
			return { ...prev, authors: idsAuthors };
		});
	};

	const createAuthor = (e) => {
		e.preventDefault();
		const dataNewAuthor = props.onCreateAuthor(newAuthor.current.value);
		setDataNewAuthor(dataNewAuthor);
	};

	const onCreateCourse = (e) => {
		e.preventDefault();
		setNewCourse((prev) => {
			return {
				...prev,
				id: uuid(),
				creationDate: new Date().toLocaleDateString('en-GB'),
			};
		});
	};

	useEffect(() => {
		if (newCourse.id) {
			props.onCreateCourse(newCourse);
		}
	}, [newCourse.id]);

	return (
		<form onSubmit={onCreateCourse}>
			<label htmlFor='title'>Title</label>
			<input
				type='text'
				id='title'
				placeholder='Enter title'
				onChange={handleChanges}
				required
			></input>

			<label htmlFor='description'>Description</label>
			<input
				type='text'
				id='description'
				placeholder='Enter description'
				minLength='2'
				onChange={handleChanges}
				required
			></input>
			<Button text='Create course'></Button>

			<section>
				<aside>
					<div>
						<h3>Add author</h3>
						<label htmlFor='newAuthor'>Author name</label>
						<input
							ref={newAuthor}
							type='text'
							id='newAuthor'
							placeholder='Enter author name...'
						></input>
						<Button text='Create author' onClick={createAuthor}></Button>
					</div>
				</aside>
				<aside>
					<Authors
						authors={props.authors}
						onCourseAuthorsChange={courseAuthorsChange}
						addAuthor={dataNewAuthor}
					></Authors>
				</aside>
				<Duration onChange={setNewDuration}></Duration>
			</section>
		</form>
	);
};

export default CreateCourse;
