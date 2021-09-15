import React from 'react';
import {View, Text} from 'react-native';
import styled from "styled-components";

const ButtonView = styled(View)`
  background: ${({theme}) => theme.secondary};
  width: 50px;
  height: 50px;
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 5px;
  margin: 20px;
`;

const ButtonText = styled(Text)`
  color: ${({theme}) => theme.primary};
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`

export function ButtonItem({label}: { label: string }) {
    return (
        <ButtonView>
            <ButtonText>{label}</ButtonText>
        </ButtonView>
    );
}
