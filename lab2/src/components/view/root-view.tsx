import styled from 'styled-components';
import {View} from 'react-native';

export const RootView = styled(View)`
  background: ${({theme}) => theme.primary};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
