import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { RichText } from "prismic-reactjs";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Button from "components/_ui/Button";
import About from "components/About";
import Layout from "components/Layout";
import ProjectCard from "components/ProjectCard";

const Hero = styled("div")`
    padding-top: 2.5em;
    padding-bottom: 3em;
    margin-bottom: 6em;
    max-width: 830px;

    @media(max-width:${dimensions.maxwidthMobile}px) {
       margin-bottom: 3em;
    }

    h1 {
        margin-bottom: 1em;

        a {
            text-decoration: none;
            transition: all 100ms ease-in-out;

            &:nth-of-type(1) { color: ${colors.blue500}; }
            &:nth-of-type(2) { color: ${colors.orange500}; }
            &:nth-of-type(3) { color: ${colors.purple500}; }
            &:nth-of-type(4) { color: ${colors.green500}; }
            &:nth-of-type(5) { color: ${colors.teal500}; }

            &:hover {
                cursor: pointer;
                transition: all 100ms ease-in-out;

                &:nth-of-type(1) { color: ${colors.blue600};    background-color: ${colors.blue200};}
                &:nth-of-type(2) { color: ${colors.orange600};  background-color: ${colors.orange200};}
                &:nth-of-type(3) { color: ${colors.purple600};  background-color: ${colors.purple200};}
                &:nth-of-type(4) { color: ${colors.green600};   background-color: ${colors.green200};}
                &:nth-of-type(5) { color: ${colors.teal600};    background-color: ${colors.teal200};}

            }
        }
    }
`

const Section = styled("div")`
    margin-bottom: 10em;
    display: flex;
    flex-direction: column;

    @media(max-width:${dimensions.maxwidthTablet}px) {
        margin-bottom: 4em;
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`

const WorkAction = styled(Link)`
    font-weight: 600;
    text-decoration: none;
    color: currentColor;
    transition: all 150ms ease-in-out;
    margin-left: auto;

    @media(max-width:${dimensions.maxwidthTablet}px) {
       margin: 0 auto;
    }

    span {
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        transition: transform 400ms ease-in-out;
    }

    &:hover {
        color: ${colors.green500};
        transition: all 150ms ease-in-out;

        span {
            transform: translateX(0px);
            opacity: 1;
            transition: transform 150ms ease-in-out;
        }
    }
`
const LinkButton = styled("a")`
text-decoration: none;
padding: 1em 2em;
background: ${colors.green500};
font-weight: 600;
color: ${colors.grey900};
outline: none;
border: none;
font-size: 1rem;
border-radius: 2px;
position: relative;
transition: background 100ms ease-in-out;

@media(max-width:${dimensions.maxwidthMobile}px) {
    padding: 0.8em 1.8em;
    font-size: 1em;
}

&:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${colors.green600};
    z-index: -1;
}

&:hover {
    cursor: pointer;
    background: transparent;
    transition: background 100ms ease-in-out;
}
`

const RenderBody = ({ home, projects, meta }) => (
    <>
        <Helmet
            title={meta.title}
            //titleTemplate={`%s | ${meta.title}`}
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: meta.title,
                },
                {
                    property: `og:description`,
                    content: meta.description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: meta.author,
                },
                {
                    name: `twitter:title`,
                    content: meta.title,
                },
                {
                    name: `twitter:description`,
                    content: meta.description,
                },
            ].concat(meta)}
        />
        <Hero>
            <>
            <h1>Hello, my name is <span style={{color: colors.green500}}>Graeme Fraser</span>. I am a <span style={{color: colors.green500}}>computer programmer analyst.</span></h1>
                {/* {RichText.render(home.hero_title)} */}
            </>
            <a href={home.hero_button_link.url} style={{textDecoration: 'none'}}
               target="_blank" rel="noopener noreferrer">
                   <LinkButton href="#About">About Me</LinkButton>
                {/* <Button>
                    {RichText.render(home.hero_button_text)}
                </Button> */}
            </a>
        </Hero>
        <Section>
            {projects.map((project, i) => (
                <ProjectCard
                    key={i}
                    category={project.node.project_category}
                    title={project.node.project_title}
                    description={project.node.project_preview_description}
                    thumbnail={project.node.project_preview_thumbnail}
                    uid={project.node._meta.uid}
                />
            ))}
            <WorkAction to={"/work"}>
                See more work <span>&#8594;</span>
            </WorkAction>
        </Section>
        <Section id="About">
            <span style={{color: colors.green500}}>{RichText.render(home.about_title)}</span>
            <About
                bio={home.about_bio}
                socialLinks={home.about_links}
            />
        </Section>
    </>
);

export default ({ data }) => {
    //Required check for no data being returned
    const doc = data.prismic.allHomepages.edges.slice(0, 1).pop();
    const projects = data.prismic.allProjects.edges;
    const meta = data.site.siteMetadata;

    if (!doc || !projects) return null;

    return (
        <Layout>
            <RenderBody home={doc.node} projects={projects} meta={meta}/>
        </Layout>
    )
}

RenderBody.propTypes = {
    home: PropTypes.object.isRequired,
    projects: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
};

export const query = graphql`
    {
        prismic {
            allHomepages {
                edges {
                    node {
                        hero_title
                        hero_button_text
                        hero_button_link {
                            ... on PRISMIC__ExternalLink {
                                _linkType
                                url
                            }
                        }
                        content
                        about_title
                        about_bio
                        about_links {
                            about_link
                        }
                    }
                }
            }
            allProjects {
                edges {
                    node {
                        project_title
                        project_preview_description
                        project_preview_thumbnail
                        project_category
                        project_post_date
                        _meta {
                            uid
                        }
                    }
                }
            }
        }
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`