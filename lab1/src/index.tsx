import React from "react";
import {CustomView} from "./components/view/root-view";
import {StatusBar} from "expo-status-bar";
import {ButtonsFlatList} from './components/buttons-flat-list/buttons-flat-list';
import {ButtonListItem} from './interfaces/button-list-item';
import {ButtonItem} from './components/button-item/button-item';
import {CustomTextInput} from './components/inputs/text-input';
import {WrapperView} from './components/view/wrapper-view';

export function Root() {
    const buttons: ButtonListItem[] = [
        {text: '1'},
        {text: '2'},
        {text: '3'},
        {text: '+'},
        {text: '4'},
        {text: '5'},
        {text: '6'},
        {text: '-'},
        {text: '7'},
        {text: '8'},
        {text: '9'},
        {text: '*'},
        {text: 'C'},
        {text: '0'},
        {text: '='},
        {text: '/'},
    ];

    return (
        <CustomView>
            <WrapperView>
                <CustomTextInput/>
                <ButtonsFlatList buttons={buttons}/>
            </WrapperView>
        </CustomView>
    );
}
