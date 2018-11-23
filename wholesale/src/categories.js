import React from 'react'
import {
  Container,
  Card,
  Input,
  Icon,
  Dropdown,
  Image,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'  
import MyMenu from './menu'

const Categories = () => (
  <div>

   <MyMenu />
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
