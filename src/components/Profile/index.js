import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Avatar from '../Avatar'
import * as S from './styled';

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
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile;