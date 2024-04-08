import classes from './AllPages.module.scss'
import { Link, useLoaderData } from 'react-router-dom';
import { Icon } from '../../components/Icon/Icon';
import { Button } from '../../components/Button/Button';
import { useState } from 'react';
import { Header } from '../../components/Test/Header';

export function Vision() {
    const item = useLoaderData();
    const colors = item.colors.map(color => color.color);
    const icons = item.colors.map(color => color.color_image);
    const capacity = item.capacities_and_prices.map(cap => cap.capacity)


//----------------------- КНОПКА ДЛЯ ПЕРЕКЛЮЧЕНИЯ БЛОКОВ ПАМЯТИ И ЦЕНЫ --------------------------------------
    const price = item.capacities_and_prices.map(price => price.price)
    const [selectedCapacityBorder, setSelectedCapacityBorder] = useState(0);
    const [currentPrice, setCurrentPrice] = useState(price[0]);
    const handleCapacityClick = (index) => {
        setCurrentPrice(price[index]);
    };
    const handleBothClick = (index) => {
        setSelectedCapacityBorder(index);
        handleCapacityClick(index);
    };
//-----------------------------------------------------------------------------

//----------------------- КНОПКА САМИХ КАРТИНОК ДЛЯ ИХ ВЫБОРА -----------------------------------
const img_1 = item.colors[0].product_images;
const img = item.colors.map(img => img.product_images[0].product_image)
    const [currentImage, setCurrentImage] = useState(img[0]);
    const [currentButtomImage, setcurrentButtomImage] = useState(img_1);
    const [currImage, setCurrImage] = useState(currentButtomImage[0].product_image);
    const handleImageClick = (image) => {
        setCurrentImage(image.product_image);
    };
//----------------------------------------------------------------------------------

//----------------------- КНОПКА ДЛЯ ПЕРЕКЛЮЧЕНИЯ ВКЛАДОК НИЖНЕГО БЛОКА --------------------------------------
    const [selectedWindow, setSelectedWindow] = useState('info2');
    const handleWindowClick = (windowName) => {
        setSelectedWindow(windowName);
    };
//----------------------------------------------------------------------------------

//--------------------КНОПКА ДЛЯ КЛАВИАТУРЫ----------------------------------------------------
    const [selectLang, setSelectLang] = useState(0)
    const handleLangClick = (lang) => {
        setSelectLang(lang)
    }
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
                        <li><Link to='/Items?category=Gadget' className={classes.Link}>{item.category} </Link></li>
                        <p></p>
                        <li>{item.name}</li>
                    </ul>
                </div>
                <div className={classes.Inner_Block}>
                    <div className={classes.Image__Block}>
                        <div className={classes.Image__Block_Upper}>
                            <img src={currentImage} alt="Main product image" />
                        </div>
                        <div className={classes.Arrow}>
                            <Icon name={'slide_left'}/>
                        </div>
                        <div>
                            <div className={classes.Image__Block_Bottom}>
                            {currentButtomImage.map((img, index) => (
                                <img
                                    key={index}
                                    src={img.product_image}
                                    onClick={() => handleImageClick(img)}
                                    alt={img.product_image + ' photo'}
                                />
                            ))}</div>
                        </div>
                        <div>
                            <Icon name={'right'}/>
                        </div>
                    </div>
                    <div className={classes.Info__Block}>
                        <Link to='/Items?category=iPhone' className={classes.Info__Block_Link}><Icon name={'left'}/>Home</Link>
                        <h1>{item.name}</h1>
                        <div className={classes.Info__Block_Item}>Цвет
                            <div className={classes.Item__info}>
                                    <img src={icons} alt={icons} className={classes.ActiveBlock}/>
                            </div>
                        </div>
                        <div className={classes.Info__Block_Item}>Память
                            <div className={classes.Item__info}>
                                {capacity.map((capacity, index) => (
                                        <div
                                            className={selectedCapacityBorder === index ? classes.ActiveBlock : 'div'}
                                            onClick={() => handleBothClick(index)}
                                        >{capacity}</div>
                                    ))}
                            </div>
                        </div>
                        <div className={classes.Info__Block_Item}>Оперативная память
                            <div className={classes.Item__info}>
                                <div className={classes.ActiveBlock}>{item.memory}</div>
                            </div>
                        </div>
                        <div className={classes.Info__Block_Item}>Процессор
                            <div className={classes.Item__info}>
                                <div className={classes.ActiveBlock}>{item.processor}</div>
                            </div>
                        </div>
                        <div className={classes.Info__Block_Item}>
                            <div className={classes.Price}>{currentPrice} сом</div>
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
                                        <pre></pre>
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
                                        <h1>Чипы</h1>
                                    </div>
                                    <div className={classes.Properties__Item_Info}>
                                        <pre>{item.chip}</pre>
                                    </div>
                                </div>
                                <div className={classes.Properties__Item}>
                                    <div className={classes.Properties__Item_Title}>
                                        <h1>Камера</h1>
                                    </div>
                                    <div className={classes.Properties__Item_Info}>
                                        <pre>{item.camera}</pre>
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
                                        <h1>Оптический идентификатор</h1>
                                    </div>
                                    <div className={classes.Properties__Item_Info}>
                                        <pre>{item.optical_identifier}</pre>
                                    </div>
                                </div>
                                <div className={classes.Properties__Item}>
                                    <div className={classes.Properties__Item_Title}>
                                        <h1>Аккумулятор</h1>
                                    </div>
                                    <div className={classes.Properties__Item_Info}>
                                        <pre>{item.battery}</pre>
                                    </div>
                                </div>
                                <div className={classes.Properties__Item}>
                                    <div className={classes.Properties__Item_Title}>
                                        <h1>Аудиотехнологии</h1>
                                    </div>
                                    <div className={classes.Properties__Item_Info}>
                                        <pre>{item.audio}</pre>
                                    </div>
                                </div>
                                <div className={classes.Properties__Item}>
                                    <div className={classes.Properties__Item_Title}>
                                        <h1>Возможность подключения и беспроводная связь</h1>
                                    </div>
                                    <div className={classes.Properties__Item_Info}>
                                        <pre>{item.connect_wireless}</pre>
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

