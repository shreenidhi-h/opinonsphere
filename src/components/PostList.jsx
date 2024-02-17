import { useState } from "react";

import NewPost from "./NewPost";
import Modal from "./modal";

function ListofPost({ Posting, onStopPosting }) {
	const [posts, setPosts] = useState([]);

	function addPostHandler(postData) {
		setPosts((exisitingPosts) => [postData, ...exisitingPosts]);
	}
	return (
		<>
			{Posting && (
				<Modal onClose={onStopPosting}>
					<NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
				</Modal>
			)}
			{posts.map((post) => (
				<Post author={post.autor} body={post.body} />
			))}
		</>
	);
}
export default ListofPost;
