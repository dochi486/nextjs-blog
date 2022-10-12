import styles from '../styles/Home.module.css';
import SanityService from '../services/SanityService';

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

  const sanityService = new SanityService();
  const home = await sanityService.getHome();
  const posts = await sanityService.getPosts();

  return {
    props: {
      home,
      posts,
    },
  };
}
