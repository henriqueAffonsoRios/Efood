import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useParams } from 'react-router-dom'
import LogoImgHome from '../../assets/icons/logo.png'
import BannerImgHome from '../../assets/images/fundo.png'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import {
  CarrinhoDeProdutos,
  CartButton,
  ContainerHeader,
  HeaderPage,
  Imagem,
  RestaurantName,
  Titulo
} from './styles'

export type Props = {
  background: 'light' | 'dark'
}

const Header = ({ background }: Props) => {
  const location = useLocation()
  const { id } = useParams<{ id: string }>()

  const titleText =
    location.pathname === '/Perfil'
      ? ''
      : 'Viva experiências gastronômicas no conforto da sua casa'

  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  const titleRestaurate = id ? 'Restaurantes' : ''
  const titleCarrinho = id ? `${items.length} produto(s) no carrinho` : ''

  return (
    <HeaderPage>
      <Imagem
        style={{ backgroundImage: `url(${BannerImgHome})` }}
        background={background}
      >
        <div className="container">
          <ContainerHeader>
            <RestaurantName>{titleRestaurate}</RestaurantName>
            <Link to="/">
              <img
                className="imagemLogoLnk"
                src={LogoImgHome}
                alt="efood"
                width="150"
                height="50"
              />
            </Link>
            <CarrinhoDeProdutos>
              <CartButton onClick={openCart}>{titleCarrinho}</CartButton>
            </CarrinhoDeProdutos>
          </ContainerHeader>
          <Titulo>{titleText}</Titulo>
        </div>
      </Imagem>
    </HeaderPage>
  )
}

export default React.memo(Header)
