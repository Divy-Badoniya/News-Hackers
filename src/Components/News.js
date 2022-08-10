import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        pagesize: 20,
        category: 'general'
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            load: false,
            country: 'in',
            totalResults: 0
        }
        document.title = `${this.capitalize(this.props.category)}: News-Hackers`;
    }

    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    update_news = async () => {
        this.props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
        this.setState({
            load: true
        });
        this.props.setProgress(10);
        let data = await (await fetch(url)).json();
        this.setState({
            articles: this.state.articles.concat(data.articles),
            totalResults: data.totalResults,
            load: false
        });
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.update_news();
    }

    fetchMoreData = ()=>{
        this.setState({page: this.state.page+1});
        this.update_news();
    }

    render() {
        return (
            <>
                <h1 className='text-center' style={{marginTop: '60px'}}>{`News-Hackers: Top Headline from ${this.capitalize(this.props.category)}`}</h1>
                <div className='container my-3'>
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner />}
                    >
                        <div className="container">
                            <div className='row'>
                                {this.state.articles.map((element) => {
                                    return <div key={element.url} className='col-md-4'>
                                        <NewsItem title={element.title} description={element.description ? element.description.slice(0, 100) : ""} imageUrl={element.urlToImage} url={element.url} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>
                </div>
            </>
        )
    }
}

export default News