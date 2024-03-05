import { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, from } from '@apollo/client';
import createUploadLink from "apollo-upload-client/createUploadLink.mjs"
import { getToken, isAuthenticated } from "../../Helpers/Utils";
import { onError } from "@apollo/client/link/error";
import { useSnackbar } from "notistack";


const Auth = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const { enqueueSnackbar } = useSnackbar()

    const errorLink = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
            graphQLErrors.forEach(({ message, locations, path }) =>
                enqueueSnackbar(`${message}`, {
                    variant: "error"
                })
            );
        if (networkError) enqueueSnackbar(`[Network error]: ${networkError}`, {
            variant: "error"
        })
    })

    const uploadLink = createUploadLink({
        // uri: 'http://localhost:4000',
        uri: "https://masternization-backend1.el.r.appspot.com/",
        headers: {
            authorization: isAuthenticated() ? `Bearer ${getToken()}` : "",
        }
    })

    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: from([errorLink, uploadLink])
    })

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
