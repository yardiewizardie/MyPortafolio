import React from 'react'
import Layout from '../components/Layout'
import Typed from 'react-typed'
import { graphql, StaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import nodeicon from '../images/SVG/node.svg'
import gatsbyicon from '../images/SVG/gatsby.svg'
import graphqlicon from '../images/SVG/graphql.svg'
import reacticon from '../images/SVG/react.svg'
import mongoicon from '../images/SVG/mongodb.svg'
import sassicon from '../images/SVG/sass.svg'
import tsicon from '../images/SVG/typescript.svg'
import reduxicon from '../images/SVG/redux.svg'
import ProjectContainer from '../components/ProjectContainer'
import StackItem from '../components/StackItem'
import './index.scss'

const IndexPage = () => (
    <StaticQuery
        query={graphql`
            query {
                imageOne: file(relativePath: { eq: "1.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                imageTwo: file(relativePath: { eq: "2.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                imageThree: file(relativePath: { eq: "3.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                imageFour: file(relativePath: { eq: "4.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => (
            <Layout>
                <Helmet>
                    <html lang="en" />
                    <meta name="theme-color" content="#ffffff" />
                    <meta
                        property="og:description"
                        content="Hi!, My name is Hector Faria, I'm a self-taught developer, this is my portafolio that has a collection of projects I have done, my experience and stack."
                    />
                    <meta property="og:locale" content="en" />
                    <meta property="og:url" content="http://hectorfaria.us/" />
                    <meta property="og:site_name" content="Hector Faria" />
                    <meta property="og:image" content="https://i.imgur.com/eJimocb.png" />
                </Helmet>
                <main className="review">
                    <div className="code-container">
                        <span>
                            Hi!, My name is <b>Hector Faria, </b>
                            <Typed
                                strings={[
                                    'and I am a Front-End Developer',
                                    'I am in love with JavaScript',
                                    'I like learning new tecnologies',
                                    'I would like to help you',
                                    'I have a fascination for CSS',
                                    'I work with people around the globe',
                                    // Für Die ALlianz
                                ]}
                                typeSpeed={50}
                                backSpeed={40}
                                loop
                            />
                        </span>
                    </div>
                    <div className="code-container__contact">
                        Interested in working with me?{' '}
                        <a href="mailto:hector_faria@hotmail.com" className="contact rainbow">
                            Contact me
                        </a>
                    </div>
                    <div className="detail">
                        <div className="info-projects">
                            <div className="info-projects__title">Projects</div>
                            <ProjectContainer
                                name="Kamina"
                                description="Webpage travel agency about Colombian nature and Travel packages (Only the
                                    inplementation of React.js and Redux)."
                                link="https://www.kamina.co"
                                img={data.imageFour.childImageSharp.fluid}
                                stacks={['React', 'Redux', 'Redux Form']}
                            />
                            <ProjectContainer
                                name="Norge Nature"
                                description="Webpage travel agency about Norwegian destinations and interesting places."
                                link="http://nature-norge.surge.sh/"
                                img={data.imageOne.childImageSharp.fluid}
                                stacks={['React', 'BEM', 'Redux', 'Sass']}
                            />
                            <ProjectContainer
                                name="Sudookie Movies"
                                description="Personal project of watching movies together with friends."
                                link="https://github.com/yardiewizardie/DookieServerSide"
                                img={data.imageTwo.childImageSharp.fluid}
                                stacks={['React', 'Mongo', 'Node.js', 'Express', 'Redux', 'Sass']}
                            />
                            <ProjectContainer
                                name="Fictive"
                                description="Social Media app to connect Tumblr users."
                                link="http://fictive-frontend.surge.sh/"
                                img={data.imageThree.childImageSharp.fluid}
                                stacks={['React', 'BEM', 'Redux', 'Sass', 'Material UI']}
                            />
                        </div>
                        <div className="info-container">
                            <div className="info-container__title">Experience</div>
                            <div className="info-container__box">
                                <div className="info-container__subtitle">
                                    <h3>Full time Freelancer</h3>
                                    <span>Present</span>
                                </div>
                                <ul className="info-container__container">
                                    <li>Attending clients with their needs and working together with them.</li>
                                    <li>Implementing UX/UI sketchs into a maintenable, reusable code and fast Webpage</li>
                                    <li>Converting HTML/CSS/JS pages into Robust React.js applications</li>
                                    <li>Making Applications from scratch</li>
                                    <li>
                                        Connecting Applications to different End-points in a clean way, reusable way
                                    </li>
                                    <li>Testing Applications with Jest and Enzyme</li>
                                </ul>
                                <div className="info-container__subtitle">
                                    <h3>Front End Dev - Intelli-next C.A</h3>
                                    <span>Feb 2018 - Dec 2018</span>
                                </div>
                                <ul className="info-container__container">
                                    <li>Building the Front End of a PWA (Progressive Web Application) </li>
                                    <li>Usage of React.js and known libraries such as React Router, React Helmet</li>
                                    <li>Usage of Webpack 4 for bundling files and code splitting</li>
                                    <li>Usage of Redux for state container</li>
                                    <li>Unit and Integration Testing with Jest and Enzyme</li>
                                    <li>Using CSS Preprocessors like Post-CSS and Sass</li>
                                </ul>
                            </div>
                            <div className="info-container__title">My Stack</div>
                            <div className="info-container__stacks">
                                <StackItem alt="node" icon={nodeicon} name="Node.js" />
                                <StackItem alt="gatsby" icon={gatsbyicon} name="Gatsby" />
                                <StackItem alt="graphql" icon={graphqlicon} name="GraphQL" />
                                <StackItem alt="mongo" icon={mongoicon} name="MongoDB" />
                            </div>
                            <div className="info-container__stacks">
                                <StackItem alt="react" icon={reacticon} name="React.js" />
                                <StackItem alt="redux" icon={reduxicon} name="Redux" />
                                <StackItem alt="sass" icon={sassicon} name="Sass" />
                                <StackItem alt="typescript" icon={tsicon} name="TypeScript" />
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        )}
    />
)

export default IndexPage
