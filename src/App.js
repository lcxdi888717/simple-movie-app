import { Layout } from "antd";
import React, { Component } from "react";

import { LeftSider } from "./views";

const { Sider, Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Sider width={300} breakpoint="lg" collapsedWidth="0">
          <LeftSider />
        </Sider>
        <Layout>
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
