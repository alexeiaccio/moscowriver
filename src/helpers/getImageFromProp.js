import composeK from 'crocks/helpers/composeK'
import map from 'crocks/pointfree/map'
import { getValue, getString } from 'Helpers'

export default (prop) => (
  map(composeK(getString('url'), getValue('image')))(prop)
)