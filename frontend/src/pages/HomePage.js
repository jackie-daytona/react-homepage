import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function HomePage() {
    return (
        <>
        <h2>Home Page</h2>
        <article>
            <p>
                My career goals through studying Computer Science are to increase the ceiling on my earnings potential and to improve the flexibility of where and how I work. Traveling is my favorite hobby and something I've enjoyed for years, so becoming qualified to work in a field where positions are available around the planet is desirable for me. A goal of mine would be to work abroad for a few years in Europe and/or Australia/New Zealand. I've spent some time living on the Big Island of Hawaii, so moving back out there working remotely for a company based out of the West Coast is a possible 5-10 year goal I would like to make happen.
            </p>
            <p>
                Since this project is the final portfolio piece for my Intro to Web Development course at Oregon State, several technologies are incorporated into the making of this site. First and foremost, it is a full stack MERN application with MERN being:
                <ul>
                    <li>MongoDB: a document-oriented database management system (DBMS) that provides handling and servicing on organized collections of data</li>
                    <li>Express: a web application framework that builds RESTful APIs in conjunction with Node.js.</li>
                    <li>React: an open-source JavaScript library that builds user interfaces using components.</li>
                    <li>Node.js: a JavaScript runtime environment that executes JS code outside a browser.</li>
                </ul>
                REST, representational state transfer, is an architecture that provides ways for computers to communicate with one another through HTTP requests. Creating, reading, updating, and deleting resources are integral operations for modern websites (and RESTful systems), and these CRUD operations are utilized in my website. The three main languages of web development, HTML, CSS, and JavaScript, are also incorporated into this application.

            </p>
        </article>
        </>
    )
}

export default HomePage;