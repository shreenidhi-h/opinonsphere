import Post from "./Post";
import NewPost from "./NewPost.jsx";
import { useState } from "react";

function PostLists() {
	const [enteredBody, setEnteredBody] = useState("");
	const [enteredAuthor, setEnteredAuthor] = useState("");
	function bodyChangeHandler(event) {
		setEnteredBody(event.target.value);
	}
	function authorChageHandler(event) {
		setEnteredAuthor(event.target.value);
	}
	return (
		<>
			<Modal>
				<NewPost
					onBodyChange={bodyChangeHandler}
					onAuthorChange={authorChageHandler}
				/>
			</Modal>
			<Post author={enteredAuthor} body={enteredBody} />
		</>
	);
}
export default PostLists;
