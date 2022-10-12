import SanityClient from '@sanity/client';

export default function PostAll({ slug }) {
  return (
    <div>
      <h1>Post: {slug}</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const client = SanityClient({
    dataset: 'production',
    projectId: 'ozc58i66',
    useCdn: process.env.NODE_ENV === 'production',
  });

  const posts = await client.fetch(`
  *[_type == 'post']{
    title,
    subtitle,
    createdAt,
    'content' : content[]{
      ..., 
      ...select(_type == 'imageGallery' => {'image' :images[]{..., 'ur;': asset-> url} })
    },
    'slug': slug.current,
    'thumbnail' : {
      'alt': thumbnail.alt,
      'imageUrl':thumbnail.asset -> url
    },
    'author' : author -> {
      name,
      role,
      'image' : image.asset -> url
    },
  }`);

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

export function getStaticProps({ params }) {
  const { slug } = params;
  return {
    props: {
      slug,
    },
  };
}
