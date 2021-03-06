import { Link, NavLink } from "react-router-dom";
import { RiUserSettingsLine } from "react-icons/ri";

import { useAuth } from "../../hooks/useAuth";

import styles from "./styles.module.scss";

export const Header = () => {
  const { user, isLogged, loading } = useAuth();

  return (
    <header className={styles.header}>
      <nav className="container">
        <Link to="/" className={styles.logo}>
          <img
            src={"/images/logo.svg"}
            alt="Logotipo dogs - um desenho de cachorro sorrindo"
            aria-label="Logotipo dogs - um desenho de cachorro sorrindo"
          />
        </Link>

        {loading && !user?.nome ? (
          <span>
            <p>Carregando...</p>
          </span>
        ) : (
          <>
            {isLogged ? (
              <NavLink to="/minha-conta">
                {user?.nome}
                <RiUserSettingsLine />
              </NavLink>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </>
        )}
      </nav>
    </header>
  );
};
