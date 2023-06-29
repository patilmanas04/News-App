import React, { Component } from "react";
import NewsCard from "./NewsCard";
import LoadingSkeleton from "./LoadingSkeleton";
import PropTypes from 'prop-types';

class News extends Component{
    static defaultProps = {
        category: "general"
    }

    static propTypes = {
        category: PropTypes.string.isRequired
    }

    capitalizeString = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        this.state = {
            articles: [],
            currentPage: 1,
            maxPages: undefined,
            loading: false,
        }
        document.title = `${this.capitalizeString(this.props.category)} - Expresss News`;
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6a2d58fd50ad44d8a3044ac1840275bd&page=${this.state.currentPage}`;
        this.setState({loading: true});
        this.props.updateLoadingProgress(30);
        let data = await fetch(url);
        this.props.updateLoadingProgress(60);

        try{
            if(data.ok){
                let parsedData = await data.json();
                this.props.updateLoadingProgress(80);
                this.setState({
                    articles: parsedData.articles,
                    maxPages: Math.ceil(parsedData.totalResults/20),
                    loading: false,
                })
                this.props.updateLoadingProgress(100);

            }
            else{
                throw new Error("Something went wrong while fetching data, please refresh to try again.");
            }
        }
        catch(error){
            console.log(error)
        }
    }

    changeToNextPage = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6a2d58fd50ad44d8a3044ac1840275bd&page=${this.state.currentPage+1}`;
        this.setState({loading: true});
        let data = await fetch(url);

        try{
            if(data.ok){
                let parsedData = await data.json();
                this.setState({
                    articles: parsedData.articles,
                    currentPage: this.state.currentPage+1,
                    loading: false
                })
            }
            else{
                throw new Error("Something went wrong while fetching data, please refresh to try again.");
            }
        }
        catch(error){
            console.log(error)
        }

        window.scrollTo(0, 0);
    }

    changeToPrevPage = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6a2d58fd50ad44d8a3044ac1840275bd&page=${this.state.currentPage-1}`;
        this.setState({loading: true});
        let data = await fetch(url);

        try{
            if(data.ok){
                let parsedData = await data.json();
                this.setState({
                    articles: parsedData.articles,
                    currentPage: this.state.currentPage-1,
                    loading: false
                })
            }
            else{
                throw new Error("Something went wrong while fetching data, please refresh to try again.");
            }
        }
        catch(error){
            console.log(error)
        }

        window.scrollTo(0, 0);
    }

    render(){
        let {theme} = this.props;
        return (
            <>
            <div className="news">
                {this.state.loading && <LoadingSkeleton theme={theme}/>}

                {
                    !this.state.loading && this.state.articles.map((article, index) => {
                        return <NewsCard key={index} theme={theme} title={article.title} description={article.description} url={article.url} urlToImage={article.urlToImage} author={article.author} date={article.publishedAt} />
                    })
                }
            </div>
            {
                !this.state.loading && <div className="page-controls">
                    <button type="button" className={`control-btn prev-btn ${(this.state.currentPage<=1)?'disabled':'enabled'}-btn`} onClick={this.changeToPrevPage}>&larr; Previous page</button>
                    
                    <button type="button" className={`control-btn next-btn ${(this.state.currentPage>=this.state.maxPages)?'disabled':'enabled'}-btn`} onClick={this.changeToNextPage}>Next page &rarr;</button>
                </div>
            }
            </>
        )
    }
}

export default News;