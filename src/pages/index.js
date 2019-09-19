import React from "react"
import {Link} from 'gatsby';

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
        slug="/slug/"
        background="red"
        category="Misc"
        date="30 de julho de 2019"
        timeToRead="5"
        title="Diga não ao Medium: tenha sua própria plataforma"
        description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium"
    />
    <PostItem
        slug="/slug/"
        background="blue"
        category="Misc"
        date="30 de julho de 2019"
        timeToRead="5"
        title="Diga não ao Medium: tenha sua própria plataforma"
        description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium"
    />
    <PostItem
        slug="/slug/"
        background="yellow"
        category="Misc"
        date="30 de julho de 2019"
        timeToRead="5"
        title="Diga não ao Medium: tenha sua própria plataforma"
        description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium"
    />
  </Layout>
)

export default IndexPage
