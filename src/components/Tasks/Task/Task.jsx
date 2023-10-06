import Styles from './Task.module.css'
import { useState } from "react";

const Task = (props) => {
	const [ iconState, setIconState ] = useState('radio_button_unchecked');


	const clickHandler = () => {
		(iconState === 'radio_button_unchecked' ? setIconState('check_circle') : setIconState('radio_button_unchecked'));

	}

	const deleteHandler = (event) => {
		const userId = (event.target.previousSibling.id);
		props.onDelete(userId);
	}

	return (
		<div className={Styles.task}>
			{/*<span onClick={clickHandler} id={Styles.done} className="material-symbols-outlined">*/}
			{/*	{iconState}*/}
			{/*</span >*/}
			{/*<p className={isDone ? Styles.listdone : Styles.message} id={props.id}>*/}
			{/*	{props.children}*/}
			{/*</p >*/}
			{/*<span onClick={deleteHandler} id={Styles.delete} className="material-symbols-outlined">*/}
			{/*	delete*/}
			{/*</span >*/}
		</div >
	);
};
export default Task;
