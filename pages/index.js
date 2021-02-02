import { GraphQLClient } from "graphql-request";
import Link from 'next/link'

export async function getStaticProps(){
  const graphcms = new GraphQLClient('https://api-ap-northeast-1.graphcms.com/v2/ckknszydgikck01xo9xs8597z/master');

  const { posts } = await graphcms.request(
    `{
      posts {
        slug
        title
      }
    }
    `
  );
  return {
    props: {
      posts
    }
  }
}

// export default function index({posts}){
//   return(
//     <ul>
//       {posts.map((post, i) =>(
//         <Link key={i} href={`/posts/${post.slug}`}>
//           <a>{post.title}</a>
//         </Link>
//       ))}
//     </ul>
//   )
// }

export default ({posts}) =>
  posts.map(({ slug, title }) => (
    <div key={slug}>
      <Link key={slug} href={`/posts/${slug}`}>
        <a style={{ textDecoration: 'underline'}}>{title}</a>
      </Link>
      <br />
    </div>
));

