import { Container, ContentForm, ContentInfo, Section } from './styled';
import LogoImg from '../../../assets/logo.png';
import { AiFillHome } from 'react-icons/ai';
import {
  FiCalendar,
  FiHash,
  FiInfo,
  FiMail,
  FiUserCheck,
} from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FormEvent } from 'react';
import { useHistory } from 'react-router';

export function Form() {
  const history = useHistory();

  function handleSubmit(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    history.push('congratulations');
  }

  return (
    <>
      <Section>
        <Container>
          <ContentInfo className='content'>
            <a className='header' href='/'>
              <img src={LogoImg} alt='Logo' />
              <button>
                <AiFillHome />
                <span>Voltar para o site</span>
              </button>
            </a>
            <div className='body'>
              <h1>
                Hoje vai ser <br /> Uma Festa!
              </h1>
              <h3>
                Aqui no{' '}
                <strong className='highlight'>Botequinho do Brawziin</strong>{' '}
                aniversariante do dia ganha rodízio gratis
              </h3>
              <p>
                Válido somente no dia do seu aniversário,{' '}
                <strong>
                  MEDIANTE APRESENTAÇÃO DO VOUCHER IMPRESSO E DOCUMENTO DE
                  INDENTIFICAÇÃO COM FOTO.
                </strong>
                Consultar horário de funcionamento no site Botequinho do
                Brawziin. Bebidas e sobremesas, 10% a parte. Cadastre-se 2 dias
                antes para enviarmos seu voucher.
              </p>
            </div>
          </ContentInfo>
          <ContentForm>
            <form>
              <header>
                <h3>Quer receber seu voucher de Aniversário grátis</h3>
                <p>
                  Basta preecher o formulário abaixo para recebê-lo em seu
                  e-mail
                </p>
              </header>
              <main>
                <div className='input-group'>
                  <div className='content'>
                    <div className='icon'>
                      <FiUserCheck />
                    </div>
                    <input type='text' name='name' placeholder='Nome' />
                  </div>
                  <div className='message'>
                    <FiInfo />
                    <span>You Error</span>
                  </div>
                </div>

                <div className='input-group'>
                  <div className='content'>
                    <div className='icon'>
                      <FiMail />
                    </div>
                    <input type='text' name='name' placeholder='E-mail' />
                  </div>
                  <div className='message'>
                    <FiInfo />
                    <span>You Error</span>
                  </div>
                </div>

                <div className='grid-group'>
                  <div className='input-group'>
                    <div className='content'>
                      <div className='icon'>
                        <AiOutlineWhatsApp />
                      </div>
                      <input type='text' name='name' placeholder='WhatsApp' />
                    </div>
                    <div className='message'>
                      <FiInfo />
                      <span>You Error</span>
                    </div>
                  </div>

                  <div className='input-group'>
                    <div className='content'>
                      <div className='icon'>
                        <FiCalendar />
                      </div>
                      <input type='text' name='name' placeholder='Data Nasc' />
                    </div>
                    <div className='message'>
                      <FiInfo />
                      <span>You Error</span>
                    </div>
                  </div>
                </div>

                <div className='input-group'>
                  <div className='content'>
                    <div className='icon'>
                      <FiHash />
                    </div>
                    <select name='cars' id='cars'>
                      <option value=''>Como nos conheceu</option>
                      <option value='Facebook'>Facebook</option>
                      <option value='Google'>Google</option>
                      <option value='Instagram'>Instagram</option>
                      <option value='Site'>Site</option>
                      <option value='Outros'>Outros</option>
                    </select>
                  </div>
                  <div className='message'>
                    <FiInfo />
                    <span>You Error</span>
                  </div>
                </div>

                <div className='input-captcha'>
                  <div className='content'>
                    <span>
                      Quanto é <strong>4</strong> + <strong>5</strong> :
                    </span>
                    <input type='text' />
                  </div>
                  <button type='submit' onClick={handleSubmit}>
                    Receber voucher
                  </button>
                </div>
              </main>
            </form>
          </ContentForm>
        </Container>
      </Section>
    </>
  );
}
