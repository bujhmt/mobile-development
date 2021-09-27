import React, {useState} from 'react';
import {evaluate} from 'mathjs';
import {CustomView} from './components/view/root-view';
import {ButtonsFlatList} from './components/buttons-flat-list/buttons-flat-list';
import {ButtonListItem} from './interfaces/button-list-item';
import {CustomTextInput} from './components/inputs/text-input';
import {WrapperView} from './components/view/wrapper-view';

export function Root() {
    const [expression, setExpression] = useState<string>('');

    const numberHandler = (value: string) => {
        setExpression(`${expression}${value}`);
    }

    const signHandler = (value: string) => {
        setExpression(`${expression} ${value} `);
    }

    const buttons: ButtonListItem[] = [
        {
            text: '1',
            handler: numberHandler,
        },
        {
            text: '2',
            handler:  numberHandler,
        },
        {
            text: '3',
            handler:  numberHandler,
        },
        {
            text: '+',
            handler: signHandler,
        },
        {
            text: '4',
            handler: numberHandler,
        },
        {
            text: '5',
            handler: numberHandler,
        },
        {
            text: '6',
            handler: numberHandler,
        },
        {
            text: '-',
            handler: signHandler,
        },
        {
            text: '7',
            handler: numberHandler,
        },
        {
            text: '8',
            handler: numberHandler,
        },
        {
            text: '9',
            handler: numberHandler,
        },
        {
            text: '*',
            handler: signHandler,
        },
        {
            text: 'C',
            handler: () => {
                setExpression('');
            }
        },
        {
            text: '0',
            handler: numberHandler,
        },
        {
            text: '=',
            handler: () => {
                setExpression(evaluate(expression).toString());
            }
        },
        {
            text: '/',
            handler: signHandler,
        },
    ];

    return (
        <CustomView>
            <WrapperView>
                <CustomTextInput value={expression} editable={false}/>
                <ButtonsFlatList buttons={buttons}/>
            </WrapperView>
        </CustomView>
    );
}
