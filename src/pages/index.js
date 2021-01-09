import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import "antd/lib/grid/style/index.css";
import Navigation from "../components/Navigation/Navigation";
import Skills from "../components/Skills/Skills";
import Timeline from "../components/Timeline/Timeline";
import "../styles/main.scss";

export default ({ data }) => {
  console.log(data);
  return (
    <>
      <Navigation />
      <section className="section">
        <div
          style={{
            marginLeft: "10vw",
          }}
        >
          <h1>
            <span>
              Hallo,
              <br />
              ich bin
            </span>{" "}
            Jan<span>.</span>
          </h1>
          <h2 style={{ maxWidth: "400px" }}>
            Full-Stack Entwickler mit Passion für digitale Produkte.
          </h2>
        </div>
        <div
          style={{
            width: "40vw",
            height: "100vh",
            marginLeft: "-20vw",
            overflow: "hidden",
          }}
        >
          <Img
            fluid={data.imgMe.childImageSharp.fixed}
            imgStyle={{
              mixBlendMode: "screen",
              filter: "contrast(0.75) brightness(1.25)",
              objectPosition: "center top",
            }}
          />
        </div>
      </section>
      <section className="section section--ci">
        <div
          style={{
            marginLeft: "10vw",
            width: "100%",
          }}
        >
          <h2 className="h1">
            <span>Meine</span> Skills
          </h2>

          <Row
            gutter={60}
            style={{
              alignItems: "center",
              width: "100%",
              marginTop: "80px",
              marginBottom: "80px",
            }}
          >
            <Col md={12} lg={8}>
              <div className="intro">
                <h2>Frontend</h2>
                <p>
                  Im Frontend arbeite ich bevorzugt mit Javascript Frameworks
                  wie <strong>React</strong> oder <strong>VueJS</strong>, die es
                  mir erlauben moderne Standards zu nutzen und reaktive
                  Applikationen zu entwickeln.
                </p>
                <p>
                  Für performante und suchmaschinenoptimierte Webseiten nutze
                  ich <strong>NextJS</strong>. Beim "Server-Side Rendering"
                  werden hier die Inhalte vorab auf dem Server generiert.
                </p>
              </div>
              <Skills
                items={[
                  {
                    class: "devicon-css3-plain",
                    icon: "css3",
                    title: "CSS(3)",
                  },
                  {
                    class: "devicon-html5-plain",
                    icon: "html5",
                    title: "HTML(5)",
                  },
                  {
                    class: "devicon-javascript-plain",
                    icon: "javascript_shield",
                    title: "Javascript",
                  },
                  {
                    class: "devicon-typescript-plain",
                    icon: "typescript",
                    title: "Typescript",
                  },
                  {
                    class: "devicon-react-original",
                    icon: "react",
                    title: "React",
                  },
                  {
                    class: "devicon-vuejs-plain",
                    icon: "vue.js",
                    title: "VueJS",
                  },
                  {
                    class: "devicon-visualstudio-plain",
                    icon: "visualstudio",
                    title: "Visual Studio",
                  },
                  {
                    class: "devicon-photoshop-plain",
                    icon: "photoshop",
                    title: "Photoshop",
                  },
                  {
                    class: "devicon-illustrator-plain",
                    icon: "illustrator",
                    title: "Illustrator",
                  },
                ]}
              />
            </Col>
            <Col
              xs={18}
              sm={{ span: 14 }}
              md={{ span: 6 }}
              lg={{ span: 8, offset: 1 }}
            >
              <img
                src={data.imgFrontend.publicURL}
                width="100%"
                alt="Frontend"
              />
            </Col>
          </Row>
          <Row
            gutter={60}
            style={{
              alignItems: "center",
              width: "100%",
              marginTop: "80px",
              marginBottom: "80px",
            }}
          >
            <Col md={{ span: 12 }} lg={{ span: 8, offset: 1, order: 2 }}>
              <div className="intro">
                <h2>Backend</h2>
                <p>
                  Als Pendant zum Frontend nutze ich im Backend Tools wie{" "}
                  <strong>NodeJS</strong>.
                </p>
                <p>
                  Für die Kommunikation über das Frontend setze ich auf APIs,
                  die auf der <strong>REST</strong>-Architektur oder Sprachen
                  wie <strong>GraphQL</strong> basieren.
                </p>
              </div>
              <Skills
                items={[
                  {
                    class: "devicon-php-plain",
                    icon: "php",
                    title: "PHP",
                  },
                  {
                    class: "devicon-nodejs-plain",
                    icon: "nodejs",
                    title: "NodeJS",
                  },
                  {
                    class: "devicon-mysql-plain",
                    icon: "mysql",
                    title: "MySQL",
                  },
                  {
                    class: "devicon-mongodb-plain",
                    icon: "mongodb",
                    title: "MongoDB",
                  },
                  {
                    class: "devicon-docker-plain",
                    icon: "docker",
                    title: "Docker",
                  },
                  {
                    image: data.skillGraphQL.publicURL,
                    title: "GraphQL",
                  },
                ]}
              />
            </Col>
            <Col xs={18} sm={{ span: 14 }} md={{ span: 6 }} lg={{ span: 8 }}>
              <img src={data.imgBackend.publicURL} width="100%" alt="Backend" />
            </Col>
          </Row>
          <Row
            gutter={60}
            style={{
              alignItems: "center",
              width: "100%",
              marginTop: "80px",
              marginBottom: "80px",
            }}
          >
            <Col md={12} lg={8}>
              <div className="intro">
                <h2>CMS/ E-Commerce</h2>
                <p>
                  Content Management Systeme sind essentiell für dynamische
                  Inhalte.
                </p>
              </div>
              <Skills
                items={[
                  {
                    icon: "wordpress",
                    title: "WordPress",
                  },
                  {
                    icon: "typo3",
                    title: "TYPO3",
                  },
                  {
                    icon: "magento",
                    title: "Magento(2)",
                  },
                ]}
              />
            </Col>
            <Col
              xs={18}
              sm={{ span: 14 }}
              md={{ span: 6 }}
              lg={{ span: 8, offset: 1 }}
            >
              <img
                src={data.imgCMS.publicURL}
                width="100%"
                alt="CMS/ E-Commerce"
              />
            </Col>
          </Row>
          <Row
            gutter={60}
            style={{
              width: "100%",
              marginTop: "80px",
              marginBottom: "80px",
            }}
          >
            <Col lg={6}>
              <img
                src={data.imgVersioning.publicURL}
                height="150"
                style={{ marginBottom: "10px" }}
                alt="Backend"
              />
              <div className="intro">
                <h2>Versionierung</h2>
                <p>
                  Die Nutzung einer Versionskontrolle ist ein Kernelement in der
                  Anwendungsentwicklung. <strong>Features</strong>,{" "}
                  <strong>Releases</strong> und <strong>Merge Requests</strong>{" "}
                  sind daher ein fester Bestandteil meines Workflows.
                </p>
              </div>
              <Skills
                items={[
                  {
                    class: "devicon-git-plain",
                    icon: "git",
                    title: "Git",
                  },
                  {
                    class: "devicon-gitlab-plain",
                    icon: "gitlab",
                    title: "Gitlab",
                  },
                  {
                    class: "devicon-github-plain",
                    icon: "github",
                    title: "Github",
                  },
                ]}
              />
            </Col>
            <Col lg={6}>
              <img
                src={data.imgCompile.publicURL}
                height="150"
                style={{ marginBottom: "10px" }}
                alt="Automatisierung"
              />
              <div className="intro">
                <h2>Automatisierung</h2>
                <p>
                  Prozesse zu automatisieren <strong>minimiert Fehler</strong>{" "}
                  und spart Zeit. Compiler, wie Webpack und Babel ermöglichen
                  einen optimierten <strong>Production-Build</strong>.
                </p>
              </div>
              <Skills
                items={[
                  {
                    class: "devicon-webpack-plain",
                    icon: "webpack",
                    title: "Webpack",
                  },
                  {
                    class: "devicon-babel-plain",
                    icon: "babel",
                    title: "Babel",
                  },
                  {
                    class: "devicon-grunt-plain",
                    icon: "grunt",
                    title: "Grunt",
                  },
                  {
                    class: "devicon-gulp-plain",
                    icon: "gulp",
                    title: "Gulp",
                  },
                  {
                    class: "devicon-sass-plain",
                    icon: "sass",
                    title: "SASS",
                  },
                ]}
              />
            </Col>
            <Col lg={6} xl={8}>
              <img
                src={data.imgAgile.publicURL}
                height="150"
                style={{ marginBottom: "10px" }}
                alt="Backend"
              />
              <div className="intro">
                <h2>Agilität</h2>
                <p>
                  Bei komplexen Projekten arbeite ich nach Scrum und nutze ein{" "}
                  <strong>Ticketsystem</strong>, um das Projekt in planbare
                  Pakete unterteilen zu können.
                </p>
                <p>
                  Durch kurze <strong>Sprints</strong> bekommt das Team zeitnah
                  Kudnenfeedback zur Umsetzung und kann entsprechend reagieren.
                </p>
              </div>
              <Skills
                items={[
                  {
                    class: "devicon-confluence-plain",
                    icon: "jira",
                    title: "JIRA",
                  },
                  {
                    image: data.skillConfluence.publicURL,
                    title: "Confluence",
                  },
                  {
                    image: data.skillScrum.publicURL,
                    title: "Scrum",
                  },
                ]}
              />
            </Col>
          </Row>
        </div>
      </section>
      <section className="section section--white">
        <div
          style={{
            marginLeft: "10vw",
            width: "100%",
          }}
        >
          <h2 className="h1">
            <span>Vita</span>
          </h2>
          <Timeline />
          <Img
            fluid={data.imgM2Cert.childImageSharp.fluid}
            style={{ width: "100px" }}
          />
        </div>
      </section>
      <footer>
        <nav>
          <ul>
            <li>
              <a
                href="https://github.com/janfeldmann/"
                title="Github"
                target="_blank"
                rel="noopener"
              >
                <img
                  src={data.socialGithub.publicURL}
                  height="24"
                  alt="Github"
                />
              </a>
            </li>
            <li>
              <a href="/" title="Xing">
                <img
                  src={data.socialCodepen.publicURL}
                  height="24"
                  alt="Xing"
                />
              </a>
            </li>
            <li>
              <a href="/" title="Xing">
                <img src={data.socialXing.publicURL} height="24" alt="Xing" />
              </a>
            </li>
            <li>
              <a href="/" title="LinkedIn">
                <img
                  src={data.socialLinkedIn.publicURL}
                  height="24"
                  alt="LinkedIn"
                />
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
        fixed(width: 800, height: 904, cropFocus: NORTH) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    imgFrontend: file(
      relativePath: { eq: "svg/undraw_static_assets_rpm6.svg" }
    ) {
      extension
      publicURL
    }
    imgCMS: file(
      relativePath: { eq: "svg/undraw_usability_testing_2xs4.svg" }
    ) {
      extension
      publicURL
    }
    imgBackend: file(
      relativePath: { eq: "svg/undraw_server_status_5pbv.svg" }
    ) {
      extension
      publicURL
    }
    imgVersioning: file(
      relativePath: { eq: "svg/undraw_version_control_9bpv.svg" }
    ) {
      extension
      publicURL
    }
    imgCompile: file(
      relativePath: { eq: "svg/undraw_code_review_l1q9_ci.svg" }
    ) {
      extension
      publicURL
    }
    imgAgile: file(relativePath: { eq: "svg/undraw_schedule_pnbk.svg" }) {
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
    imgM2Cert: file(
      relativePath: { eq: "magento-2-certified-front-end-developer-badge.png" }
    ) {
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
