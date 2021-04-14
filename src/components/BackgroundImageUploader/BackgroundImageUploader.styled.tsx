import styled from 'styled-components'
import BackgroundImageUploader from './BackgroundImageUploader'

const StyledBackgroundImageUploader = styled(BackgroundImageUploader)`
    z-index: 2;

    .image-uploader{
      display: none;
    }

    .select-button,
    .upload-button {
    }
`;

export default StyledBackgroundImageUploader;