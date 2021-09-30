import styled from "styled-components";
import {Text} from "react-native";

export const StyledText = styled(Text)`
  font-size: 30px;
  color: ${({theme}) => theme.primary};
  margin-left: 20px;
`;
