import classes from "./Post.module.css";

function Post({ author, body }) {
	return (
		<div className={classes.post}>
			<p className={classes.person}>{author}</p>
			<p className={classes.text}>{body}</p>
		</div>
	);
}
export default Post;
