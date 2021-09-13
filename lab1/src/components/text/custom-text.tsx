import styled, {css} from "styled-components";
import {Text} from "react-native";

export const CustomText = styled(Text)`
    color: ${({theme}) => theme.text};
    font-size: 30px;
    text-align: center;
`;
