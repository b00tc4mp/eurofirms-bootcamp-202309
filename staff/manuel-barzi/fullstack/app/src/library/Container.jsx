export default function Container(props) {
    return <div className={`flex flex-col ${props.align === 'center' ? ' items-center' : ''}`} {...props}></div>
}