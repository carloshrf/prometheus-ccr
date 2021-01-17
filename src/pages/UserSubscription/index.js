import React from 'react';

import { 
  Container, 
  Content, 
  RegisterContent, 
  RegisterContainer, 
  LeftSide,
  RightSide, 
  PersonData, 
  Localization,
  RadioSection,
  AcademicTreining,
  TellAbout,
  Advice,
  ButtonsContainer
} from './styles';

import uploadImg from '../../assets/images/up.png';
import userImg from '../../assets/images/user.png';

import Button from '../../components/Button';
import SubmitItemButton from '../../components/Button/SubmitItemButton';
import Input from '../../components/Input';
import Footer from '../../components/Footer';

const UserSubscription = () => {

  return (
    <Container>
      <Advice>
        <p>É importante o preencimento desses dados para que possomas identificar mais facilmente quais cursos correspondem o seu perfil. Todos os cursos disponibilizados na plataforma são gratuitos e já existentes. Apenas facilitamos o seu encontro.</p>
      </Advice>
      <Content>
        <RegisterContainer>
          
          <h1>Preencha o formulário:</h1>

          <RegisterContent>
            <LeftSide>

              <PersonData>
                <p>Dados Pessoais</p>
                <Input placeholder="nome" type="text" />
                <Input placeholder="idade" width={100} type="number" />
                <Input placeholder="e-mail" type="email" />
              </PersonData>
              
              <Localization>
                <p>Localização</p>
                <div>
                  <Input gridArea="street" placeholder="endereço" />
                  <Input gridArea="city" placeholder="bairro" />
                  <Input gridArea="neighborhood" placeholder="cep" />
                  <Input gridArea="state" placeholder="cidade" />
                  <Input gridArea="zipcode" placeholder="estado" />
                </div>
              </Localization>

              <RadioSection>
                <p>Quais são seus principais meios de transporte?</p>

                <label>
                  <Input type="checkbox" />
                  ônibus
                </label>

                <label>
                  <Input type="checkbox" />
                  carro
                </label>
                
                <label>
                  <Input type="checkbox" />
                  trêm
                </label>

                <label>
                  <Input type="checkbox" />
                  metrô
                </label>

                <label>
                  <Input type="checkbox" />
                  trólebus
                </label>

                <label>
                  <Input type="checkbox" />
                  outro
                </label>
              </RadioSection>

            </LeftSide>
            <RightSide>
              <AcademicTreining>
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
              </AcademicTreining>
              
              <RadioSection>
                <p>Selecione as opções que mais te agradam</p>

                <label>
                  <Input type="checkbox" />
                  cursos de longa duração
                </label>

                <label>
                  <Input type="checkbox" />
                  cursos de curta duração
                </label>

                <label>
                  <Input type="checkbox" />
                  cursos sem certificação
                </label>

                <label>
                  <Input type="checkbox" />
                  cursos com certificação
                </label>

                <label>
                  <Input type="checkbox" />
                  cursos presenciais
                </label>

                <label>
                  <Input type="checkbox" />
                  cursos EAD
                </label>
              </RadioSection>

              <TellAbout>
                <p>Descreva, resumidamente, o que espera da Prometheus:</p>
                <textarea placeholder="O que espero da Prometheus..." />
              </TellAbout>

            </RightSide>
          </RegisterContent>
        </RegisterContainer>  

        <ButtonsContainer>
          <div>
            <SubmitItemButton label="colocar foto de perfil" buttonImage={userImg} />
            <SubmitItemButton label="subir currículo" buttonImage={uploadImg} />
          </div>
          <Button>terminei!</Button>
        </ButtonsContainer>

      </Content>
      <Footer />
    </Container>
  );
}

export default UserSubscription;