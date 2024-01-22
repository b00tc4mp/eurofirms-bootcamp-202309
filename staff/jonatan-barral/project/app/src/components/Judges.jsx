import Container from '../library/Container'

import Judge from './Judge'

export default function Judges(props) {
    console.log('Judges')

    return <Container className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-20" align="center" aria-label={props['aria-label']}>
        {props.users.map(function (Judge) {
            return <Post key={user.id} judge={judge} onError={props.onError} />
        })}
    </Container>
}