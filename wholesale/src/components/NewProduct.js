import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  Button,
  Container,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Input,
  Label,
  TextArea,
  Form,
  Select
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import MyMenu from './Menu'

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const options = [
  { key: 1, text: '1', value: 1 },
  { key: 2, text: '2', value: 2 },
  { key: 3, text: '3', value: 3 },
]

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Imagine-a-Company'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Do whatever you want when you want to.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
            <Menu.Item as='a'>Log in</Menu.Item>
            <Menu.Item as='a'>Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <MyMenu />
    <Segment style={{ padding: '8em 0em' }} vertical>
    <Container>
      <Header as='h2' style={{marginBottom: 43}}> Cadastrar Produto </Header>
      <Form><Grid>
        <Grid.Row>
            <Grid.Column width={5}>
                <Input fluid style={{marginBottom: 20}} size='large' placeholder='Nome do Produto' />
                <TextArea  fluid style={{marginBottom: 20, height: 200}} size='large' placeholder='Descrição'/>
                <Input fluid style={{marginBottom: 20}} labelPosition='right' type='text' placeholder='Preço' size='large'>
                    <Label basic>$</Label>
                    <input/>
                </Input>
            </Grid.Column>
            <Grid.Column width={5}>
                <Select placeholder='Categoria' fluid style={{marginBottom: 20}} size='big'
                    options={[
                        {key: '1', text: 'Vestuário' , flag: 'Vestuário' , value: 'Vestuário' },
                        {key: '2', text: 'Casa'      , flag: 'Casa'      , value: 'Casa'      },
                        {key: '3', text: 'Indústria' , flag: 'Indústria' , value: 'Indústria' },
                        {key: '4', text: 'Escritório', flag: 'Escritório', value: 'Escritório'},
                        {key: '5', text: 'Alimentos' , flag: 'Alimentos' , value: 'Alimentos' }
                    ]} />
                <Input fluid style={{marginBottom: 20}} size='large' placeholder='Quantidade em Estoque' type='number' />
                <Input fluid style={{marginBottom: 20}} size='large' placeholder='Quantidade mínima para venda'  type='number' />
            </Grid.Column>
            <Grid.Column width={6}>
                <Input fluid style={{marginBottom: 20}} size='large' placeholder='Enviar imagens' type='file' labelPosition='top' >
                    <Label>Enviar imagens</Label>
                    <input/>
                </Input>
            </Grid.Column>
        </Grid.Row>
      </Grid></Form>
                <Link to='/product_1'>
                    <Button primary as='a' floated='right' size='large'> Cadastrar </Button>
                </Link>
                <Link to='/categories'>
                    <Button primary as='a' basic floated='right' size='large'> Voltar </Button>
                </Link>
    </Container>
    </Segment>


  </ResponsiveContainer>
)

export default HomepageLayout

