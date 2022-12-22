import React from 'react';
import NavBar from "./NavBar";
import Card from "./Card";
import burgers from "../data/burgers";

const NewBlock = () => {
    return (
        <section className="page__newblock new">
            <div className="new__container _container">
                <NavBar title='Новинки'/>
                <div className="new__content">
                    {
                       burgers.map((item) => {
                           return (
                               <Card
                                    key={item.id}
                                    color='green'
                                    img={item.img}
                                    title={item.title}
                                    content={item.content}
                                    price={item.price}
                                    colorBtn='orange'
                               />
                           )
                       })
                    }
                </div>
            </div>
        </section>
    )
}

export default NewBlock;
