import { Component, StatelessComponent } from 'react';

export declare type IUIFunctionalRenderer<T> = (new(...args: any[]) => Component<T>);
export declare type IUIRenderer<T> = StatelessComponent<T> | IUIFunctionalRenderer<T>;

export interface IUISceneContainerRendererProps {
    className?: string;
}

export interface IUINodeContainerRendererProps<T> {
    className?: string;
    node: T;
    Renderer: IUIRenderer<{node: T, className?: string}>;
}

export interface IUINodeErrorRendererProps {
    className?: string;
    message: string;
}
