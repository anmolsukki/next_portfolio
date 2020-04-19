import { Component } from "react";
import Layout from "../Components/Layout";
import Error from "./_error";
import fetch from "isomorphic-unfetch";

class About extends Component {

  state = {
    user: null
  }

  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/anmolsukki")
    const statusCode = res.status > 200 ? res.status : false
    const data = await res.json();
    return { user: data, statusCode }
  }

  render () {
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />
    }
    return (
      <Layout title="About">
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="me" height="200px" />
        <img src="/static/model.jpg" alt="img" height="200px" />
      </Layout>
    )
  }
}
  
export default About;
