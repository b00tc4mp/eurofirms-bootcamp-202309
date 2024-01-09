import Input from './Input'
import Label from './Label'

function Field(props) {
    return <>
        <Label htmlFor={props.id}>{props.children}</Label>
        <Input type={props.type} id={props.id} title={props.title} required={props.required} />
    </>
}

export default Field