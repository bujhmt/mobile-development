import styled from "styled-components";
import {Text} from "react-native";

export const PrimaryBlackText = styled(Text)`
  color: ${({theme}) => theme.primary};
  font-size: 30px;
`;
