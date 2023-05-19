'use client';
import { FC, useEffect, useRef, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from 'next/image';
import { IconStar } from "@/module/Icon";
import { MovieHeader } from "@/module/Movie/Component";
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import SortModel from "@/module/Movie/Model/Enum/SortModel";
import Checkbox from "@/module/DesignSystem/Component/Checkbox/Checkbox";
import { getMovieList } from "@/module/Movie/Service";
import { IData, IItem } from "@/module/Movie/Model/DataModel";

interface MovieListProps {
    movies: IData;
}

const MovieList: FC<MovieListProps> = ({ movies }) => {
    const [data, setData] = useState<IItem[]>([]);
    const [meta, setMeta] = useState({ max_num_pages: 0, page: 0 });
    const [open, setOpen] = useState(false);
    const hasMore = meta.page < meta.max_num_pages;
    const sheetRef = useRef<BottomSheetRef>(null);

    const handleGetMovieList = async (params = {}) => {
        const response = await getMovieList({ ...params });
        const { data, max_num_pages, paged } = response;
        setData((prevData) => [...prevData, ...data]);
        setMeta({ max_num_pages, page: paged });
    };

    const handleSortList = (sortModel: SortModel) => {
        setOpen(false);
        handleGetMovieList({ sortby: sortModel, page: 1 });
    };

    useEffect(() => {
        if ([0, 1].includes(meta.page)) return;
        handleGetMovieList({ max_num_pages: 10, page: meta.page });
    }, [meta.page]);

    useEffect(() => {
        setData(movies.data);
        setMeta({ max_num_pages: movies.max_num_pages, page: movies.paged });
    }, [movies]);

    return (
        <div>
            <MovieHeader onClick={() => setOpen(!open)} />
            <InfiniteScroll
                dataLength={data.length}
                next={() => setMeta({ ...meta, page: meta.page + 1 })}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
            >
                <div className="grid grid-cols-2 test gap-4">
                    {data.map((movie) => (
                        <div key={movie.id} dir="rtl">
                            <Image loading="lazy" src={movie.reviewsThumbnailUrl} alt={movie.reviewsTitle} className="min-h-64 max-h-64 w-full rounded-xl" width={200} height={150} />
                            <h2 className="truncate mt-3">{movie.reviewsTitle}</h2>
                            <p className="m-t-2"><IconStar /> {movie.reviewsRate}</p>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
            <BottomSheet ref={sheetRef} open={open}>
                <div className="px-4" dir="rtl">
                    <p>مرتب سازی بر اساس</p>
                    <div className="mt-4">
                        <Checkbox label="بیشترین امتیاز" onClick={() => handleSortList(SortModel.Rate)} />
                        <Checkbox label="بیشترین بازدید" onClick={() => handleSortList(SortModel.View)} />
                        <Checkbox label="جدید ترین" onClick={() => handleSortList(SortModel.Newest)} />
                    </div>
                </div>
            </BottomSheet>
        </div>
    );
};

export default MovieList;