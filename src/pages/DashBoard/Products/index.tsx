import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/services/api';
import { ITEM_PER_PAGE } from '@/constants';
import { CircularProgress } from '@mui/material';
import { Product } from '@/types';
import ProductsTable from '@/components/Products/ProductsTable';
import ProductCard from '@/components/Products/ProductCard';
import Pagination from '@/components/Products/Pagination';
import { QUERY_PRODUCTS } from '@/constants/queryKeys';

export default function Products() {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [skip, setSkip] = useState(0);

	const { error, data, isLoading, refetch } = useQuery({
		queryKey: [QUERY_PRODUCTS],
		queryFn: () => getProducts(skip),
	});

	const pagesCount = Math.ceil(data?.products?.total / ITEM_PER_PAGE);

	const currentProducts = data?.products.products;

	const filteredProducts = currentProducts?.filter((product: Product) =>
		product.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	useEffect(() => {
		refetch();
	}, [skip]);

	if (isLoading)
		return (
			<>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'start',
					}}
				>
					<CircularProgress />
				</div>
			</>
		);

	if (error) return 'An error has occurred: ' + error.message;

	const handleNextPage = () => {
		setSkip((prevSkip) => prevSkip + ITEM_PER_PAGE);
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const handlePrevPage = () => {
		setSkip((prevSkip) => Math.max(prevSkip - ITEM_PER_PAGE, 0));
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	return (
		<div>
			<TextField
				label="Search"
				variant="outlined"
				margin="normal"
				fullWidth
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<ProductsTable />
					</TableHead>
					<TableBody>
						<ProductCard filteredProducts={filteredProducts} />
					</TableBody>
				</Table>
			</TableContainer>
			<br />

			<div
				style={{
					display: 'flex',
					gap: 10,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Pagination
					handlePrevPage={handlePrevPage}
					handleNextPage={handleNextPage}
					currentPage={currentPage}
					pagesCount={pagesCount}
				/>
			</div>
		</div>
	);
}
