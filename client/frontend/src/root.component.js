import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import store from "./app/store"
import PaginationContextProvider from "./context/PaginationContext"

export default function Root() {
  return (
    <BrowserRouter>
      <PaginationContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </PaginationContextProvider>
    </BrowserRouter>
  )
}
