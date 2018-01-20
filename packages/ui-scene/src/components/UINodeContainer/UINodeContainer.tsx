import * as React from 'react';
import { IUINodeContainerRendererProps } from '../UISceneBase/interfaces';

export class UINodeContainer extends React.PureComponent<IUINodeContainerRendererProps<any>> {
    public render() {
        const { className, node, Renderer } = this.props;
        return <Renderer className={className} node={node} />;
    }
}
