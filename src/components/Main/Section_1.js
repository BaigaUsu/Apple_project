import { useLoaderData, useNavigate } from "react-router-dom";
import { toggleItemFavorite } from '../../store/action';
import { useDispatch, useSelector } from "react-redux";
import { randomItems } from "../../helpers/Utils";
import classes from './Section_1.module.scss';
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { useMemo } from "react";

export function Section_1() {
    const { item } = useLoaderData();
    const shuffledItems = useMemo(() => randomItems(item).slice(0, 7), [item]); // перемешивание и выбор 7 элементов
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const favoriteItems = useSelector(state => state.favorites); // Получаем список избранных элементов
    const isFavorite = (id) => favoriteItems.includes(id);

    return (
        <div className={classes.Main__Block}>
            <div className={classes.Inner__Block}>
                {shuffledItems.map(item => (
                    <div className={classes.Item__Block} key={item.id}>
                        <div className={classes.Item__Block_Elem}>
                            <div className={classes.Title}
                                onClick={() => {
                                    navigate(`/Items/${item.id}`)
                                }}
                            >
                                <p>{item.category} fasdfsa</p>
                                <p>{item.category}</p>
                                <p>{item.price}</p>
                            </div>
                            <div className={classes.Img_But}
                                onClick={() => {
                                    navigate(`/Items/${item.id}`)
                                }}
                            >
                                <img src={item.image} width='200px'/>
                                <div className={classes.Img_But_Link}>
                                    <Button text={'choose'} className={classes.Btn}/>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14" fill="none">
                                        <g clip-path="url(#clip0)">
                                            <path d="M4.51807 3.03644L8.48162 7L4.51807 10.9636" stroke="#5E8BCE" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="14" height="11" fill="blue" transform="translate(11) rotate(90)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div onClick={() => {dispatch(toggleItemFavorite({ id: item.id }))}}>
                                <Icon
                                    name={isFavorite(item.id) ? 'heart' : 'heartOutline'}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </div>
    )
}
