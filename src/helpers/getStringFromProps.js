import { getStringFirst } from './maybe'

// getStringFromProps:: [a] -> String 
export default prop => (
  getStringFirst('text')(prop)
  .option('Ooops...')    
)
