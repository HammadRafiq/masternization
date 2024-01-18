import { getToken, handleAuthentication, isAdmin, isAuthenticated } from "../../Helpers/Utils";
// import { Spin } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import { DefaultLogo } from 'Config'

function AdminGuard({ children }) {
    const [isLoading, setLoading] = useState(true);
    const loggedIn = isAuthenticated()
    const admin = isAdmin()
    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn || !admin) {
            return navigate("/home-guest");
        }
        setLoading(false);
    }, [loggedIn, navigate]);

    if (isLoading) {
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

export default AdminGuard;
