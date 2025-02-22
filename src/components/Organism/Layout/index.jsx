import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header className="cabecalho">
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Personagens</Link>
            </li>
            <li>
              <Link to={"/episodios"}>Episódios</Link>
            </li>
            <li>
              <Link to={"/localizacao"}>Localização</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="principal">
        <Outlet />
      </main>

      <footer className="rodape">
        <p> © Todos os direitos reservados</p>
      </footer>
    </>
  );
};
