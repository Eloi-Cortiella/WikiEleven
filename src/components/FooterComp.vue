<template>
<footer class="footer">
    <div class="footer-content">
        <div class="footer-section">
            <h2>Wiki Eleven</h2>
            <p>Tu fuente definitiva para todo lo relacionado con Inazuma Eleven. Encuentra información sobre personajes, episodios, equipos y más.</p>
            <img alt="Logo Wiki Eleven" src="/src/img/pagina/logo_bate-test_start.png">
        </div>
        <div class="footer-section links">
            <h2>Links informacion</h2>
            <ul>
                <li><a href="/characters">Personajes</a></li>
                <li><a href="/episodes">Episodios</a></li>
                <li><a href="/teams">Equipos</a></li>
                <li><a href="/games">Juegos</a></li>
                <li><a href="/contact">Contacto</a></li>
            </ul>
        </div>
        <div class="footer-section social">
            <h2>Síguenos</h2>
            <div class="social-links">
                <a href="https://twitter.com/inazuma_project"><img src="/src/img/pagina/twitter.png" alt="Twitter"></a>
                <a href="https://www.facebook.com/inazumaeleven"><img src="/src/img/pagina/github.png" alt="Github"></a>
                <a href="https://www.youtube.com/inazumaeleven"><img src="/src/img/pagina/youtube.png" alt="YouTube"></a>
                <a href="https://www.instagram.com/inazumaeleven"><img src="/src/img/pagina/discord.png" alt="Discord"></a>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        &copy; 2024 Inazuma Eleven Wiki | Todos los derechos reservados.
    </div>
</footer>

</template>

<style scoped>

.footer {
    background-color: #2c3e50;
    color: white;
    padding: 30px 0;
    text-align: left;
    font-family: Arial, sans-serif;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 50px;
}

.footer-section {
    flex: 1;
    margin: 10px;
}

.footer-section img {
    height: 20vh;
}

.footer-section h2 {
    margin-bottom: 15px;
    font-size: 18px;
    color: #f39c12;
}

.footer-section p {
    font-size: 14px;
    line-height: 1.6;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section ul li {
    margin-bottom: 10px;
}

.footer-section ul li a {
    color: white;
    text-decoration: none;
}

.footer-section ul li a:hover {
    color: #f39c12;
}

.social-links {
    display: flex;
}

.social-links a {
    margin-right: 15px;
}

.social-links img {
    width: 40px;
    height: 40px;
}

.footer-bottom {
    background-color: #1a252f;
    padding: 10px 0;
    text-align: center;
    font-size: 14px;
    border-top: 1px solid #f39c12;
    margin-top: 20px;
}

@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
        padding: 0 20px;
    }
    
    .footer-section {
        margin: 20px 0;
    }
    
    .social-links a {
        margin-right: 10px;
    }
    
    .social-links img {
        width: 35px;
        height: 35px;
    }
}

</style>