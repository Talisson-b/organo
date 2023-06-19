import './rodape.css'

const Rodape = () => {
    return (
      <footer className='rodape'>
              <div>
            <ul>
                <li>
                        <a href="#">
                                <img src="./imagens/fb.png" alt="" />
                        </a>
                </li>
                  <li>
                        <a href="#">
                                <img src="./imagens/tw.png" alt="" />
                        </a>
                  </li>
                  <li>
                        <a href="#">
                                <img src="./imagens/ig.png" alt="" />
                        </a>
                  </li>
               
            </ul>
        </div>
        <div>
            <img src="./imagens/logo.png" alt="" />
        </div>
        <div>
            <p>Desenvolvido por talisson barbosa.</p>
        </div>
      </footer>
    )
}

export default Rodape 