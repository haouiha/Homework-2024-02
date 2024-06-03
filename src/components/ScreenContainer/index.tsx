import { ScrollView, ScrollViewProps } from 'react-native';
import { PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ContentView = styled(SafeAreaView)`
  justify-content: flex-start;
  padding-horizontal: 16px;
`;

const Container = styled(ScrollView).attrs<{ center: boolean }>(({ center }) => {
  return {
    contentContainerStyle: center && {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
})`
  flex: 1;
  backgroundcolor: #dff5ff;
`;

type ScreenContainer = ScrollViewProps &
  PropsWithChildren<{
    viewRef?: React.RefObject<ScrollView>;
    center?: boolean;
  }>;

const ScreenContainer: React.FC<ScreenContainer> = ({ viewRef, children, center = false, ...rest }) => {
  return (
    <Container ref={viewRef} center={center} {...rest}>
      <ContentView>{children}</ContentView>
    </Container>
  );
};

export default ScreenContainer;
