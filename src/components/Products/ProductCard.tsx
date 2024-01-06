import { Product, ProductCardProps } from "@/types";
import { TableCell, TableRow } from "@mui/material";

const ProductCard = ({ filteredProducts }: ProductCardProps) => {
  return (
    <>
      {filteredProducts.map((product: Product) => (
        <TableRow key={product.id}>
          <TableCell>{product.id}</TableCell>
          <TableCell>{product.title}</TableCell>
          <TableCell align="right">{product.price}</TableCell>
          <TableCell align="right">{product.discountPercentage}</TableCell>
          <TableCell align="right">{product.rating}</TableCell>
          <TableCell align="right">{product.stock}</TableCell>
          <TableCell align="right">{product.brand}</TableCell>
          <TableCell align="right">{product.category}</TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default ProductCard;
