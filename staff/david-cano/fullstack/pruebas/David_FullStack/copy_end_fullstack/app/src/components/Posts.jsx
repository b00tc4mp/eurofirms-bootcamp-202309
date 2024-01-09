// Importar el componente 'Container' desde la biblioteca de componentes personalizados
import Container from '../library/Container'

// Importar el componente 'Post' desde el archivo correspondiente
import Post from './Post'

// Definir el componente funcional llamado 'Posts'
export default function Posts(props) {
    // Imprimir un mensaje en la consola cuando el componente se renderiza
    console.log('Posts')

    // Devolver un componente 'Container' que contiene una cuadrícula de posts
    return <Container className='md:grid md:grid-cols-2 lg:grid-cols-3' align="center" aria-label={props['aria-label']}>
        {/* Mapear sobre la lista de posts y renderizar un componente 'Post' para cada uno */}
        {props.posts.map(function (post) {
            // Devolver el componente 'Post' con las propiedades específicas para cada post
            return <Post key={post.id} post={post} onLikeToggled={props.onPostLikeToggled} onSaveToggled={props.onPostSaveToggled} onDeleted={props.onPostDeleted} onError={props.onError} />
        })}
    </Container>
}
