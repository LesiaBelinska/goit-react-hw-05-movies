import PropTypes from 'prop-types';
import { BsArrowLeft } from "react-icons/bs";
import s from "./BackLink.module.css";

export const BackLink = ({ label, onClick}) => {
    
    return (
        <div>
            <button type="button"
                onClick={onClick}
                className={s.button}>
                <BsArrowLeft className={s.icon} />
                {label}
            </button>
        </div>
    );
}

BackLink.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}


//import { Link } from "react-router-dom";

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