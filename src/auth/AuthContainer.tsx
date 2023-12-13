import { Outlet,Navigate } from "react-router-dom";

const AuthContainer = () => {
  
  const isAuthenticated = false;


    return (
      <>
        {isAuthenticated ? (
          <Navigate to="/"/>
        ):(
          <section>
            <Outlet/>
          </section>
        )}
      </>
    )
}

export default AuthContainer