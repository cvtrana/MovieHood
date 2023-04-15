import React from "react";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Header from "../../components/header/Header";

const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <Header/>
            <ContentWrapper>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </ContentWrapper>
            <Footer/>
        </div>
    );
};

export default PageNotFound;