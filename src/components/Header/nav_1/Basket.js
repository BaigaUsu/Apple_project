import { useLoaderData } from "react-router-dom";
import { toggleItemFavorite } from "../../../store/action";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../Icon/Icon";
import { Menu_nav_1 } from "./Menu_nav_1";
import { Menu_nav_2 } from "../nav_2/Menu_nav_2";

export function Basket() {
    const items = useLoaderData()
    const dispatch = useDispatch();

    const favoriteItems = useSelector(state => state.favorites); // Получаем список избранных элементов
    const isFavorite = (id) => favoriteItems.includes(id);
    return (
        <>
            <Menu_nav_1/>
            <Menu_nav_2/>
            {items.map(item => (
                <div key={item.id}>
                    <div
                        onClick={() => {
                            dispatch(toggleItemFavorite({ id: item.id }));
                        }}
                    >
                        <Icon
                            name={isFavorite(item.id) ? 'fullBasket' : 'emptyBasket'}
                        />
                    </div>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    <img src={item.main_image} width='200'/>
                </div>
            ))}
        </>
    )
}
