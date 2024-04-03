import { useState, useEffect } from 'react';
import classes from './Slider_2.module.scss'
import { useNavigate } from 'react-router-dom';

export function Slider_2() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://70f6454af92251a5c0a8264a1c1241f1.serveo.net/api/products/products-api/')
      .then(response => response.json())
      .then(data => {
        const filteredProducts = data.filter(product => product.scroll === 'in');
        const sortedProducts = filteredProducts.sort((a, b) => a.id - b.id);
        setProducts(filteredProducts);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className={classes.Slider__Container}>
      <div className={classes.Slider__Block}>
        {products.map(product => (
          <div key={product.id}
               className={classes.Slider__Block_Item}
               onClick={() => {
                    navigate(`/Items/${product.id}`);
                }}>
            <div className={classes.Item__Info}>
                <h3>{product.scroll_title}</h3>
                <p>{product.scroll_body}</p>
            </div>
            <img src={product.scroll_image} alt={product.name} width='400' className={classes.Slider__Image}/>
          </div>
        ))}
      </div>
    </div>
  );
};

