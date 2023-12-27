import { useParams } from 'react-router-dom'

export default function Hello() {
    const params = useParams()

    return <h1 className="bg-yellow border-black border-w-2 text-black">Hello, {params.name}!</h1>
}