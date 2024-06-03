import styled from 'styled-components/native';

const HeaderContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 8px;
`;

const HeaderText = styled.Text`
  font-size: 36px;
  font-weight: bold;
  text-decoration-line: underline;
  color: #01204e;
`;

type HeaderTitleProps = {
  title: string;
};

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title }) => {
  return (
    <HeaderContainer>
      <HeaderText>{title}</HeaderText>
    </HeaderContainer>
  );
};

export default HeaderTitle;
