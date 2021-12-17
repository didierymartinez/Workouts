const Input = ({ placeholder, onChange }) => {
	return (
		<>
			<label htmlFor='input'></label>
			<input placeholder={placeholder} onChange={onChange}></input>
		</>
	);
};
export default Input;
