const Arrow = (props) => {

    return (
        
        <svg style={props.left ? {transform: "rotate(180deg)"}: {}} width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.9981 13.7461L11.9981 13.7462L11.9981 13.7666L11.9819 13.7591L0.0570189 23.2688L0.0570184 18.052L7.8136 11.8416L7.84589 11.8563L7.81354 11.8414L7.81436 11.841L0.0288536 5.71144L0.0289247 1.60595e-06L11.9832 9.75812L11.9981 9.7507L11.9981 9.77025L11.999 9.77103L11.9981 9.7715L11.9981 13.7461L11.9981 13.7461Z" fill="#62A9CD"/>
        </svg>
    )
}

export default Arrow