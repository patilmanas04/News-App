import React, { Component } from "react";

class LoadingSkeleton extends Component{
    render(){
        let {theme} = this.props;

        return (
            <>
            <div className="news-card" data-theme={theme}>
                <div className="skeleton skeleton-img"></div>
                <div className="news-card-content">
                    <h2 className="news-card-content-title" data-theme={theme}>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                    </h2>
                    <div className="news-card-content-description" data-theme={theme}>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                    </div>
                    <div className="skeleton skeleton-btn"></div>
                </div>
            </div>

            <div className="news-card" data-theme={theme}>
                <div className="skeleton skeleton-img"></div>
                <div className="news-card-content">
                    <h2 className="news-card-content-title" data-theme={theme}>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                    </h2>
                    <div className="news-card-content-description" data-theme={theme}>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                    </div>
                    <div className="skeleton skeleton-btn"></div>
                </div>
            </div>

            <div className="news-card" data-theme={theme}>
                <div className="skeleton skeleton-img"></div>
                <div className="news-card-content">
                    <h2 className="news-card-content-title" data-theme={theme}>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                    </h2>
                    <div className="news-card-content-description" data-theme={theme}>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                    </div>
                    <div className="skeleton skeleton-btn"></div>
                </div>
            </div>

            <div className="news-card" data-theme={theme}>
                <div className="skeleton skeleton-img"></div>
                <div className="news-card-content">
                    <h2 className="news-card-content-title" data-theme={theme}>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                    </h2>
                    <div className="news-card-content-description" data-theme={theme}>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                    </div>
                    <div className="skeleton skeleton-btn"></div>
                </div>
            </div>

            <div className="news-card" data-theme={theme}>
                <div className="skeleton skeleton-img"></div>
                <div className="news-card-content">
                    <h2 className="news-card-content-title" data-theme={theme}>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                    </h2>
                    <div className="news-card-content-description" data-theme={theme}>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                    </div>
                    <div className="skeleton skeleton-btn"></div>
                </div>
            </div>
            </>
        )
    }
}

export default LoadingSkeleton