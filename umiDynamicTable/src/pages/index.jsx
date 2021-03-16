import { Card, Col, Row } from 'antd';

export default function IndexPage() {
  let lists = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'kk', 'ii'];
  let array = [];
  lists.forEach((element) => {
    array.push(
      <Col span={4}>
        <Card title={element} bordered={false}>
          {element}
        </Card>
      </Col>,
    );
  });
  return (
    <div className="site-card-wrapper">
      <Row gutter={{ xs: 8, sm: 16, md: 24 }}>{array}</Row>
    </div>
  );
}
