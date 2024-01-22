import { useParams } from 'react-router-dom'

function Hello() {
    const params = useParams()

    return <h1 className="bg-yellow border-black border-w-2 text-black">Hello, {params.name}!</h1>
}

export default Hello