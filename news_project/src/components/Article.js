import { Container, Row, Col } from 'react-bootstrap';
import { formatTime } from '../utils/utils.js';
function Article(props) {
  const time = new Date(props.time * 1000)

  return (
    <Container>
      <h1>{ props.title }</h1>
      <p>{ props.created_date }</p>
      <Row>
        <Col md="4">
          <p>{ formatTime(time) }</p>
        </Col>
        <Col md="8">
          <a id="read-more" href={props.url}>Read The full article</a>
        </Col>
      </Row>
    </Container>
  )
}

export default Article;