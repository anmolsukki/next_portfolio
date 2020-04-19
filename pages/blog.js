import Layout from "../Components/Layout";
import Link from "next/link";

const PostLink = ({title, slug}) => (
    <li>
        <Link as={`/${slug}`} href={`/post?title=${title}`}>
            <a>{title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout Title="Blog">
        <ul>
            <PostLink slug="react-post" title="React Js" />
            <PostLink slug="next-post" title="Next Js" />
            <PostLink slug="native-post" title="React Native" />
        </ul>
    </Layout>
)