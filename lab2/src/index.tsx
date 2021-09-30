import React from 'react';
import styled from "styled-components";
import {View, Text, TouchableOpacity} from "react-native";

export function Root() {
    return (
        <RootView>
            <SpaceBetweenView>
                <MediumButton>
                    <Text>Button1</Text>
                </MediumButton>
                <MediumButton>
                    <Text>Button2</Text>
                </MediumButton>
                <MediumButton>
                    <Text>Button3</Text>
                </MediumButton>
            </SpaceBetweenView>
            <CenterView>
                <MediumButton style={{marginRight: '2%'}}>
                    <Text>Button3</Text>
                </MediumButton>
                <MediumButton>
                    <Text>Button4</Text>
                </MediumButton>
            </CenterView>
            <SpaceBetweenView>
                <SmallButton>
                    <Text>Button5</Text>
                </SmallButton>
                <SmallButton>
                    <Text>Button6</Text>
                </SmallButton>
                <BigButton>
                    <Text>Button7</Text>
                </BigButton>
            </SpaceBetweenView>
        </RootView>
    );
}

const RootView = styled(View)`
  height: 100%;
  width: 100%;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 7%;
`;

const SpaceBetweenView = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const CenterView = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const MediumButton = styled(TouchableOpacity)`
  border-radius: 5px;
  background: white;
  width: 32%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SmallButton = styled(TouchableOpacity)`
  border-radius: 5px;
  background: white;
  width: 23%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BigButton = styled(TouchableOpacity)`
  border-radius: 5px;
  background: white;
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
