import { ButtonHTMLAttributes, useCallback, useState } from 'react';
import { randomInt } from '../../../utils/helpers';

import { Container } from './styled';

interface InputCaptchaProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function InputCaptcha({ ...rest }: InputCaptchaProps) {
  const [disableButton, setDisableButton] = useState(true);
  const [captcha, setCaptcha] = useState('');

  const [valueLeft] = useState(randomInt(1, 15));
  const [valueRight] = useState(randomInt(1, 15));

  const checkCaptcha = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      e.currentTarget.maxLength = 2;
      const sumValues = valueLeft + valueRight;
      Number(sumValues) === Number(captcha)
        ? setDisableButton(false)
        : setDisableButton(true);
    },
    [captcha, valueLeft, valueRight]
  );

  return (
    <>
      <Container>
        <div className='content'>
          <span>
            Quanto é <strong>{valueLeft}</strong> +{' '}
            <strong>{valueRight}</strong> :
          </span>
          <input
            type='text'
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
            onKeyUp={checkCaptcha}
          />
        </div>
        <button type='submit' disabled={disableButton} {...rest}>
          Receber voucher
        </button>
      </Container>
    </>
  );
}
