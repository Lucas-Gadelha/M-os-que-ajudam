import "./contato.css";
import imagem2 from "../imagens/imagem2.png";
import "../fonts.css";
import HeaderLogado from "../header/headerLogado";

const Contato = () => {
  return (
    <div className="toda-pagina">
      <HeaderLogado />
        <div className="conteudo">
            <div className="contato">
            <span className="info">Saiba como conversar com nossa equipe</span>
            <div className="card">
                <div>
                <div>
                    <span className="label">Telefone:</span>
                    <span className="value">(88) 99999-9999</span>
                </div>
                <div>
                    <span className="label">E-mail:</span>
                    <span className="value">maosqueajudam@gmail.com</span>
                </div>
                </div>
                <div className="align-center">
                <span className="label">Ou pelas redes sociais</span>
                <div className="row">
                    <svg
                        width="90"
                        height="92"
                        viewBox="0 0 90 92"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M63.5553 0.78479H26.5517C10.4786 0.78479 0.896484 10.6013 0.896484 27.0676V64.9311C0.896484 81.4427 10.4786 91.2592 26.5517 91.2592H63.5111C79.5843 91.2592 89.1663 81.4427 89.1663 64.9764V27.0676C89.2105 10.6013 79.6284 0.78479 63.5553 0.78479ZM45.0535 63.574C35.6039 63.574 27.9206 55.7027 27.9206 46.022C27.9206 36.3412 35.6039 28.4699 45.0535 28.4699C54.5031 28.4699 62.1864 36.3412 62.1864 46.022C62.1864 55.7027 54.5031 63.574 45.0535 63.574ZM71.1945 22.8605C70.9737 23.4034 70.6646 23.901 70.2671 24.3534C69.8256 24.7605 69.3398 25.0772 68.81 25.3033C68.2801 25.5295 67.706 25.6652 67.132 25.6652C65.9398 25.6652 64.8358 25.2129 63.9969 24.3534C63.5994 23.901 63.2903 23.4034 63.0696 22.8605C62.8488 22.3177 62.7163 21.7296 62.7163 21.1415C62.7163 20.5534 62.8488 19.9654 63.0696 19.4225C63.2903 18.8344 63.5994 18.3821 63.9969 17.9297C65.0125 16.8892 66.558 16.3916 67.971 16.7083C68.2801 16.7535 68.545 16.844 68.81 16.9797C69.0749 17.0702 69.3399 17.2059 69.6048 17.3868C69.8256 17.5226 70.0464 17.7487 70.2671 17.9297C70.6646 18.3821 70.9737 18.8344 71.1945 19.4225C71.4152 19.9654 71.5477 20.5534 71.5477 21.1415C71.5477 21.7296 71.4152 22.3177 71.1945 22.8605Z"
                        fill="#50738F"
                        />
                    </svg>
                    <svg
                        width="89"
                        height="92"
                        viewBox="0 0 89 92"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M88.7583 64.9444C88.7583 81.4025 79.181 91.2141 63.1159 91.2141H57.8638C55.4364 91.2141 53.4503 89.1794 53.4503 86.6926V60.6038C53.4503 59.383 54.4213 58.343 55.6129 58.343L63.3807 58.2074C63.9986 58.1622 64.5282 57.71 64.6606 57.077L66.2053 48.441C66.3377 47.6272 65.7198 46.8585 64.8813 46.8585L55.4805 46.9942C54.2447 46.9942 53.2738 45.9994 53.2296 44.7786L53.0531 33.7011C53.0531 32.9776 53.6268 32.3447 54.3771 32.3447L64.9695 32.1638C65.7198 32.1638 66.2936 31.576 66.2936 30.8074L66.117 19.9558C66.117 19.1871 65.5433 18.5994 64.793 18.5994L52.8765 18.7803C45.5501 18.9159 39.7243 25.0651 39.8567 32.5707L40.0774 45.0047C40.1215 46.2707 39.1505 47.2654 37.9148 47.3107L32.6186 47.4011C31.8683 47.4011 31.2946 47.9889 31.2946 48.7575L31.427 57.3483C31.427 58.117 32.0007 58.7048 32.751 58.7048L38.0472 58.6143C39.283 58.6143 40.2539 59.609 40.2981 60.8298L40.6953 86.6022C40.7394 89.1342 38.7533 91.2141 36.2818 91.2141H26.1307C10.0656 91.2141 0.488281 81.4025 0.488281 64.8992V27.0545C0.488281 10.5964 10.0656 0.78479 26.1307 0.78479H63.1159C79.181 0.78479 88.7583 10.5964 88.7583 27.0545V64.9444Z"
                        fill="#50738F"
                        />
                    </svg>
                </div>
                </div>
                <div className="align-right">
                    <button className="botao-editar">Editar</button>
                </div>
            </div>
            </div>
            <img
            className="img-card"
            height="424px"
            src={imagem2}
            alt="imagem da pagina fale conosco"
            />
        </div>
    </div>
  );
};

export default Contato;
