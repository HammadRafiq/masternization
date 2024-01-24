import { handleAuthentication, isAdmin, isAuthenticated, isUser } from "../../Helpers/Utils";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import GuardLoading from "../Common/GuardLoading";

function GuestGuard({ children }) {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    const loggedIn = isAuthenticated()
    const user = isUser()
    const admin = isAdmin()
    const location = useLocation()

    useEffect(() => {
        if (user && location.pathname.includes("login" || "registration" || "admin")) {
            return navigate("/home");
        }
        else if (admin && location.pathname.includes("login" || "registration" || "admin")) {
            return navigate("/dashboard/overview")
        }
        setLoading(false)
    }, [user, admin]);

    if (loading) {
        return (
            <GuardLoading />
        )
    }

    return children;
}

export default GuestGuard;
