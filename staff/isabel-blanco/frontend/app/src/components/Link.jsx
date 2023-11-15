function Link(props) {
    return <a className="link" onClick={props.onClick}>{props.children}</a>
}

export default Link