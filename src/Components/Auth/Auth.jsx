import { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import createUploadLink from "apollo-upload-client/createUploadLink.mjs"
import { getToken, isAuthenticated } from "../../Helpers/Utils";
import { SnackbarProvider } from 'notistack';


const Auth = ({ children }) => {
    const [loading, setLoading] = useState(false)

    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: createUploadLink({
            uri: 'https://masternization-backend.df.r.appspot.com',
            headers: {
                authorization: isAuthenticated() ? `Bearer ${getToken()}` : "",
            }
        })
    })

    useEffect(() => {
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <SnackbarProvider maxSnack={1}>
            <ApolloProvider client={client}>
                {children}
            </ApolloProvider>
        </SnackbarProvider>
    )
}

export default Auth
