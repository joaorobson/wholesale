import React from 'react'
import {
  Container,
  Card,
  Input,
  Icon,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

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

        <Card style={{'boxShadow':'none'}}>
          <Image centered src='https://i.imgur.com/bzW1Dio.jpg' size='small' />
          <Card.Content style={{'borderTop':'none'}}>
            <Card.Header  textAlign='center'>Humanity</Card.Header>
          </Card.Content>
        </Card>

        <Card style={{'boxShadow':'none'}}>
          <Image centered src='https://i.imgur.com/JtWr9IG.jpg' size='small' />
          <Card.Content style={{'borderTop':'none'}}>
            <Card.Header textAlign='center'>Before and After</Card.Header>
          </Card.Content>
        </Card>

        <Card style={{'boxShadow':'none'}}>
          <Image centered src='https://i.imgur.com/SSLDUUH.jpg' size='small' />
          <Card.Content style={{'borderTop':'none'}}>
            <Card.Header textAlign='center'>Walk</Card.Header>
          </Card.Content>
        </Card>

      </Card.Group>
    </Container>
    
    <Container style={{ marginTop: '7em' }} textAlign='center'>
      <Input icon='search' size='massive' placeholder='Digite o produto' />
    </Container>

  </div>
)

export default Categories;
