import styled from "styled-components";
import {TextInput} from 'react-native';

export const CustomTextInput = styled(TextInput)`
  background: ${({theme}) => theme.secondary};
  width: 340px;
  height: 50px;
  border-radius: 10px;
  margin-bottom: 40px;
`;
