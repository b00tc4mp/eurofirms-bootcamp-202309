function Link(props) {
    return <a href="" className={`${props.className} p-[1rem] hover:underline`} onClick={props.onClick}>{props.children}</a>
}

export default Link