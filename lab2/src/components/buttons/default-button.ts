import styled from "styled-components";
import {TouchableOpacity} from "react-native";

export const DefaultButton = styled(TouchableOpacity)`
  background-color: ${({theme}) => theme.secondary};
  width: 200px;
  height: 40px;
  border-radius: 10px;
  margin-top: 40px;
  color:  ${({theme}) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
