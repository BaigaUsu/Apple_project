import React, { useEffect, useState } from 'react';
import classes from './SearchBar.module.scss';
import { Icon } from '../../Icon/Icon';
import { Link, useNavigate } from 'react-router-dom';
import { route } from '../../../App/route';

export function SearchBar() {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSearchBar(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('https://ttraining549.pythonanywhere.com/api/products/');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchProducts();
    }, []);

    useEffect(() => {
        const filteredStartsWith = products.filter(product =>
            product.name.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
        const filteredIncludes = products.filter(product =>
            !product.name.toLowerCase().startsWith(searchQuery.toLowerCase()) && // исключаем те, которые уже попали в filteredStartsWith
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        const combinedFilteredProducts = [...filteredStartsWith, ...filteredIncludes].slice(0, 5);
        setFilteredProducts(combinedFilteredProducts);
    }, [searchQuery, products]);
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className={classes.ExtendExpanded}>
            <div className={classes.Container}>
                <div className={showSearchBar ? classes.Locked : ''}>
                    <Icon name={'searchicon'}/>
                    {showSearchBar && (
                        <input
                            type="text"
                            placeholder="Search apple.com"
                            value={searchQuery}
                            onChange={handleInputChange}
                            className={classes.Input}
                        />
                    )}
                </div>
                <div>
                    {searchQuery && filteredProducts.map((product) => (
                        <div className={classes.Items}
                            onClick={() => {
                            navigate(route(product));
                            }}>{product.name}
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}
