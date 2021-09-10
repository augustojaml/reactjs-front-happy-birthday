import { FormEvent, useCallback, useState } from 'react';

import heroImg from '../../../assets/hero.png';
import logoImg from '../../../assets/logo-matraca.png';
import { FiMail, FiInfo, FiUnlock } from 'react-icons/fi';
import { api } from '../../../services/api';

import { Section } from './styled';

interface ErrorsData {
  [key: string]: string;
}

export function Login() {
  //const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<ErrorsData>({});

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      api
        .post('v1/login', {
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response);
          setErrors({});
        })
        .catch(function (error) {
          if (!error.response) {
            return;
          }

          let err: ErrorsData = {};

          Object.keys(error.response.data.errors).forEach(function (key) {
            err[key] = error.response.data.errors[key][0];
          });

          setErrors(err);
        });
    },
    [email, password]
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
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className='message'>
              {errors.email && (
                <>
                  <FiInfo />
                  <span>{errors.email}</span>
                </>
              )}
            </div>
          </div>

          <div className='input-group'>
            <header>
              <FiUnlock />
              <span>Password</span>
            </header>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='message'>
              {errors.password && (
                <>
                  <FiInfo />
                  <span>{errors.password}</span>
                </>
              )}
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
