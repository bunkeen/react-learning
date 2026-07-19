const Button = ({ text, count, onButtonClick }) => {
    return (
        <>
            <button type="button" className="counter" onClick={onButtonClick}>
                {`${text} ${count}`}
            </button>
        </>
    )
}

export default Button