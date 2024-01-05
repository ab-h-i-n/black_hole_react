import React from 'react';
import Layout from './LAYOUT';
import WELCOMETAG from '../components/WELCOMETAG';
import SEARCHBAR from '../components/SEARCHBAR';
import GROUP from '../components/GROUP';

function HOME() {
    const userName = localStorage.getItem('userName') || 'User';

    return (
        <Layout index={0}>
            <WELCOMETAG usrName={userName} />
            <SEARCHBAR />
            <GROUP heading="Trending Now" />
        </Layout>
    );
}

export default HOME;
