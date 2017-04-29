import storage from '../utils/helpers/storage'

export default function persistenceHandler (next) {
  return (reducer, initialState) => {
    const store = next(reducer, initialState)

    return Object.assign({}, store, {
      dispatch (action) {
        store.dispatch(action)

        storage.set('locale', store.getState().get("il8nReducer").get('locale'))

        return action
      }
    })
  }
}
