// import "./articleList.css"
import { ListGroup } from 'react-bootstrap';
import ArticleTeaser from './ArticleTeaser.js';


function ArticleList(props) {
  return (
    <ListGroup>

      { 
        props.articles.map((article, index) => (
          <ListGroup.Item key={index} className={index % 2 ? "odd-item" : "even-item"}>
            <ArticleTeaser pageUrl={`/articles/${article.id}`}  { ...article } id={ article.id } />
          </ListGroup.Item>
        ))
      }
    </ListGroup>
  )
}

export default ArticleList;