import { Link } from "react-router-dom";
import { whoAmI, getPreferences, PreferencesContext } from '../utils/utils.js';
import {useContext} from 'react';



function ArticleTeaser(props) {
    const time = new Date(props.time * 1000)
    const colorTheme = useContext(PreferencesContext);  
    return (
      // <PreferencesContext.Consumer>
        <div className={colorTheme}>
          <Link to={props.pageUrl} >{ props.title }</Link>
          <p>{ time.toLocaleDateString() }</p>
        </div>
      // </PreferencesContext.Consumer>
    )
  }
  
  export default ArticleTeaser;