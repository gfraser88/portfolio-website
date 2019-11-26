import React, { useState } from 'react';
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "@emotion/styled";
import colors from "styles/colors";
import { Link, graphql } from 'gatsby';
import { RichText } from "prismic-reactjs";
import Button from "components/_ui/Button";
import Layout from "components/Layout";
import ReactModal from 'react-modal';
import {FaTimes} from 'react-icons/fa'
//import Img from 'gatsby-image';

const ProjectHeroContainer = styled("div")`
    background: ${colors.grey900};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    padding: 1em;
    margin-bottom: 3.5em;

    .topSquare {
        position: absolute;
        background: ${colors.green300};
        height: 200px;
        width: 200px;
        right: 0;
        bottom: 0;
        z-index: 0;
    }

    .bottomSquare {
        position: absolute;
        background: ${colors.green300};
        height: 200px;
        width: 200px;
        left: 0;
        top: 0;
        z-index: 0;

    }

    img {
        width: 100%;
        height: 100%;
        max-width: 940px;
        z-index: 0;
        cursor: pointer;
    }
`

const ProjectTitle = styled("div") `
    max-width: 550px;
    margin: 0 auto;
    text-align: center;
`
//max-width: 550px;
const ProjectBody = styled("div")`
    max-width: 1000px;
    margin: 0 auto;
    .block-img {
        margin-top: 3.5em;
        margin-bottom: 0.5em;

        img {
            width: 100%;
        }

        img:active {
            transform: scale(1.5, 1.5);
        }
    }
    a {
        text-decoration: none;
        color:${colors.green500};
    }
`

const WorkLink = styled(Link)`
    margin-top: 3em;
    display: block;
    text-align: center;
`

const ProjectCategory = styled("div")`
color:${colors.green500};
font-size: 25px;
max-width: 1000px;
margin: 0 auto;
text-align: center;
padding-bottom: 20px;
`

const customStyles = {
    content : {
        position: 'relative',
      zIndex: 1000
    }
  };
  

const Project = ({ project, meta }) => {

const [isShown, setIsShown] = useState(false);

const hide = () => setIsShown(false);
const show = () => setIsShown(true);
    // Get the modal
// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// function imgClick() {
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// function spanClick() {
//   modal.style.display = "none";
// }



    return (
        <>
            <Helmet
                title={`${project.project_title[0].text}`}
                titleTemplate={`%s | ${meta.title}`}
                meta={[
                    {
                        name: `description`,
                        content: meta.description,
                    },
                    {
                        property: `og:title`,
                        content: `${project.project_title[0].text}`,
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
            <Layout>
                <ProjectTitle>
                    {RichText.render(project.project_title)}
                </ProjectTitle>
                <ProjectCategory>{project.project_category[0].text.split(",").map((items, i, arr) => (
                    <span>{arr.length - 1 == i ? items : items + ", "}</span>
                ))}</ProjectCategory>
                {project.project_hero_image && (
                    <ProjectHeroContainer>                       
                         
                         <div class="topSquare"></div>
                        <div class="bottomSquare"></div>
                        <img src={project.project_hero_image.url} alt="Picture of project" id="myImg" onClick={show} />
                    </ProjectHeroContainer>
                )}
                
                <ProjectBody>
                    {RichText.render(project.project_description)}
                    <WorkLink to={"/work"}>
                        <Button className="Button--secondary">
                            See other work
                        </Button>
                    </WorkLink>
                </ProjectBody>
                <ReactModal isOpen={isShown} onRequestClose={hide} id="imgModal" class="modal" style={{customStyles}}>
                <div style={{textAlign: 'center'}}>
                    <div style={{textAlign: "right"}}><FaTimes style={{color: colors.grey900, cursor: 'pointer'}} onClick={hide}/></div>
                    <img style={{maxHeight: '750px', width: '100%', objectFit: 'contain'}} src={project.project_hero_image.url}/>
                </div>
                </ReactModal>
            </Layout>
        </>
    )
}

export default ({ data }) => {
    const projectContent = data.prismic.allProjects.edges[0].node;
    const meta = data.site.siteMetadata;
    return (
        <Project project={projectContent} meta={meta}/>
    )
}

Project.propTypes = {
    project: PropTypes.object.isRequired,
};

export const query = graphql`
    query ProjectQuery($uid: String) {
        prismic {
            allProjects(uid: $uid) {
                edges {
                    node {
                        project_title
                        project_preview_description
                        project_preview_thumbnail
                        project_category
                        project_post_date
                        project_hero_image
                        project_description
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