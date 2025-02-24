import { FC } from 'react'
import { Shoe } from '../../types'

interface Props {
    item: Shoe
}

const Size: FC<Props> = ({ item }) => {
    return (
        <div>Color</div>
    )
}

export default Size