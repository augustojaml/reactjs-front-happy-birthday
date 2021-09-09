import { ContentInfo, Section } from './styled';

import presentImg from '../../../assets/present.png';

export function Congratulations() {
  return (
    <Section>
      <ContentInfo className='content'>
        <h1>Congratulations</h1>
        <h3 className='highlight'>Augusto Monteiro</h3>
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
          <strong className='highlight'>(jamonteirolima@gmail.com)</strong> o
          vouche para ser consumido no dia do seu aniversário. Se não
          encontrá-lo na sua caixa de entrada, verique sua caixa de span.
        </p>
      </ContentInfo>
    </Section>
  );
}
