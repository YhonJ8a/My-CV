
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

type Star = {
    x: number;
    y: number;
    radius: number;
    speed: number;
    direction: number;
};

export interface Language {
    id: string;
    name: string;
    label: string;
    src?: string
};

export interface Experience {
    time: string;
    languages: Language[];

}

export type { ChildContainerProps, propsTopbar, Star };