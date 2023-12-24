import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Register from '../../../pages/register/Register.jsx';

export default createBoard({
    name: 'Register',
    Board: () => <Register />,
    isSnippet: true,
});
