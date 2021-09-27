import React from 'react';
import {FlatList, View} from 'react-native';
import {ButtonItem} from '../button-item/button-item'
import {ButtonListItem} from '../../interfaces/button-list-item';
import styled from "styled-components";

export function ButtonsFlatList({buttons}: { buttons: ButtonListItem[] }) {
    const renderItem = ({item}: { item: ButtonListItem }) => (
        <ButtonItem label={item.text}/>
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
