import { handleAuthentication, isAdmin, isAuthenticated, isUser } from "../../Helpers/Utils";
// import { Spin } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import { DefaultLogo } from 'Config'

function GuestGuard({ children }) {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    const loggedIn = isAuthenticated()
    const user = isUser()
    const admin = isAdmin()

    useEffect(() => {
        if (user) {
            return navigate("/home");
        }
        else if(admin){
            return navigate("/dashboard/overview")
        }
        setLoading(false)
    }, [user, admin]);

    if (loading) {
        return (
            <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                Loading...
                {/* <Spin
                    size="large"
                >
                    <DefaultLogo />
                </Spin> */}
            </div>
        )
    }

    return children;
}

export default GuestGuard;
