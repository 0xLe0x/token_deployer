import React from 'react';
import Head from 'next/head'
import { Container } from 'semantic-ui-react';
import Header from '../components/Header';

export default props => {
    return (
        <Container >
            <Head>
                <link 
                    rel="stylesheet" 
                    href="/static/dist/semantic.min.css"
                />
            </Head>
            <Header />
            {props.children}
        </Container>
    );
}