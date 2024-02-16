import { useState } from "react";

import ListofPost from "./components/PostList";
import MainHeader from "./components/MainHeader";

function App() {
	const [modalIsVisible, setModalVisible] = useState(true);

	function hideModalHandler() {
		setModalVisible(false);
	}
	function showModalHandler() {
		setModalVisible(true);
	}
	return (
		<>
			<MainHeader onCreatePost={showModalHandler} />
			<main>
				<ListofPost Posting={modalIsVisible} onStopPosting={hideModalHandler} />
			</main>
		</>
	);
}
export default App;
