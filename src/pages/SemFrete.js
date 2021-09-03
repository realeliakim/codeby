import React, { useEffect, useState } from 'react';
import { Container } from '../components/Container';
import { Title } from '../components/Title';
import { Button } from '../components/Button';
import '../styles/global.css';
import api from '../services/semFrete';

export function SemFrete() {

  const [ produtos, setProdutos ] = useState([]);

  useEffect(()=>{
    async function loadProdutos(){
      const response = await api.get();
      setProdutos(response.data.items);
    }

    loadProdutos();
    
  }, []);


  const valorTotal = produtos.reduce(getTotal, 0);
    function getTotal(total, item) {
      return total + item.sellingPrice;
  }
  console.log(produtos);
  const count = valorTotal.toFixed(2)/100;

  return (
    <div>
    <Container>
      <Title />
      {produtos.map((item)=>{
        var listPrice = item.listPrice.toFixed(2)/100;
        var sellingPrice = item.sellingPrice.toFixed(2)/100;
        return(
          <div className="conteudo" key={item.id}>
            <div className="image">
              <img src={item.imageUrl} alt="" />
            </div>
            <div className="nome">
              {item.name}
              <br />
              <span className="listPrice">{listPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
              <br />
              <span className="sellingPrice">{sellingPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
          </div>
        )
      })}
      <hr />
      <div className="total">
        <div className="texto">
          <span>Total</span>
        </div>
        <div className="valor">
          {count.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </div>
      </div>
      <hr />
      <div className="botao">
        <Button type="submit">
          Finalizar compra
        </Button>
      </div>
    </Container>
    </div>
  );
}
