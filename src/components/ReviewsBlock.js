import React from 'react';
import reviews from "../data/reviews";
import pencil from '../assets/icons/pencil.svg';


const ReviewsItem = (props) => {
    return (
        <div className="reviews__item">
            <div className="reviews__item__img">
                <img src={props.img} alt="icon"/>
            </div>
            <div className="reviews__item__title">
                <h4>{props.title}</h4>
                <div className="title__img">
                    <img src={pencil} alt="icon"/>
                </div>
            </div>
            <p className="reviews__item__content">{props.content}</p>
            <p className="reviews__item__date">{props.date}</p>
        </div>
    )
}

const ReviewsBlock = () => {
    return (
        <section className="page__reviewsblock reviews">
            <div className="reviews__container _container">
                <h3 className="reviews__title tl">Отзывы</h3>
                <div className="reviews__content">
                    {
                        reviews.map((item) => {
                            return (
                                <ReviewsItem
                                    key={item.id}
                                    img={item.img}
                                    title={item.title}
                                    content={item.content}
                                    date={item.date}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default ReviewsBlock;