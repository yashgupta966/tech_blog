import React from 'react';
import './WebdComp.css';
import CardComp from '../CardComp/CardComp';
import NewsComp from '../NewsComp/NewsComp';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function WebdComp() {
    return (
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Webd</BreadcrumbItem>
            </Breadcrumb>

            <CardComp />
            <CardComp />
            <CardComp />
            <NewsComp />
            <NewsComp />
        </div>
    )
}

export default WebdComp
