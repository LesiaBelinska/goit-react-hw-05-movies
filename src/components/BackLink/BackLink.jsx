import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const BackLink = ({href, label}) => {
    
    return (
        <div>
            <FaArrowLeft />
            <Link to={href}>{label}</Link>
        </div>
    )
}