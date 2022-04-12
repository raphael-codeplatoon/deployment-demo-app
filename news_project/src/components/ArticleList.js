// import "./articleList.css"
import { ListGroup } from 'react-bootstrap';
import ArticleTeaser from './ArticleTeaser.js';
import {useContext} from 'react';
import { PreferencesContext } from '../utils/utils.js';

function ArticleList(props) {
  const colorTheme = useContext(PreferencesContext);  

  return (
    <ListGroup>

      { 
        props.articles.map((article, index) => (
          <ListGroup.Item key={index} className={colorTheme}>
            <ArticleTeaser pageUrl={`/articles/${article.id}`}  { ...article } id={ article.id } />
          </ListGroup.Item>
        ))
      }
    </ListGroup>
  )
}

export default ArticleList;