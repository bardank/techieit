import React, {Fragment} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {ApolloProvider} from "react-apollo";
import ApolloClient, {InMemoryCache} from "apollo-boost";

import 'bootstrap/scss/bootstrap.scss';
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../style/scss/style.scss'
import '../style/scss/animation.scss'

const client = new ApolloClient({
    uri: "https://admin.techie.com.np/graphql",
    cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </ApolloProvider>
    )
}
export default MyApp
