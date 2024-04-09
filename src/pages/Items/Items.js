import { useDispatch, useSelector } from 'react-redux';
import { toggleItemFavorite } from '../../store/action';
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import classes from './Items.module.scss';
import { Button } from "../../components/Button/Button";
import { Icon } from "../../components/Icon/Icon";
import { route } from '../../App/route';
import { Header } from '../../components/Header/Header';

export function Items() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');

    const items = useLoaderData();
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const favoriteItems = useSelector(state => state.favorites);
    const isFavorite = (id) => favoriteItems.includes(id);

    const filteredItems = category ? items.filter(item => item.category === category) : items;

    return (
        <div className={classes.Items}>
            <Header/>
            <div className={classes.Container}>
                <div className={classes.Navigation}>
                    <ul>
                        <li><Link to="/" className={classes.Link}><Icon name={'home'}/></Link></li>
                        <p></p>
                        <li>{category}</li>
                    </ul>
                </div>
                <div className={classes.Title__Block}>
                    <h1 className={classes.Title__Block_Item}>{category}</h1>
                </div>
                <div className={classes.Main__Block}>
                    <div className={classes.Container}>
                        <div className={classes.Inner__Block}>
                            {filteredItems.map(item => (
                                <div
                                    className={classes.Item__Block}
                                    key={item.id}
                                >
                                    <div className={classes.Item__Block_Link}
                                        onClick={() => {
                                            navigate(route(item));
                                        }}>
                                        <img src={item.colors[0].product_images[0].product_image} />
                                        <h5>{item.name}</h5>
                                        <Button text="choose" />
                                    </div>
                                    <div className={classes.favourite}
                                        onClick={() => {
                                            dispatch(toggleItemFavorite({ id: item.id }));
                                        }}
                                    >
                                        <Icon
                                            name={isFavorite(item.id) ? 'fullBasket' : 'emptyBasket'}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
