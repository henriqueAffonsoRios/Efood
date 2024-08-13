import { Link } from 'react-router-dom'
import face from '../../assets/icons/facebook.png'
import insta from '../../assets/icons/instagram.png'
import LogoHome from '../../assets/icons/logo.png'
import tw from '../../assets/icons/twitter.png'
import { Footers, RedeSociais, SectionFooter, Titulo } from './styles'

const Footer = () => (
  <Footers>
    <div className="container">
      <SectionFooter>
        <Link to="/">
          <img className="imagemLogo" src={LogoHome} alt="efood" />
        </Link>
        <RedeSociais>
          <a href="https://www.instagram.com">
            <img src={insta} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com">
            <img src={face} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com">
            <img src={tw} alt="Twitter" />
          </a>
        </RedeSociais>
      </SectionFooter>
      <Titulo>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Titulo>
    </div>
  </Footers>
)

export default Footer
