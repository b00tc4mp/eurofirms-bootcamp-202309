function TabButton(props) {
    return <button className="button" role="tab" title={props.title} aria-label={props['aria-label']} type={props.type} onClick={props.onClick}>{props.children}</button>
}

export default TabButton