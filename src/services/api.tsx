import { BASE_URL, ITEM_PER_PAGE } from '@/constants';

export const getProducts = async (skip: number) => {
	const response = await fetch(
		`https://dummyjson.com/products?limit=${ITEM_PER_PAGE}&skip=${skip}`
	);
	const totalData = response.headers.get('X-Total-Count');
	const data = await response.json();
	return {
		products: data,
		totalData,
	};
};

export const getPosts = async () => {
	const response = await fetch(`${BASE_URL}/posts`);
	if (!response.ok) {
		throw new Error('Failed to fetch posts');
	}
	const data = await response.json();
	return {
		posts: data,
	};
};

export const getComments = async () => {
	const response = await fetch(`${BASE_URL}/comments`);
	if (!response.ok) {
		throw new Error('Failed to fetch posts');
	}
	const data = await response.json();
	return {
		comments: data,
	};
};
