import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Button } from 'react-native';
import { RootStackParamList } from '../../routes';
import ScreenContainer from '../../components/ScreenContainer';
import Score from '../../components/Score';

type LeaderBoardScreenRouteProp = RouteProp<RootStackParamList, 'Leader Board'>;

const LeaderBoardScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<LeaderBoardScreenRouteProp>();

  const onPressTryAgain = () => {
    navigation.goBack();
  };

  return (
    <ScreenContainer
      scrollEnabled={false}
      contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Score score={route.params.score} />

      <Button title="Try Again" onPress={onPressTryAgain}></Button>
    </ScreenContainer>
  );
};

export default LeaderBoardScreen;
