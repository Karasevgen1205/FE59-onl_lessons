import React from 'react';
import styles from './index.css'
import {Title} from '../title'
import { Menu } from '../menu'

export const App = () => {
  return (
    <>
    <Title/>
    <Menu isOpen={true}/>
    <Menu isOpen={false}/>
    </>
  );
}