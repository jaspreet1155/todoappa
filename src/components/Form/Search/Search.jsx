import Styles from './Search.module.css';

const Search = (props) => {
	return (
		<div className={Styles['search-bar']}>
			<input
				onChange={props.onChange}
				placeholder={props.placeholder}
				value={props.value}
				type={props.type}
			/>
		</div >
	);
}
export default Search;
