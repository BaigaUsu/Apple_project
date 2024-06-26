import classes from './AllPages.module.scss'
import { Link, NavLink, useLoaderData} from 'react-router-dom';
import { Icon } from '../../components/Icon/Icon';
import { Button } from '../../components/Button/Button';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';

export function Watch() {
    const item = useLoaderData();
    const colors = item.colors.map(color => color.color);
    const icons = item.colors.map(color => color.color_image);

//----------------------- КНОПКА ИКОНКИ ДЛЯ ПЕРЕКЛЮЧЕНИЯ КАРТИНОК И ВЫДЕЛЕНИЕ БЛОКОВ -----------------------
    const img = item.colors.map(img => img.product_images[0].product_image)
    const img_1 = item.colors[0].product_images;
    const img_2 = item.colors[1].product_images;

    const [currentButtomImage, setcurrentButtomImage] = useState(img_1);
    const [currentButtomImage_2, setcurrentButtomImage_2] = useState(img_2);
    const [currentImage, setCurrentImage] = useState(img[0]);
    const [selectedBlock, setSelectedBlock] = useState(0);
    const handleAllClick = (index) => {
        setCurrentImage(img[index]);
        setcurrentButtomImage(item.colors[index].product_images);
        setcurrentButtomImage_2(item.colors[index].product_images);
        setSelectedBlock(index);
    };
    const hadnleIconClick = (index) => {
        handleAllClick(index);
    }
//----------------------------------------------------------------------------------

//----------------------- КНОПКА САМИХ КАРТИНОК ДЛЯ ИХ ВЫБОРА -----------------------------------
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
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        })
    }, [])

  return (
    <div className={classes.App}>
        <Header/>
        <div className={classes.Main__Block}>
            <div className={classes.Container}>
                <div className={classes.Navigation}>
                    <ul>
                        <li><Link to="/" className={classes.Link}><Icon name={'home'}/></Link></li>
                        <p></p>
                        <li><Link to="/Items?category=Watch" className={classes.Link}>{item.category} </Link></li>
                        <p></p>
                        <li>{item.name}</li>
                    </ul>
                </div>
                <div className={classes.Inner_Block}>
                    <div className={classes.Image__Block}>
                        <div className={classes.Image__Block_Upper}>
                            <img src={currentImage} alt="Main product image" />
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
                                    className={selectedBlock === index ? classes.ActiveBlock : 'img'}
                                    onClick={() => hadnleIconClick(index)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className={classes.Info__Block_Item}>Размер корпуса
                            <div className={classes.Item__info}>
                                <div className={classes.ActiveBlock}>{item.size_and_weight}</div>
                            </div>
                        </div>
                        <div className={classes.Info__Block_Item}>Возможности подключения
                            <div className={classes.Item__info}>
                                <div className={classes.ActiveBlock}>{item.connect_type}</div>
                            </div>
                        </div>
                        <div className={classes.Info__Block_Item}>Модель
                            <div className={classes.Item__info}>
                                <div className={classes.ActiveBlock}>{item.watch_model}</div>
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
                                        <pre>{item.article}</pre>
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
                                        <h1>Основные</h1>
                                    </div>
                                    <div className={classes.Properties__Item_Info}>
                                        <pre>{item.description}</pre>
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

