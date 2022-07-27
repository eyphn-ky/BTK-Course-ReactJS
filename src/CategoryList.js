import React, { Component } from 'react'
import { ListGroup,ListGroupItem } from 'reactstrap'
export default class CategoryList extends Component {

    state={
      categories:[]
    };
componentDidMount(){//reactta ilk componentler yüklenir daha sonra render fonksiyonları çalışır. Render'lar çalıştırılmadan hemen önce çalışacak fonksiyonları çalıştırmak için ComponentDidMount kullanılır
  this.getCategories();
}

getCategories =()=>{
  fetch("http://localhost:3000/categories")//fetch => javascriptten gelir promise döner 
  .then(response=>response.json())//apiden geleni jsona çevirdik
  .then(data=>this.setState({categories:data}));
}
/*Bilgi : .map is not a function hatası map fonksiyonunun parametre olarak array almadığı zamanlarda ortaya çıkar gönderilen değeri incele*/
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
<ListGroup>
  {
    this.state.categories.map(category=>
      <ListGroupItem onClick={()=>this.props.changeCategory(category)} key={category.id}> 
      {category.categoryName}
      </ListGroupItem>//key value şeklinde olmak zorunda
    )
  }
  </ListGroup>
<h4>{this.props.currentCategory}</h4>
      </div>
    )
  }
}
