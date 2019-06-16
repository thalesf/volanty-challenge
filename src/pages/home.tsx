import React from 'react';
import Header from '../components/block/header'
import Content from './style';

class Home extends React.Component<{}, {}> {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <Content>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate error dolorem tempore inventore ipsa, explicabo enim. Rerum officia asperiores dolor voluptatum odio repellat labore sapiente debitis consectetur nostrum, numquam at!</p>
        </Content>
      </div>
    )
  }
}
export default Home;