import React from 'react';
import favorites from "../data/favorites";

const FavoriteItem = (props) => {
    return (
        <div className="favorite__item">
            <div className="favorite__item__img">
                <img src={props.img} alt="image"/>
            </div>
            <h4 className="favorite__item__title">{props.title}</h4>
            <p className="favorite__item__content">{props.content}</p>
        </div>
    )
}

const FavoriteBlock = () => {
    return (
        <section className="page__favoriteblock favorite">
            <div className="favorite__container _container">
                <h3 className="favorite__title tl">Почему выбирают нас:</h3>
                <div className="favorite__content">
                    {
                        favorites.map((item) => {
                            return (
                                <FavoriteItem
                                    key={item.id}
                                    img={item.img}
                                    title={item.title}
                                    content={item.content}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default FavoriteBlock;