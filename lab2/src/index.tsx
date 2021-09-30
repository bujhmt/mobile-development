import React, {useState} from 'react';
import {evaluate} from 'mathjs';
import {RootView} from './components/view/root-view';
import {WrapperView} from './components/view/wrapper-view';
import {NumberInput} from './components/inputs/number-input';
import {Select} from "./components/inputs/select";
import {CenterSpaceEvenlyView} from "./components/view/center-space-evenly-view";
import {PrimaryWhiteText} from "./components/texts/primary-white-text";
import {DefaultTextInput} from "./components/inputs/flexible-text-input";
import {DefaultButton} from "./components/buttons/default-button";
import {PrimaryBlackText} from "./components/texts/primary-black-text";

export function Root() {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [operationSign, setOperationSign] = useState('+');
    const [result, setResult] = useState('');

    const operations = ['+', '-', '*', '/'];

    const calculate = () => {
        if (firstNumber && secondNumber) {
            setResult(evaluate(`${firstNumber} ${operationSign} ${secondNumber}`).toString());
        }
    };

    return (
        <RootView>
            <WrapperView>
                <NumberInput onChange={setFirstNumber} value={firstNumber}/>
                <NumberInput onChange={setSecondNumber} value={secondNumber}/>
                <CenterSpaceEvenlyView>
                    <PrimaryWhiteText>Операція:</PrimaryWhiteText>
                    <Select handleChange={setOperationSign} values={operations}/>
                </CenterSpaceEvenlyView>
                <CenterSpaceEvenlyView>
                    <PrimaryWhiteText>Результат:</PrimaryWhiteText>
                    <DefaultTextInput editable={false} value={result}/>
                </CenterSpaceEvenlyView>
                <DefaultButton onPress={calculate}>
                    <PrimaryBlackText>Обрахувати</PrimaryBlackText>
                </DefaultButton>
            </WrapperView>
        </RootView>
    );
}
