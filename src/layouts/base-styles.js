import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

const baseStyles = () => injectGlobal`
  ${reset}
  /* other styles */
  
  body {
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6,cite {
    font-family: 'Podkova'
  }
`

export default baseStyles