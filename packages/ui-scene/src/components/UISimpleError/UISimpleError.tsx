import * as React from 'react';
import { IUIErrorRendererProps } from '../UISceneBase/interfaces';

export class UISimpleError extends React.PureComponent<IUIErrorRendererProps> {
    public render() {
        const { message } = this.props;
        return <div >{message}</div>;
    }
}
