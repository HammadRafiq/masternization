import { getToken, handleAuthentication, isAdmin, isAuthenticated, isUser } from "../../Helpers/Utils";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import GuardLoading from "../Common/GuardLoading";

function AuthGuard({ children }) {
    const [isLoading, setLoading] = useState(true);
    const loggedIn = isAuthenticated()
    const user = isUser()
    const admin = isAdmin()
    const navigate = useNavigate();

    useEffect(() => {
        if (!user && !admin) {
            return navigate("/home-guest");
        }
        setLoading(false);
    }, [user]);

    if (isLoading) {
        return (
            <GuardLoading />
        )
    }

    return children;
}

export default AuthGuard;
