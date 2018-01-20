import * as React from 'react';
import {
    IUIRenderer,
    IUISceneContainerRendererProps,
    IUINodeContainerRendererProps,
    IUINodeErrorRendererProps
} from './interfaces';

export interface IUIRendererMap { [key: string]: IUIRenderer<any>; }

export interface IUISceneProps {
    nodes: any[];
    renderers: IUIRendererMap;

    getNodeRenderer: (node: any, renderers: IUIRendererMap) => IUIRenderer<any>;
    getNodeId: (node: any) => string;

    SceneContainerRenderer: IUIRenderer<IUISceneContainerRendererProps>;
    NodeContainerRenderer: IUIRenderer<IUINodeContainerRendererProps<any>>;
    NodeErrorRenderer: IUIRenderer<IUINodeErrorRendererProps>;

    sceneClassName?: string;
    nodeContainerClassName?: string;
    nodeErrorClassName?: string;
}

export class UISceneBase extends React.PureComponent<IUISceneProps> {
    public render() {
        const {
            nodes,
            renderers,
            getNodeRenderer,
            getNodeId,
            SceneContainerRenderer,
            NodeContainerRenderer,
            NodeErrorRenderer,
            sceneClassName,
            nodeContainerClassName,
            nodeErrorClassName,
        } = this.props;

        const nodeElements = nodes.map((node, index) => {
            const Renderer = getNodeRenderer(node, renderers);
            const nodeId = getNodeId(node) || `index_${index}`;

            if (!Renderer) {
                return <NodeErrorRenderer
                    key={nodeId}
                    className={nodeErrorClassName}
                    message={`Node renderer not found. Node id: ${nodeId}`}
                />;
            }

            return <NodeContainerRenderer
                key={nodeId}
                className={nodeContainerClassName}
                node={node}
                Renderer={Renderer}
            />;
        });

        return <SceneContainerRenderer className={sceneClassName} children={nodeElements} />;
    }
}
