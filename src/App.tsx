import React, { Suspense } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import Staggered from './component/staggered/staggered';
import CyberPunk from './component/cyber-punk/cyber-punk';
import NotFound from './component/not-found';
import MyNavLink from './component/myNavLink';
import CD from './component/cd';
import Captcha from './component/captcha';
import AppleA13 from './component/apple-a13';
import IphoneSE from './component/iphone-se';
const routes = [
  {
    path: "/",
    redirect: '/staggered',
  },
  {
    path:'/staggered',
    component: Staggered
  },
  {
    path:'/cyber-punk',
    component:CyberPunk
  },
  {
    path:'/CD',
    component:CD
  },
  {
    path:'/captcha',
    component:Captcha
  },
  {
    path:'/apple-a13',
    component:AppleA13
  },
  {
    path:'/iphone-se',
    component:IphoneSE
  }

]

const RouteWithSubRoutes = (route:any) => {
  if (!route.path) return <Route component={NotFound} />
  return (<Route
      exact strict
      path={route.path}
      render={props => (
          route.redirect ?
              <Redirect push to={route.redirect} from={route.path}></Redirect> :
              <route.component {...props} routes={route.routes} />
      )}
  />)
}
function App() {
  const linkList = routes.map((l,i)=>
    (
      l.redirect?null:
      <MyNavLink key={i} to={l.path}>{l.path.replace('/','')}</MyNavLink>)
    )
  return (
      <Router>
        <div className="App">
          <div className="left">
              {linkList}
          </div>
          <div className="right">
          <Suspense fallback={<div>Loading...</div>}>
                    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
          </Suspense>
          </div>

        </div>
      </Router>

  );
}

export default App;
