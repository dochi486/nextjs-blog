import styles from '../styles/Home.module.css';
import SanityClient from '@sanity/client';

export default function Home({ home, posts }) {
  console.log(posts);
  return (
    <div className={styles.container}>
      <h1>Sanity Blog Home</h1>
    </div>
  );
}

export async function getStaticProps() {
  const client = SanityClient({
    dataset: 'production',
    projectId: 'ozc58i66',
    useCdn: process.env.NODE_ENV === 'production',
  });

  const home = await client.fetch(
    `*[_type == 'home'][0]{'mainPostUrl': mainPost -> slug.current}`
  );

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

  return {
    props: {
      home,
      posts,
    },
  };
}
