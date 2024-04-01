import React from "react";
import { Menu_nav_1 } from "../../components/header/nav_1/Menu_nav_1";
import { Menu_nav_2 } from "../../components/header/Menu_nav_2";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import classes from './Items.module.scss'
import { Button } from "../../components/Button/Button";
import { Home } from "../Home/Home";


export function Items() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');

    const { items } = useLoaderData();
    const navigate = useNavigate()

    const filteredItems = category ? items.filter(item => item.category === category) : items;


    return (
        <div className={classes.Items}>
            <Menu_nav_1/>
            <Menu_nav_2/>
            <Link to="/">home</Link>
            <div className={classes.Main__Block}>
                <div className={classes.Container}>
                    <div className={classes.Inner__Block}>
                        {filteredItems.map(item => (
                            <div
                                className={classes.Item__Block}
                                onClick={() => {
                                    navigate(`/Items/${item.id}`)
                                }}
                            >
                                <Link className={classes.Item__Block_Link}>
                                    <img src={item.image} />
                                    <h5>{item.name}</h5>
                                    <Button
                                        text='choose'
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
