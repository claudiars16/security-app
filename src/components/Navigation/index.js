import React from 'react';
import { Link } from 'react-router-dom';
import { Menu} from 'antd';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="horizontal">
    <Menu.Item key="1"><Link to={ROUTES.LANDING}>Landing</Link></Menu.Item>
    <Menu.Item key="2"><Link to={ROUTES.HOME}>Home</Link></Menu.Item>
    <Menu.Item key="3"><Link to={ROUTES.ACCOUNT}>Cuenta</Link></Menu.Item>
    <Menu.Item key="4">      <Link to={{
      pathname: "/quiz",
      state: { totalQuestions: 5 }
    }}>QuizGame</Link>
    </Menu.Item>
     <Menu.Item key="5"><SignOutButton /></Menu.Item>
     </Menu>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;