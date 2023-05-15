import { useContext } from 'react';
import CartContext from '../utils/contexts/CartContext';

export default function Cart() {
	function handleCartBtnClick(): void {
		const cartContainer = document.querySelector('.cart-container');
		cartContainer?.classList.add('cart-container-active');
	}

	function handleBurgerClose(): void {
		const cartContainer = document.querySelector('.cart-container');
		cartContainer?.classList.remove('cart-container-active');
	}

	const { cart }: any = useContext(CartContext);

	return (
		<>
			<div onClick={handleCartBtnClick} className="cart-button">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={25}
					height={25}
					fill="currentColor"
					className="bi bi-cart3"
					viewBox="0 0 16 16"
				>
					<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
				</svg>
			</div>
			<div className="cart-container">
				<div className="cart">
					<div className="cart-top">
						<h2 className="cart-title">Your shopping cart (0)</h2>
						<svg
							onClick={handleBurgerClose}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="2rem"
							height="2rem"
							fill="currentColor"
							className="close-cart"
						>
							<title>close</title>
							<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
						</svg>
					</div>
					<div className="cart-items">
						{cart ? (
							<h1>FULL CART</h1>
						) : (
							<div className="empty-cart-container">
								<div className="empty-cart">
									<img
										src="/src/assets/img/empty-cart.png"
										alt="Empty cart"
										className="empty-cart-illustration"
									/>
									<h2>Your cart is empty</h2>
									<button className="button button-full">
										Go shopping
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
