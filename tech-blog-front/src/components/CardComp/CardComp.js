import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

function RenderCard({ item }) {
    return (
        <div>
            <Card className="m-3" style={{ width: '18rem' }}>
                <CardImg top src="/assets/images/2.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5"><Link to="/">{item.title}</Link></CardTitle>
                    <CardText>Rating : {item.rating}</CardText>
                    <CardText>Website : {item.website}</CardText>

                </CardBody>
            </Card>
        </div>
    );
}


function CardComp() {

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src="/assets/images/left-arrow.svg" alt="prevArrow" {...props} />
      );
    
      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src="/assets/images/right-arrow.svg" alt="nextArrow" {...props} />
      );

    const data = [
        {
            id: "1",
            image_url: "/assets/images/2.jpg",
            title: "Front-end Development using React.js",
            rating: "4.5",
            website: "Coursera"
        },
        {
            id: "2",
            image_url: "/assets/images/2.jpg",
            title: "Front-end Development using React.js",
            rating: "5",
            website: "Coursera"
        },
        {
            id: "3",
            image_url: "/assets/images/2.jpg",
            title: "Front-end Development using React.js",
            rating: "6",
            website: "Coursera"
        },
        {
            id: "3",
            image_url: "/assets/images/2.jpg",
            title: "Front-end Development using React.js",
            rating: "7",
            website: "Coursera"
        },
        {
            id: "3",
            image_url: "/assets/images/2.jpg",
            title: "Front-end Development using React.js",
            rating: "8",
            website: "Coursera"
        }
    ];

    const items = data.map((item) => {
        return (
            <RenderCard item={item} /> 
        );
    })

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />
    };
    return (
        <div className="container">
            <h2> Web Development </h2>
            <Slider {...settings}>
                {items}
            </Slider>
        </div>
    );
}

export default CardComp

