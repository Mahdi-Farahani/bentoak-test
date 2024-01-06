import { PaginationProps } from "@/types";
import { Button, Typography } from "@mui/material";

const Pagination = ({
  handlePrevPage,
  handleNextPage,
  currentPage,
  pagesCount,
}: PaginationProps) => {
  return (
    <>
      <Button
        variant="contained"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        -
      </Button>
      <Typography variant="inherit">
        Page {currentPage} of {pagesCount}
      </Typography>
      <Button
        variant="contained"
        onClick={handleNextPage}
        disabled={currentPage === pagesCount}
      >
        +
      </Button>
    </>
  );
};

export default Pagination;
