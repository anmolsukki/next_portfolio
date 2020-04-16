import Link from "next/link";
import Layout from "../Components/Layout";

const Index = () => (
  <Layout title="Home">
    <Link href="/about"><a>Go to About</a></Link>
    <p>Welcome to Homepage</p>
  </Layout>
)

export default Index;
