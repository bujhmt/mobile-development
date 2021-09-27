import React, {useState} from 'react';
import {evaluate} from 'mathjs';
import {CustomView} from './components/view/root-view';
import {ButtonsFlatList} from './components/buttons-flat-list/buttons-flat-list';
import {ButtonListItem} from './interfaces/button-list-item';
import {CustomTextInput} from './components/inputs/text-input';
import {WrapperView} from './components/view/wrapper-view';

export function Root() {
    const [expression, setExpression] = useState<string>('');

    const buttons: ButtonListItem[] = [
        {
            text: '1',
            handler: (value) => {
                setExpression(`${expression}${value}`);
            }
        },
        {
            text: '2',
            handler: (value) => {
                setExpression(`${expression}${value}`);
            }
        },
        {
            text: '3',
            handler: (value) => {
                setExpression(`${expression}${value}`);
            }
        },
        {
            text: '+',
            handler: (value) => {
                setExpression(`${expression} ${value} `);
            }
        },
        {
            text: '4',
            handler: (value) => {
                setExpression(`${expression}${value}`);
            }
        },
        {
            text: '5',
            handler: (value) => {
                setExpression(`${expression}${value}`);
            }
        },
        {
            text: '6',
            handler: (value) => {
                setExpression(`${expression}${value}`);
            }
        },
        {
            text: '-',
            handler: (value) => {
                setExpression(`${expression} ${value} `);
            }
        },
        {
            text: '7',
            handler: (value) => {
                setExpression(`${expression}${value}`);
            }
        },
        {
            text: '8',
            handler: (value) => {
                setExpression(`${expression}${value}`);
            }
        },
        {
            text: '9',
            handler: (value) => {
                setExpression(`${expression}${value}`);
            }
        },
        {
            text: '*',
            handler: (value) => {
                setExpression(`${expression} ${value} `);
            }
        },
        {
            text: 'C',
            handler: () => {
                setExpression('');
            }
        },
        {
            text: '0',
            handler: (value) => {
                setExpression(`${expression}${value}`);
            }
        },
        {
            text: '=',
            handler: () => {
                setExpression(evaluate(expression).toString());
            }
        },
        {
            text: '/',
            handler: (value) => {
                setExpression(`${expression} ${value} `);
            }
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
