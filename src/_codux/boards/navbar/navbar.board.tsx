import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Navbar from '../../../components/navbar/Navbar.jsx';

export default createBoard({
    name: 'Navbar',
    Board: () => <Navbar />,
    isSnippet: true,
});
