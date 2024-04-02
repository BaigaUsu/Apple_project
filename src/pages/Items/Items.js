import { useDispatch, useSelector } from 'react-redux';
import { toggleItemFavorite } from '../../store/action';
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { Menu_nav_1 } from "../../components/header/nav_1/Menu_nav_1";
import { Menu_nav_2 } from "../../components/header/Menu_nav_2";
import classes from './Items.module.scss';
import { Button } from "../../components/Button/Button";
import { Icon } from "../../components/Icon/Icon";

export function Items() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');

    const { items } = useLoaderData();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const favoriteItems = useSelector(state => state.favorites); // Получаем список избранных элементов
    const isFavorite = (id) => favoriteItems.includes(id);

    const filteredItems = category ? items.filter(item => item.category === category) : items;

    return (
        <div className={classes.Items}>
            <Menu_nav_1 />
            <Menu_nav_2 />
            <Link to="/">home {category}</Link>
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
                                        navigate(`/Items/${item.id}`);
                                    }}>
                                    <img src={item.image} />
                                    <h5>{item.name}</h5>
                                    <Button text="choose" />
                                </div>
                                <div className={classes.favourite}
                                    onClick={() => {
                                        dispatch(toggleItemFavorite({ id: item.id }));
                                    }}
                                >
                                    <Icon
                                        name={isFavorite(item.id) ? 'heart' : 'heartOutline'}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
