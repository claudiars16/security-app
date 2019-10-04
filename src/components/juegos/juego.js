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
    }}>PRINCIPIANTE</Link>
          </CustomButton></Col>
          <Col span={6}><CustomButton>
      <Link to={{
      pathname: "/quiz",
      state: { totalQuestions: 5 }
    }}>INTERMEDIO</Link>
          </CustomButton></Col>
          <Col span={6}><CustomButton>
      <Link to={{
      pathname: "/quiz",
      state: { totalQuestions: 5 }
    }}>AVANZADO</Link>
          </CustomButton></Col>
    </Row>
    <br></br>
    <Row type="flex" justify="space-around" align="center">
      <Col span={6}>
     <img  class="nivel" src="https://comps.canstockphoto.es/sello-de-goma-principiante-eps-vectorial_csp43239482.jpg">
     </img>
     </Col>
     <Col span={6}>
     <img  class="nivel" src="http://seekvectorlogo.com/wp-content/uploads/2018/01/medium-vector-logo-small.png">
     </img>
     </Col>
     <Col span={6}>
     <img  class="nivel" src="https://previews.123rf.com/images/carmendorin/carmendorin1306/carmendorin130600104/20593510-grunge-rubber-stamp-with-word-advanced-inside.jpg">
     </img>
     </Col>
    </Row>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Juego);