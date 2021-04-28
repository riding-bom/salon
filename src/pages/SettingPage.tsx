import styled from "styled-components";
import { useEffect } from "react";
import StyledHeader from "containers/Header/Header.styled";
import StyledInputSalonInfo from "containers/InputSalonInfo/InputSalonInfo";

type settingPageProps = {
  className?: string;
};

const SettingPage = ({ className }: settingPageProps) => {
  useEffect(() => {}, []);

  return (
    <div className={className}>
      <StyledHeader />
      <StyledInputSalonInfo />
    </div>
  );
};

const StyledSettingPage = styled(SettingPage)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export default StyledSettingPage;
