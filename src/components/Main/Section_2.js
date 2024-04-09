import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import classes from './Section_2.module.scss'
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { toggleItemFavorite } from '../../store/action';
import { route } from '../../App/route';

export function Section_2() {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const favoriteItems = useSelector(state => state.favorites);
    const isFavorite = (id) => favoriteItems.includes(id);
    const { item } = useLoaderData();
    const iphoneItems = item.filter(item => item.category === 'iPhone');
    return (
        <div className={classes.Main__Block}>
            <div className={classes.Inner__Block}>
                <div className={classes.Title__Block}>
                    <h1>Выберите свой айфон</h1>
                    <h2>Сравните все модели</h2>
                    <Link className={classes.Title__Block_But}>
                        <Button text={'больше моделей'} className={classes.Btn}/>
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
                    </Link>
                </div>
                <div className={classes.Info__Block}>
                {iphoneItems.map(item => (
                    <div className={classes.Item__Block}>
                        <div className={classes.Item__Block_Elem}>
                            <div className={classes.Elem_Info}
                                onClick={() => {
                                    navigate(route(item))
                                }}>
                                <h3>{item.name}</h3>
                                <Link className={classes.Elem_Info_But} to="/Items?category=iPhone">
                                    <Button text={'выбрать'} className={classes.Btn2}/>
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
                                </Link>
                            </div>
                            <div onClick={() => {dispatch(toggleItemFavorite({ id: item.id }))}}>
                                <Icon
                                    name={isFavorite(item.id) ? 'heart' : 'heartOutline'}
                                />
                            </div>
                            <div className={classes.Image}
                                onClick={() => {
                                    navigate(route(item))
                                }}>
                                <img src={item.main_image}/>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}
