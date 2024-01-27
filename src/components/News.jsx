import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    // document.title = `${props.title}-NewsToday`;

    // constructor(props) {
    //     super(props);

    // }

    const updateNews = async () => {
        // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=27bef9b8b00b48dfb125eed296a894c6&page=${page}&pageSize=${props.pageSize}`;
        const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&apikey=3069bdf26adf8cceacf67d1233ab7dad&page=${page}&pageSize=${props.pageSize}`;
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles)
        setLoading(false)
        setTotalResults(data.totalResults)
        window.scrollTo(0,0)
    }

    useEffect(() => {
        updateNews();
    }, [])

    const previousPage = async() => {
        setPage(page-1);
        updateNews();
    };

    const nextPage = async() => {
        setPage(page+1);
        updateNews();
    };

    return (
        <>
            <div className='container'>
                <h2 className='mt-3 text-center'>Today's headline</h2>

                {loading ? (
                    <p className='text-secondary'>Loading...Please wait</p>
                ) : (
                    <div className="row">
                        <h4 className='mt-3'>News related to {props.title}</h4>

                        {articles.map((e) => (
                            e.title && (
                                <div className="col-md-4" key={e.url}>
                                    <NewsItem title={e.title || ''} desc={e.description || ''} url={e.image} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                                </div>
                            )
                        ))}
                    </div>
                )}
                <div className='d-flex justify-content-between my-5'>
                    <button disabled={page <= 1} onClick={previousPage} type="button" id='prev' className="btn btn-primary ">&larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} onClick={nextPage} type="button" id='next' className="btn btn-primary ">Next &rarr;</button>
                </div>
            </div>
        </>
    );
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize:PropTypes.number,
};
News.defaultProps = {
    country: 'in',
    pageSize: 6,
};



export default News

