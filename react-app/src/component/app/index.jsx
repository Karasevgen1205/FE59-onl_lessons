import React from 'react'
import { Title } from '../title/index.jsx'
import { Menu } from '../menu/index.jsx'
import { Alert } from '../alert/index.jsx'
import './styles.scss'
export const App = () => {
  return (
    <div class="wrapper">
      <Title title="Hello World" />
      <Menu isOpen={true} />
      <Menu isOpen={false} />
      <Alert status="success" />
      <Alert status="error" />
      <Alert status="warning" />
      <Alert status="info" />
    </div>
  )
}
