import React, { Suspense } from 'react';
import { Switch, Route } from "react-router-dom";
import Auth from 'hoc/auth';
// pages for this product
import MainPage from 'components/MainPage';
import LoginPage from 'components/LoginPage';
import RegisterPage from 'components/RegisterPage';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import UploadBookPage from 'components/UploadBookPage';
import Test from 'components/Test';

function App() {
  return (
      <Suspense fallback={(<div>Loading...</div>)}>
        <NavBar />
        <div style={{display: 'flex', paddingTop: '3.5rem', minHeight: 'calc(100vh - 80px'}}>
          <Switch>
            <Route exact path="/" component={Auth(MainPage, null, true)}/>
            <Route exact path="/login" component={Auth(LoginPage, false)}/>
            <Route exact path="/register" component={Auth(RegisterPage, false)}/>
            <Route exact path="/book/upload" component={Auth(UploadBookPage, true)}/>
            <Route exact path="/test" component={Auth(Test, true)}/>
          </Switch>
        </div>
        <Footer />
      </Suspense>
  );
}

export default App;
