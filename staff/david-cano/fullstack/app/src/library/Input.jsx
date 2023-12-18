function Input(props) {
    return <input className="bg-[lightgray] border-0 rounded-[5px] leading-[1.5rem] pl-[5px]" type={props.type} id={props.id} title={props.title} required={props.required} />
}

export default Input