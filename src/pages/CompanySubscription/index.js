import React from 'react';

import { 
  Container, 
  Content, 
  RegisterContent, 
  RegisterContainer, 
  CompanyData,
  MoreInfo,
  // PersonData, 
  LocalizationTag,
  Localization,
  EmailField,
  // TellAbout,
  Advice,
  ButtonsContainer
} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Footer from '../../components/Footer';

const CreateAccount = () => {

  const states = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'MatoGrosso',
  ];

  const cities = [
    'São Paulo',
    'Guarulhos',
    'Campinas',
    'São Bernardo do Campo',
    'São José dos Campos',
    'Santo André',
    'Ribeirão Preto',
    'Osasco',
    'Sorocaba'
  ];

  return (
    <Container>
      <Advice />
      <Content>
        <RegisterContainer>
          
          <h1>Preencha o formulário:</h1>

          <RegisterContent>
            <CompanyData>
              <p>Dados da empresa</p>
              <div>
                <Input placeholder="nome da empresa" type="text" />
                <Input placeholder="CNPJ" type="text"/>
                <Input placeholder="cadastro de senha" type="text"/>
                <Input placeholder="e-mail" type="text"/>
                <Input placeholder="telefone" type="text"/>
                <Input placeholder="confirmar senha" type="text"/>
              </div>
            </CompanyData>
            
            <MoreInfo>
              <Localization>
                <p>Qual a sua localização?</p>
                <div>
                  <Input gridArea="street" placeholder="endereço" />
                  <Input gridArea="city" placeholder="bairro" />
                  <Input gridArea="neighborhood" placeholder="cep" />
                  <Input gridArea="state" placeholder="cidade" />
                  <Input gridArea="zipcode" placeholder="estado" />
                </div>

                <select name="academic" id="academic" defaultValue="">
                  <option value="" disabled hidden>estados em que atua</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                
                <LocalizationTag>
                  <li>São Paulo <span>x</span></li>
                  <li>Mato Grosso <span>x</span></li>
                </LocalizationTag>

                <select name="academic" id="academic" defaultValue="">
                  <option value="" disabled hidden>cidades em que atua</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>

                <LocalizationTag>
                  <li>São Paulo <span>x</span></li>
                  <li>Cuiabá <span>x</span></li>
                </LocalizationTag>

              </Localization>

              <EmailField>
                <p>Se quiser, nos mande um e-mail!</p>
                <textarea placeholder="O que espero da Prometheus..." />
              </EmailField>
            </MoreInfo>

            {/* <AcademicTreining>
              <div>
                <p>Formação acadêmica</p>
                <select name="academic" id="academic" defaultValue="">
                  <option value="" disabled hidden>grau de formação</option>
                  <option value="incomplete-elementary">ensino fundamental incompleto</option>
                  <option value="complete-elementary">ensino fundamental completo</option>
                  <option value="incomplete-higher">ensino superior incompleto</option>
                  <option value="complete-higher">ensino superior complete</option>
                </select>
              </div>
              <div>
                <Input placeholder="qual curso você realizou" />
                <label>
                  Quais cursos te interessam?
                  <Input placeholder="administração" />
                </label>
                <span>#administracao</span>
              </div>
            </AcademicTreining> */}

            {/* <TellAbout>
              <p>Descreva, resumidamente, o que espera da Prometheus:</p>
              
            </TellAbout> */}

          </RegisterContent>
        </RegisterContainer>  

        <ButtonsContainer>
          <Button>terminei!</Button>
        </ButtonsContainer>

      </Content>
      <Footer />
    </Container>
  );
}

export default CreateAccount;