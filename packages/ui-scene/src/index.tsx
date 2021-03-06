import * as React from 'react';
import { UISceneBase, IUISceneProps } from './components/UISceneBase/UISceneBase';
import { render } from 'react-dom';

const sceneProps: IUISceneProps = {
    nodes: [
        {
            id: 'test',
            name: 'Function',
            type: 'test',
        },
        {
            id: 'test2',
            name: 'userName',
            type: 'variable',
        },
    ],
    renderers: {
        test: ({ node }) => <div>Node name is: {node.name}</div>,
    },
    getNodeId: (node: any) => node.id,
    getNodeRenderer: (node, renderers) => renderers[node.type],
    SceneRenderer: ({ children }) => <div>{children}</div>,
    ErrorRenderer: ({ message }) => <div>ERROR: {message}</div>,
};

render(<UISceneBase {...sceneProps} />, document.getElementById('app'));
