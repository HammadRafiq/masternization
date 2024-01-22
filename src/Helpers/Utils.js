import { jwtDecode } from "jwt-decode"

///////////////////////////////////////
////////// AUTH FUNCTIONS /////////////
///////////////////////////////////////

export const getToken = () => localStorage.getItem("accessToken");

const isValidToken = (accessToken) => {
    if (!accessToken) {
        return false;
    }
    const decoded = jwtDecode(accessToken);
    const expiryDate = new Date(decoded.exp * 1000) // To check expiry date in proper format for debugging purposes
    const dateNow = new Date(Date.now()) // To check current date in proper format for debugging purposes
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
}

export const setSession = (accessToken) => {
    if (accessToken) {
        localStorage.setItem("accessToken", accessToken)
    } else {
        localStorage.removeItem("accessToken")
    }
};

export const isAuthenticated = () => !!getToken();

export const handleAuthentication = () => {
    let accessToken = getToken();
    if (!accessToken) {
        return false
    }
    if (isValidToken(accessToken)) {
        setSession(accessToken);
    } else {
        setSession(null);
    }
    return !!getToken() // Returns a boolean
};


//////////// ADMIN AUTH FUNCTIONS ///////////////

export const setUser = (value) => {
    if (value) {
        localStorage.setItem("isUser", value)
    } else {
        localStorage.removeItem("isUser")
    }
};
export const isUser = () => !!localStorage.getItem("isUser")


export const setAdmin = (value) => {
    if (value) {
        localStorage.setItem("isAdmin", value)
    } else {
        localStorage.removeItem("isAdmin")
    }
};
export const isAdmin = () => !!localStorage.getItem("isAdmin")
