import styled from "styled-components";
import AccessSelector from "./AccessSelector";

const StyledAccessSelector = styled(AccessSelector)`
  width: 100px;
  background-color: transparent;
  border-color: #ccc;
  border-radius: 5px;
  color: ${(props) => props.color ? props.color : "black"}
`;

export default StyledAccessSelector;
