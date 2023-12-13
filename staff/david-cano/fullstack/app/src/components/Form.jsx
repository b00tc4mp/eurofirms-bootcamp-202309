function Form(props) {
    return <form className="flex flex-col box-content gap-[0.5rem] items-center" onSubmit={props.onSubmit}>{props.children}</form>
}

export default Form