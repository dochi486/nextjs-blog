import { Col, Row } from 'antd';

export default function BlogHeadline() {
  return (
    <Row
      align="middle"
      style={{
        height: 400,
        textAlign: 'center',
      }}
    >
      <Col
        span={24}
        style={{
          fontSize: 45,
          fontWeight: 'bold',
        }}
      >
        <h1>Dochi's Blog</h1>
        <p
          style={{
            fontSize: 17,
          }}
        >
          게임 클라이언트 개발에서 웹 프론트-엔드 개발로 전향 중인 개발자입니다.
          React.js와 Next.js를 사용하여 만든 블로그이며, 현재 TypeScript를
          공부하고 있습니다.
          <br />
          기술 스택: Unity, C#, C++, JavaScript, React, Next.js, TypeScript
        </p>
      </Col>
    </Row>
  );
}
