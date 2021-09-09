import { Section } from './styled';

import heroImg from '../../../assets/hero.png';
import logoImg from '../../../assets/logo-matraca.png';
import { FiMail, FiInfo, FiUnlock } from 'react-icons/fi';
import { useHistory } from 'react-router';
import { FormEvent, useCallback } from 'react';

export function Login() {
  const history = useHistory();

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      history.push('dashboard');
    },
    [history]
  );

  return (
    <Section>
      <div className='hero'>
        <img src={heroImg} alt='' />
      </div>
      <div className='form'>
        <img src={logoImg} alt='Logo' />
        <form action=''>
          <div className='input-group'>
            <header>
              <FiMail />
              <span>E-mail</span>
            </header>
            <input type='text' />
            <div className='message'>
              <FiInfo />
              <span>You Error</span>
            </div>
          </div>

          <div className='input-group'>
            <header>
              <FiUnlock />
              <span>E-mail</span>
            </header>
            <input type='text' />
            <div className='message'>
              <FiInfo />
              <span>You Error</span>
            </div>

            <button type='submit' onClick={handleSubmit}>
              Entrar
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
