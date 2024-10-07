import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Counter from './counter';
import QuoteFetcher from './QuoteFetcher';
import QuoteFetcherLoader from './QuoteFetcherLoader';

function App() {
  

  return (
    <>
      {/* <Counter /> */}
      <QuoteFetcherLoader />
    </>
  )
}

export default App
