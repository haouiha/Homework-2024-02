import { View } from 'react-native';
import { Controller, useFormContext } from 'react-hook-form';
import styled from 'styled-components/native';
import { Question } from '../../types/question';
import { Dimensions } from 'react-native';

const QuestionText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #01204e;
  margin-bottom: 8px;
`;

const AnswesContainer = styled.View`
  gap: 8px;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: auto;
  justify-content: center;
`;

const AnswerButton = styled.TouchableOpacity<{ isSelected: boolean }>`
  padding: 10px;
  margin-vertical: 5px;
  height: 40px;
  justify-content: center;
  border-radius: 8px;
  width: ${Dimensions.get('window').width / 2 - 32}px;
  background-color: ${({ isSelected }) => (isSelected ? '#0C2D57' : '#BBE2EC')};
`;

const AnswerText = styled.Text<{ isSelected: boolean }>`
  font-size: 16px;
  font-weight: 500;
  color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#000000')};
`;

const Divider = styled.View`
  height: 1px;
  background-color: #0c2d57;
  margin-vertical: 16px;
`;

type QuestionBoxProps = {
  questionNumber: number;
  questionData: Question;
  showDivider?: boolean;
};

const QuestionBox: React.FC<QuestionBoxProps> = ({ questionNumber, questionData, showDivider = false }) => {
  const { control } = useFormContext();

  return (
    <View>
      <QuestionText>{`${questionNumber}. ${questionData.question}`}</QuestionText>
      <AnswesContainer>
        {questionData.choices.map((choice) => (
          <Controller
            key={choice}
            control={control}
            render={({ field: { onChange, value } }) => (
              <AnswerButton onPress={() => onChange(choice)} isSelected={value === choice}>
                <AnswerText numberOfLines={1} ellipsizeMode="tail" isSelected={value === choice}>
                  {choice}
                </AnswerText>
              </AnswerButton>
            )}
            name={questionData.id}
            defaultValue=""
          />
        ))}
      </AnswesContainer>
      {showDivider && <Divider />}
    </View>
  );
};

export default QuestionBox;
