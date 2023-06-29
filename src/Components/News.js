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

    updateArticles = async(pageNo)=>{
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.newsApiKey}&page=${pageNo?pageNo:this.state.currentPage}`;
        this.setState({loading: true});
        this.props.updateLoadingProgress(30);
        const data = await fetch(url);
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

    async componentDidMount(){
        this.updateArticles()
    }

    changeToNextPage = async()=>{
        this.setState({
            currentPage: this.state.currentPage+1
        })
        this.updateArticles(this.state.currentPage+1);
    }

    changeToPrevPage = async()=>{
        this.setState({
            currentPage: this.state.currentPage-1
        })
        this.updateArticles(this.state.currentPage-1);
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