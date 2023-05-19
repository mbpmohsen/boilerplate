import {IItem} from "@/module/Movie/Model/DataModel/IItem";

export interface IData  {
    name: string,
    pageTitle: string,
    pageDescription: string,
    status: string,
    paged: number,
    max_num_pages: number,
    data: IItem[],
}