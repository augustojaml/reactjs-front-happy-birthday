import { FormEvent, useCallback, useState } from 'react';
import { FiCalendar, FiHash, FiMail, FiUserCheck } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';

import { Container, ContentForm, ContentInfo, Section } from './styled';
import LogoImg from '../../../assets/logo.png';
import { AiFillHome } from 'react-icons/ai';
import { useVoucher } from '../../../hooks/useVoucher';

import { Input } from '../../../components/Input/Index';
import { InputMask } from '../../../components/Input/InputMask';
import { InputSelect } from '../../../components/Input/InputSelect';
import { InputCaptcha } from '../../../components/Input/InputCaptcha';
import { useHistory } from 'react-router';

const selecteds = [
  {
    key: 'facebook',
    value: 'Facebook',
  },
  {
    key: 'google',
    value: 'Google',
  },
  {
    key: 'instagram',
    value: 'Instagram',
  },
  {
    key: 'site',
    value: 'Site',
  },
  {
    key: 'outros',
    value: 'Outros',
  },
];

export function Form() {
  const history = useHistory();

  const { sendVoucher, errors } = useVoucher();
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [date_of_birth, setDate_of_birth] = useState('');
  const [how_did_you_find_us, setHow_did_you_find_us] = useState('');

  function resetForm() {
    setName('');
    setEmail('');
    setWhatsapp('');
    setDate_of_birth('');
    setHow_did_you_find_us('');
  }

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setLoading(true);
      const voucher = await sendVoucher({
        name,
        email,
        whatsapp,
        date_of_birth,
        how_did_you_find_us,
      });
      resetForm();
      history.push({
        pathname: 'congratulations',
        state: {
          detail: {
            name: voucher.name,
            email: voucher.email,
          },
        },
      });
      setLoading(false);
    },
    [
      date_of_birth,
      email,
      history,
      how_did_you_find_us,
      name,
      sendVoucher,
      whatsapp,
    ]
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
                <Input
                  icon={FiUserCheck}
                  placeholder='Nome'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  message={errors.name && errors.name}
                />

                <Input
                  icon={FiMail}
                  placeholder='E-mail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  message={errors.email && errors.email}
                />

                <div className='grid-group'>
                  <InputMask
                    icon={AiOutlineWhatsApp}
                    mask='(11) 11111-1111'
                    placeholder='WhatsApp'
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    message={errors.whatsapp && errors.whatsapp}
                  />

                  <InputMask
                    icon={FiCalendar}
                    mask='11/11/1111'
                    placeholder='Nasc Date'
                    value={date_of_birth}
                    onChange={(e) => setDate_of_birth(e.target.value)}
                    message={errors.date_of_birth && errors.date_of_birth}
                  />
                </div>

                <InputSelect
                  icon={FiHash}
                  name='how_did_you_find_us'
                  value={how_did_you_find_us}
                  onChange={(e) => setHow_did_you_find_us(e.target.value)}
                  selecteds={selecteds}
                  message={
                    errors.how_did_you_find_us && errors.how_did_you_find_us
                  }
                />

                <InputCaptcha
                  onClick={handleSubmit}
                  name={loading ? 'Enviando...' : 'Receber voucher'}
                  load={loading}
                />
              </main>
            </form>
          </ContentForm>
        </Container>
      </Section>
    </>
  );
}
