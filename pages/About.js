import Link from "next/link";
import Layout from "../Components/Layout"

const About = () => (
    <Layout title="About">
      <Link href="/"><a>Go to Homepage</a></Link>
      <p>Welcome to AboutPage</p>
      <img src="/static/model.jpg" alt="img" height="200px" />
    </Layout>
  )
  
  export default About;
  