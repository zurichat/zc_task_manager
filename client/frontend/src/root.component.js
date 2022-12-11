import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import store from "./app/store"
import AppCredentialsContextProvider from "./context/AppCredentialsContext"
import PaginationContextProvider from "./context/PaginationContext"

export default function Root() {
  return (
    <BrowserRouter>
      <PaginationContextProvider>
        <AppCredentialsContextProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </AppCredentialsContextProvider>

      </PaginationContextProvider>
    </BrowserRouter>
  )
}
