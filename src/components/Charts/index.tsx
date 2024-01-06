import {
	LineChart,
	Line,
	RadarChart,
	Radar,
	Tooltip,
	Legend,
	XAxis,
	YAxis,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
} from 'recharts';
import { ChartsProps } from '@/types';

const ChartComponent = ({ postData, commentData }: ChartsProps) => {
	const posts = postData.posts;
	const comments = commentData.comments;

	// Transforming the API data into the required format for Recharts
	const PostsChartData = posts.map(({ id, body }) => ({
		id,
		uv: body.length, // Using the length of the "body" property as the data point
	}));

	const CommentsChartData = comments.map(({ id, body }) => ({
		id,
		uv: body.length, // Using the length of the "body" property as the data point
	}));

	return (
		<div id="charts">
			<div>
				<h1>Posts</h1>

				<LineChart width={350} height={300} data={PostsChartData}>
					<XAxis dataKey="id" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="uv" stroke="#8884d8" />
				</LineChart>

				<RadarChart width={350} height={300} data={PostsChartData}>
					<PolarGrid />
					<PolarAngleAxis dataKey="id" />
					<PolarRadiusAxis />
					<Radar
						dataKey="uv"
						stroke="#8884d8"
						fill="#8884d8"
						fillOpacity={0.6}
					/>
					<Tooltip />
					<Legend />
				</RadarChart>
			</div>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}
			>
				<h1>Comments</h1>
				<LineChart width={350} height={300} data={CommentsChartData}>
					<XAxis dataKey="id" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="uv" stroke="#8884d8" />
				</LineChart>

				<RadarChart width={350} height={300} data={CommentsChartData}>
					<PolarGrid />
					<PolarAngleAxis dataKey="id" />
					<PolarRadiusAxis />
					<Radar
						dataKey="uv"
						stroke="#8884d8"
						fill="#8884d8"
						fillOpacity={0.6}
					/>
					<Tooltip />
					<Legend />
				</RadarChart>
			</div>
		</div>
	);
};

export default ChartComponent;
