import React from 'react'
import {useStaticQuery, graphql} from 'gatsby';
import * as S from './styled';

const Avatar = () => {
  const {avatarImage} = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: {eq: "profile-photo.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 60) {
              ...GatsbyImageSharpFluid
            }
          }  
        }
      }
    `
  )

  return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} style={{width: 60, height: 60}} className='Image' />
}

export default Avatar;