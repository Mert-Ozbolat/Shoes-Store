import { FC } from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import useAuth from "../../hooks/useAuth";


const Header: FC = () => {

    const { user, isLoading, error } = useUser()
    const { logout } = useAuth()

    console.log("User", user?.firstName)

    return (
        <div className="">
            <h1>Header</h1>

            <h3>{user?.firstName}</h3>
            <h3>{user?.lastName}</h3>


            <button className="bg-amber-400 p-1 rounded" onClick={() => logout.mutate()}>Çıkış Yap</button>
        </div>
    );
};

export default Header;