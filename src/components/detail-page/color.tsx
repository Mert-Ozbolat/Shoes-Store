import { FC } from 'react'
import { Shoe } from '../../types'

interface Props {
    item: Shoe
}

const Color: FC<Props> = ({ item }) => {
    return (
        <div>Color</div>
    )
}

export default Color