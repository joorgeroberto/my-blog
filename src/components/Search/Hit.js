import React from 'react'
import PostItem from "../PostItem"

const Hit = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    category={hit.category}
    background={hit.background}
    title={hit.title}
    description={hit.description}
    date={hit.date}
  />
)

export default Hit;