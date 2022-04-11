
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Article from '../components/Article.js'
import axios from 'axios';

export const getData = (articleId)=>{
  return axios.get(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json`).then((response)=>{
    return response
  })
}

function ArticlePage() {
  const params = useParams()
  const articleId = params.articleID 

  const [article, setArticle] = useState({});
  
  useEffect(()=>{
    getData(articleId).then((response)=>{
      setArticle(response.data)
    })

  }, [articleId])


  return (
    <div>
      {
        article 
          ? <Article { ...article } /> 
          : <span>404: Article Not Found</span>
      }
    </div>
  );
}

export default ArticlePage;