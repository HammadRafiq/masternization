import { getToken, handleAuthentication, isAuthenticated, isUser } from "../../Helpers/Utils";
// import { Spin } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import { DefaultLogo } from 'Config'

function AuthGuard({ children }) {
    const [isLoading, setLoading] = useState(true);
    const loggedIn = isAuthenticated()
    const user = isUser()
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            return navigate("/home-guest");
        }
        setLoading(false);
    }, [user]);

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

export default AuthGuard;
