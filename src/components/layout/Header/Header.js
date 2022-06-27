import React from "react";
import { Link } from "react-router-dom";
import { menuLinks } from "utils/CONSTANTS";
import { Helmet } from "react-helmet";

//Styles
import { Container } from "theme/GlobalStyles";
import { HeaderStyled } from "./Header.styles";

function Header({ title }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <HeaderStyled>
        <Container className="header-container">
          <h1>
            <Link to="/">GNH</Link>
          </h1>
          <nav className="menu">
            <ul>
              {menuLinks.map((m) => (
                <li key={m.path}>
                  <Link to={m.path}>{m.name}</Link>
                  {m.subMenu ? (
                    <ul>
                      {m.subMenu.map((sm) => (
                        <li key={sm.path}>
                          <Link to={sm.path}>{sm.name}</Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </HeaderStyled>
    </>
  );
}

export default Header;
