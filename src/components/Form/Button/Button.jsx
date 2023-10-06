import Styles from './Button.module.css';

const Button = (props) => {
	return (
		<button
			onClick={props.onClick}
			className={Styles[props.className]}
			type={props.type}
		>
			{props.title}
		</button >
	);
}
export default Button;
