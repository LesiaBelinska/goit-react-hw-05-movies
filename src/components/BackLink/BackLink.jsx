//import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const BackLink = ({ label, onClick}) => {
    
    return (
        <div>
            <button type="button" onClick={onClick}>
                <FaArrowLeft />
                {label}
            </button>
        </div>
    )
};

// export const BackLink = ({ href, label }) => {
    
//     return (
//         <div>
//             <button type="button">
//                 <FaArrowLeft />
//                 <Link to={href}>{label}</Link>
//             </button>
//         </div>
//     )
// };