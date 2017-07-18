import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import PhotoList from './components/PhotoList';
import UserPage from './components/UserPage';
import PhotoCreate from './components/PhotoCreate';
import ThemePage from './components/ThemePage';
import InspirationPage from './components/InspirationPage';
import Example from './components/Example';
// import CameraRolls from './components/CameraRolls';
// import ImageBrowser from './components/ImageBrowser';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth"
        navigationBarStyle={styles.navigationBar} titleStyle={styles.navbarTitle}
      >
        <Scene key="login" component={LoginForm} title="PHOTO52" initial />
      </Scene>
      <Scene key="main" navigationBarStyle={styles.navigationBar} titleStyle={styles.navbarTitle}>
        <Scene
        key="userPage"
        component={UserPage}
        title="PHOTO52" initial
        onRight={() => Actions.photoCreate()}
        rightTitle="+"
        />
        <Scene key="photoCreate" component={PhotoCreate} title="Create Photo" />
        <Scene
          key="photoList" component={PhotoList} title="Photoroll"
          onLeft={() => Actions.userPage()}
          leftTitle="User Page"
          onRight={() => Actions.photoCreate()}
          rightTitle="+"
        />
        <Scene
          key="themePage" component={ThemePage} title="THEME PAGE"
          onLeft={() => Actions.userPage()}
          leftTitle="User Page"
          onRight={() => Actions.photoCreate()}
          rightTitle="+"
        />
        <Scene
          key="inspirationPage" component={InspirationPage} title="INSPIRATION PAGE"
          onLeft={() => Actions.userPage()}
          leftTitle="User Page"
          onRight={() => Actions.photoCreate()}
          rightTitle="+"
        />
        <Scene
          key="example" component={Example}
          title="Example"
        />
      </Scene>
    </Router>
  );
};

const styles = {
  navigationBar: {
    backgroundColor: 'black',
    // color: 'white'
  },
  navbarTitle: {
    color: 'white',
    fontFamily: 'Avenir-Light',
    letterSpacing: 2
  }
};

export default RouterComponent;


// <Scene
//   onRight={() => Actions.photoCreate()}
//   rightTitle="Add"
//   key="photoList" component={PhotoList} title="Photos"
//   initial
// />
// <Scene key="photoCreate" component={PhotoCreate} title="Create Photo" />
