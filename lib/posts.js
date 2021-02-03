import fetch from "node-fetch";
import { url } from "../secletConfig";

export const getAllPosts = async () => {
	const res = await fetch(new URL(url));
	const posts = await res.json();
	return posts;
};

export const getAllPostIds = async () => {
	const res = await fetch(new URL(url));
	const posts = await res.json();

	return posts.map((post) => {
		return {
			params: {
				id: String(post.id),
			},
		};
	});
};

export const getPostData = async (id) => {
	const res = await fetch(new URL(`${url}/${id}/`));
	const post = await res.json();
	return {
		post,
	};
};
