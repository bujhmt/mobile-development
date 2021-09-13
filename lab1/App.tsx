import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/theme';
import {Root} from "./src";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Root/>
        </ThemeProvider>
    );
}
