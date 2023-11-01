import styled from '@emotion/styled'

const Contenedor = styled.div`  
  color: #fff;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`

const Texto = styled.p`
 font-size: 18px;
  span{
    font-weight:700;
  }
`

const Precio = styled.p`
  font-size: 30px;
  span{
    font-weight:700;
  }
`
const Imagen = styled.img`
  display: block;
  width: 120px;

`

const Restultado = ({resultado}) => {
  
  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  
  return (
    <>
    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto"/>
      <div>
      <Precio>El Precio es de: <span>{PRICE}</span></Precio>
      <Texto>Precio más alto del dia: <span>{HIGHDAY}</span></Texto>
      <Texto>Precio más bajo del dia: <span>{LOWDAY}</span></Texto>
      <Texto>Variacion últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
      <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Contenedor>
    </>
  )
}

export default Restultado