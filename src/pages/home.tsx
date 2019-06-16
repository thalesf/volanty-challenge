import React from 'react';
import Header from '../components/block/header'
import Form from '../components/block/form';
import Content from './style';

class Home extends React.Component<{}, {}> {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <Content>
          <Form />
        </Content>
      </div>
    )
  }
}
export default Home;