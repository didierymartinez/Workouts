import { useState } from 'react';
import uuid from 'react-uuid';

import Button from '../UI/Button';
import CourseCard from './CourseCard';
import SearchBar from '../UI/SearchBar';
import CreateCourse from './CreateCourse/CreateCourse';

import { mockedAuthorsList, mockedCoursesList } from '../../mockData';

import './courses.css';

const Courses = () => {
	const [coursesList, setCoursesList] = useState(mockedCoursesList);
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);

	const [showAddCourseForm, setShowAddCourseForm] = useState(false);

	const getAuthors = (authors) =>
		authors
			.map((author) => authorsList.find((a) => a.id === author)?.name)
			.filter((x) => !!x);

	const searchBar = (textSearch) => {
		const rgSearch = new RegExp(textSearch, 'ig');
		setCoursesList(
			mockedCoursesList.filter(
				(c) => rgSearch.test(c.title) || rgSearch.test(c.id)
			)
		);
	};

	const addNewCourse = () => {
		setShowAddCourseForm(true);
	};

	const createAuthorHandler = (author) => {
		const newAuthor = { id: uuid(), name: author };
		setAuthorsList((prevAuthorsList) => [...prevAuthorsList, newAuthor]);
		return newAuthor;
	};

	const createCourseHandler = (course) => {
		setCoursesList((prev) => [...prev, course]);
		setShowAddCourseForm(false);
	};

	return (
		<>
			{!showAddCourseForm && (
				<section className='courses-container'>
					<section className='search-bar-container'>
						<SearchBar onClick={searchBar}></SearchBar>
						<Button text='Add new course' onClick={addNewCourse}></Button>
					</section>

					{coursesList.map((course, key) => {
						return (
							<CourseCard
								key={key}
								title={course.title}
								description={course.description}
								date={course.creationDate}
								duration={course.duration}
								authors={getAuthors(course.authors)}
							></CourseCard>
						);
					})}
				</section>
			)}
			{showAddCourseForm && (
				<CreateCourse
					authors={authorsList}
					onCreateAuthor={createAuthorHandler}
					onCreateCourse={createCourseHandler}
				></CreateCourse>
			)}
		</>
	);
};

export default Courses;
