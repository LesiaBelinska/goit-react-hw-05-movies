//import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import s from "./BackLink.module.css";

export const BackLink = ({ label, onClick}) => {
    
    return (
        <div>
            <button type="button"
                onClick={onClick}
            className={s.button}>
                <BsArrowLeft className={s.icon}/>
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