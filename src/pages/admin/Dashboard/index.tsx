import { Section, Dash, Hero } from './styled';

import dashboardImg from '../../../assets/grafic.png';
import { FiLogOut, FiTrendingUp } from 'react-icons/fi';
import { RiInstagramFill } from 'react-icons/ri';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF, FaGlobe } from 'react-icons/fa';
import { BsFillPlusSquareFill } from 'react-icons/bs';

const data = {
  vouchers: [
    {
      id: 1,
      name: 'Augusto Monteiro',
      dateOfBirth: '17/06/1977',
      voucher: 5,
    },
    {
      id: 2,
      name: 'Marlon Lima',
      dateOfBirth: '26/02/1979',
      voucher: 5,
    },
    {
      id: 3,
      name: 'Marico Lima',
      dateOfBirth: '05/08/1980',
      voucher: 5,
    },
  ],
  total: 40,
  facebook: 10,
  google: 3,
  instagram: 4,
  site: 8,
  others: 15,
};

export function Dashboard() {
  //const [data, setData] = useState(dataTemp);

  return (
    <Section>
      <Dash>
        <div className='dashboard'>
          <header className='content'>
            <h3>Dados Gerais</h3>
            <div>
              <strong>Sair</strong>
              <FiLogOut />
            </div>
          </header>
          <main>
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
                      <td>{voucher.dateOfBirth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </Dash>
      <Hero>
        <img src={dashboardImg} alt='' />
      </Hero>
    </Section>
  );
}
