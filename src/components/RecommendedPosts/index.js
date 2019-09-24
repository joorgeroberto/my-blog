import React from "react"
import propTypes from "prop-types"

import * as S from "./styled"

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {/*Se o post anterior existir*/}
    {previous &&
      <S.RecommendedLink to={previous.fields.slug} className={"previous"}>
        {previous.frontmatter.title}
      </S.RecommendedLink>
    }
    {/*Se o próximo post existir*/}
    {next &&
      <S.RecommendedLink to={next.fields.slug} className={"next"}>
        {next.frontmatter.title}
      </S.RecommendedLink>
    }
  </S.RecommendedWrapper>
)

RecommendedPosts.protoTypes = {
  // Usa shape pois next e previous são "objetos com mais informações dentro"
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    })
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    })
  })
}
export default RecommendedPosts;