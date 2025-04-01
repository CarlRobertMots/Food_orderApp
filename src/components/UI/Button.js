import "./Button.css";


const Button = ({ textOnly, onClick, children }) =>{ 
    return (
        <button
            className={textOnly ? "text-button" : "button"} 
            onClick={onClick}> 
        {children}     
        </button>
    )
} 
export default Button;