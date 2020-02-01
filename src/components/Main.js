import PropTypes from 'prop-types'
import React from 'react'
import pic02 from '../images/pic02.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="sobre"
          className={`${this.props.article === 'sobre' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Sobre</h2>
          <p>
            Sou desenvolvedor e amo o que faço, amo desafios e coisas novas.
            Estou nessa área há algum tempo e pelo menos 5 anos são dedicados à
            web (implementando sites e sistemas).
            <br />
            Após descobrir a área mobile, resolvi mudar meu foco. Utilizando{' '}
            <a href="https://flutter.dev/">Flutter</a>, cosingo montar
            aplicativos muito legais e funcionalidades épicas.
            <br />
            Dúvida?
            <br />
            <a href="trabalhos">Da uma olhadinha então</a>.
          </p>
          <p>
            Quais tecnologias você precisa? Posso te ajudar com o PHP vanilla,
            Laravel, Java vanilla, Spring, JS vanilla, TypeScript, Jquery,
            VueJS, AngularJS, Angular 7, Vagrant, Docker, Tortoise, Git, SOAP,
            Rest e Flutter.
          </p>
          <p>
            Sou entusiasta de novas tecnologias (hardware e software), jogos
            (RPG), livros (fantasias, guerras e mitologias) e músicas. Também
            estou tentando escrever um livro, mas olha, a tarefa é bem difícil!
          </p>
          <p>
            Fique a vontade para me <a href="contate-me">contatar</a>. Prometo
            que vou responder rápido!
          </p>
          {close}
        </article>

        <article
          id="trabalhos"
          className={`${this.props.article === 'trabalhos' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Trabalhos</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="contate-me"
          className={`${this.props.article === 'contate-me' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contate-me</h2>
          <ul className="icons">
            <li>
              <a
                href="mailto:jeanl.camillo@gmail.com"
                className="icon fa-envelope"
              >
                <span className="label">E-mail</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5544998126928"
                className="icon fa-whatsapp"
              >
                <span className="label">Whatsapp</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jeaanlucas"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jeanluucas/"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/jeanluucas"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
