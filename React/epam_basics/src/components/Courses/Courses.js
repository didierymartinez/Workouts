import Button from '../UI/Button';
import CourseCard from './CourseCard';
import { mockedAuthorsList, mockedCoursesList } from '../../mockData';
import SearchBar from '../UI/SearchBar';
import { useState } from 'react';
import CreateCourse from './CreateCourse/CreateCourse';
import uuid from 'react-uuid';

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
			<SearchBar onClick={searchBar}></SearchBar>
			{showAddCourseForm && (
				<CreateCourse
					authors={authorsList}
					onCreateAuthor={createAuthorHandler}
					onCreateCourse={createCourseHandler}
				></CreateCourse>
			)}
			{!showAddCourseForm && (
				<section>
					<Button text='Add new course' onClick={addNewCourse}></Button>
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
		</>
	);
};

export default Courses;
