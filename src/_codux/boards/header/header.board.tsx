import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Header from '../../../components/header/Header.jsx';

export default createBoard({
    name: 'Header',
    Board: () => <Header />,
    isSnippet: true,
});
