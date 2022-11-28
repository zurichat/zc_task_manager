import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import store from "./app/store"

export default function Root() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}
