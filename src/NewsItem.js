import axios from 'axios';
import React from 'react'
import {useEffect, useState} from 'react'
import Spinner from './Spinner'


function NewsItem(props) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(1);
    const [loading, setLoading] = useState(true);
    const {category, setProgress} = props

    useEffect(()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=2685b11cc34147c393c2fd44153a5d60&page=${page}&pageSize=9`;
      axios.get(url).then((data)=>{
        setTotalResults(data.data.totalResults)
        setArticles(articles.concat(data.data.articles))
        setLoading(false)
      })
      //eslint-disable-next-line
    },[category, page])

    const handlNext = ()=> {
      setProgress(10)
      setPage(page+1)
      setProgress(100)
    }

    // 48fd4d3a53344435b39f135ca25f0b8d
    // 2685b11cc34147c393c2fd44153a5d60
   

 

  return (
    <>
      <h2 className='text-center'>Top {'general'?"":props.category} Headlines--</h2>
       
        <div className='container my-3'>
        <div className='row'>
        {articles && articles.map((e, idx) => {
          let date = new Date(e.publishedAt);
          let d = date.toGMTString()
          return  <div className='col-md-4' key={idx}>
                      <div className='my-3'>
                        <div className='card' style={{width: "18rem"}}>
                          <span className="badge badge-pill badge-dark" style={{position:"absolute", float:"right", right:"0px"}}>{e.source.name}</span>
                          <img src={e.urlToImage} className="card-img-top" alt='...'/>
                          <div className='card-body'>
                            <h5 className='card-title'>{e.title}</h5>
                            <p className='card-text'>{e.description}</p>
                            <p className='card-text'>by {e.author}</p>
                            <p className='card-text'>{d}</p>
                            <a href={e.url} target="_blank" rel='noReferrer' className='btn btn-sm btn-primary'>Read more</a>
                          </div>
                        </div>
                      </div>
                  </div>
                })}
                {loading && <Spinner />}
        </div>
        <div className="d-flex justify-content-end">
          <button disabled={articles.length === totalResults} type='button' className="btn btn-secondary" onClick={handlNext}>Next &#8594;</button>
        </div>
    </div>
    </>
  )
}
NewsItem.defaultProps = {
  category: "general",
  page: "1",
}
export default NewsItem
