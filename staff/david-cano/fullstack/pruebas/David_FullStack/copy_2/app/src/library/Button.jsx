function Button(props) {
    return <button className={`${props.className} bg-[blue] rounded-[5px] leading-[1rem] m-[2px] border-[1px] border-solid border-transparent hover:border-black p-[5px] text-white`} title={props.title} aria-label={props['aria-label']} type={props.type} onClick={props.onClick}>{props.children}</button>
}

export default Button