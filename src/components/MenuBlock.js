import React from 'react';
import NavBar from "./NavBar";
import Card from "./Card";
import pizza from "../data/pizza";

const MenuBlock = () => {
    return (
        <section className='page__menublock menu'>
            <div className="menu__container _container">
                <NavBar title='Меню'/>
                <div className="menu__content">
                    <div className="menu__sort">
                        <p className='menu__text'>Сортировка по:</p>
                        <select name="sort" id="sort" className="menu__select">
                            <option value="standart" selected>По умолчанию</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                    <div className="menu__content__items">
                        {
                            pizza.map((item) => {
                                return (
                                    <Card
                                        color='white'
                                        img={item.img}
                                        title={item.title}
                                        content={item.content}
                                        price={item.price}
                                        colorBtn='gr'
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuBlock;