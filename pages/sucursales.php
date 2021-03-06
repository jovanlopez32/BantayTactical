<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sucursales - Bantay Tactical</title>
    <link rel="icon" href="../assets/img/favicon.png">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">

    <link rel="stylesheet" href="../assets/css/sucurs-style.css">
    <link rel="stylesheet" href="../assets/css/navbar.css">
    <link rel="stylesheet" href="../assets/css/footer.css">
</head>
<body>

    <!-- Menu de navegacion -->
    <header>
        <ul class="navbar">
            <li>
                <a href="../index.php">Inicio</a>
            </li>
            <li>
                <a href="productos.php">Productos</a>
            </li>
            <li>
                <a href="nosotros.php">Nosotros</a>
            </li>
            <li>
                <a href="sucursales.php">Sucursales</a>
            </li>
        </ul>

        <a href="../index.php" class="logo"><img src="../assets/img/logo.png" alt="" height="50"></a>
        
        
        <div class="menutoggle">
            <i class="bi bi-list" onclick="toggleMenu();"></i>
        </div>
    </header>
    
    <div class="content inicio titulo-sucursal">
        <div>
            <h1>BANTAY     <br>
                TACTICAL   <br>
                NEREO
            </h1>
        </div>
        <div>
            <h3>Dirección:</h3>
            <p>Av Nereo Rodríguez Barragán 850, Col del Valle 1ra Secc, 78200 San Luis, S.L.P.</p>
            <h2>Horario:</h2>
            <h3>Lunes a Viernes</h3>
            <p>09:00 AM - 19:00 PM</p>
            <h3>Sabado</h3>
            <p>09:00 AM - 16:00 PM</p>
        </div>
    </div>

    <div class="content mapa-boton">
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.2757693443396!2d-101.00948768461605!3d22.153572453802365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a9fd996a3bd69%3A0x25c2d69b65b3d0c2!2sBantay%20Tactical!5e0!3m2!1ses-419!2smx!4v1654551211648!5m2!1ses-419!2smx" width="70%" height="450" style="border:0; border-radius: 5px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <a href="https://goo.gl/maps/fAxm5Wbxx59YYKBaA" target="_blank"><button> Ir a Google Maps <i class="bi bi-arrow-right"></i></button></a>
    </div>

    <div class="content titulo-sucursal">
        <div>
            <h1>BANTAY     <br>
                TACTICAL   <br>
                CENTRO
            </h1>
        </div>
        <div>
            <h3>Dirección:</h3>
            <p>Calle Emiliano Zapata 265, Centro Historico, 78000 San Luis, S.L.P.</p>
            <h2>Horario:</h2>
            <h3>Lunes a Viernes</h3>
            <p>09:00 AM - 19:00 PM</p>
            <h3>Sabado</h3>
            <p>09:00 AM - 16:00 PM</p>
        </div>
    </div>

    <div class="content mapa-boton">
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.2241028465983!2d-100.97682718461601!3d22.15553995373191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842aa1249bcf387b%3A0x1f5154b2184de505!2sBantay%20Tactical!5e0!3m2!1ses-419!2smx!4v1654554483260!5m2!1ses-419!2smx" width="70%" height="450" style="border:0; border-radius: 5px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <a href="https://goo.gl/maps/PWgmtaMrwc1TXXRW9" target="_blank"><button> Ir a Google Maps <i class="bi bi-arrow-right"></i></button></a>
    </div>

    <div class="content">
        <h1>Imagenes de referencia</h1>
    </div>

    <div class="content">
        <div class="imagenes-sucursal">
            <img src="../assets/img/sucursal-1.png" alt=""><img src="../assets/img/sucursal-2.png" alt=""><img src="../assets/img/sucursal-3.png" alt=""><img src="../assets/img/sucursal-4.png" alt=""><img src="../assets/img/sucursal-5.png" alt=""><img src="../assets/img/sucursal-6.png" alt=""><img src="../assets/img/sucursal-7.png" alt="">
        </div>
    </div>


    <footer>
        <div class="content">
          <div class="left box">
            <a href="../index.php" class="logo"><img src="../assets/img/logo.png" alt="" height="50"></a>
            <div class="upper">
              <p>BANTAY TACTICAL es una empresa socialmente responsable y se enorgullece de cumplir
                con las normas de calidad mexicanas . Escuchamos las necesidades de nuestros clientes
                y en base a ellas ofertamos productos de vanguardia probados en el campo de batalla</p>
            </div>
            <div class="lower">
              <div class="topic">Siguenos en nuestras redes sociales</div>
              <div class="media-icons">
                <a href="https://www.facebook.com/Bantay-Tactical-114109317974098" target="_blank"><i class="bi bi-facebook"></i></a>
                
                <a href="#"><i class="bi bi-whatsapp"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
          
          <div class="right box">
                <div class="topic">Contactanos.</div>
                <form action="#">
                  <input type="text" placeholder="Inserte su correo electronico.">
                  <input type="submit" name="" value="Send">
                </form>
              </div>
            </div>
    </footer>

    <script src="../assets/js/navbar.js"></script>

</body>
</html>