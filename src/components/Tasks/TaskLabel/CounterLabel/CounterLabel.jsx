import Styles from './CounterLabel.module.css';

const CounterLabel = (props) => {
	return (
		<div className={Styles.counterLabel}>
			{props.children}
		</div >
	);
}
export default CounterLabel;
