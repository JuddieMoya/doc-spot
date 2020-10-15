import { FETCH_SERVICES } from 'types'


const INITIAL_STATE = {
  items: []
}


const servicesReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_SERVICES:
        console.log('test',action.services)
      return {...state, items: action.services}
    default:
      return state
  }
}

export default servicesReducer
