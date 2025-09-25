
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
    src?: string;
};

export interface Companies {
    name: string;
    time: number;
    start: string;
    end: string;
    description: string[];
    job_title: string;
}

export interface Technologies {
    id: string;
    name: string;
    label: string;
    src?: string;
}

export interface Experience {
    time: string;
    languages: Language[];
    companies: Companies[];
    technologies: Technologies[];

}

export type { ChildContainerProps, propsTopbar, Star };