import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Site from './Site';

const Head = ({ title }): React.ReactElement => {
    const data: Site = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    return <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />;
};

export default Head;
