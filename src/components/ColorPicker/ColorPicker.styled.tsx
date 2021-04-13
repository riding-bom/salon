import styled from 'styled-components'
import ColorPicker from './ColorPicker'

const StyledColorPicker = styled(ColorPicker)`
  .color {
    width: 36px;
    height: 14px;
    border-radius: 2px;
    background: ${(props) => (props.presentColor ? props.presentColor : '#fff')};
  }
  
  .swatch {
    padding: 3px;
    background: #fff;
    border-radius: 1px;
    box-shadow: 0 0 0 3px rgba(0,0,0,.1);
    display: inline-block;
    cursor: pointer;
  }

  .popover {
    position: absolute;
    right: 0px;
    z-index: 2;
  }

  .cover {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
`;

export default StyledColorPicker;