import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Home from './layout/home/home';
import Buttonsandbox from './components/button/Buttonsandbox';
import ButtonGroupsandbox from './components/ButtonGroup/ButtonGroupsandbox';
import Iconsandbox from './components/icon/Iconsandbox';
import Imagesandbox from './components/image/Imagesandbox';
import Chipsandbox from './components/chip/Chipsandbox';
import Badgesandbox from './components/badge/Badgesandbox';
import ListGroupsandbox from './components/listgroup/ListGroupsandbox';
import Inputsandbox from './components/input/Inputsandbox';
import TabBarsandbox from './components/tabbar/TabBarsandbox';
import Tooltipsandbox from './components/tooltip/Tooltipsandbox';
import Modalsandbox from './components/modal/Modalsandbox';

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/button" component={Buttonsandbox} />
          <Route path="/buttongroup" component={ButtonGroupsandbox} />
          <Route path="/icon" component={Iconsandbox} />
          <Route path="/image" component={Imagesandbox} />
          <Route path="/chip" component={Chipsandbox} />
          <Route path="/badge" component={Badgesandbox} />
          <Route path="/listgroup" component={ListGroupsandbox}/>
          <Route path="/input" component={Inputsandbox}/>
          <Route path="/tabbar" component={TabBarsandbox}/>
          <Route path="/tooltip" component={Tooltipsandbox}/>
          <Route path="/modal" component={Modalsandbox}/>
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
