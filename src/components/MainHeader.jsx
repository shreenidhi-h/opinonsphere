import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./MainHeader.module.css";

function MainHeader({ onCreatePost }) {
	return (
		<header className={classes.title}>
			<p className={classes.logo}>
				<MdMessage />
			</p>
			<h1 className={classes.heading}>OpinionSphere</h1>
			<p>
				<button className={classes.creation} onClick={onCreatePost}>
					<MdPostAdd size={18} />
					New Post
				</button>
			</p>
		</header>
	);
}
export default MainHeader;
