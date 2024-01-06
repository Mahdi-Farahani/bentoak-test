import ChartComponent from '@/components/Charts';
import { getComments, getPosts } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { ChartsProps, Post, Comment } from '@/types'; // Import the types
import { CircularProgress } from '@mui/material';
import { QUERY_COMMENTS, QUERY_POST } from '@/constants/queryKeys';

const Charts = () => {
	const {
		data: postData,
		isLoading: isLoadingPosts,
		isError: isErrorPosts,
	} = useQuery({
		queryKey: [QUERY_POST],
		queryFn: () => getPosts(),
	});

	const {
		data: commentData,
		isLoading,
		isError,
	} = useQuery({
		queryKey: [QUERY_COMMENTS],
		queryFn: () => getComments(),
	});

	if (isLoadingPosts) {
		return (
			<div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'start',
					}}
				>
					<CircularProgress />
				</div>
			</div>
		);
	}

	if (isErrorPosts) {
		return <div>Posts have Error to fetch data</div>;
	}

	if (isLoading) {
		return (
			<div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'start',
					}}
				>
					<CircularProgress />
				</div>
			</div>
		);
	}

	if (isError) {
		return <div>Error fetching data</div>;
	}

	// Check if postData and commentData are defined
	if (!postData || !commentData) {
		return <div>Data is undefined</div>;
	}

	// Ensure that the structure is correct using type assertion
	const posts: Post[] = postData.posts;
	const comments: Comment[] = commentData.comments;

	// Pass the correctly structured data to ChartComponent
	const chartProps: ChartsProps = {
		postData: { posts },
		commentData: { comments },
	};

	return <ChartComponent {...chartProps} />;
};

export default Charts;
