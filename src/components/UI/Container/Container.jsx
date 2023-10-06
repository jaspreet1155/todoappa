import Styles from	'./Container.module.css'
const Container = (props) => {
	return (
		<div className={`${Styles.container} ${Styles[props.classes]}`}>
			{props.children}
		</div>
	);
}
export default Container;
