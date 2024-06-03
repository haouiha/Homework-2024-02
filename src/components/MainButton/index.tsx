import styled from 'styled-components/native';

const ButtonBox = styled.TouchableOpacity<{ disabled: boolean }>`
  margin-top: 40px;
  height: 60px;
  background-color: ${({ disabled }) => (disabled ? '#dddddd' : '#0c2d57')};
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
  disabled?: boolean;
};

const MainButton: React.FC<MainButtonProps> = ({ onPress, title, disabled = false }) => {
  return (
    <ButtonBox onPress={onPress} disabled={disabled}>
      <ButtonText>{title}</ButtonText>
    </ButtonBox>
  );
};

export default MainButton;
