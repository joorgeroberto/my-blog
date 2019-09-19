import React from 'react'
import {useStaticQuery, graphql} from 'gatsby';
import * as S from './styled';

const Avatar = () => {
  const {avatarImage} = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: {eq: "profile-photo.jpg"}) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }  
        }
      }
    `
  )

  return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} style={{width: 60, height: 60}} className='Image' />
}

export default Avatar;