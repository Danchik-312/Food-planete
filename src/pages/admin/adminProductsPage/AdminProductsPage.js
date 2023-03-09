import React, {useEffect, useState} from 'react';
import styles from './AdminProductsPage.module.scss';
import {useParams} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {urls} from "../../../data/constants";
import AdminModule from "../../../components/adminModule/AdminModule";

const TableItem = (props) => {
    return(
        <tr>
            <td>{props.item.id}</td>
            <td>{props.item.title}</td>
            <td>{props.item.content}</td>
            <td>{props.item.price} сом</td>
            <td><img src={props.item.img} alt="image" className={styles.image}/></td>
            <td>
                <button className={styles.btn} onClick={() => props.handleShow(props.item)}>Редактировать</button>/
                <button className={styles.btn} onClick={() => props.deleteProduct(props.item.id)}>Удалить</button>
            </td>
        </tr>
    )
};

const AdminProductsPage = () => {
    const params = useParams();
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setShow(true);
        setProduct(item);
    }

    const getProducts = () => {
        fetch(urls[params.product])
            .then(response => response.json())
            .then(data => setProducts(data))
    }

    const deleteProduct = (id) => {
        const url = urls[params.product] + '/' + id;
        const option = {
            method: 'DELETE'
        }

        fetch(url,option)
            .then(response => {
                response.ok ? alert("Товар успешно удалён") : alert('Что-то пошло не так');
                getProducts();
            })
    }

    const update = (e) => {
        e.preventDefault();

        const title = e.target.titleProduct.value;
        const content = e.target.contentProduct.value
        const price = +e.target.priceProduct.value;
        const img = e.target.imgProduct.value;
        const id = e.target.idProduct.value;

        const data = {
            img,
            title,
            price,
            content
        };

        const url = urls[params.product] + '/' + id;

        const option = {
            method: "PUT",
            headers:{
                "Content-Type":'application/json'
            },
            body:JSON.stringify(data)
        };

        fetch(url, option)
            .then(response => {
                response.ok ? alert("Товар успешно изменён") : alert("Что-то пошло не так");
                getProducts();
            })
    }

    useEffect(getProducts, []);

    return (
        <div className={styles.container}>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Цена</th>
                    <th>Изображение</th>
                    <th>Действие</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map(item => {
                        return(
                            <TableItem
                                key={item.id}
                                item={item}
                                deleteProduct={deleteProduct}
                                handleShow={handleShow}
                            />
                            )
                    })
                }
                </tbody>
            </Table>
            <AdminModule
                show={show}
                data={product}
                handleClose={handleClose}
                handleSubmit={update}
            />
        </div>
    );
};

export default AdminProductsPage;