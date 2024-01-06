import { TableCell, TableRow } from '@mui/material';

const ProductsTable = () => {
	return (
		<>
			<TableRow>
				<TableCell>ID</TableCell>
				<TableCell>Title</TableCell>
				<TableCell align="right">Price</TableCell>
				<TableCell align="right">Discount (%)</TableCell>
				<TableCell align="right">Rating</TableCell>
				<TableCell align="right">Stock</TableCell>
				<TableCell align="right">Brand</TableCell>
				<TableCell align="right">Category</TableCell>
			</TableRow>
		</>
	);
};

export default ProductsTable;
