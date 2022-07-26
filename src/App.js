import './App.css';
import CategoryList from './CategoryList';
import Navi from './Navi';
import ProductList from './ProductList';
import {Row,Col,Container} from 'reactstrap';

function App() {
  let categoryInfo={title:"Category List"};
  let productInfo={title:"Product List"};
  return (
    <Container>
      <Row>
        <Navi/>
      </Row>
      <Row>
        <Col xs="3">
          <CategoryList info={categoryInfo}/>
        </Col>
        <Col xs="9">
          <ProductList info={productInfo}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
