import React from 'react'
import {
  Container,
  Card,
  Input,
  Grid,
  Image,
  Header,
  Button,
  Menu
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'  
import MyMenu from './Menu'

const Register = () => (
  <div>

    <Menu borderless size='massive' fixed='top' inverted>
          <Menu.Item >
            <h1>Wholesale</h1>
          </Menu.Item>
    </Menu>
    <Container style={{ marginTop: '10em' }}>
      <Header as='h2' style={{marginBottom: 43}}> Novo Usuário </Header>
      <Grid>
        <Grid.Row>
            <Grid.Column width={8}>
                <Input fluid style={{marginBottom: 20}} size='large' placeholder='CNPJ' />
                <Input fluid style={{marginBottom: 20}} size='large' placeholder='Razão Social' />
                <Input fluid style={{marginBottom: 20}} size='large' placeholder='E-mail' />
                <Input fluid style={{marginBottom: 20}} size='large' placeholder='Telefone' />
                <Input fluid style={{marginBottom: 20}} size='large' placeholder='Senha' />
                <Input fluid style={{marginBottom: 20}} size='large' placeholder='Confirmação de Senha' />
            </Grid.Column>
            <Grid.Column width={8}>
                <Header as='h3' style={{marginBottom: 20, marginTop: 21}}>Endereço</Header>
                <Input fluid style={{marginBottom: 20}} size='large' placeholder='CEP' />
                <Input fluid style={{marginBottom: 20}} size='large' placeholder='Logradouro' />
                <Input fluid style={{marginBottom: 20}} size='large' placeholder='Complemento' />
                <Input fluid style={{marginBottom: 20}} size='large' placeholder='Número' />
            </Grid.Column>
        </Grid.Row>
      </Grid>
                <Link to='/registerSuccess'>
                    <Button primary as='a' floated='right' size='large'> Cadastrar </Button>
                </Link>
                <Link to='/'>
                    <Button primary as='a' basic floated='right' size='large'> Voltar </Button>
                </Link>
    </Container>
  </div>
)

export default Register;
