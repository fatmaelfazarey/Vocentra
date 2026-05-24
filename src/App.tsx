import './App.css'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import LoadingPage from './Pages/LoadingPage'

function App() {

  return (

    <>
      <Suspense fallback={<LoadingPage/>}>
        <Routes>
          {routes.map((route, index) => {
            if (route.children) {
              return (
                <Route key={index} element={route.element}>
                  {route.children.map((child, idx) => (
                    <Route key={idx} path={child.path} element={child.element} index={child.index} />
                  ))}
                </Route>
              );
            }
            return <Route key={index} path={route.path} element={route.element} />;
          })}
        </Routes>

      </Suspense>
    </>
  )
}

export default App
