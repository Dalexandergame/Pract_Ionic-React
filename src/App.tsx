import React, { Component } from 'react'
import {
  IonApp, IonPage, IonSplitPane, IonRouterOutlet
} from '@ionic/react';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Support from './components/Support';
import Extras from './components/Extras';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <IonApp>
          <IonSplitPane contentId="main">
            <Menu />
            <IonPage id="main">
              <IonRouterOutlet>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/support" component={Support} />
                <Route exact path="/extras" component={Extras} />
              </IonRouterOutlet>
            </IonPage>
          </IonSplitPane>
        </IonApp>
      </BrowserRouter>  
    );
  }
}

export default App;