import { Section, Dash, Hero } from './styled';

import dashboardImg from '../../../assets/grafic.png';
import { FiLogOut, FiTrendingUp } from 'react-icons/fi';
import { RiInstagramFill } from 'react-icons/ri';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF, FaGlobe } from 'react-icons/fa';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { useSession } from '../../../hooks/useSession';
import { useCallback } from 'react';
import { useDashboard } from '../../../hooks/useDashboard';

export function Dashboard() {
  const { signOut } = useSession();

  const handleLogout = useCallback(() => {
    signOut();
  }, [signOut]);

  const { data, isLoading } = useDashboard();

  return (
    <Section>
      <Dash>
        <div className='dashboard'>
          <header className='content'>
            <h3>Dados Gerais</h3>
            <div onClick={handleLogout}>
              <strong>Sair</strong>
              <FiLogOut />
            </div>
          </header>

          <main>
            {isLoading ? (
              <h1>Carregando...</h1>
            ) : (
              <>
                <div className='grid'>
                  <div className='item'>
                    <div className='header'>
                      <span>Total Geral</span>
                      <FiTrendingUp />
                    </div>
                    <h2>{data.total}</h2>
                  </div>
                  <div className='item'>
                    <div className='header'>
                      <span>Facebook</span>
                      <FaFacebookF />
                    </div>
                    <h2>{data.facebook}</h2>
                  </div>
                  <div className='item'>
                    <div className='header'>
                      <span>Google</span>
                      <AiOutlineGoogle />
                    </div>
                    <h2>{data.google}</h2>
                  </div>
                  <div className='item'>
                    <div className='header'>
                      <span>Instagram</span>
                      <RiInstagramFill />
                    </div>
                    <h2>{data.instagram}</h2>
                  </div>
                  <div className='item'>
                    <div className='header'>
                      <span>Site</span>
                      <FaGlobe />
                    </div>
                    <h2>{data.site}</h2>
                  </div>
                  <div className='item'>
                    <div className='header'>
                      <span>Outros</span>
                      <BsFillPlusSquareFill />
                    </div>
                    <h2>{data.others}</h2>
                  </div>
                </div>
                <div className='table'>
                  <h1>Voucher Recentes</h1>
                  <table>
                    <tbody>
                      {data.vouchers.map((voucher) => (
                        <tr key={voucher.id}>
                          <td>
                            <strong>{voucher.name}</strong>
                          </td>
                          <td>{voucher.date_of_birth}</td>
                          <td>{voucher.voucher}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </main>
        </div>
      </Dash>
      <Hero>
        <img src={dashboardImg} alt='' />
      </Hero>
    </Section>
  );
}
