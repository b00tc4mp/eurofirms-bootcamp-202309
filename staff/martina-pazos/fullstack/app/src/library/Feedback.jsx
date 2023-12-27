import Button from './Button'

export default function Feedback(props) {
    return <div className="fixed top-0 bg-yellow-400 w-full flex gap-2 justify-center items-center">
        <p className="text-center">{props.message}</p> <Button onClick={props.onAccept}>Accept</Button>
    </div>
}