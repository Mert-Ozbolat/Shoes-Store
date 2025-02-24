import { FC } from 'react'
import { useShoes } from '../../hooks/useShoes'
import Loader from '../loader';
import Error from '../error';
import Card from '../card';

const List: FC = () => {

    const { shoes } = useShoes();

    if (shoes.isLoading) return <Loader />
    if (shoes.isError) return <Error message={shoes.error.message} refetch={shoes.refetch} />


    return (
        <div className='grid grid-cols-2 gap-x-4 gap-y-6 md:gap-y-8 xl:gap-y-10 sm:grid-cols-3 lg:grid-cols-4'>
            {shoes?.data?.map(item => <Card item={item} key={item._id} />)}
        </div>
    )
}

export default List