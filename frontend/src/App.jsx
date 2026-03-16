import AppRoutes from './routes/AppRoutes'
import AuthProvider from './features/contexts/auth.context'


function App() {
 

  return (
    <>
       <AuthProvider>
         <AppRoutes  />
       </AuthProvider>
    </>
  )
}

export default App
