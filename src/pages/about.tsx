import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const About = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About</h1>
            <p>Sarah has 20 years experience as a mobile dev.</p>
            <p>
                <Link to="/contact">Want to work with me?</Link>
            </p>
        </Layout>
    );
};

export default About;
