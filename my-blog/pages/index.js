import styles from '../styles/Home.module.css';
import SanityService from '../services/SanityService';
import { Col, Row } from 'antd';
import Link from 'next/link';
import { CodeOutlined } from '@ant-design/icons';

export default function Home({ home, posts }) {
  console.log(posts);

  const mainPost = posts.find((p) => p.slug === home.mainPostUrl);
  const otherPost = posts.filter((p) => p.slug !== home.mainPostUrl);

  return (
    <div className={styles.container}>
      <Row
        align="middle"
        style={{
          height: 64,
        }}
      >
        <Col span={24}>
          <Link href="/"></Link>
          <a>
            <div
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              <CodeOutlined /> My Blog
            </div>
          </a>
        </Col>
      </Row>
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
