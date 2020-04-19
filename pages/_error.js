import Layout from "../Components/Layout";

export default ({statusCode}) => (
    <Layout title="Error!!!!">
        {statusCode ? `Could not load your user data: status code ${statusCode}` : `Couldn't get that page, Sorry!`}
    </Layout>
)