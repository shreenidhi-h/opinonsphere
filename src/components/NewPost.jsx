import classes from "./NewPost.module.css";

function NewPost() {
	function changeBodyHandler(event) {
		event.target.value;
	}
	return (
		<form className={classes.form}>
			<p>
				<label htmlFor="body">Text</label>
				<textarea id="body" required rows={3} onChange={changeBodyHandler} />
			</p>
			<P>
				<label htmlFor="name">Your name</label>
				<input type="text" id="name" required />
			</P>
		</form>
	);
}
export default NewPost;
