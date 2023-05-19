import { ReactNode } from "react";
 
 export interface IMenu {
    icon?: string;
    name: string;
    gate?: string,
    url: string
}

export interface MenuItem extends IMenu{
    selected: boolean
    submenu?: IMenu[]
}