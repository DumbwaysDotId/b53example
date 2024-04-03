import React from 'react'
import LandingPage from './pages/landingPage'

const App = () : React.JSX.Element => {

  return (
    <>
      <LandingPage />
    </>
  )
}

export default App


// import React from 'react'
// import LandingPage from './pages/landingPage'
// import Login from './pages/login'

// const App = () : React.JSX.Element => {
//   const [isLogin, setIsLogin] = React.useState<boolean>(true)
//   const [isLoading, setIsLoading] = React.useState<boolean>(true)

//   setTimeout(() => {
//     setIsLoading(!isLoading)
//   }, 5000)

//   return (
//     <>
//       {isLoading && (<p>Now loading .... </p>)}

//       { isLogin ? (<LandingPage />) : (<Login />) }
//     </>
//   )
// }

// export default App

// ternary operator (?)
// kondisi ? statement true : statment false
// AND operator && (logical operator) => &&, ||, !
// kondisi && statement true