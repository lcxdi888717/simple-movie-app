import { Layout } from 'antd';
import React, { Component } from 'react';

import { LeftSider, MoviesList } from './views';

const { Sider, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Sider width={300} breakpoint="lg" collapsedWidth="0">
          <LeftSider />
        </Sider>
        <Layout>
          <Content>
            <MoviesList />
          </Content>
          <Footer>
            Copyright © 2018 Simple Movie App, All Rights Reserved
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
