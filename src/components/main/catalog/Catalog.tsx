import products from '../home/products.js';
import { ProductType } from '../../utils/types.js';
import Card from '../common/Card.js';
import { useEffect, useState } from 'react';
import Newsletter from '../common/Newsletter.js';

export default function Catalog() {
	const [filteredList, setFilteredList] = useState([] as ProductType[]);
	const [category, setCategory] = useState('popular');
	const [searchInput, setSearchInput] = useState('');

	useEffect(() => {
		filterByCategory(category);
		changeActiveSection(category);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category]);

	function handleSearch() {
		setFilteredList(
			products.filter((product: ProductType) => {
				let searchInString = '';
				for (const key in product) {
					searchInString = searchInString + (product as never)[key];
				}
				if (
					searchInString
						.toLowerCase()
						.indexOf(searchInput.toLowerCase()) !== -1
				) {
					return true;
				} else return false;
			})
		);
		unselectCategories();
		setSearchInput('');
	}

	function filterByCategory(category: string) {
		if (category === 'popular') {
			setFilteredList(filterByPopularity().slice(0, 5));
			return;
		}
		const filtered = products.filter((prod: ProductType) => {
			return prod.category === category;
		});
		setFilteredList(filtered);
	}

	function unselectCategories() {
		const filterButtons = document.querySelectorAll('.filter');
		filterButtons.forEach((btn: Element) => {
			btn.classList.remove('active');
		});
	}

	function changeActiveSection(category: string) {
		unselectCategories();
		const targetSection = document.getElementById(category);
		targetSection?.classList.add('active');
	}

	function filterByPopularity() {
		const filtered = products.sort((a: ProductType, b: ProductType) => {
			return b.rating - a.rating;
		});
		return filtered;
	}

	return (
		<div className="page-container">
			<section className="catalog page">
				<div className="catalog-top">
					<div className="search-section">
						<input
							className="searchbar"
							type="search"
							placeholder="Search..."
							value={searchInput}
							onChange={(e) => setSearchInput(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === 'Enter') {
									handleSearch();
								}
							}}
						/>
						<button
							className="search-button"
							onClick={handleSearch}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-search"
								viewBox="0 0 16 16"
							>
								<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
							</svg>
						</button>
					</div>
				</div>
				<div className="filter-section">
					<button
						className="filter"
						id="popular"
						onClick={() => {
							setCategory('popular');
						}}
					>
						Popular
					</button>
					<button
						className="filter"
						id="top"
						onClick={() => {
							setCategory('top');
						}}
					>
						Tops
					</button>
					<button
						className="filter"
						id="bottom"
						onClick={() => {
							setCategory('bottom');
						}}
					>
						Bottoms
					</button>
					<button
						className="filter"
						id="outerwear"
						onClick={() => {
							setCategory('outerwear');
						}}
					>
						Jackets
					</button>
					<button
						className="filter"
						id="dresses"
						onClick={() => {
							setCategory('dresses');
						}}
					>
						Dresses
					</button>
					<button
						className="filter"
						id="accessories"
						onClick={() => {
							setCategory('accessories');
						}}
					>
						Accessories
					</button>
				</div>
				<ul className="product-list section">
					{filteredList.length < 1 ? (
						<div className="not-found-section">
							<p>Product not found..</p>
							<img
								className="not-found-illustration"
								src="/img/product-not-found.png"
								alt="no products"
							/>
						</div>
					) : (
						filteredList.map((prod: ProductType) => {
							return <Card key={prod.id} {...prod} />;
						})
					)}
				</ul>
				<Newsletter />
			</section>
		</div>
	);
}
