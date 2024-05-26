import React from 'react';
import './ebook.css';

import exploring_Space from './assets/Default_Add_the_title_Exploring_Space_The_Last_Frontier_and_a_2.jpg';
import espaco from './assets/Default_A_stunning_image_of_deep_space_with_colorful_galaxies_3.jpg';
import solar_system from './assets/Default_An_artistic_image_of_the_Solar_System_showing_all_the_1.jpg';
import estrelas from './assets/Default_An_image_of_a_star_at_different_stages_of_its_life_fr_0.jpg';
import telescope from './assets/Default_An_image_of_the_James_Webb_Space_Telescope_operating_i_1.jpg';
import futuristic from './assets/Default_A_futuristic_image_of_a_human_colony_on_Mars_with_Mart_3.jpg';

function Ebook() {
  return (
    <div className="ebook">
      {/* Nome do Criador */}
      <div className="creator">
        <h2>Criado por: Thiago José Lopes</h2>
      </div>
      
      {/* Capa */}
      <div className="cover">
        <h1>Explorando o Espaço: A Última Fronteira 🚀</h1>
        <p>Uma jornada fascinante pelos mistérios do cosmos</p>
        <img src={exploring_Space} alt="Capa do e-book" />
      </div>
      
      {/* Página 1 */}
      <div className="page">
        <h2>A Fascinação pelo Espaço</h2>
        <p>Desde tempos imemoriais, o espaço tem sido um mistério intrigante para a humanidade. As estrelas, os planetas e as vastas extensões do universo sempre despertaram nossa curiosidade e nos inspiraram a explorar. Neste e-book, vamos embarcar em uma jornada fascinante pelo cosmos, descobrindo como a ciência e a tecnologia estão desvendando os segredos da última fronteira.</p>
        <img src={espaco} alt="Imagem do espaço profundo" />
      </div>
      
      {/* Página 2 */}
      <div className="page">
        <h2>Nosso Sistema Solar</h2>
        <p>O Sistema Solar é nosso quintal cósmico. Composto por oito planetas, cada um com características únicas, ele é o ponto de partida para nossa exploração espacial. Da superfície rochosa de Marte aos anéis majestosos de Saturno, cada planeta oferece um mundo de descobertas.</p>
        <img src={solar_system} alt="Imagem do Sistema Solar" />
      </div>
      
      {/* Página 3 */}
      <div className="page">
        <h2>A Vida das Estrelas</h2>
        <p>As estrelas são os tijolos fundamentais do universo. Nascem, vivem e morrem em um ciclo espetacular que ilumina o cosmos. Desde a nossa estrela, o Sol, até as gigantes vermelhas e as supernovas, as estrelas contam a história da evolução do universo.</p>
        <img src={estrelas} alt="Imagem das estrelas" />
      </div>
      
      {/* Página 4 */}
      <div className="page">
        <h2>Missões Interestelares</h2>
        <p>Enquanto nosso Sistema Solar é fascinante, as missões interestelares estão começando a olhar além, em direção a outras estrelas e planetas. Projetos como o telescópio espacial James Webb e a sonda Voyager estão ampliando nossos horizontes e trazendo novas descobertas.</p>
        <img src={telescope} alt="Imagem do telescópio James Webb" />
      </div>
      
      {/* Página 5 */}
      <div className="page">
        <h2>O Que Vem a Seguir?</h2>
        <p>O futuro da exploração espacial é brilhante e cheio de promessas. Com a tecnologia avançando rapidamente, sonhamos em colonizar Marte, minerar asteroides e talvez um dia visitar outros sistemas estelares. A última fronteira está cada vez mais próxima de ser desvendada.</p>
        <img src={futuristic} alt="Imagem de uma colônia em Marte" />
      </div>

      {/* Créditos */}
      <div className="credits">
        <p>Texto gerado pelo <a href="https://chat.openai.com/">ChatGPT</a></p>
        <p>Imagens geradas por <a href="https://www.leonardo.ai/">Leonardo AI</a></p>
      </div>
    </div>
  );
}

export default Ebook;
