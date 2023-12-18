function Feedback(props) {
    return <div className="fixed top-0 bg-yellow-400 w-full">
        <p className="text-center">{props.message}</p>
    </div>
}

export default Feedback
