import classes from './AllPages.module.scss'
import { Link, useLoaderData} from 'react-router-dom';
import { Icon } from '../../components/Icon/Icon';
import { Button } from '../../components/Button/Button';
import { useState } from 'react';
import { Header } from '../../components/Test/Header';

export function Ipad() {
    const item = useLoaderData();
    const colors = item.colors.map(color => color.color);
    const icons = item.colors.map(color => color.color_image);
    const img = item.colors.map(img => img.product_images[0].product_image)
    const capacity = item.capacities_and_prices.map(cap => cap.capacity)
    const price = item.capacities_and_prices.map(price => price.price)

//----------------------- КНОПКА ДЛЯ ПЕРЕКЛЮЧЕНИЯ ИКОНОК И КАРТИНОК --------------------------------------
    const [currentImage, setCurrentImage] = useState(img[0]);
    const [selectedIconBorder, setSelectedIconBorder] = useState(0);
    const handleIconClick = (index) => {
    setCurrentImage(img[index]);
    };
    const hadnleImageBorderClick = (index) => {
        setSelectedIconBorder(index);
        handleIconClick(index);
    }
//-----------------------------------------------------------------------------

//----------------------- КНОПКА ДЛЯ ПЕРЕКЛЮЧЕНИЯ БЛОКОВ ПАМЯТИ И ЦЕНЫ --------------------------------------
    const [currentPrice, setCurrentPrice] = useState(price[0]);
    const [selectedCapacityBorder, setSelectedCapacityBorder] = useState(0);
    const handleCapacityClick = (index) => {
        setCurrentPrice(price[index]);
    };
    const handleBothClick = (index) => {
        setSelectedCapacityBorder(index);
        handleCapacityClick(index);
    };
//-----------------------------------------------------------------------------

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
                            <li><Link to="/Items?category=iPad" className={classes.Link}>{item.category} </Link></li>
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
                        <div className={classes.Info__Block_Item}>Память
                            <div className={classes.Item__info}>
                                {capacity.map((capacity, index) => (
                                    <div key={index}
                                        className={selectedCapacityBorder === index ? classes.ActiveBlock : 'div'}
                                        onClick={() => handleBothClick(index)}
                                    >{capacity}</div>
                                ))}
                            </div>
                        </div>
                        <div className={classes.Info__Block_Item}>Возможности подключения
                            <div className={classes.Item__info}>
                                <div className={classes.ActiveBlock}>{item.connect_type}</div>
                            </div>
                        </div>
                        <div className={classes.Info__Block_Item}>
                            <div className={classes.Price}>{currentPrice}</div>
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
                                        <pre>``````````````````````````````````````````````````````````````</pre>
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
                                        <h1>Ёмкость</h1>
                                    </div>
                                    <div className={classes.Properties__Item_Info}>
                                        <pre>{capacity}</pre>
                                    </div>
                                </div>
                                <div className={classes.Properties__Item}>
                                    <div className={classes.Properties__Item_Title}>
                                        <h1>Дисплей</h1>
                                    </div>
                                    <div className={classes.Properties__Item_Info}>
                                        <pre>{item.display}</pre>
                                    </div>
                                </div>
                                <div className={classes.Properties__Item}>
                                    <div className={classes.Properties__Item_Title}>
                                        <h1>Размеры и вес</h1>
                                    </div>
                                    <div className={classes.Properties__Item_Info}>
                                        <pre>{item.size_and_weight}</pre>
                                    </div>
                                </div>
                                <div className={classes.Properties__Item}>
                                    <div className={classes.Properties__Item_Title}>
                                        <h1>Совместимость</h1>
                                    </div>
                                    <div className={classes.Properties__Item_Info}>
                                        <pre>{item.chip}</pre>
                                    </div>
                                </div>
                                <div className={classes.Properties__Item}>
                                    <div className={classes.Properties__Item_Title}>
                                        <h1>Чип</h1>
                                    </div>
                                    <div className={classes.Properties__Item_Info}>
                                        <pre>{item.camera}</pre>
                                    </div>
                                </div>
                                <div className={classes.Properties__Item}>
                                    <div className={classes.Properties__Item_Title}>
                                        <h1>Фото и видео</h1>
                                    </div>
                                    <div className={classes.Properties__Item_Info}>
                                        <pre>{item.cellular_and_wireless}</pre>
                                    </div>
                                </div>
                                <div className={classes.Properties__Item}>
                                    <div className={classes.Properties__Item_Title}>
                                        <h1>Аутентификация</h1>
                                    </div>
                                    <div className={classes.Properties__Item_Info}>
                                        <pre>{item.authentication}</pre>
                                    </div>
                                </div>
                                <div className={classes.Properties__Item}>
                                    <div className={classes.Properties__Item_Title}>
                                        <h1>Сеть</h1>
                                    </div>
                                    <div className={classes.Properties__Item_Info}>
                                        <pre>{item.audio}</pre>
                                    </div>
                                </div>
                                <div className={classes.Properties__Item}>
                                    <div className={classes.Properties__Item_Title}>
                                        <h1>Аудио</h1>
                                    </div>
                                    <div className={classes.Properties__Item_Info}>
                                        <pre>{item.audio}</pre>
                                    </div>
                                </div>
                                <div className={classes.Properties__Item}>
                                    <div className={classes.Properties__Item_Title}>
                                        <h1>Порт</h1>
                                    </div>
                                    <div className={classes.Properties__Item_Info}>
                                        <pre>{item.port}</pre>
                                    </div>
                                </div>
                                <div className={classes.Properties__Item}>
                                    <div className={classes.Properties__Item_Title}>
                                        <h1>Сенсоры</h1>
                                    </div>
                                    <div className={classes.Properties__Item_Info}>
                                        <pre>{item.sensors}</pre>
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
}
