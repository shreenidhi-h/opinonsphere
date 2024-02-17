import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost({ onCancel, onAddPost }) {
	const [enteredBody, setEnteredBody] = useState("");
	const [enteredAuthor, setEnteredAuthor] = useState("");

	function bodyChangeHandler(event) {
		setEnteredBody(event.target.value);
	}
	function authorChageHandler(event) {
		setEnteredAuthor(event.target.value);
	}
	function submitHandler(event) {
		event.preventDefaut();
		const postData = {
			body: enteredBody,
			author: enteredAuthor,
		};
		onAddPost();
		onCancel();
	}
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<p>
				<label htmlFor="body">Text</label>
				<textarea required rows={3} onChange={bodyChangeHandler} />
			</p>
			<p>
				<label htmlFor="name">Your name</label>
				<input type="text" id="name" required onChange={authorChageHandler} />
			</p>
			<p>
				<button className={classes.cancel} onClick={onCancel}>
					Cancel
				</button>
				<button className={classes.actions}>Submit</button>
			</p>
		</form>
	);
}
export default NewPost;
