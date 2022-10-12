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
          fontSize: 70,
          fontWeight: 'bold',
        }}
      >
        <h1>도치의 블로그</h1>
        <p
          style={{
            fontSize: 24,
          }}
        >
          게임 클라이언트 개발자에서 웹 프론트엔드 개발자로 전향하는 중인
          개발자입니다.
        </p>
      </Col>
    </Row>
  );
}
