import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

function ListofPost({ Posting, onStopPosting }) {
	const [posts, setPosts] = useState([]);

	function addPostHandler(postData) {
		setPosts((exisitingPosts) => [postData, ...exisitingPosts]);
	}
	console.log(posts);
	return (
		<>
			{Posting && (
				<Modal onClose={onStopPosting}>
					<NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
				</Modal>
			)}
			{posts.map((post) => (
				<Post key={post.body} author={post.author} body={post.body} />
			))}
			{posts.length === 0 && (
				<div style={{ textAlign: "center", color: "#97ba42" }}>
					<h2>There are no posts yet.</h2>
					<p>Start adding some!</p>
				</div>
			)}
		</>
	);
}
export default ListofPost;
