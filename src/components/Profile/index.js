import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Avatar from '../Avatar'

const Profile = ()=> {
  const {
    site: {siteMetadata: {author, position, description, title}}
  } = useStaticQuery(graphql `query MySiteMetaData {
      site {
        siteMetadata {
          author,
          position,
          description,
          title
        }}
      }`)

  return(
    <div className="Profile-wrapper">
      <Avatar />
      <h1>{title}</h1>
      <h2>{position}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Profile;