import React from 'react';
import styles from './AdminAddProduct.module.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {urls} from "../../../data/constants";


const AdminAddProduct = () => {
    const save = (e) => {
        e.preventDefault();

        const title = e.target.titleProduct.value;
        const content = e.target.contentProduct.value
        const price = +e.target.priceProduct.value;
        const img = e.target.imgProduct.value;
        const group = e.target.group.value;

        const data = {
            img,
            title,
            price,
            content
        };

        const option = {
            method: "POST",
            headers:{
                "Content-Type":'application/json'
            },
            body:JSON.stringify(data)
        };

        fetch(urls[group], option)
            .then(response => {
                response.ok ? alert("Товар успешно создан") : alert("Что-то пошло не так");
            })
    }

    return (
        <div className={styles.container}>
            <h2>Добавление товаров</h2>
            <Form onSubmit={save}>
                <Form.Group className="mb-3" controlId="titleProduct">
                    <Form.Label>Название</Form.Label>
                    <Form.Control type="text" placeholder="Введите название"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="contentProduct">
                    <Form.Label>Описание</Form.Label>
                    <Form.Control type="text" placeholder="Введите описание"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="priceProduct">
                    <Form.Label>Цена</Form.Label>
                    <Form.Control type="number" placeholder="Введите цену продукта"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="imgProduct">
                    <Form.Label>Фото</Form.Label>
                    <Form.Control type="text" placeholder="Введите ссылку на изображение"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId='group'>
                    <Form.Label>Продукция</Form.Label>
                    <Form.Select>
                        <option value='0'>Выберите</option>
                        <option value='burgers'>Бургер</option>
                        <option value='pizza'>Пицца</option>
                        <option value='desserts'>Дессерт</option>
                        <option value='drinks'>Напиток</option>
                        <option value='rolls'>Ролл</option>
                        <option value='salads'>Салат</option>
                        <option value='sushi'>Суши</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Добавить
                </Button>
            </Form>
        </div>
    );
};

export default AdminAddProduct;