import TaskLabel from "../TaskLabel/TaskLabel.jsx";
import Container from "../../UI/Container/Container.jsx";
import Task from "../Task/Task.jsx";

const TaskContainer = (props) => {

	const listSize = Object.keys(props.taskList).length;


	return (
		<>
			{(listSize > 0 &&
				<Container classes={'taskLabel-container'}>
					<TaskLabel
						data={props.taskList}
						className={'created'}
						title={'Created'}
						input={listSize}
					/>

					<TaskLabel
						className={'completed'}
						title={'Completed'}
						input={`${listSize} of ${listSize}`}
					/>
				</Container >
			)}

			<Container >
				{props.taskList.map((element, index) => {
					return (
						<Task
							onDelete={props.onDelete}
							data={props.taskList}
							key={index}
							id={index}
						> {element.task}
						</Task >
					)
				})}
			</Container >
		</>
	);
};
export default TaskContainer;
