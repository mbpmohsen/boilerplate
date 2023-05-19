import {IconArrowRight, IconFilter} from "@/module/Icon";
import {FC} from "react";

interface IMovieHeader {
    onClick: () => void,
}
export const MovieHeader:FC<IMovieHeader> = ({ onClick }) => {
    const handleClickToBack = () => { alert('راه بازگشتی وجود نداره.') };
    return (<div dir="rtl" className="mb-6">
        <div className="flex my-4" onClick={handleClickToBack}>
            <IconArrowRight />
            <div className="mr-1" />
            <p className="text-xs mb-0">بازگشت</p>
        </div>
        <div className="flex justify-between items-center">
            <div>
                <p className="mb-0.5">چیارو ببینه؟</p>
                <p className="text-xs text-stone-400 mb-0">مناسب برای ۳ تا ۷ سال</p>
            </div>
            <div className="flex items-center">
                <p className="text-xs text-stone-400 mb-0">مرتب سازی</p>
                <div className="mr-1" />
                <div onClick={onClick}>
                    <IconFilter />
                </div>
            </div>
        </div>
    </div>)
};

export default MovieHeader;