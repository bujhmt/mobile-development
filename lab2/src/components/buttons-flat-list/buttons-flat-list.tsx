import React from 'react';
import {FlatList} from 'react-native';
import {ButtonItem} from '../button-item/button-item'
import {ButtonListItem} from '../../interfaces/button-list-item';

export function ButtonsFlatList({buttons}: { buttons: ButtonListItem[] }) {
    const renderItem = ({item}: { item: ButtonListItem }) => (
        <ButtonItem text={item.text} handler={item.handler}/>
    );

    return (
        <FlatList
            data={buttons}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
            numColumns={4}
        />
    )
}
