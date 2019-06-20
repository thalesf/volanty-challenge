import React from 'react';
import Header from '../components/block/header'
import Form from '../components/block/form';
import Content from './style';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Content>
        <Form />
      </Content>
    </>
  )
}
export default Home;