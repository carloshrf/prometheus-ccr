import React, { useState } from 'react';

import { 
  Container, 
  Content, 
  RegisterContent, 
  RegisterContainer, 
  Advice,
  ButtonsContainer
} from './styles';

import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Footer from '../../components/Footer';

const Login = () => {
  const [type, setTipe] = useState('fisical')

  const history = useHistory();

  const handleNavigate = (e) => {
    e.preventDefault();

    type === 'fisical'
      ? history.push('/usuario')
      : history.push('/parceiro')
  }

  document.title="Entrar";

  return (
    <Container>
      <Advice />
      <Content>
        <RegisterContainer>
          
          <h1>Faça login:</h1>

          <RegisterContent onSubmit={handleNavigate}>
            <div>
              <Input placeholder="e-mail" type="text" />
              <Input placeholder="senha" type="password"/>
            </div>
            <ButtonsContainer>
              <p>Você é:</p>

              <div>
                <label>
                  <Input type="radio" name="type" value="fisical" checked={type==='fisical'} onChange={() => setTipe('fisical')}/>
                  pessoa física
                </label>
                <label>
                  <Input type="radio" name="type" value="legal" onChange={() => setTipe('legal')}/>
                  pessoa jurídica
              </label>
              </div>
              
              <Button type="submit">Entrar</Button>
            </ButtonsContainer>
            
          </RegisterContent>
        </RegisterContainer>  

      </Content>
      <Footer />
    </Container>
  );
}

export default Login;