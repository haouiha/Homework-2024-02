import { useEffect, useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { shuffleArray } from '../../utils/suffleArray';
import questions from '../../database/questions.json';
import { FormQuestions, Question } from '../../types/question';
import QuestionBox from '../../components/QuestionBox';
import HeaderTitle from '../../components/HeaderTitle';
import MainButton from '../../components/MainButton';
import ScreenContainer from '../../components/ScreenContainer';
import { formQuestionsSchema } from '../../schemas/question';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const viewRef = useRef<ScrollView>(null);
  const methods = useForm({ resolver: yupResolver(formQuestionsSchema) });
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  const suffleQuestions = () => {
    const shuffled = shuffleArray([...questions]).map((question) => ({
      ...question,
      choices: shuffleArray([...question.choices]),
    }));
    setShuffledQuestions(shuffled);
  };

  useEffect(() => {
    suffleQuestions();
    viewRef.current?.scrollTo({ y: 0, animated: false });
  }, [isFocused]);

  const onSubmit = (data: FormQuestions) => {
    const correctAnswers = shuffledQuestions.reduce((score, question) => {
      if (data[question.id] === question.answer) {
        return score + 1;
      }
      return score;
    }, 0);

    methods.reset();

    navigation.navigate('Leader Board', { score: correctAnswers });
  };

  return (
    <ScreenContainer viewRef={viewRef}>
      <HeaderTitle title={'20 Questions'} />

      <FormProvider {...methods}>
        {shuffledQuestions.map((question, index, array) => (
          <QuestionBox
            key={question.id}
            questionNumber={index + 1}
            questionData={question}
            showDivider={index < array.length - 1}
          />
        ))}

        <MainButton onPress={methods.handleSubmit(onSubmit)} title="Submit" disabled={!methods.formState.isValid} />
      </FormProvider>
    </ScreenContainer>
  );
};

export default HomeScreen;
