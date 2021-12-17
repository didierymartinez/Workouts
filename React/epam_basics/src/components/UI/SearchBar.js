import Input from './Input';
import Button from './Button';
import { useState } from 'react';

const SearchBar = (props) => {
	const [textSearch, setTextSearch] = useState('');

	const onChangeHandler = (e) => {
		setTextSearch(e.target.value);
	};

	const onClickHandler = () => {
		props.onClick(textSearch);
	};

	return (
		<section>
			<Input
				text=''
				placeholder='Enter course name'
				onChange={onChangeHandler}
			></Input>
			<Button text='Search' onClick={onClickHandler}></Button>
		</section>
	);
};

export default SearchBar;
