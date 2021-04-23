import styled from 'styled-components'
import BackgroundImageUploader from './BackgroundImageUploader'

const StyledBackgroundImageUploader = styled(BackgroundImageUploader)`
    .image-uploader{
      display: none;
    }

    .select-button,
    .upload-button {
      border: 0;
      background-color: transparent;
      outline: none;
    }
`;

export default StyledBackgroundImageUploader;