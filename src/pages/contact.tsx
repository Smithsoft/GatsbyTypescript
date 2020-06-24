import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const Contact = (): React.ReactElement => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <p>
                <ul>
                    <li>
                        Email:{' '}
                        <a href="mailto:sarah@smithsoft.com.au">
                            sarah@smithsoft.com.au
                        </a>
                    </li>
                    <li>
                        Twitter:{' '}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://twitter.com/sarah_j_smith"
                        >
                            @sarah_j_smith
                        </a>
                    </li>
                </ul>
            </p>
        </Layout>
    );
};

export default Contact;
