import { ContentInfo, Section } from './styled';

import presentImg from '../../../assets/present.png';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

type Voucher = {
  name: string;
  email: string;
};
interface DetailProps {
  detail: Voucher;
}

export function Congratulations() {
  const location = useLocation<DetailProps>();
  const [voucher, setVoucher] = useState<Voucher>();

  useEffect(() => {
    const { detail } = location.state;
    setVoucher(detail);
  }, [location.state]);

  return (
    <Section>
      <ContentInfo className='content'>
        <h1>Congratulations</h1>
        <h3 className='highlight'>{voucher && voucher.name}</h3>
        <div className='jump'>
          <div className='dots1'>
            <div className='dot dot1'></div>
            <div className='dot dot2'></div>
            <div className='circle'></div>
          </div>
          <div className='dots2'>
            <div className='dot dot1'></div>
            <div className='dot dot2'></div>
            <div className='circle'></div>
          </div>
          <img className='present' src={presentImg} alt='Armazem Present' />
        </div>
        <p>
          Voce receberá no seu e-mail{' '}
          <strong className='highlight'>({voucher && voucher.email})</strong> o
          vouche para ser consumido no dia do seu aniversário. Se não
          encontrá-lo na sua caixa de entrada, verique sua caixa de span.
        </p>
      </ContentInfo>
    </Section>
  );
}
