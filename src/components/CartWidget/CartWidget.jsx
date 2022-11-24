import styles from './styles/CartWidget.module.scss';
import Cart from '../Icons/Cart';

const CartWidget = () => {
	return (
		<div className= {styles.cartwidget}>
			<Cart />
			<span className= {styles.badge}>4</span>
		</div>
	)
}

export default CartWidget;
