import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Portfólio</h1>
        <p>
          Olá, seja bem vindo :D
          <br />
          Está precisando de um app fod# ou um site monstro?
          <br />
          Você veio ao lugar certo.
        </p>
      </div>
    </div>

    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('sobre')
            }}
          >
            Sobre
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('trabalhos')
            }}
          >
            Trabalhos
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contate-me')
            }}
          >
            Contate-me
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
