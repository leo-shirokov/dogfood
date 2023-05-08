import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function Back() {
    const navigate = useNavigate();

    return (
        <div
            className="inline-flex justify-start items-center cursor-pointer flex-nowrap text-sm text-gray-500 mb-4"
            onClick={() => navigate(-1)}
        >
            <BiArrowBack />
            &nbsp;назад
        </div>
    );
}

export default Back;
