import { Link, useLoaderData } from "react-router-dom";
import classes from './Section_1.module.scss';
import { Button } from "../Button/Button";
import { randomItems } from "../../helpers/Utils";

export function Section_1() {
    const {item} = useLoaderData()
    const shuffledItems = randomItems(item).slice(0, 7);
    return (
        <div className={classes.Main__Block}>
            <div className={classes.Inner__Block}>
                {shuffledItems.map(item => (
                    <div className={classes.Item__Block}>
                        <div className={classes.Item__Block_Elem}>
                            <div className={classes.Title}>
                                <p>{item.category} fasdfsa</p>
                                <p>{item.category}</p>
                                <p>{item.price}</p>
                            </div>
                            <div className={classes.Img_But}>
                                <img src={item.image} width='200px'/>
                                <Link className={classes.Img_But_Link}>
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
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </div>
    )
}
