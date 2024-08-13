import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import { useGetHomePageQuery } from '../../services/api'

const Home = () => {
  const { data: catalogoServico = [] } = useGetHomePageQuery()

  return (
    <>
      <Header background="light" />
      <ProductList title="" background="light" efoods={catalogoServico} />
    </>
  )
}

export default Home
