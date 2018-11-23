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

const Categories = () => (
  <div>
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
            <Dropdown.Item>Sair</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

    <Container style={{ marginTop: '7em' }}>
      <Card.Group itemsPerRow={3} textAlign='center'>

        <Link to='/product_1' >
          <Card style={{'boxShadow':'none'}}>
            <Image centered src='https://react.semantic-ui.com/images/wireframe/white-image.png' size='small' />
            <Card.Content style={{'borderTop':'none'}}>
              <Card.Header  textAlign='center'>Brinquedos</Card.Header>
            </Card.Content>
          </Card>
        </Link>

        <Link to='/product_1' >
          <Card style={{'boxShadow':'none'}}>
            <Image centered src='https://react.semantic-ui.com/images/wireframe/white-image.png' size='small' />
            <Card.Content style={{'borderTop':'none'}}>
              <Card.Header textAlign='center'>Eletrônicos</Card.Header>
            </Card.Content>
          </Card>
        </Link>

        <Link to='/product_1' >
          <Card style={{'boxShadow':'none'}}>
            <Image centered src='https://react.semantic-ui.com/images/wireframe/white-image.png' size='small' />
            <Card.Content style={{'borderTop':'none'}}>
              <Card.Header textAlign='center'>Livros</Card.Header>
            </Card.Content>
          </Card>
        </Link>
        

      </Card.Group>
    </Container>
    
    <Container style={{ marginTop: '7em' }} textAlign='center'>
      <Input icon='search' size='massive' placeholder='Digite o produto' />
    </Container>

  </div>
)

export default Categories;
