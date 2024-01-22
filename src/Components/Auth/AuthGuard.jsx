import { getToken, handleAuthentication, isAuthenticated } from "../../Helpers/Utils";
// import { Spin } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import { DefaultLogo } from 'Config'

function AuthGuard({ children }) {
    const [isLoading, setLoading] = useState(true);
    const loggedIn = isAuthenticated()
    const navigate = useNavigate();
    /**
        useEffect(() => {
            
            if (!loggedIn) {
                return navigate("/home-guest");
            }
             
             
            setLoading(false);
        }, [loggedIn, navigate]);
    
    */

    useEffect(() => {
        if (!loggedIn) {
            // If user is not logged in and tries to access /home, redirect to /home-guest
            if (window.location.pathname === '/home') {
                navigate('/home-guest');
            }
        } else {
            // If user is logged in and tries to access /home-guest, redirect to /home
            if (window.location.pathname === '/home-guest') {
                navigate('/home');
            }
        }
        setLoading(false);
        // You can perform additional logic or set loading state if needed
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

export default AuthGuard;
