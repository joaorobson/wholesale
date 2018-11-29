import PropTypes from 'prop-types'
import MyMenu from './Menu';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Input,
  Menu,
  Popup,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

class LoginPopup extends Component {
  state = { isOpen: false }

  handleOpen = () => {
    this.setState({ isOpen: true })

      }

  handleClose = () => {
    this.setState({ isOpen: false })
  }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Popup trigger={<Button inverted floated='right' style={{marginRight: 132, marginTop: 12}}>Login</Button> }  position='bottom center' on='click'  open={this.state.isOpen}
            onClose={this.handleClose}
            onOpen={this.handleOpen}>  
       
      
      <Input placeholder='login' /> 
      <Input type='password' placeholder='senha' /> 
      <Link to='/categories'>
      <Button>Entrar</Button>
      </Link>
      
      </Popup>
    )
  }
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const BuySuccess = ({ mobile }) => (
  <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 650, padding: '1em 0em' }}
        vertical
      >
        <MyMenu />
        <Container text>
         <Header
           as='h2'
           content='Compra realizada com Sucesso!'
           inverted
           style={{
             fontWeight: 'normal',
             color: '#77D353',
             // marginBottom: 0,
             marginTop: '11em'
           }}
         />
         <Container>Em instantes você receberá um e-mail com as informações da sua compra.</Container>
         <Link to='/categories'><Button style={{marginTop: 70}} primary>Voltar aos Produtos</Button></Link>
        </Container>
      </Segment>
  </Responsive>
)

export default BuySuccess;
