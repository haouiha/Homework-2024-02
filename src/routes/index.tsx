import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LeaderBoardScreen from '../screens/LeaderBoardScreen';

export type RootStackParamList = {
  Home: undefined;
  'Leader Board': { score: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Leader Board" component={LeaderBoardScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
