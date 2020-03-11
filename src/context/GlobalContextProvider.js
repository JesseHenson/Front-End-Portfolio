import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  searchTerm: "",
}

function reducer(state, action) {
  switch (action.type) {
    case "searchInputChanged": {
      return {
        ...state,
        searchTerm: action.payload,
      }
    }
    default:
      throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider

// export const initialState = { searchTerm: "" }

// function reducer(state, action) {
//   switch (action.type) {
//     case "searchInputChanged":
//       return { searchTerm: action.payload }
//     default:
//       return state
//   }
// }

// export default reducer
