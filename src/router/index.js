import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import routeData from 'common/const/route';
import Page404 from 'pages/404';
import Layout from 'components/layout';

export default class Routers extends React.Component {

  componentDidMount() {
  }

  // render() {
  //   return (
  //     <div>
  //       Routers
  //     </div>
  //   );
  //
  render() {
    return (
      <div>
        <Router>
          <Layout>
            <Switch>
              {
                routeData.map(item => {
                  const props = {
                    key: `route_${item.key}`,
                    path: item.path,
                    component: item.component,
                    exact: true,
                  };
                  return (
                    <Route {...props}/>
                  );
                })
              }
              <Route component={Page404}/>
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}
