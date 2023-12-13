function Container(props) {
    return <div className={`${props.className} flex flex-col ${props.align === 'center' ? ' items-center' : ''}`} aria-label={props['aria-label']}>{props.children}</div>
}

export default Container