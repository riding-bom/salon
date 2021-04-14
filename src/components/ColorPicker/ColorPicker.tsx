import { useState } from 'react';
import { ChromePicker  } from 'react-color';
import { useDispatch } from 'react-redux';
import { backgroundColorAction } from 'redux/reducers/newPost';

type colorPickerProps = {
  className: string;
  presentColor?: string;
}

const ColorPicker = ({ className }:colorPickerProps) => {
  const dispatch = useDispatch();

  const onColorChange = ({ hex:color }: { hex: string }) => {
    dispatch(backgroundColorAction(color));
  } 

  const [displayColorPicker, setDisplayColorPicker] = useState(false)

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker)
  };

  const handleClose = () => {
    setDisplayColorPicker(false)
  };

  return (
    <div className={className} title="배경색 선택">
        <div className="swatch" onClick={handleClick}>
          <div className="color" />
        </div>
        { displayColorPicker ? <div className="popover">
          <div className="cover" onClick={handleClose}/>
          <ChromePicker color='#fff' disableAlpha={true} onChangeComplete={onColorChange} />
        </div> : null }
    </div>
  )
}

export default ColorPicker;