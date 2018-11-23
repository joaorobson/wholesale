import React from 'react'
import {
  Container,
  Card,
  Input,
  Icon,
  Dropdown,
  Image,
  Menu,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'  


const MyMenu = () => (
  <Menu borderless size='massive' fixed='top' inverted>
      <Container>
        <Menu.Item >
          wholesale
        </Menu.Item>

        <Menu.Item position="right"><Icon inverted circular size="large"  name='truck' /></Menu.Item>
        <Menu.Item ><Icon inverted circular size="large"  name='user' /></Menu.Item>

        <Dropdown item simple icon={<Icon inverted circular size="large"  name='sidebar' />}>
          <Dropdown.Menu style={{ 'left': 'auto', 'right': 0 }}>
            <Dropdown.Item>Novo produto</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Minhas compras</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Minhas vendas</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item as='a' href='/'>Sair</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
)

export default MyMenu;
