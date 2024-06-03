import { ScrollView, ScrollViewProps } from 'react-native';
import { PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = styled(ScrollView)`
  flex: 1;
  backgroundcolor: #dff5ff;
`;

const ContentView = styled(SafeAreaView)`
  justify-content: flex-start;
  padding-horizontal: 16px;
`;

type ScreenContainer = ScrollViewProps &
  PropsWithChildren<{
    viewRef?: React.RefObject<ScrollView>;
  }>;

const ScreenContainer: React.FC<ScreenContainer> = ({ viewRef, children, ...rest }) => {
  return (
    <Container ref={viewRef} {...rest}>
      <ContentView>{children}</ContentView>
    </Container>
  );
};

export default ScreenContainer;
