function Label(props) {
    return <label className="self-start" htmlFor={props.htmlFor}>{props.children}</label>
}

export default Label