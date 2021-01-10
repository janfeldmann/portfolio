import React from 'react';
import { graphql } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';
import '../styles/main.scss';

export default ({ data }) => {
    return (
        <>
            <Helmet>
                <title>Jan Feldmann | 404 Seite nicht gefunden</title>
            </Helmet>
            {/* <Navigation /> */}
            <section className="section">
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h1>Seite nicht gefunden</h1>
                    <a href="/" style={{ color: '#fff', display: 'block', marginTop: '50px', fontSize: '1.2rem' }}>
                        Zurück zur Startseite
                    </a>
                </div>
            </section>
            <footer>
                <nav>
                    <ul>
                        <li>
                            <a href="https://github.com/janfeldmann/" title="Github" target="_blank" rel="noopener noreferrer">
                                <img src={data.socialGithub.publicURL} height="24" alt="Github" />
                            </a>
                        </li>
                        <li>
                            <a href="https://codepen.io/jfeldmann" title="Codepen" target="_blank" rel="noopener noreferrer">
                                <img src={data.socialCodepen.publicURL} height="24" alt="Codepen" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.xing.com/profile/Jan_Feldmann12" title="Xing" target="_blank" rel="noopener noreferrer">
                                <img src={data.socialXing.publicURL} height="24" alt="Xing" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jan-feldmann-06578a203/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <img src={data.socialLinkedIn.publicURL} height="24" alt="LinkedIn" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    );
};

export const query = graphql`
    query {
        socialGithub: file(relativePath: { eq: "svg/social/github.svg" }) {
            extension
            publicURL
        }
        socialXing: file(relativePath: { eq: "svg/social/xing.svg" }) {
            extension
            publicURL
        }
        socialLinkedIn: file(relativePath: { eq: "svg/social/linkedin.svg" }) {
            extension
            publicURL
        }
        socialCodepen: file(relativePath: { eq: "svg/social/codepen.svg" }) {
            extension
            publicURL
        }
    }
`;
