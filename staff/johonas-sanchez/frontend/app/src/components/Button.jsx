function Button(props) {
    return <button className="button button-tomato" title={props.title} aria-label={props['aria-label']} type={props.type} onClick={props.onClick}>{props.children}</button>
}

export default Button;