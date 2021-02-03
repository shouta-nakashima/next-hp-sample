import Layout from "../components/Layout";
import { getAllPosts } from "../lib/posts";
import Post from "../components/Post";

const Blog = ({ posts }) => {
	return (
		<Layout title={"Blog"}>
			<ul className="mt-10">
				{posts && posts.map((post) => <Post key={post.id} post={post} />)}
			</ul>
		</Layout>
	);
};

export default Blog;

export const getStaticProps = async () => {
	const posts = await getAllPosts();
	return {
		props: { posts },
	};
};
