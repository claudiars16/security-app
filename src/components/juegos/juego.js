import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { withAuthorization } from '../Session';
import CustomButton from '../custom-button/custom-button.component'
const Juego = () => (
  <div>
      <h1>PHISING</h1>
    <Row type="flex" justify="space-around" align="middle">
      <Col span={6}><CustomButton>
      <Link to={{
      pathname: "/quiz",
      state: { totalQuestions: 5 }
    }}>Modulo01</Link>
          </CustomButton></Col>
          <Col span={6}><CustomButton>
      <Link to={{
      pathname: "/quiz",
      state: { totalQuestions: 5 }
    }}>Modulo02</Link>
          </CustomButton></Col>
          <Col span={6}><CustomButton>
      <Link to={{
      pathname: "/quiz",
      state: { totalQuestions: 5 }
    }}>Modulo03</Link>
          </CustomButton></Col>
    </Row>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Juego);