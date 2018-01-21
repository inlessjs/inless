import * as React from 'react';
import { IUISceneRendererProps } from '../UISceneBase/interfaces';

export class UISimpleScene extends React.PureComponent<IUISceneRendererProps> {
    public render() {
        const { children } = this.props;
        return <div>{children}</div>;
    }
}
