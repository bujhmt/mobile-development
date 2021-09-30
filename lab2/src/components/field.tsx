import React, {useState} from 'react';
import styled from "styled-components";
import {Picker, View} from "react-native";
import {StyledText} from "./texts/default-text";

interface FieldProps {
    onSelect: (value: string) => void | Promise<void>
}

export const Field = ({onSelect}: FieldProps) => {
    const [value, setValue] = useState<string>();

    const options = ['-', 'X', 'O'];

    return (
        <FieldView>
            {value ?
                <StyledText>{value}</StyledText>
                :
                <Picker
                    mode='dropdown'
                    selectedValue={null}
                    onValueChange={(itemValue) => {
                        setValue(itemValue);
                        onSelect(itemValue);
                    }}
                >
                    {options.map((option) => <Picker.Item key={option} label={option} value={option}/>)}
                </Picker>
            }
        </FieldView>
    );
}

const FieldView = styled(View)`
  width: 70px;
  height: 70px;
  background: ${({theme}) => theme.secondary};
  justify-content: center;
  border-width: 3px;
  border-style: solid;
  border-color: lightgreen;
  display: flex;
`;
