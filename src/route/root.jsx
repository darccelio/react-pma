import { NavLink, Outlet, useNavigation } from 'react-router-dom'
import '../../src/index.css'

export default function Root() {

  const navigation = useNavigation();

  
  return (
    <>
      <div id="sidebar">
       
        <nav>
        <NavLink
            to={`/`}
            className={({ isActive, isPending }) =>
              isActive ? 'active' : isPending ? 'pending' : ''
            }
          >
            Início
          </NavLink>
          <NavLink
            to={`/users`}
            className={({ isActive, isPending }) =>
              isActive ? 'active' : isPending ? 'pending' : ''
            }
          >
            Usuarios
          </NavLink>
          <NavLink
            to={`/categories`}
            className={({ isActive, isPending }) =>
              isActive ? 'active' : isPending ? 'pending' : ''
            }
          >
            Categorias
          </NavLink>
          <NavLink
            to={`/activities`}
            className={({ isActive, isPending }) =>
              isActive ? 'active' : isPending ? 'pending' : ''
            }
          >
            Atividades
          </NavLink>
        </nav>
      </div>
      <div id="detail"
      className={
        navigation.state === "loading" ? "loading" : ""
      }
      >
        <Outlet />
      </div>
    </>
  )
}
