import styles from '../styles/Home.module.css';
import SanityService from '../services/SanityService';
import Header from '../components/Header';
import BlogHeadline from '../components/BlogHeadline';
import BlogMainPost from '../components/BlogMainPost';
import BlogList from '../components/BlogList';

export default function Home({ home, posts }) {
  console.log(posts);

  const mainPost = posts.find((p) => p.slug === home.mainPostUrl);
  const otherPost = posts.filter((p) => p.slug !== home.mainPostUrl);

  return (
    <div className={styles.container}>
      <Header />
      <BlogHeadline />
      <BlogMainPost {...mainPost} />
      <BlogList posts={otherPost} />
    </div>
  );
}

export async function getStaticProps() {
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
