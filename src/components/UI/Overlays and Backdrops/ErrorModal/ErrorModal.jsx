import Styles from './ErrorModal.module.css';
import Button from "../../../Form/Button/Button.jsx";
const ErrorModal = (props) => {
	return (
		<div className={Styles['error-modal']}>
			<header >
				<h3 >{props.title}</h3 >
			</header >

			<main >
				<p >
					{props.message}
				</p >
			</main >

			<footer>
				<Button
					onClick={props.onClose}
					title={'Close'}
					type={'button'}
				/>
			</footer>

		</div >
	);
}
export default ErrorModal;
