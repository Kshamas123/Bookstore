// src/App.js
import React from 'react';
import NavigationBar from './components/Navbar';
import BookCarousel from './components/Carousel';
import BookCard from './components/BookCard';
import Footer from './components/Footer';

const books = [
    {
        cover: 'book-cover1.jpg',
        title: 'Book Title 1',
        author: 'Author 1',
        price: 10.99,
        description: 'Brief description of the book...',
    },
    {
        cover: 'book-cover2.jpg',
        title: 'Book Title 2',
        author: 'Author 2',
        price: 12.99,
        description: 'Brief description of the book...',
    },
    {
        cover: 'book-cover3.jpg',
        title: 'Book Title 3',
        author: 'Author 3',
        price: 15.99,
        description: 'Brief description of the book...',
    },
    // Add more books as needed
];

const App = () => {
    return (
        <div>
            <NavigationBar />
            <BookCarousel />
            <div className="container mt-5">
                <div className="row">
                    {books.map((book, index) => (
                        <div className="col-md-4" key={index}>
                            <BookCard book={book} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
