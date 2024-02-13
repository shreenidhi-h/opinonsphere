import Post from "./Post";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./modal";

function PostLists() {
	const [modalIsVisible, setModalVisible] = useState(true);
	const [enteredBody, setEnteredBody] = useState("");
	const [enteredAuthor, setEnteredAuthor] = useState("");

	function hideModalHandler() {
		setModalVisible(false);
	}
	function bodyChangeHandler(event) {
		setEnteredBody(event.target.value);
	}
	function authorChageHandler(event) {
		setEnteredAuthor(event.target.value);
	}
	return (
		<>
			{modalIsVisible ? (
				<Modal onClose={hideModalHandler}>
					<NewPost
						onBodyChange={bodyChangeHandler}
						onAuthorChange={authorChageHandler}
					/>
				</Modal>
			) : null}
			<Post author={enteredAuthor} body={enteredBody} />
		</>
	);
}
export default PostLists;
