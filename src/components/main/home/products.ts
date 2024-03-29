import { ProductType } from '../../utils/types';

const products: ProductType[] = [
	{
		name: 'Cozy Sweater',
		brand: 'H&M',
		id: 101,
		category: 'top',
		img: '/img/catalog/cozy_sweater.jpeg',
		link: '/catalog/product/101',
		price: 39.99,
		rating: 4,
		numReviews: 8,
		description:
			'Soft and cozy sweater made from high-quality material, perfect for colder days.',
		material: 'wool',
		size: 'Medium',
	},

	{
		name: 'Graphic T-Shirt',
		brand: 'Urban Outfitters',
		id: 102,
		category: 'top',
		img: '/img/catalog/graphic_tshirt.jpg',
		link: '/catalog/product/102',
		price: 24.99,
		rating: 4,
		numReviews: 12,
		description:
			'Stylish graphic t-shirt made from soft cotton, featuring a unique design.',
		material: 'cotton',
		size: 'Small',
	},

	{
		name: 'Oversized Hoodie',
		brand: 'Forever 21',
		id: 103,
		category: 'top',
		img: '/img/catalog/oversized_hoodie.jpg',
		link: '/catalog/product/103',
		price: 44.99,
		rating: 4.5,
		numReviews: 15,
		description:
			'Super comfortable and cozy oversized hoodie made from a soft and warm material.',
		material: 'cotton blend',
		size: 'Large',
	},

	{
		name: 'Crewneck Sweatshirt',
		brand: 'American Eagle',
		id: 104,
		category: 'top',
		img: '/img/catalog/crewneck_sweatshirt.jpg',
		link: '/catalog/product/104',
		price: 32.99,
		rating: 4.2,
		numReviews: 11,
		description:
			'Classic crewneck sweatshirt made from a soft and durable material, perfect for casual wear.',
		material: 'cotton blend',
		size: 'Large',
	},

	{
		name: 'Knit Sweater',
		brand: 'Zara',
		id: 105,
		category: 'top',
		img: '/img/catalog/knit_sweater.jpg',
		link: '/catalog/product/105',
		price: 49.99,
		rating: 4.7,
		numReviews: 20,
		description:
			'Stylish and warm knit sweater made from a high-quality material, perfect for fall and winter.',
		material: 'wool blend',
		size: 'Medium',
	},
	{
		name: 'Comfy Sweatpants',
		brand: 'Nike',
		id: 6,
		category: 'bottom',
		img: '/img/catalog/sweatpants.jpeg',
		link: '/catalog/product/6',
		price: 34.99,
		rating: 4,
		numReviews: 8,
		description: 'Relaxed-fit sweatpants for ultimate comfort and style.',
		material: 'Cotton Blend',
		size: 'Medium',
	},
	{
		name: 'Classic Blue Jeans',
		brand: "Levi's",
		id: 7,
		category: 'bottom',
		img: '/img/catalog/blue_jeans.jpg',
		link: '/catalog/product/7',
		price: 59.99,
		rating: 5,
		numReviews: 12,
		description: 'Timeless classic blue jeans that never go out of style.',
		material: 'Denim',
		size: 'Large',
	},
	{
		name: 'Cozy Joggers',
		brand: 'Adidas',
		id: 8,
		category: 'bottom',
		img: '/img/catalog/joggers.jpeg',
		link: '/catalog/product/8',
		price: 42.99,
		rating: 4,
		numReviews: 6,
		description: 'Soft joggers perfect for lounging or running errands.',
		material: 'Cotton Blend',
		size: 'Small',
	},
	{
		name: 'High-Waisted Leggings',
		brand: 'Lululemon',
		id: 9,
		category: 'bottom',
		img: '/img/catalog/leggings.jpeg',
		link: '/catalog/product/9',
		price: 79.99,
		rating: 5,
		numReviews: 20,
		description:
			'Stylish high-waisted leggings that hug your curves and provide ultimate comfort.',
		material: 'Nylon Blend',
		size: 'Small',
	},
	{
		name: 'Black Sweatpants',
		brand: 'Champion',
		id: 10,
		category: 'bottom',
		img: '/img/catalog/black_sweatpants.jpg',
		link: '/catalog/product/10',
		price: 39.99,
		rating: 4,
		numReviews: 10,
		description:
			'Comfortable black sweatpants that can be dressed up or down.',
		material: 'Cotton Blend',
		size: 'Large',
	},
	{
		name: 'Quilted Puffer Jacket',
		brand: 'The North Face',
		id: 150,
		category: 'outerwear',
		img: '/img/catalog/puffer_jacket.jpg',
		link: '/catalog/product/150',
		price: 199.99,
		rating: 5,
		numReviews: 20,
		description:
			'Stay warm and cozy in this stylish quilted puffer jacket.',
		material: 'Polyester',
		size: 'Medium',
	},
	{
		name: 'Fleece Lined Denim Jacket',
		brand: 'Wrangler',
		id: 12,
		category: 'outerwear',
		img: '/img/catalog/denim_jacket.jpg',
		link: '/catalog/product/12',
		price: 89.99,
		rating: 4,
		numReviews: 15,
		description:
			'This classic denim jacket is lined with soft and cozy fleece for extra warmth.',
		material: 'Denim',
		size: 'Large',
	},
	{
		name: 'Hooded Windbreaker',
		brand: 'Nike',
		id: 152,
		category: 'outerwear',
		img: '/img/catalog/windbreaker.jpg',
		link: '/catalog/product/152',
		price: 119.99,
		rating: 4,
		numReviews: 18,
		description:
			'This lightweight windbreaker features a hood and zip pockets for added convenience.',
		material: 'Polyester',
		size: 'Small',
	},
	{
		name: 'Sherpa-Lined Parka',
		brand: 'Eddie Bauer',
		id: 14,
		category: 'outerwear',
		img: '/img/catalog/parka.jpg',
		link: '/catalog/product/14',
		price: 249.99,
		rating: 5,
		numReviews: 25,
		description:
			'Stay cozy in this warm parka with a plush sherpa lining and adjustable hood.',
		material: 'Cotton, polyester',
		size: 'Large',
	},
	{
		name: 'Faux Leather Moto Jacket',
		brand: 'Blank NYC',
		id: 154,
		category: 'outerwear',
		img: '/img/catalog/moto_jacket.jpg',
		link: '/catalog/product/154',
		price: 149.99,
		rating: 4,
		numReviews: 12,
		description:
			'Add some edge to your look with this sleek and stylish faux leather moto jacket.',
		material: 'Polyurethane, polyester',
		size: 'Medium',
	},
	{
		name: 'Sleeveless Midi Dress',
		brand: 'Madewell',
		id: 11,
		category: 'dresses',
		img: '/img/catalog/midi_dress.jpg',
		link: '/catalog/product/11',
		price: 89.99,
		rating: 4,
		numReviews: 15,
		description:
			'A versatile, easy-to-wear dress that is perfect for any occasion.',
		material: 'Cotton blend',
		size: 'Small, Medium, Large',
	},
	{
		name: 'Knit Sweater Dress',
		brand: 'Free People',
		id: 151,
		category: 'dresses',
		img: '/img/catalog/sweater_dress.jpg',
		link: '/catalog/product/151',
		price: 119.99,
		rating: 5,
		numReviews: 20,
		description: 'A cozy and warm sweater dress, perfect for a chilly day.',
		material: 'Wool blend',
		size: 'Small, Medium, Large',
	},
	{
		name: 'Floral Maxi Dress',
		brand: 'Anthropologie',
		id: 13,
		category: 'dresses',
		img: '/img/catalog/maxi_dress.jpg',
		link: '/catalog/product/13',
		price: 149.99,
		rating: 4,
		numReviews: 12,
		description:
			'A beautiful floral maxi dress that is perfect for a summer day.',
		material: 'Rayon',
		size: 'Small, Medium, Large',
	},
	{
		name: 'T-Shirt Dress',
		brand: 'Everlane',
		id: 153,
		category: 'dresses',
		img: '/img/catalog/tshirt_dress.webp',
		link: '/catalog/product/153',
		price: 59.99,
		rating: 4,
		numReviews: 18,
		description:
			'A comfortable and casual t-shirt dress that is perfect for everyday wear.',
		material: 'Cotton',
		size: 'Small, Medium, Large',
	},
	{
		name: 'Wrap Dress',
		brand: 'Reformation',
		id: 15,
		category: 'dresses',
		img: '/img/catalog/wrap_dress.jpg',
		link: '/catalog/product/15',
		price: 129.99,
		rating: 5,
		numReviews: 25,
		description:
			'A chic and sophisticated wrap dress that is perfect for a night out.',
		material: 'Silk',
		size: 'Small, Medium, Large',
	},
	{
		name: 'Classic Watch',
		brand: 'Timex',
		id: 21,
		category: 'accessories',
		img: '/img/catalog/watch.jpg',
		link: '/catalog/product/21',
		price: 29.99,
		rating: 5,
		numReviews: 15,
		description: 'A timeless watch for everyday use.',
		material: 'Stainless Steel',
		size: 'One Size',
	},
	{
		name: 'Retro Sunglasses',
		brand: 'Ray-Ban',
		id: 22,
		category: 'accessories',
		img: '/img/catalog/sunglasses.avif',
		link: '/catalog/product/22',
		price: 79.99,
		rating: 4,
		numReviews: 8,
		description: 'A pair of sunglasses that never goes out of style.',
		material: 'Plastic',
		size: 'One Size',
	},
	{
		name: 'Leather Belt',
		brand: 'Tommy Hilfiger',
		id: 23,
		category: 'accessories',
		img: '/img/catalog/belt.webp',
		link: '/catalog/product/23',
		price: 49.99,
		rating: 4,
		numReviews: 12,
		description: 'A durable and stylish belt that goes with any outfit.',
		material: 'Leather',
		size: 'Medium',
	},
	{
		name: 'Beanie Hat',
		brand: 'Carhartt',
		id: 24,
		category: 'accessories',
		img: '/img/catalog/beanie.jpg',
		link: '/catalog/product/24',
		price: 19.99,
		rating: 5,
		numReviews: 22,
		description: 'A warm and comfortable beanie for those chilly days.',
		material: 'Wool',
		size: 'One Size',
	},
	{
		name: 'Canvas Tote Bag',
		brand: 'L.L. Bean',
		id: 25,
		category: 'accessories',
		img: '/img/catalog/tote-bag.jpeg',
		link: '/catalog/product/25',
		price: 39.99,
		rating: 4,
		numReviews: 5,
		description:
			'A spacious and durable tote bag for carrying your essentials.',
		material: 'Canvas',
		size: 'One Size',
	},
	{
		name: 'Cozy Crewneck Sweater',
		brand: 'H&M',
		id: 1,
		category: 'top',
		img: '/img/catalog/sweater.jpg',
		link: '/catalog/product/1',
		price: 39.99,
		rating: 5,
		numReviews: 8,
		description:
			'This cozy crewneck sweater is perfect for a relaxing day at home or a casual outing. Made with soft and warm materials, it will keep you comfortable all day long.',
		material: 'Cotton and polyester',
		size: 'Small, Medium, Large',
	},
	{
		name: 'Cropped Hoodie',
		brand: 'Nike',
		id: 2,
		category: 'top',
		img: '/img/catalog/hoodie.webp',
		link: '/catalog/product/2',
		price: 59.99,
		rating: 4,
		numReviews: 5,
		description:
			'This cropped hoodie is perfect for those who want to stay comfortable and stylish. Made with soft and durable materials, it will keep you cozy all day long.',
		material: 'Cotton and polyester',
		size: 'Small, Medium, Large',
	},
	{
		name: 'Denim Jeans',
		brand: "Levi's",
		id: 3,
		category: 'bottom',
		img: '/img/catalog/denim_jeans.webp',
		link: '/catalog/product/3',
		price: 89.99,
		rating: 4,
		numReviews: 12,
		description:
			'These denim jeans are a classic and versatile addition to any wardrobe. Made with high-quality materials, they are comfortable and durable.',
		material: 'Denim',
		size: '24-32',
	},
	{
		name: 'Fleece Jacket',
		brand: 'Patagonia',
		id: 4,
		category: 'outerwear',
		img: '/img/catalog/fleece_jacket.jpg',
		link: '/catalog/product/4',
		price: 129.99,
		rating: 5,
		numReviews: 15,
		description:
			'This fleece jacket is perfect for chilly days. Made with soft and warm materials, it will keep you cozy all day long.',
		material: 'Polyester',
		size: 'Small, Medium, Large',
	},
];

export default products;
