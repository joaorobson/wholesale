import React from 'react'
import {
  Container,
  Card,
  Input,
  Grid,
  Image,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'  
import MyMenu from './Menu'

const Categories = () => (
  <div>

   <MyMenu />
    <Container style={{ marginTop: '10em' }}>
      <Grid columns={5}>
        <Grid.Row>

          <Grid.Column>
            <Link to='/product_1' >
              <Card style={{'boxShadow':'none'}}>
                <Image centered src='/assets/images/icons8-batom-64.png' size='small' />
                <Card.Content style={{'borderTop':'none'}}>
                  <Card.Header  textAlign='center'>Beleza</Card.Header>
                </Card.Content>
              </Card>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to='/product_1' >
              <Card style={{'boxShadow':'none'}}>
                <Image centered src='../assets/images/icons8-roupas-64.png' size='small' />
                <Card.Content style={{'borderTop':'none'}}>
                  <Card.Header  textAlign='center'>Roupas e Acessórios</Card.Header>
                </Card.Content>
              </Card>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to='/product_1' >
              <Card style={{'boxShadow':'none'}}>
                <Image centered src='../assets/images/icons8-smartphones-64.png' size='small' />
                <Card.Content style={{'borderTop':'none'}}>
                  <Card.Header  textAlign='center'>Smarthphones e Telefones</Card.Header>
                </Card.Content>
              </Card>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to='/product_1' >
              <Card style={{'boxShadow':'none'}}>
                <Image centered src='../assets/images/icons8-notebook-64.png' size='small' />
                <Card.Content style={{'borderTop':'none'}}>
                  <Card.Header  textAlign='center'>Informática</Card.Header>
                </Card.Content>
              </Card>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to='/product_1' >
              <Card style={{'boxShadow':'none'}}>
                <Image centered src='../assets/images/icons8-bengala-doce-64.png' size='small' />
                <Card.Content style={{'borderTop':'none'}}>
                  <Card.Header  textAlign='center'>Doces</Card.Header>
                </Card.Content>
              </Card>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Container style={{ marginTop: '7em' }} textAlign='center'>
            <h2>Pesquise aqui os produtos de seu interesse</h2>
            <Input icon='search' size='massive' placeholder='Pesquise o nome, tipo ou vendedor' />
          </Container>
        </Grid.Row>
      </Grid>
    </Container>
    
  </div>
)

export default Categories;
