import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>{/*Fragment para nao gerar divs desnecessarias*/}
    <SEO title={'about'} />
    <h1>About Page</h1>
  </Layout>
);

export default AboutPage;