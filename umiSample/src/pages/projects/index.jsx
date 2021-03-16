import React from 'react';
import { Card, Col, Row, Input, Space, Image } from 'antd';
import projectNew from '../../assets/images/projects/new.png';
const index = (props) => {
  const { Meta } = Card;
  const { Search } = Input;
  return (
    <div>
      <Space direction="vertical">
        <label
          style={{
            'font-size': '16px',
            color: '#414f6e'
          }}
        >
          新建
        </label>
        <Card
          hoverable
          style={{ width: 300, 'box-shadow': '1px 1px 1px #C0C0C0' }}
          bodyStyle={{ textAlign: 'center' }}
          cover={<Image src={projectNew} />}
        >
          新建流程项目
        </Card>
        <label style={{ 'font-size': '16px', color: '#414f6e' }}>全部</label>
        <Search placeholder="搜索" style={{ width: 300 }} />{' '}
      </Space>
      <div className="site-card-wrapper">
        <Row gutter={12}>
          <Col span={4}>
            <Card
              style={{ width: 300, 'box-shadow': '1px 1px 1px #C0C0C0' }}
              actions={[<label>编辑</label>, <label>删除</label>]}
            >
              <Meta title="项目名称A" description="上次更新时间：2021/3/5" />
              这是一段描述信息信息信息......
            </Card>
          </Col>
          <Col span={4}>
            <Card
              style={{ width: 300, 'box-shadow': '1px 1px 1px #C0C0C0' }}
              actions={[<label>编辑</label>, <label>删除</label>]}
            >
              <Meta title="项目名称A" description="上次更新时间：2021/3/5" />
              这是一段描述信息信息信息......
            </Card>
          </Col>
          <Col span={4}>
            <Card
              style={{ width: 300, 'box-shadow': '1px 1px 1px #C0C0C0' }}
              actions={[<label>编辑</label>, <label>删除</label>]}
            >
              <Meta title="项目名称A" description="上次更新时间：2021/3/5" />
              这是一段描述信息信息信息......
            </Card>
          </Col>
          <Col span={4}>
            <Card
              style={{ width: 300, 'box-shadow': '1px 1px 1px #C0C0C0' }}
              actions={[<label>编辑</label>, <label>删除</label>]}
            >
              <Meta title="项目名称A" description="上次更新时间：2021/3/5" />
              这是一段描述信息信息信息......
            </Card>
          </Col>
          <Col span={4}>
            <Card
              style={{ width: 300, 'box-shadow': '1px 1px 1px #C0C0C0' }}
              actions={[<label>编辑</label>, <label>删除</label>]}
            >
              <Meta title="项目名称A" description="上次更新时间：2021/3/5" />
              这是一段描述信息信息信息......
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default index;
