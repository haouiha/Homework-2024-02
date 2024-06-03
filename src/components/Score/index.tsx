import styled from 'styled-components/native';

const ScoreView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ScoreText = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #01204e;
`;

type ScroreProps = { score: number };

const Score: React.FC<ScroreProps> = ({ score }) => {
  return (
    <ScoreView>
      <ScoreText>{`Score: ${score}`}</ScoreText>
    </ScoreView>
  );
};

export default Score;
