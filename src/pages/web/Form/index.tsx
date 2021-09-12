import { FormEvent, useCallback, useState } from 'react';
import {
  FiCalendar,
  FiHash,
  FiInfo,
  FiMail,
  FiUserCheck,
} from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';

import { Container, ContentForm, ContentInfo, Section } from './styled';
import LogoImg from '../../../assets/logo.png';
import { AiFillHome } from 'react-icons/ai';
import { useVoucher } from '../../../hooks/useVoucher';

import MaskedInput from 'react-maskedinput';

export function Form() {
  const { sendVoucher } = useVoucher();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [date_of_birth, setDate_of_birth] = useState('');
  const [how_did_you_find_us, setHow_did_you_find_us] = useState('');

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      sendVoucher({
        name,
        email,
        whatsapp,
        date_of_birth,
        how_did_you_find_us,
      });
      //console.log(name, email, whatsapp, date_of_birth, how_did_you_find_us);
    },
    [date_of_birth, email, how_did_you_find_us, name, sendVoucher, whatsapp]
  );

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
                    <input
                      type='text'
                      name='name'
                      placeholder='Nome'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
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
                    <input
                      type='text'
                      name='email'
                      placeholder='E-mail'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
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
                      <MaskedInput
                        mask='(11) 11111-1111'
                        type='text'
                        name='whatsapp'
                        placeholderChar=' '
                        placeholder='WhatsApp'
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                      />
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
                      <MaskedInput
                        mask='11/11/1111'
                        type='text'
                        placeholderChar=' '
                        name='date_of_birth'
                        placeholder='Nasc Date'
                        value={date_of_birth}
                        onChange={(e) => setDate_of_birth(e.target.value)}
                      />
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
                    <select
                      name='how_did_you_find_us'
                      id='cars'
                      value={how_did_you_find_us}
                      onChange={(e) => setHow_did_you_find_us(e.target.value)}
                    >
                      <option value=''>Como nos conheceu</option>
                      <option value='facebook'>Facebook</option>
                      <option value='google'>Google</option>
                      <option value='instagram'>Instagram</option>
                      <option value='site'>Site</option>
                      <option value='outros'>Outros</option>
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
