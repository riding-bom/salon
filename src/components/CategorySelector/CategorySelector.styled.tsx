import styled from "styled-components";
import CategorySelector from "./CategorySelector";

const StyledCategorySelector = styled(CategorySelector)`
  width: 100px;
  background-color: transparent;
  border-color: #ccc;
  border-radius: 5px;
  color: ${(props) => props.color ? props.color : "black"}
`;

export default StyledCategorySelector;
