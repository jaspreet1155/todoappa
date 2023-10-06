import Styles from './TaskLabel.module.css';
import CounterLabel from "./CounterLabel/CounterLabel.jsx";

const TaskLabel = (props) => {
	return (
		<div className={Styles.taskLabel}>
			<h4 className={Styles[props.className]}>
				{props.title}
			</h4 >
			<CounterLabel >
				<span className={Styles.labelSpan}>
					<h5 >{props.input}</h5>
				</span>
			</CounterLabel >
		</div>
	);
}
export default TaskLabel;
