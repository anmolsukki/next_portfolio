import Layout from "../Components/Layout";
import { withRouter } from "next/router";

const Post = ({router}) => (
    <Layout title={router.query.title}>
        <p style={{width: "80vw"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae animi quaerat, suscipit itaque possimus vitae molestias in perferendis. Explicabo dicta fuga sint velit voluptates! Minima nisi maxime voluptate nulla sequi.</p>
    </Layout>
)

export default withRouter(Post);
