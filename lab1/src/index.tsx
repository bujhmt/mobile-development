import React from "react";
import {CustomView} from "./components/view/root-view";
import {CustomText} from "./components/text/custom-text";
import {StatusBar} from "expo-status-bar";

export function Root() {
    return (
        <CustomView>
            <CustomText>I am a student Igor Fenchenko KP-92</CustomText>
            <StatusBar style="auto"/>
        </CustomView>
    )
}
