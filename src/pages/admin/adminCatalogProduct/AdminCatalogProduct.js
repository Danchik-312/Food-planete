import React, {useEffect, useState} from 'react';
import styles from './AdminCatalogProduct.module.scss';
import {urls} from "../../../data/constants";
import {Link} from "react-router-dom";
import classes from 'classnames';

const CatalogCard = (props) => {
    return (
        <Link to={props.item.link} className={styles.card}>
            <img src={props.item.img} alt="image"/>
            {props.item.title}
        </Link>
    )
}

const AdminCatalogProduct = () => {
    const [items, setItems] = useState([]);

    const getCatalog = () => {
        fetch(urls.catalog)
            .then(response => response.json())
            .then(data => setItems(data))
    }

    useEffect(getCatalog, []);
    return (
        <div className='wrapper'>
            <div className={classes(styles.page__admin, "page")}>
                <div className={classes(styles.admin__container, "_container")}>
                    {
                        items.map(item => {
                            return(
                                <CatalogCard
                                    key={item.id}
                                    item={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminCatalogProduct;