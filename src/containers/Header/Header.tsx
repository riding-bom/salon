import StyledHostName from 'components/SalonInfo/HostName/HostName.styled';
import StyledSalonInfo from 'components/SalonInfo/SalonIntro/SalonInfo.styled';
import StyledThumbnail from 'components/SalonInfo/Thumbnail/Thumbnail.styled';

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={className}>
      <div>
        <StyledThumbnail />
        <div>
          <StyledHostName />
          <StyledSalonInfo />
        </div>
      </div>
    </header>
  );
};

export default Header;
