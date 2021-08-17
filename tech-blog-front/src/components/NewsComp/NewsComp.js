import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, ListGroupItemHeading } from 'reactstrap';


function RenderNews({ article }) {
    return (
        <div>
            <Card className="m-3" style={{ width: '18rem' }}>
                <CardImg top src={article.urlToImage} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5"><Link to={article.url}>{article.title}</Link></CardTitle>
                    <span>Published By: {article.source.name}</span>

                </CardBody>
            </Card>
        </div>
    );
}

function NewsComp() {

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src="/assets/images/left-arrow.svg" alt="prevArrow" {...props} />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src="/assets/images/right-arrow.svg" alt="nextArrow" {...props} />
    );

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://newsapi.org/v2/everything?q="reactjs"&apiKey=dc02bffccf1248838e764b57c3b55c93`
            )
            .then((response) => setArticles(response.data.articles))
            .catch((error) => console.log(error));
    }, []);

    console.log(articles);


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />
    };


    return (
        <div className="container">
            <h2> News Articles</h2>
            <Slider {...settings}>
                {articles.map((article) => (
                    <RenderNews article={article} key={article.url} />
                ))}

            </Slider>
        </div>
    );
}

export default NewsComp;
