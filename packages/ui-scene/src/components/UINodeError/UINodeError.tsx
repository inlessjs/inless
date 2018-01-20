import * as React from 'react';
import { IUINodeErrorRendererProps } from '../UISceneBase/interfaces';

export class UINodeError extends React.PureComponent<IUINodeErrorRendererProps> {
    public render() {
        const { className, message } = this.props;
        return <div className={className}>{message}</div>;
    }
}
