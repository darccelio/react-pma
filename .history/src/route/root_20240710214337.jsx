import { NavLink, Outlet } from 'react-router-dom'
import '../../src/index.css'

export default function Root() {
  return (
    <>
      <div id="sidebar">
        {/* <h1>React Router Contacts</h1> */}
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>

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
            to={`/user`}
            className={({ isActive, isPending }) =>
              isActive ? 'active' : isPending ? 'pending' : ''
            }
          >
            Usuarios
          </NavLink>
          <NavLink
            to={`/category`}
            className={({ isActive, isPending }) =>
              isActive ? 'active' : isPending ? 'pending' : ''
            }
          >
            Categorias
          </NavLink>
          <NavLink
            to={`/activity`}
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
