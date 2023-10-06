import Styles from './Backdrop.module.css';

const Backdrop = (props) => {
	return (
		<div onClick={props.onClick} className={Styles['back-drop']}>
			{props.children}
		</div >
	);
}
export default Backdrop;
