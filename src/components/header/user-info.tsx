import { FC, useState } from 'react'
import useUser from '../../hooks/useUser'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

const UserInfo: FC = () => {

    const [isOpen, setIsOpen] = useState(false)
    const { user, isLoading, error } = useUser()
    const { logout } = useAuth()

    return (
        <div className='relative flex justify-end'>
            <button
                onClick={() => setIsOpen(true)}
                className='flex items-center justify-end gap-1 cursor-pointer'>
                <img src="/user.svg" alt="" />
                <p className='font-semibold text-sm md:text-base'>
                    {user?.firstName}
                    {user?.lastName}
                </p>
            </button>

            {
                isOpen && (
                    <div className='absolute bg-fa-white shadow-lg rounded-md mt-3 z-50 flex flex-col'>
                        <Link to="/admin" className='p-3 hover:bg-gray-300/30'>Admin Paneli</Link>
                        <button className='p-3 hover:bg-gray-300/30'>Çıkış Yap</button>
                    </div>
                )
            }
        </div>
    )
}

export default UserInfo