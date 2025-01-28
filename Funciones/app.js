/* Renderizado generico */
window.onload = () => {
  document.querySelector("header").innerHTML = `
<div class="header-escritorio">
        <a title="UBB" href="#top">
            <img class="header-logo" src="/ImgeIEBLA/UBB4.png" alt="Logo de UBB" />
        </a>
        <nav class="header-nav">
            <ul>
                <li><a href="#top">Inicio</a></li>
                <li><a href="#images">Acerca de nosotros UBB</a></li>
                <li><a href="#info">Asociaciones regionales</a>
                  <ul class="dropdown-content">
                        <li><a href="/Uniones.html">Uniones</a></li>
                        
                    </ul></li>
                <li><a href="/Instituciones.html">Instituciones</a>
                  <ul class="dropdown-content">
                        <li><a href="/Socios.html">Socios</a></li>
                      
                    </ul>
                </li>
              
                <li><a href="/Manuales.html">Manual</a></li>
            </ul>
        </nav>
           <button class="menu-hamburguesa" onclick="precionarInterruptor()">
            <div></div>
            <div></div>
            <div></div>
        </button>
    </div>

  `;

  document.querySelector(".contacto").innerHTML =`
   <img src="/ImgeIEBLA/Jesus transformación y vida(1) 1.png"  >
  <div class="contacto-info">
    <h1>¡Seguinos en nuestras redes sociales!</h1>
    <div>
      <a target="_blank" href="https://www.instagram.com/conectarlabmendoza/"><i class="rosado fa-brands fa-square-instagram"></i></a>
      <a target="_blank" href="https://www.facebook.com/conectarlabmendoza/"><i class="celeste fa-brands fa-square-facebook"></i></a>
    </div>
  </div>
  `;

  document.querySelector("footer").innerHTML = `
  <div>
    <img title="Ciencias" class="footer-logo" src="./logosConectar/logoCiencia.png" alt="Logo ciencia">
    <img title="Estudio" class="footer-logo" src="./logosConectar/logoEstudio.png" alt="Logo estudio">
    <img title="Espacio de escuelas" class="footer-logo" src="./logosConectar/logoExplo.png" alt="Logo explo">
    <img title="Fabricación" class="footer-logo" src="./logosConectar/logoFabricacion.png" alt="Logo fabricacion">
    <img title="Mini" class="footer-logo" src="./logosConectar/logoMini.png" alt="Logo mini">
    <img title="Multimedia" class="footer-logo" src="./logosConectar/logoMultimedia.png" alt="Logo logoMultimedia">
    <img title="Sonido" class="footer-logo" src="./logosConectar/logoSonido.png" alt="Logo sonido">
  </div>
   <a title="UBB" href="#top">
    <img class="header-logo" src="/ImgeIEBLA/Jesus transformación y vida(1) 1.png"  >
  </a>
`;
};

function precionarInterruptor() {
  var menu = document.querySelector('.header-nav ul');
  if (menu.style.display === 'flex') {
      menu.style.display = 'none';
  } else {
      menu.style.display = 'flex';
  }
}