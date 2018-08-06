export const getUser = state => {
  return {
    user: state.usersReducer.user,
    loading: state.usersReducer.loading
  }
}
