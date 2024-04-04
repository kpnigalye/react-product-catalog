import PropTypes from "prop-types";
import Button from "../../atoms/Button";
import { PageNumbers } from "./Pagination.styles";
import COLORS from "../../../constants/colors";

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
            backgroundColor:
              currentPage === pageNumber && COLORS.PALLATE.YELLOW,
            color: currentPage === pageNumber && COLORS.PALLATE.BLACK,
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
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
