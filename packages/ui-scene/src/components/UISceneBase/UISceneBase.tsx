import * as React from 'react';
import {
    IUIRenderer,
    IUISceneRendererProps,
    IUIErrorRendererProps,
    IUIRendererMap,
} from './interfaces';

export interface IUISceneProps {
    nodes: any[];
    renderers: IUIRendererMap;

    getNodeRenderer: (node: any, renderers: IUIRendererMap) => IUIRenderer<any>;
    getNodeId: (node: any) => string;

    SceneRenderer: IUIRenderer<IUISceneRendererProps>;
    ErrorRenderer: IUIRenderer<IUIErrorRendererProps>;
}

export class UISceneBase extends React.PureComponent<IUISceneProps> {
    public render() {
        const {
            nodes,
            renderers,

            getNodeRenderer,
            getNodeId,

            SceneRenderer,
            ErrorRenderer,
        } = this.props;

        const nodeElements = nodes.map((node, index) => {
            const Renderer = getNodeRenderer(node, renderers);
            const nodeId = getNodeId(node) || `index_${index}`;

            if (!Renderer) {
                return <ErrorRenderer
                    key={nodeId}
                    message={`Node renderer not found. Node id: ${nodeId}`}
                />;
            }

            return <Renderer key={nodeId} node={node} />;
        });

        return <SceneRenderer children={nodeElements} />;
    }
}
