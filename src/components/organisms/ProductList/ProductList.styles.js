import styled from "styled-components";

const ProductListWrapper = styled.div`
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px 50px;
`;

export { ProductListWrapper };
