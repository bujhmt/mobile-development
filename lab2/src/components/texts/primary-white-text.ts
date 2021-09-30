import styled from "styled-components";
import {Text} from "react-native";

export const PrimaryWhiteText = styled(Text)`
  color: ${({theme}) => theme.secondary};
  font-size: 30px;
`;
