import Styles from './Background.module.css';
const Background = (props) => {
	return (
		<div className={Styles.background}>
			{props.children}
		</div >
	);
}
export default Background;

