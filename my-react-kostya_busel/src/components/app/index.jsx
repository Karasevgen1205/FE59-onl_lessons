import React, {useState} from 'react';
import styles from './index.css'
import { Title } from '../title'
import { Menu } from '../menu'
import { Modal } from '../modal';

export const App = () => {
  return (
    <>
    {/* <Title/> */}
    {/* <Menu isOpen={true}/> */}
    {/* <Menu isOpen={false}/> */}
    <Modal/>
    </>
  );
}