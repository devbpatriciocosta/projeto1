import Head from 'next/head'

import  '../src/globalstyle.css'

function App ({ Component, pageProps }) {
  return(
    <>
      <head>
        <title>BernaFlix</title>
      </head>
      <Component {...pageProps} />
    </>    
  )
}

export default App