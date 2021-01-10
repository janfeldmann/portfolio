import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
// import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';

import 'antd/lib/grid/style/index.css';
// import Navigation from 'components/Navigation/Navigation';
import Skills from 'components/Skills/Skills';
import ParallaxCard from 'components/ParallaxCard/ParallaxCard';
import Timeline from 'components/Timeline/Timeline';
import '../styles/main.scss';

const TileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 30px;
    border-radius: 30px;
    background: #3dff8d;
    box-shadow: -20px 20px 60px #34d978, 20px -20px 60px #46ffa2;

    > img {
        margin: 0 auto 25px;
        padding-bottom: 25px;
    }
`;

const StageContent = styled.div`
    margin-left: 10vw;

    h2 {
        max-width: 400px;
    }
`;

const StageImage = styled.div`
    width: 100vw;
    height: 60vh;
    /* margin-left: -20vw; */
    overflow: hidden;
    margin-bottom: 40px;

    @media screen and (min-width: 380px) {
        width: 70vw;
        height: 50vh;
    }

    @media screen and (min-width: 480px) {
        width: 50vw;
        height: 50vh;
    }

    @media screen and (min-width: 768px) {
        width: 40vw;
        margin: 0;
        height: 100vh;
        margin-left: -20vw;
    }
`;

const StyledRow = styled(Row)`
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;

    @media screen and (min-width: 992px) {
        margin-top: 80px;
        margin-bottom: 80px;
    }
