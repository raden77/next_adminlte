import '../styles/globals.css'
import Router from "next/router"
import { useEffect } from "react";
import nProgress from "nprogress"
import { axiosInterceptors, refreshToken } from '../utility/helper'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
