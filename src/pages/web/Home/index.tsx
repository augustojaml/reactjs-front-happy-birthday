import { Container, ContentImage, ContentInfo, Section } from './styled';
import LogoImg from '../../../assets/logo.png';
import BalloonImg from '../../../assets/balloon.png';
import { AiFillHome } from 'react-icons/ai';
import { FaHandPointRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Home() {
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
                Hoje vai ser <br /> Uma Festa
              </h1>
              <p>
                No dia do seu aniversário o{' '}
                <strong className='highlight'>Botequinho do Brawziin</strong>{' '}
                vai te presentear com um voucher valendo um rodźio de pizza.
              </p>
              <h3>
                E aí, quer ganhar <br /> um rodźio gratuito?
              </h3>
              <Link to='/form' className='button'>
                <FaHandPointRight />
                Retire seu voucher
              </Link>
            </div>
          </ContentInfo>
          <ContentImage>
            <img className='animate-up-down' src={BalloonImg} alt='Baloes' />
          </ContentImage>
        </Container>
      </Section>
    </>
  );
}
