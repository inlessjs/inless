import * as React from 'react';
import { IUISceneContainerRendererProps } from '../UISceneBase/interfaces';

export class UISceneContainer extends React.PureComponent<IUISceneContainerRendererProps> {
    public render() {
        const { className, children } = this.props;
        return <div className={className}>{children}</div>;
    }
}
