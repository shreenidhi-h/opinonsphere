import Post from "./Post";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./modal";

function ListofPost({ Posting, onStopPosting }) {
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
			{Posting && (
				<Modal onClose={onStopPosting}>
					<NewPost
						onBodyChange={bodyChangeHandler}
						onAuthorChange={authorChageHandler}
					/>
				</Modal>
			)}
			<Post author={enteredAuthor} body={enteredBody} />
		</>
	);
}
export default ListofPost;
