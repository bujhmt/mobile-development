import React, {useState} from 'react';
import {RootView} from "./components/views/root-view";
import {Field} from "./components/field";
import {FlatList, View} from "react-native";

export function Root() {
    const renderItem = () => (
        <Field onSelect={(value) => {
            console.log(value)
        }}/>
    );

    const data = Array.from({length: 16}, (_, k) => k.toString());

    return (
        <RootView>
            <FlatList
                data={data}
                renderItem={renderItem}
                numColumns={4}
                keyExtractor={(key) => key}
            />
        </RootView>
    );
}
