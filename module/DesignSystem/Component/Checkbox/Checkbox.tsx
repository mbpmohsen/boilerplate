import SortModel from "@/module/Movie/Model/Enum/SortModel";
import {IBaseComponentProps} from "@/module/Application/Model/DataModel/IBaseComponentProps";
import {FC} from "react";

interface ICheckbox extends IBaseComponentProps {
    label: string,
    onClick: () => any,
}
const Checkbox:FC<ICheckbox> = ({ label, ...props }) => {
    return (
        <div className="flex items-center mb-4">
            <input
                {...props}
                id="green-radio"
                type="radio"
                value=""
                name="colored-radio"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="green-radio" className="mr-2 font-extralight text-sm font-medium">{label}</label>
        </div>
    )
}

export default Checkbox;