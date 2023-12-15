import "@/styles/globals.css";

import { Fragment } from "react";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <div className="font-sans text-gray-900">
      <Navbar/>
      <Component {...pageProps} />
      </div>
    </Fragment>
  );
}
