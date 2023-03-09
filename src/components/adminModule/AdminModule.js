import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";

const AdminModule = ({show,handleClose,handleSubmit,data}) => {

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Редактирование</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="titleProduct">
                        <Form.Label>Название</Form.Label>
                        <Form.Control type="text" defaultValue={data.title}/>
                    </Form.Group>
                    <input type="hidden" value={data.id} id='idProduct'/>
                    <Form.Group className="mb-3" controlId="contentProduct">
                        <Form.Label>Описание</Form.Label>
                        <Form.Control type="text" defaultValue={data.content}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="priceProduct">
                        <Form.Label>Цена</Form.Label>
                        <Form.Control type="number" defaultValue={data.price}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="imgProduct">
                        <Form.Label>Фото</Form.Label>
                        <Form.Control type="text" defaultValue={data.img}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={() => handleClose()}>
                        Изменить
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
};

export default AdminModule;