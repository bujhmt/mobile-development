import styled from 'styled-components';
import {TextInput} from 'react-native';

export const DefaultTextInput = styled(TextInput)`
  background: ${({theme}) => theme.secondary};
  width: 200px;
  height: 50px;
  border-radius: 10px;
  color: ${({theme}) => theme.primary};
  font-size: 30px;
  padding-left: 10px;
`;
