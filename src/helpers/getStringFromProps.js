import { getStringFirst } from 'Helpers'

// getStringFromProps:: [a] -> String
export default prop => (
  getStringFirst('text')(prop)
  .option('Ooops...')
)
