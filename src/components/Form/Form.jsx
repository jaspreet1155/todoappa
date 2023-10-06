import Container from "../UI/Container/Container.jsx";
import Search from "./Search/Search.jsx";
import Button from "./Button/Button.jsx";
import ErrorModal from "../UI/Overlays and Backdrops/ErrorModal/ErrorModal.jsx";
import Styles from './Form.module.css';
import { useState } from "react";
import Backdrop from "../UI/Overlays and Backdrops/ErrorModal/Backdrop.jsx";

const Form = (props) => {
	const [userInput, setUserInput] = useState('');
	const [isEmpty, setIsEmpty] = useState(false);
	const submitHandler = (event) => {
		event.preventDefault();
		( userInput.trim().length <= 0 ? setIsEmpty(true) : props.onSubmit(userInput) );
		setUserInput('');
	}
	const changeHandler = (event) => {
		setUserInput(event.target.value);
	}
	const onClose = () => {
		setIsEmpty(false);
	}
	return (
		<Container >
			{( isEmpty && <ErrorModal
					title={'Error'} message={`Task cannot be empty!`}
					onClose={onClose}
				/>
			)}
			{( isEmpty && <Backdrop
					onClick={onClose}
				/>
			)}

			<form onSubmit={submitHandler} className={Styles.form}>
				<Search
					type={'text'}
					placeholder={'Add a new task!'}
					value={userInput}
					onChange={changeHandler}
				/>
				<Button
					type={'submit'}
					title={'Add'}
				/>
			</form >
		</Container >
	);
}
export default Form;
