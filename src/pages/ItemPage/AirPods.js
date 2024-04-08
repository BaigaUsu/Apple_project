import classes from './AllPages.module.scss'
import { Link, useLoaderData} from 'react-router-dom';
import { Icon } from '../../components/Icon/Icon';
import { Button } from '../../components/Button/Button';
import { useState } from 'react';
import { Header } from '../../components/Header/Header';

export function AirPods() {
    const item = useLoaderData();
    const colors = item.colors.map(color => color.color);
    const icons = item.colors.map(color => color.color_image);


//----------------------- КНОПКА ДЛЯ ПЕРЕКЛЮЧЕНИЯ ИКОНОК И КАРТИНОК --------------------------------------
    const img = item.colors.map(img => img.product_images[0].product_image)
    const [selectedIconBorder, setSelectedIconBorder] = useState(0);
    const [currentImage, setCurrentImage] = useState(img[0]);
        const handleIconClick = (index) => {
        setCurrentImage(img[index]);
    };
    const hadnleImageBorderClick = (index) => {
        setSelectedIconBorder(index);
        handleIconClick(index);
    }
//----------------------------------------------------------------------------------

//----------------------- КНОПКА ДЛЯ ПЕРЕКЛЮЧЕНИЯ ВКЛАДОК НИЖНЕГО БЛОКА --------------------------------------
    const [selectedWindow, setSelectedWindow] = useState('info2');
        const handleWindowClick = (windowName) => {
        setSelectedWindow(windowName);
    };
//----------------------------------------------------------------------------------

    return (
        <div className={classes.App}>
            <Header/>
            <div className={classes.Main__Block}>
                <div className={classes.Container}>
                    <div className={classes.Navigation}>
                    <ul>
                        <li><Link to="/" className={classes.Link}><Icon name={'home'}/></Link></li>
                        <p></p>
                        <li><Link to="/Items?category=AirPods" className={classes.Link}>{item.category} </Link></li>
                        <p></p>
                        <li>{item.name}</li>
                    </ul>
                </div>
                    <div className={classes.Inner_Block}>
                        <div className={classes.Image__Block}>
                            <div className={classes.Image__Block_Upper}>
                                <img src={currentImage} alt="Main product image" />
                            </div>
                            <div className={`${classes.Image__Block_Bottom} ${classes.Image__Block_Bottom2}`}>
                                <img src={currentImage} alt={currentImage + ' photo'}/>
                            </div>
                        </div>
                        <div className={classes.Info__Block}>
                            <Link to='/Items?category=iPhone' className={classes.Info__Block_Link}><Icon name={'left'}/>Home</Link>
                            <h1>{item.name}</h1>
                            <div className={classes.Info__Block_Item}>Цвет
                                <div className={classes.Item__info}>
                                {icons.map((icon, index) => (
                                        <img
                                        key={index}
                                        src={icon}
                                        alt={`Color ${index + 1}`}
                                        className={selectedIconBorder === index ? classes.ActiveBlock : 'img'}
                                        onClick={() => hadnleImageBorderClick(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className={classes.Info__Block_Item}>Модель
                                <div className={classes.Item__info}>
                                    <div className={classes.ActiveBlock}>{item.port_model}</div>
                                </div>
                            </div>
                            <div className={classes.Info__Block_Item}>
                                <div className={classes.Price}>{item.price} сом</div>
                            </div>
                            <div className={classes.Info__Block_Item}>
                                <div className={classes.Buttons}>
                                    <Button text={'Купить'} className={classes.Btn}/>
                                    <Link className={classes.Btn_2}>Оформить в кредит</Link>
                                    <Link className={classes.Btn_2}>Забронировать</Link>
                                </div>
                            </div>
                            <div className={classes.Info__Block_Item}>Основные характеристики
                                <div className={classes.Properties}>
                                    <div className={classes.Properties__Item}>
                                        <img src={item.main_charact_image_1}/>
                                        <div>{item.main_charact_1}</div>
                                    </div>
                                    <div className={classes.Properties__Item}>
                                        <img src={item.main_charact_image_2}/>
                                        <div>{item.main_charact_2}</div>
                                    </div>
                                    <div className={classes.Properties__Item}>
                                        <img src={item.main_charact_image_3}/>
                                        <div>{item.main_charact_3}</div>
                                    </div>
                                    <div className={classes.Properties__Item}>
                                        <img src={item.main_charact_image_4}/>
                                        <div>{item.main_charact_4}</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={classes.Bottom__Block}>
                            <ul className={classes.Bottom__Block_Title}>
                                <li className={`${selectedWindow === 'info1' ? classes.Selected : null} ${classes.Bottom__Block_Title_Info}`}
                                    onClick={() => handleWindowClick('info1')}>Описание</li>
                                <li className={`${selectedWindow === 'info2' ? classes.Selected : null} ${classes.Bottom__Block_Title_Info}`}
                                    onClick={() => handleWindowClick('info2')}>Характеристики</li>
                            </ul>
                            <div className={classes.Bottom__Block_Content}>
                                {selectedWindow === 'info1' && (
                                <div>
                                    <h2>вфаыв</h2>
                                </div>
                                )}
                                {selectedWindow === 'info2' && (
                                <div className={classes.Bottom__Block_Content_Properties}>
                                    <div className={classes.Properties__Item}>
                                        <div className={classes.Properties__Item_Title}>
                                            <h1>Артикул(ы)</h1>
                                        </div>
                                        <div className={classes.Properties__Item_Info}>
                                            <pre>' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' '</pre>
                                        </div>
                                    </div>
                                    <div className={classes.Properties__Item}>
                                        <div className={classes.Properties__Item_Title}>
                                            <h1>Цвет</h1>
                                        </div>
                                        <div className={classes.Properties__Item_Info}>
                                            <pre>{colors}</pre>
                                        </div>
                                    </div>
                                    <div className={classes.Properties__Item}>
                                        <div className={classes.Properties__Item_Title}>
                                            <h1>Аудио­технологии</h1>
                                        </div>
                                        <div className={classes.Properties__Item_Info}>
                                            <pre>{item.audio}</pre>
                                        </div>
                                    </div>
                                    <div className={classes.Properties__Item}>
                                        <div className={classes.Properties__Item_Title}>
                                            <h1>Датчики</h1>
                                        </div>
                                        <div className={classes.Properties__Item_Info}>
                                            <pre>{item.sensors}</pre>
                                        </div>
                                    </div>
                                    <div className={classes.Properties__Item}>
                                        <div className={classes.Properties__Item_Title}>
                                            <h1>Микрофоны</h1>
                                        </div>
                                        <div className={classes.Properties__Item_Info}>
                                            <pre>{item.microphones}</pre>
                                        </div>
                                    </div>
                                    <div className={classes.Properties__Item}>
                                        <div className={classes.Properties__Item_Title}>
                                            <h1>Чип</h1>
                                        </div>
                                        <div className={classes.Properties__Item_Info}>
                                            <pre>{item.chip}</pre>
                                        </div>
                                    </div>
                                    <div className={classes.Properties__Item}>
                                        <div className={classes.Properties__Item_Title}>
                                            <h1>Защита от пота и воды</h1>
                                        </div>
                                        <div className={classes.Properties__Item_Info}>
                                            <pre>----------</pre>
                                        </div>
                                    </div>
                                    <div className={classes.Properties__Item}>
                                        <div className={classes.Properties__Item_Title}>
                                            <h1>Возможности подключения</h1>
                                        </div>
                                        <div className={classes.Properties__Item_Info}>
                                            <pre>{item.connect_type}</pre>
                                        </div>
                                    </div>
                                    <div className={classes.Properties__Item}>
                                        <div className={classes.Properties__Item_Title}>
                                            <h1>Комплект поставки</h1>
                                        </div>
                                        <div className={classes.Properties__Item_Info}>
                                            <pre>{item.complete_set}</pre>
                                        </div>
                                    </div>
                                    <div className={classes.Properties__Item}>
                                        <div className={classes.Properties__Item_Title}>
                                            <h1>Универсальный доступ</h1>
                                        </div>
                                        <div className={classes.Properties__Item_Info}>
                                            <pre>{item.universal_access}</pre>
                                        </div>
                                    </div>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
