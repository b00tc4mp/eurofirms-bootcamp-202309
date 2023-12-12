function Link(props) {
    return <a href="" className="link active" onClick={props.onClick}>{props.children}</a>
}

export default Link