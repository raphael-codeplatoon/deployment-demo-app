import ArticleList from '../components/ArticleList.js'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";




function SectionPage() {
    const [articles, setArticles] = useState([])

    const params = useParams()

    const sectionId = params.sectionID 
    useEffect(()=>{
        axios.get(`https://hacker-news.firebaseio.com/v0/${sectionId}.json?print=pretty`).then((response)=>{
            console.log(response, '!!')
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
    }, [sectionId])

    return (
        <div> <ArticleList articles={articles} /> </div>
    )
}

export default SectionPage;