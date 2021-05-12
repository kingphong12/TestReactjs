

const initialState = {
  IsActive: null,
  IsSidebar: false
}

const sidebarReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SHOW_SIDEBAR' : {
      return {
        IsActive: action.payload.titile,
        IsSidebar: !action.payload.IsSidebar
      }
    }

    default:
      return state
  }
}

export default sidebarReducer