`;

export default ({ data }) => {
    return (
        <>
            <Helmet>
                <html lang="de" />
                <title>Jan Feldmann | Full-Stack Entwickler</title>
                <meta name="description" content="Ich bin zertifizierter Full-Stack Web-Entwickler mit langjähriger Erfahrung und Passion für digitale Produkte."></meta>
            </Helmet>
            {/* <Navigation /> */}
            <section className="section section--stage">
                <StageContent>
                    <h1>
                        <span>
                            Hallo,
                            <br />
                            ich bin
                        </span>{' '}
                        Jan<span>.</span>
                    </h1>
                    <h2>Full-Stack Entwickler mit Passion für digitale Produkte.</h2>
                </StageContent>
                <StageImage>
                    <Img
                        fluid={data.imgMe.childImageSharp.fluid}
                        loading="eager"
                        fadeIn={false}
                        imgStyle={{
                            mixBlendMode: 'screen',
                            filter: 'contrast(0.75) brightness(1.25)',
                            objectPosition: 'center top',
                        }}
                    />
                </StageImage>
            </section>
            <section className="section section--ci">
                <div
                    style={{
                        marginLeft: '10vw',
                        width: 'calc(100% - 20vw)',
                    }}
                >
                    <h2 className="h1">
                        <span>Vielseitige</span> Skills
                    </h2>

                    <StyledRow gutter={60}>
                        <Col sm={{ span: 14, offset: 5 }} md={{ span: 12, offset: 6 }} lg={{ span: 8, order: 2, offset: 0 }} xl={{ span: 8, offset: 1 }}>
                            <img src={data.imgFrontend.publicURL} width="100%" alt="Frontend" />
                        </Col>
                        <Col lg={16} xl={11}>
                            <ParallaxCard>
                                <TileWrapper>
                                    <div className="intro">
                                        <h2>Frontend</h2>
                                        <p>
                                            Im Frontend arbeite ich bevorzugt mit Javascript Frameworks wie <strong>React</strong> oder <strong>VueJS</strong>, die es mir erlauben
                                            moderne Standards zu nutzen und reaktive Applikationen zu entwickeln.
                                        </p>
                                        <p>
                                            Für performante und suchmaschinenoptimierte Webseiten nutze ich <strong>NextJS</strong>. Mittels "Server-Side Rendering" werden hier die
                                            Inhalte vorab auf dem Server generiert.
                                        </p>
                                    </div>
                                    <Skills
                                        items={[
                                            {
                                                class: 'devicon-css3-plain',
                                                icon: 'css3',
                                                title: 'CSS(3)',
                                            },
                                            {
                                                class: 'devicon-html5-plain',
                                                icon: 'html5',
                                                title: 'HTML(5)',
                                            },
                                            {
                                                class: 'devicon-javascript-plain',
                                                icon: 'javascript_shield',
                                                title: 'Javascript',
                                            },
                                            {
                                                class: 'devicon-typescript-plain',
                                                icon: 'typescript',
                                                title: 'Typescript',
                                            },
                                            {
                                                class: 'devicon-react-original',
                                                icon: 'react',
                                                title: 'React',
                                            },
                                            {
                                                class: 'devicon-vuejs-plain',
                                                icon: 'vue.js',
                                                title: 'VueJS',
                                            },
                                            {
                                                class: 'devicon-visualstudio-plain',
                                                icon: 'visualstudio',
                                                title: 'Visual Studio',
                                            },
                                            {
                                                class: 'devicon-photoshop-plain',
                                                icon: 'photoshop',
                                                title: 'Photoshop',
                                            },
                                            {
                                                class: 'devicon-illustrator-plain',
                                                icon: 'illustrator',
                                                title: 'Illustrator',
                                            },
                                        ]}
                                    />
                                </TileWrapper>
                            </ParallaxCard>
                        </Col>
                    </StyledRow>
                    <StyledRow gutter={60}>
                        <Col sm={{ span: 14, offset: 5 }} md={{ span: 12, offset: 6 }} lg={{ span: 9, offset: 1 }} xl={{ span: 8, offset: 2 }}>
                            <img src={data.imgBackend.publicURL} width="100%" alt="Backend" />
                        </Col>
                        <Col lg={{ span: 12, offset: 2 }} xl={{ span: 11 }}>
                            <ParallaxCard>
                                <TileWrapper>
                                    <div className="intro">
                                        <h2>Backend</h2>
                                        <p>
                                            Als Pendant zum Frontend nutze ich im Backend Tools wie <strong>NodeJS</strong>.
                                        </p>
                                        <p>
                                            Für die Kommunikation über das Frontend setze ich auf APIs, die auf der <strong>REST</strong>-Architektur oder Sprachen wie{' '}
                                            <strong>GraphQL</strong> basieren.
                                        </p>
                                    </div>
                                    <Skills
                                        items={[
                                            {
                                                class: 'devicon-php-plain',
                                                icon: 'php',
                                                title: 'PHP',
                                            },
                                            {
                                                class: 'devicon-nodejs-plain',
                                                icon: 'nodejs',
                                                title: 'NodeJS',
                                            },
                                            {
                                                class: 'devicon-mysql-plain',
                                                icon: 'mysql',
                                                title: 'MySQL',
                                            },
                                            {
                                                class: 'devicon-mongodb-plain',
                                                icon: 'mongodb',
                                                title: 'MongoDB',
                                            },
                                            {
                                                class: 'devicon-docker-plain',
                                                icon: 'docker',
                                                title: 'Docker',
                                            },
                                            {
                                                image: data.skillGraphQL.publicURL,
                                                title: 'GraphQL',
                                            },
                                        ]}
                                    />
                                </TileWrapper>
                            </ParallaxCard>
                        </Col>
                    </StyledRow>
                    <StyledRow gutter={60}>
                        <Col sm={{ span: 14, offset: 5 }} md={{ span: 12, offset: 6 }} lg={{ span: 8, order: 2, offset: 1 }} xl={{ span: 8, offset: 1 }}>
                            <img src={data.imgCMS.publicURL} width="100%" alt="CMS/ E-Commerce" />
                        </Col>
                        <Col lg={{ span: 14 }} xl={{ span: 10, offset: 1 }}>
                            <ParallaxCard>
                                <TileWrapper>
                                    <div className="intro">
                                        <h2>CMS/ E-Commerce</h2>
                                        <p>
                                            Für die Redaktion von <strong>dynamische Inhalten</strong> nutze ich Systeme mit einem hohen Maß an Erweiterbarkeit.
                                        </p>
                                        <p>
                                            Dabei verfolge ich bevorzugt den <strong>Headless-Ansatz</strong> bei dem die Daten über eine Schnittstelle für das Frontend
                                            bereitgestellt werden.
                                        </p>
                                    </div>
                                    <Skills
                                        items={[
                                            {
                                                icon: 'wordpress',
                                                title: 'WordPress',
                                            },
                                            {
                                                icon: 'typo3',
                                                title: 'TYPO3',
                                            },
                                            {
                                                icon: 'magento',
                                                title: 'Magento(2)',
                                            },
                                        ]}
                                    />
                                </TileWrapper>
                            </ParallaxCard>
                        </Col>
                    </StyledRow>
                    <StyledRow gutter={60}>
                        <Col md={12} xl={{ span: 8, offset: 2 }}>
                            <ParallaxCard>
                                <TileWrapper>
                                    <img src={data.imgVersioning.publicURL} height="150" style={{ marginBottom: '10px' }} alt="Backend" />
                                    <div className="intro">
                                        <h2>Versionierung</h2>
                                        <p>
                                            Die Nutzung einer Versionskontrolle ist ein Kernelement in der Anwendungsentwicklung. <strong>Features</strong>,{' '}
                                            <strong>Releases</strong> und <strong>Merge Requests</strong> sind daher ein fester Bestandteil meines Workflows.
                                        </p>
                                    </div>
                                    <Skills
                                        items={[
                                            {
                                                class: 'devicon-git-plain',
                                                icon: 'git',
                                                title: 'Git',
                                            },
                                            {
                                                class: 'devicon-gitlab-plain',
                                                icon: 'gitlab',
                                                title: 'Gitlab',
                                            },
                                            {
                                                class: 'devicon-github-plain',
                                                icon: 'github',
                                                title: 'Github',
                                            },
                                        ]}
                                    />
                                </TileWrapper>
                            </ParallaxCard>
                        </Col>
                        <Col md={12} xl={9}>
                            <ParallaxCard>
                                <TileWrapper>
                                    <img src={data.imgCompile.publicURL} height="150" style={{ marginBottom: '10px' }} alt="Automatisierung" />
                                    <div className="intro">
                                        <h2>Automatisierung</h2>
                                        <p>
                                            Prozesse zu automatisieren <strong>minimiert Fehler</strong> und spart Zeit. Compiler, wie Webpack und Babel, ermöglichen einen
                                            optimierten <strong>Production-Build</strong>.
                                        </p>
                                    </div>
                                    <Skills
                                        items={[
                                            {
                                                class: 'devicon-webpack-plain',
                                                icon: 'webpack',
                                                title: 'Webpack',
                                            },
                                            {
                                                class: 'devicon-babel-plain',
                                                icon: 'babel',
                                                title: 'Babel',
                                            },
                                            {
                                                class: 'devicon-grunt-plain',
                                                icon: 'grunt',
                                                title: 'Grunt',
                                            },
                                            {
                                                class: 'devicon-gulp-plain',
                                                icon: 'gulp',
                                                title: 'Gulp',
                                            },
                                            {
                                                class: 'devicon-sass-plain',
                                                icon: 'sass',
                                                title: 'SASS',
                                            },
                                        ]}
                                    />
                                </TileWrapper>
                            </ParallaxCard>
                        </Col>
                    </StyledRow>
                    <StyledRow gutter={60}>
                        <Col md={12} xl={{ span: 10, offset: 3 }}>
                            <ParallaxCard>
                                <TileWrapper>
                                    <img src={data.imgAgile.publicURL} height="150" style={{ marginBottom: '10px' }} alt="Backend" />
                                    <div className="intro">
                                        <h2>Agilität</h2>
                                        <p>
                                            Bei komplexen Projekten arbeite ich nach Scrum und nutze ein <strong>Ticketsystem</strong>, um das Projekt in planbare Pakete
                                            unterteilen zu können.
                                        </p>
                                        <p>
                                            Durch kurze <strong>Sprints</strong> bekommt das Team zeitnah Kudnenfeedback zur Umsetzung und kann entsprechend reagieren.
                                        </p>
                                    </div>
                                    <Skills
                                        items={[
                                            {
                                                class: 'devicon-confluence-plain',
                                                icon: 'jira',
                                                title: 'JIRA',
                                            },
                                            {
                                                image: data.skillConfluence.publicURL,
                                                title: 'Confluence',
                                            },
                                            {
                                                image: data.skillScrum.publicURL,
                                                title: 'Scrum',
                                            },
                                        ]}
                                    />
                                </TileWrapper>
                            </ParallaxCard>
                        </Col>
                        <Col md={12} xl={8}>
                            <ParallaxCard>
                                <TileWrapper>
                                    <img src={data.imgTeam.publicURL} height="150" style={{ marginBottom: '10px' }} alt="Leitung" />
                                    <div className="intro">
                                        <h2>Leitung</h2>
                                        <p>
                                            Als Teamleiter habe ich bereits viele Projekte in der Entwicklung <strong>gesteuert und koordiniert</strong>.
                                        </p>
                                        <p>
                                            Dazu gehören unter anderem <strong>Ressourcenplanung</strong> und die Evaluation von Kundenanfragen.
                                        </p>
                                    </div>
                                </TileWrapper>
                            </ParallaxCard>
                        </Col>
                    </StyledRow>
                </div>
            </section>
            <section
                className="section section--white"
                style={{
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        marginLeft: '10vw',
                        width: 'calc(100% - 20vw)',
                    }}
                >
                    <h2 className="h1" style={{ marginBottom: '2rem' }}>
                        <span>Berufliche</span> <strong>Stationen</strong>
                    </h2>
                    <Timeline />
                </div>
                <div
                    style={{
                        position: 'absolute',
                        left: '10vw',
                        bottom: 0,
                    }}
                >
                    <Img fluid={data.imgM2Cert.childImageSharp.fluid} style={{ width: '100px' }} />
                </div>
                <div
                    style={{
                        position: 'absolute',
                        right: '5vw',
                        left: '50%',
                        bottom: 0,
                    }}
                >
                    {/* <StaticImage src="../assets/images/svg/progress1.svg" formats={['auto', 'webp', 'avif']} alt="Progress" style={{ display: 'block' }} /> */}
                    <img src={data.imgProgress.publicURL} style={{ marginBottom: '10px', maxWidth: '100%', display: 'block', margin: '0 0 -2px' }} alt="Backend" />
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
        imgMe: file(relativePath: { eq: "source/KEV01864_JanFeldmann.jpg" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 800, maxHeight: 904, cropFocus: NORTH, quality: 60) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                }
            }
        }
        imgFrontend: file(relativePath: { eq: "svg/undraw_static_assets_rpm6.svg" }) {
            extension
            publicURL
        }
        imgCMS: file(relativePath: { eq: "svg/undraw_usability_testing_2xs4.svg" }) {
            extension
            publicURL
        }
        imgBackend: file(relativePath: { eq: "svg/undraw_server_status_5pbv.svg" }) {
            extension
            publicURL
        }
        imgVersioning: file(relativePath: { eq: "svg/undraw_version_control_9bpv.svg" }) {
            extension
            publicURL
        }
        imgCompile: file(relativePath: { eq: "svg/undraw_code_review_l1q9_ci.svg" }) {
            extension
            publicURL
        }
        imgAgile: file(relativePath: { eq: "svg/undraw_schedule_pnbk.svg" }) {
            extension
            publicURL
        }
        imgProgress: file(relativePath: { eq: "svg/progress1.svg" }) {
            extension
            publicURL
        }
        imgTeam: file(relativePath: { eq: "svg/team3.svg" }) {
            extension
            publicURL
        }
        skillGraphQL: file(relativePath: { eq: "svg/skills/graphql.svg" }) {
            extension
            publicURL
        }
        skillScrum: file(relativePath: { eq: "svg/skills/scrum.svg" }) {
            extension
            publicURL
        }
        skillKanban: file(relativePath: { eq: "svg/skills/kanban.svg" }) {
            extension
            publicURL
        }
        skillConfluence: file(relativePath: { eq: "svg/skills/confluence.svg" }) {
            extension
            publicURL
        }
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
        imgM2Cert: file(relativePath: { eq: "magento-2-certified-front-end-developer-badge.png" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
            extension
            publicURL
        }
    }
`;
