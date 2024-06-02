// src/components/BookCard.js
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import BookDetailsModal from './BookDetailsModal';

const BookCard = ({ book }) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Card style={{ width: '18rem', marginBottom: '20px' }}>
                <Card.Img variant="top" src={book.cover} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        Author: {book.author}
                    </Card.Text>
                    <Card.Text>
                        Price: ${book.price}
                    </Card.Text>
                    <Card.Text>
                        {book.description}
                    </Card.Text>
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                        View Details
                    </Button>
                    <Button variant="secondary" style={{ marginLeft: '10px' }}>
                        Add to Cart
                    </Button>
                </Card.Body>
            </Card>

            <BookDetailsModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                book={book}
            />
        </>
    );
};

export default BookCard;
