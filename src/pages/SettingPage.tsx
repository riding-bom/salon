import styled from "styled-components";
import StyledHeader from "containers/Header/Header.styled";
import StyledInputSalonInfo from "containers/InputSalonInfo/InputSalonInfo";
import StyledFooter from "containers/Footer/Footer.styled";

type settingPageProps = {
  className?: string;
};

const SettingPage = ({ className }: settingPageProps) => {
  return (
    <div className={className}>
      <StyledHeader />
      <StyledInputSalonInfo />
      <StyledFooter />
    </div>
  );
};

const StyledSettingPage = styled(SettingPage)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export default StyledSettingPage;
