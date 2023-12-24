import React from 'react';
import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App share={{}} />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 640
    }
});
