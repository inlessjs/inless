import { Component, StatelessComponent } from 'react';

export declare type IUIFunctionalRenderer<T> = (new(...args: any[]) => Component<T>);
export declare type IUIRenderer<T> = StatelessComponent<T> | IUIFunctionalRenderer<T>;

export interface IUISceneRendererProps {
    children: any;
}

export interface IUIContainerRendererProps<T> {
    node: T;
    Renderer: IUIRenderer<{node: T, className?: string}>;
}

export interface IUIErrorRendererProps {
    message: string;
}
