import React from 'react';

import { 
  Container, 
  Content, 
  RegisterContent, 
  RegisterContainer, 
  CompanyData,
  MoreInfo,
  LocalizationTag,
  Localization,
  EmailField,
  Advice,
  ButtonsContainer
} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Footer from '../../components/Footer';

const CreateAccount = () => {

  return (
    <Container>
      <Advice />
      <Content>
        <RegisterContainer>
          
          <h1>Faça login:</h1>

          <RegisterContent>
            <div>
              <Input placeholder="e-mail" type="text" />
              <Input placeholder="senha" type="password"/>
            </div>
            <ButtonsContainer>
              <p>Você é:</p>

              <div>
                <label>
                  <Input type="radio" name="type" value="fisical" />
                  pessoa física
                </label>
                <label>
                  <Input type="radio" name="type" value="legal" />
                  pessoa jurídica
              </label>
              </div>
              
              <Button>terminei!</Button>
            </ButtonsContainer>
            
          </RegisterContent>
        </RegisterContainer>  

      </Content>
      <Footer />
    </Container>
  );
}

export default CreateAccount;