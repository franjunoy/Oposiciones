import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/tailwind.css";
import axios from "axios";
import { ModalProvider } from "@/context/ModalContext";
import Modal from "@/componentes/reusableComponents/Modal";
import {store, persistor} from "../redux/store/store"
//axios.defaults.baseURL = 'http://localhost:8082';
axios.defaults.baseURL = "https://oposiciones-production.up.railway.app";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ModalProvider>
          <Component {...pageProps} />
          <Modal />
        </ModalProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
