import SortModel from "@/module/Movie/Model/Enum/SortModel";

export interface IMovieListQueryData {
    page?: number,
    sortby?: SortModel,
};