function Container(props) {
    return <div className={'container' + (props.align ? ' contaeiner-' + props.align : '')} aria-label={props['aria-label']}>{props.children}</div>
}

export default Container