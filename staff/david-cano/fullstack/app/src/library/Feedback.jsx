import Button from './Button'

export default function Feedback(props) {
    return <div className="fixed top-0 bg-gray-400 w-full flex gap-2 justify-center items-center p-10 opacity-80 rounded-3xl">
        <strong className="text-center text-red-500 underline decoration-blue-500/30 opacity-1">{props.message}</strong> <Button onClick={props.onAccept}>Accept</Button>
    </div>
}
