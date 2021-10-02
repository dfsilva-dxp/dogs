import { Link, NavLink } from "react-router-dom";
import { RiUserSettingsLine } from "react-icons/ri";

import { useAuth } from "../../hooks/useAuth";

import styles from "./styles.module.scss";

export const Header = () => {
  const { user, isLogged, loading } = useAuth();
  console.log(isLogged);
  console.log(loading);
  console.log(user);
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
        {!!isLogged ? (
          <>
            {loading ? (
              <p>Carregando</p>
            ) : (
              <NavLink to="/conta">
                {user.nome}
                <RiUserSettingsLine />
              </NavLink>
            )}
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </header>
  );
};
