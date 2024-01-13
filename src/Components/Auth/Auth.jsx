import { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import createUploadLink from "apollo-upload-client/createUploadLink.mjs"
import { getToken, isAuthenticated } from "../../Helpers/Utils";


const Auth = ({ children }) => {
    const [loading, setLoading] = useState(false)

    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: createUploadLink({
            uri: 'http://localhost:4000',
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
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}

export default Auth
