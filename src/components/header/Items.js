import React from "react";
import { useLocation } from "react-router-dom";
import { Menu_nav_1 } from "./nav_1/Menu_nav_1";
import { Menu_nav_2 } from "./Menu_nav_2";
import { useLoaderData } from "react-router-dom";
import { Content } from "../content/Content";

export function Items() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');

    const { items } = useLoaderData();

    const filteredItems = category ? items.filter(item => item.category === category) : items;

    return (
        <div>
            <Content>
                <Menu_nav_1/>
                <Menu_nav_2/>
                {filteredItems.map(item => (
                    <div key={item.id}>
                        <img
                            src={item.image}
                            alt={`${item.category} photo`}
                            width='200px'
                        />
                        <h1>{item.category}</h1>
                        <div>{item.description}</div>
                    </div>
                ))}
            </Content>
        </div>
    );
}
