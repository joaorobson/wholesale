import React from 'react';
import {
  Container,
	Header,
	Grid,
	Icon,
	Divider,
	Image,
	Input,
	Button
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import MyMenu from './Menu';
import { subnetMatch } from 'ipaddr.js';

const initialValue = [
	{ name: 'Blusa Xadrez Masculina', desc: 'Vendida por Gama confecções', value: 20, qtd: 20, total: 0 },
	{ name: 'Celular Sony X561', desc: 'Vendida por Gama Tech', value: 600, qtd: 6, total: 0},
	{ name: 'Kindle Paperwhite Wi-Fi, iluminação embutida, tela de 6"', 
		desc: 'O Kindle usa partículas de tinta reais...', 
		value: 399, qtd: 10, total: 0 },
]

initialValue.forEach(o => o.total = o.value * o.qtd)

class Checkout extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			orders: initialValue
		}
	}

	handleChange = (evt, order) => {
		const { value, name } = evt.target;
		const { orders } = this.state;
		
		let newOrders = Object.create(orders);
		let orderToMod = newOrders[order];
		newOrders[order] = Object.assign({}, orderToMod, {[name]: value});

		this.setState({
			orders: newOrders,
		}, () => this.updateTotal(order));
	}

	handleRemove = (index) => {
		const { orders } = this.state;

		this.setState({
			orders: orders.filter((o, i) => i !== index),
		});
	}

	updateTotal = (order) => {
		const { orders } = this.state;
		
		let newOrders = Object.create(orders);
		let orderToMod = newOrders[order];

		newOrders[order] = Object.assign({}, orderToMod, { total: orderToMod.value * orderToMod.qtd });

		this.setState({
			orders: newOrders,
		});
	}

	checkoutTotal() {
		const { orders } = this.state;
		let total = 0;

		orders.map(o => total = total + o.total);

		return total;
	}

	render() {
		const { orders } = this.state;

  	return (
			<div>
				<MyMenu />
				<Container style={{ marginTop: '7%' }}>
					<Grid columns={8}>
						<Grid.Row>
							<Header as='h3' style={{ fontSize: '2em'}}>
								<Icon name="shopping cart"/> Carrinho
							</Header>
						</Grid.Row>

						<Grid.Row>
							<Grid.Column width={10}>
								<Header as='h2'>
									Descrição
								</Header>
							</Grid.Column>
							<Grid.Column width={3}>
								<Header as='h2'>
									Quantidade
								</Header>
							</Grid.Column>
							<Grid.Column width={2}>
								<Header as='h2'>
									Total
								</Header>
							</Grid.Column>
						</Grid.Row>
						<Divider fitted />

					{ orders.length > 0 ? 
							orders.map((order, i) => (
								<Grid container>
									<Grid.Row>
										<Grid.Column width={10}>
											<Grid>

												<Grid.Row columns={2}>
													<Grid.Column width={3}>
														<Image
															bordered
															rounded
															size='small'
															src='https://react.semantic-ui.com/images/wireframe/white-image.png'
														/>
													</Grid.Column>
													<Grid.Column width={10} style={{marginTop: '2%'}}>
														<Header as='h3'>
															{order.name}
														</Header>
														<Header as='h4' disabled style={{margin: 0}}>{order.desc}</Header>
														<Header as='h4' disabled style={{margin: 0}}>R$ {order.value},00/u</Header>
													</Grid.Column>
												</Grid.Row>

											</Grid>
										</Grid.Column>

										<Grid.Column width={3} style={{textAlign: 'center'}}>
											<Input
												placeholder='Quantity'
												value={order.qtd}
												name="qtd"
												style={{width: '50%', marginLeft: '-30%'}}
												onChange={evt => this.handleChange(evt, i)} />
										</Grid.Column>
										<Grid.Column width={2}>
											<Header as='h4' disabled style={{marginTop: '10%'}}>R$ {order.total},00</Header>
										</Grid.Column>

										<Grid.Column width={1}>
											<Button animated='vertical' onClick={() => this.handleRemove(i)}>
												<Button.Content hidden>Remover</Button.Content>
												<Button.Content visible>
													<Icon name='close' />
												</Button.Content>
											</Button>
										</Grid.Column>
									</Grid.Row>
									<Divider fitted />
								</Grid>
							))
						: null
						}

						<Grid.Row>
							<Grid.Column width={10} style={{textAlign: 'center'}}>
								<Header as='h4' disabled>{orders.length} produtos na lista de compras</Header>
							</Grid.Column>
							<Grid.Column width={3} style={{textAlign: 'center'}}>
								<Header as='h4'>Total da compra: R$ {this.checkoutTotal()}</Header>
							</Grid.Column>
							<Grid.Column width={3} style={{textAlign: 'center'}}>
								<Button primary>Finalizar Compra</Button>
							</Grid.Column>
						</Grid.Row>

					</Grid>
				</Container>
			</div>
		);
	}
}

export default Checkout;
