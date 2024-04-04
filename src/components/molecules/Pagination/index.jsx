import PropTypes from "prop-types";
import Button from "../../atoms/Button";
import { PageNumbers } from "./Pagination.styles";

function Pagination({ totalPages, currentPage, paginate }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <PageNumbers>
      {pages?.map((pageNumber) => (
        <Button
          key={`page-${pageNumber}`}
          variant="secondary"
          style={{
            backgroundColor: currentPage === pageNumber && "yellow",
            color: currentPage === pageNumber && "black",
          }}
          onClick={() => paginate(pageNumber)}
        >
          {pageNumber.toString()}
        </Button>
      ))}
    </PageNumbers>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
