import {MOVIE_API} from "@/module/Movie/Constant/MOVIE_API";
import {IData} from "@/module/Movie/Model/DataModel";


export const getMovieList = async (params = {}): Promise<IData> => {
    const response = await fetch(`${MOVIE_API.GET_LIST}?${new URLSearchParams({ ...params })}`, { next: { revalidate: 10 } });
    const data = await response.json();
    return data as IData;
};