import React from 'react'
// import { Link } from 'gatsby'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section
      className="page--index"
      style={{
        alignSelf: `flex-end`,
      }}
    >
      <h1>Hello!</h1>

      <h1>Let's build something great. 😉</h1>
      <h2 style={{margin: `30px 0 8px`}}>
        I'm a programmer of 5 years specialized in web applications and static websites.
      </h2>
      <h3>I'm currently based in Dubai, United Arab Emirates.</h3>
      <h3>
        I love cooking meals that remind you of home. Read my recipes here.
      </h3>
      <h3 style={{marginBottom: `1rem`}}>
        I'm currently reading <Link to="https://www.goodreads.com/book/show/119389.Windmills_of_the_Gods"><i>Windmills of the Gods, by Sidney Sheldon</i></Link>. 
      </h3>
      <h3>My favorite though, is <Link to="https://www.goodreads.com/book/show/7126.The_Count_of_Monte_Cristo?ac=1&from_search=true"><i>The Count of Monte Cristo</i></Link>. :)</h3>
    </section>
  </Layout>
)

export default IndexPage
