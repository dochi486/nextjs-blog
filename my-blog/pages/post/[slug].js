import SanityService from '../../services/SanityService';

export default function PostAll({ slug, post }) {
  return (
    <div>
      <h1>Post: {slug}</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await new SanityService().getPosts();

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const posts = await new SanityService().getPosts();

  const post = posts.find((post) => post.slug === slug);

  return {
    props: {
      slug,
      post,
    },
  };
}
