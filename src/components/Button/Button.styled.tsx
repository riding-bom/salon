import styled from "styled-components";
import Button from "./Button";

const StyledButton = styled(Button)`
  width: ${(props) => (props.width ? props.width + "px" : "20px")};
  height: ${(props) => (props.height ? props.height + "px" : "20px")};
  background-color: white;
  box-shadow: 0 4px 3px 0px gray;
  border: none;
`;

export default StyledButton;
