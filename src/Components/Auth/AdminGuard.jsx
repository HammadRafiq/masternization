import { getToken, handleAuthentication, isAdmin, isAuthenticated } from "../../Helpers/Utils";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import GuardLoading from "../Common/GuardLoading";

function AdminGuard({ children }) {
    const [isLoading, setLoading] = useState(true);
    const loggedIn = isAuthenticated()
    const admin = isAdmin()
    const navigate = useNavigate();

    useEffect(() => {
        if (!admin) {
            return navigate("/home-guest");
        }
        setLoading(false);
    }, [admin]);

    if (isLoading) {
        return (
            <GuardLoading />
        )
    }

    return children;
}

export default AdminGuard;
