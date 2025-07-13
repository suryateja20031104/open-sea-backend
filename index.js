const express = require('express');
const cors=require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 59999,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    name: 'Phone',
    price: 29999,
    image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    name: 'Tablet',
    price: 19999,
    image: 'https://www.hindustantimes.com/ht-img/img/2025/04/16/1600x900/best_android_tablets_1744798872092_1744798883425.jpeg'
  },
  {
    id: 4,
    name: 'Headphones',
    price: 2999,
    image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_650_pp_renders_main_banner.124.png?v=1740735495'
  },
  {
    id: 5,
    name: 'Smartwatch',
    price: 8999,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 6,
    name: 'Monitor',
    price: 12999,
    image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 7,
    name: 'Keyboard',
    price: 1499,
    image: 'https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 8,
    name: 'Mouse',
    price: 999,
    image: 'https://cdn.pixabay.com/photo/2015/02/05/17/14/pc-mouse-625159_960_720.jpg'
  },
  {
    id: 9,
    name: 'Speaker',
    price: 3499,
    image: 'https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 10,
    name: 'Webcam',
    price: 2499,
    image: 'https://i0.wp.com/codingblog.galcomp.net/wp-content/uploads/2021/08/image-1.png?w=310&ssl=1'
  }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
