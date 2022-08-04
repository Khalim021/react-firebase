import React from 'react';
import '../pages/maincss/home.css'
import Products from '../components/products/Products';


function Home(props) {
  return (
    <div className='home'>
      <img className='home__banner' src='https://i.computer-bild.de/imgs/6/3/7/5/8/7/7/Amazon-Prime-Video-im-Test-2048x1152-aa7b44902f80ff32.jpg' alt='banner' />
      <div className='home__row'>
        <Products 
            id="1" 
            title="Razer Blade Pro 17 Gaming Laptop 2020: Intel Core i7-10875H 8-Core"
            price={55.34}
            rating={5}
            image="https://m.media-amazon.com/images/I/71t3Zn0T2XL._AC_UY218_.jpg"
          />
          <Products 
            id="1" 
            title="Razer Blade Pro 17 Gaming Laptop 2020: Intel Core i7-10875H 8-Core"
            price={26.34}
            rating={5}
            image="https://m.media-amazon.com/images/I/61qIQqN3blS._AC_UY218_.jpg"
          />  
      </div>
      <div className='home__row'>
      <Products 
            id="1" 
            title="Razer Blade Pro 17 Gaming Laptop 2020: Intel Core i7-10875H 8-Core"
            price={11.34}
            rating={5}
            image="https://m.media-amazon.com/images/I/61N20OJMa-L._AC_UL320_.jpg"
          />
          <Products 
            id="1" 
            title="Razer Blade Pro 17 Gaming Laptop 2020: Intel Core i7-10875H 8-Core"
            price={127.34}
            rating={5}
            image="https://m.media-amazon.com/images/I/81PBYPDRP9L._AC_UY218_.jpg"
          />
          <Products 
            id="1" 
            title="Razer Blade Pro 17 Gaming Laptop 2020: Intel Core i7-10875H 8-Core"
            price={121.34}
            rating={5}
            image="https://m.media-amazon.com/images/I/6173ZpI--QL._AC_UY218_.jpg"
          />
      </div>
      <div className='home__row'>
        <Products 
            id="1" 
            title="Razer Blade Pro 17 Gaming Laptop 2020: Intel Core i7-10875H 8-Core, NVIDIA GeForce RTX 2080 Super Max-Q, 17.3 FHD 300Hz, 16GB RAM, 512GB SSD, CNC Aluminum, Chroma RGB,"
            price={120.34}
            rating={5}
            image="https://m.media-amazon.com/images/I/91-CdWQGWAL._AC_UY218_.jpg"
          />
      </div>
    </div>
    );
}

export default Home;