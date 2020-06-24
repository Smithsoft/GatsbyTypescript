import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const NotFound = (): React.ReactElement => {
    return (
        <Layout>
            <h1>Page not found</h1>
            <p>
                <Link to="/">Head home</Link>
            </p>
        </Layout>
    );
};

export default NotFound;
