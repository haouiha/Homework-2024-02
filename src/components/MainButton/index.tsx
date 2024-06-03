import styled from 'styled-components/native';

const ButtonBox = styled.TouchableOpacity`
  margin-top: 40px;
  height: 60px;
  background-color: #0c2d57;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

type MainButtonProps = {
  onPress: () => void;
  title: string;
};

const MainButton: React.FC<MainButtonProps> = ({ onPress, title }) => {
  return (
    <ButtonBox onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonBox>
  );
};

export default MainButton;
