import ArticleList from '../components/ArticleList.js'
import axios from 'axios';
import { useEffect, useState } from 'react';




function HomePage() {
    const [articles, setArticles] = useState([])

    useEffect(()=>{
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then((response)=>{
            const promises = []
            for ( let i =0; i < 10; i++ ) {
                promises.push(axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[i]}.json`))
            }

            Promise.all(promises).then((responses)=>{
                setArticles(responses.map((response)=>{
                    return response.data
                }))
            })
        })
    }, [])

    return (
        <div> <ArticleList articles={articles} /> </div>
    )
}

export default HomePage;