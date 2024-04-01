import classes from './ItemPage.module.scss'
import { Menu_nav_1 } from "../../components/header/nav_1/Menu_nav_1";
import { Menu_nav_2 } from "../../components/header/Menu_nav_2";
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

export function ItemPage() {
  const item = useLoaderData();

  return (
    <div className={classes.App}>
        <Menu_nav_1/>
        <Menu_nav_2/>
        <Link to="/">home</Link>
        {/* <p>iPhone</p> */}
        <div className={classes.Main__Block}>
            <div className={classes.Container}>
                    <div>
                <img
                    src={item.image}
                    alt={item.name + ' photo'}
                    width='200'
                />
                    <h1>
                        {item.name}
                    </h1>
                    <div>
                        {item.description}
                        </div>

                    </div>
            </div>
        </div>
    </div>
  );
}
