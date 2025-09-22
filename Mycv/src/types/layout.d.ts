
export interface RouteApp {
    path: string;
    element: JSX.Element;
}

type ChildContainerProps = {
    children: ReactNode;
};

type propsTopbar = {
    setVisibleMenu: (prop: boolean | ((boolean) => boolean)) => void;
};

export type { ChildContainerProps, propsTopbar };