// src/components/BookDetailsModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const BookDetailsModal = ({ show, onHide, book }) => {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>{book.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={book.cover} className="img-fluid" alt="Book Cover" />
                <h5>Author: {book.author}</h5>
                <p>Price: ${book.price}</p>
                <p>{book.description}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
                <Button variant="primary">Buy Now</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BookDetailsModal;
