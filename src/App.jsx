import Header from "./components/Header/Header.jsx";
import Background from "./components/UI/Background/Background.jsx";
import Form from "./components/Form/Form.jsx";
import TaskContainer from "./components/Tasks/TaskContainer/TaskContainer.jsx";
import Hint from "./components/UI/Hints/Hint.jsx";
import { useState } from "react";
import Backdrop from "./components/UI/Overlays and Backdrops/ErrorModal/Backdrop.jsx";

const App = () => {

	const [ userTaskList, setUserTaskList ] = useState([]);

	// const [ closeStatus, setCloseStatus ] = useState(false);

	const userData = (data) => {
		setUserTaskList((prevState) => {
			return [
				... prevState,
				{
					id: Math.floor(Math.random() * 1000 + 1).toString(),
					task: data,
				}
			]
		})
	}

	const updatedData = (userId) => {
		console.log(userId);
		setUserTaskList((prevState) => {
			prevState.filter((task) => {
				return task.id !== userId;
			})
		})

		// const hintClose = () => {
		// 	setCloseStatus(true);
		// }

		return (
			<div >
				<Header />
				<Background >
					<Form onSubmit={userData}/>
					<TaskContainer
						taskList={userTaskList}
						onDelete={updatedData}
					/>
					{ !closeStatus && <Hint onClose={hintClose}/>}
					{ !closeStatus && <Backdrop />}
				</Background >
			</div >
		);
	};
}
export default App;