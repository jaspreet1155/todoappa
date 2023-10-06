import Styles from './Hint.module.css';
import Backdrop from "../Overlays and Backdrops/ErrorModal/Backdrop.jsx";

const Hint = (props) => {

	// const [closeStatus, setCloseStatus] = useState(false);

	const onClose = () => {
		props.onClose();
	}
	return (
		<div className={Styles.hint}>
			<header >
				<h3 >Hint</h3 >
				<svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
					<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
				</svg >
			</header >
			<main >
				{/*<svg viewBox="-4 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
				{/*	<g id="SVGRepo_bgCarrier" stroke-width="0"></g >*/}
				{/*	<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g >*/}
				{/*	<g id="SVGRepo_iconCarrier">*/}
				{/*		<path d="M13.0912 30.5454C13.0912 29.742 12.44 29.0908 11.6367 29.0908C10.8334 29.0908 10.1821 29.742 10.1821 30.5454C10.1821 31.3487 10.8334 31.9999 11.6367 31.9999C12.44 31.9999 13.0912 31.3487 13.0912 30.5454Z" fill="#e8e8e8"></path >*/}
				{/*		<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2847 18.1412C22.61 16.1755 23.2727 14.0072 23.2727 11.6364C23.2727 8.42307 22.1367 5.68035 19.8646 3.40822C17.5924 1.13607 14.8496 0 11.6364 0C8.42307 0 5.68035 1.13607 3.40822 3.40822C1.13607 5.68035 0 8.42307 0 11.6364C0 14.0072 0.662666 16.1755 1.988 18.1412C2.8852 19.472 3.98233 20.5561 5.27939 21.3935V21.3984C5.90081 21.8673 6.38841 22.4812 6.74214 23.2397C7.09587 23.9983 7.27273 24.8092 7.27273 25.6727C7.27273 25.7511 7.27117 25.8295 7.26807 25.9078C7.26498 25.9862 7.26032 26.0643 7.25412 26.1424H7.27273V26.1818H16V25.6727C16 24.7962 16.1818 23.9747 16.5456 23.2079C16.9094 22.4409 17.4095 21.8247 18.046 21.3593C19.3201 20.5267 20.3996 19.454 21.2847 18.1412Z" fill="url(#paint0_radial_103_1531)"></path >*/}
				{/*		<path d="M7.27246 27.6364C7.27246 29.2431 8.57491 30.5455 10.1816 30.5455H13.0906C14.6973 30.5455 15.9997 29.2431 15.9997 27.6364V26.1819H7.27246V27.6364Z" fill="url(#paint1_radial_103_1531)"></path >*/}
				{/*		<path d="M13.8184 27.6364H9.45481C9.05315 27.6364 8.72754 27.962 8.72754 28.3636C8.72754 28.7653 9.05315 29.0909 9.45481 29.0909H13.8184C14.2201 29.0909 14.5457 28.7653 14.5457 28.3636C14.5457 27.962 14.2201 27.6364 13.8184 27.6364Z" fill="#e8e8e8" fill-opacity="0.2"></path >*/}
				{/*		<path fill-rule="evenodd" clip-rule="evenodd" d="M8.55045 8.55082C9.40251 7.69877 10.431 7.27274 11.636 7.27274C12.0377 7.27274 12.3805 7.13073 12.6645 6.84672C12.9485 6.56269 13.0906 6.21985 13.0906 5.81819C13.0906 5.41653 12.9485 5.07369 12.6645 4.78967C12.3805 4.50566 12.0377 4.36365 11.636 4.36365C9.6277 4.36365 7.9135 5.07369 6.49342 6.49379C5.07333 7.91387 4.36328 9.62806 4.36328 11.6364C4.36328 12.038 4.50529 12.3809 4.78931 12.6649C5.07333 12.9489 5.41617 13.0909 5.81783 13.0909C6.21948 13.0909 6.56232 12.9489 6.84635 12.6649C7.13037 12.3809 7.27237 12.038 7.27237 11.6364C7.27237 10.4314 7.6984 9.40287 8.55045 8.55082Z" fill="white"></path >*/}
				{/*		<defs >*/}
				{/*			<radialGradient id="paint0_radial_103_1531" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.74574 7.19893) rotate(56.4705) scale(19.63 17.4489)">*/}
				{/*				<stop stop-color="#FADF73"></stop >*/}
				{/*				<stop offset="0.457142" stop-color="#FFD500"></stop >*/}
				{/*				<stop offset="1" stop-color="#FC9900"></stop >*/}
				{/*			</radialGradient >*/}
				{/*			<radialGradient id="paint1_radial_103_1531" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.42694 24.8264) rotate(38.4256) scale(9.20221 18.4044)">*/}
				{/*				<stop stop-color="#46c1dd"></stop >*/}
				{/*				<stop offset="0.999999" stop-color="#A5F2FF"></stop >*/}
				{/*			</radialGradient >*/}
				{/*		</defs >*/}
				{/*	</g >*/}
				{/*</svg >*/}

				<p >
					Hint: Your list seems empty! Click above to add some task.
				</p >

			</main >
		</div >
	);
}
export default Hint;
