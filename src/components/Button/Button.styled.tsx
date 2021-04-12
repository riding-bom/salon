import styled from "styled-components";
import Button from "./Button";

const StyledButton = styled(Button)`
  box-sizing: border-box;
  background-color: ${(props) =>
    props.children === "WRITE" ? "ligtpink" : "white"};
  border: none;
  border-radius: 5px;
  padding: 20px;
  width: ${(props) => (props.width ? props.width + "px" : "150px")};
  height: 50px;
  box-shadow: 0 10px 10px 3px rgba(110, 109, 110, 0.24);
  cursor: pointer;
`;

export default StyledButton;
