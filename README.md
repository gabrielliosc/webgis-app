<a name="readme-top"/>
<br />
<div align="center">
<h3 align="center">Aplicativo WebGIS de distribuição de CRAS no estado do Rio de Janeiro</h3>
  <p>
    Aplicação web que permite a visualização e interação com os dados geoespaciais do Centro de Referência da Assistência Social usando o ArcGIS API for JavaScript.
  </p>
  <p><a href="https://github.com/gabrielliosc/webgis-app/issues">Report Bug</a></p>
</div>

<details>
  <summary>Súmario</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#construído-utilizando">Construído Utilizando</a></li>
      </ul>
    </li>
    <li>
      <a href="#inicializando">Inicializando</a>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contatos">Contato</a></li>
    <li><a href="#créditos">Créditos</a></li>
  </ol>
</details>

## Sobre O Projeto

<p>Bem vindo(a)! Esse é um pojeto de front-end de visualização de dados geoespaciais</p>

![image](https://github.com/user-attachments/assets/59efdbbc-b7fe-4198-9cd0-6d304af70133)


<p>Para baixar os dados utilizados na aplicação foram seguidos os seguintes passos:</p>
1. Acessar o portal IDE RJ

![image](https://github.com/user-attachments/assets/ddb33527-3683-468f-8702-cf5a5f3ff9f0)

2. Clicar em catálogo de dados no menu

![image](https://github.com/user-attachments/assets/03f441c9-956f-4550-8697-12ccb2c0e21b)

3. Pesquisar o nome do dado (CRAS) na página de catálogo de dados

![image](https://github.com/user-attachments/assets/6c17a67d-b34a-40e5-bb5d-c9c26017ddbc)

4. Clicar no dado desejado

![image](https://github.com/user-attachments/assets/f715909b-84b3-4a41-a6be-807d1d26cc99)

![image](https://github.com/user-attachments/assets/d932c250-0c94-4f4c-a6b9-db96a93fc5ee)

5. Acessar o REST da camada

![image](https://github.com/user-attachments/assets/592f36a0-1341-483d-8ae8-dd6e5ecc36a2)

6. Realizar a consulta escolhendo o formato GEOJSON

![image](https://github.com/user-attachments/assets/0663f4b7-62cd-4d62-b50b-2c76ecfebe6f)
![image](https://github.com/user-attachments/assets/0fc6da56-f9e6-42a4-957b-57f357310406)
![image](https://github.com/user-attachments/assets/8d8799ba-f071-4d8f-b744-2924d76600f6)

7. Salvar em um arquivo geojson co crtl + S na página de resultado da consulta

![image](https://github.com/user-attachments/assets/ab6ca69f-365b-4e87-88f2-ba7c07025efc)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Construído Utilizando

![Arcgis] [![Javascript][Javascript]][Javascript-url] [![CSS3][CSS3]][CSS3-url] [![HTML5][HTML5]][HTML5-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Inicializando

### Instalação

1. Clone o repositório

   ```sh
   git clone https://github.com/gabrielliosc/webgis-app.git
   ```

2. Comece a aplicação
   
   Para visualizar no browser abra o arquivo index.html
   
3. É possível acessar a aplicação pelo Github Pages também: https://gabrielliosc.github.io/webgis-app/


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [x] Download dos dados geoespaciais de CRAS
- [x] Criação da estrutura da aplicação
- [x] Estilização dos elementos da aplicação
- [x] Inicialização do webmap adicionando a camada
- [x] Adição de filtro de município 
- [x] Configuração de responsividade para dispositivos móveis

<p align="right">(<a href="#readme-top">back to top</a>)</p>

Obrigada! 😄

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contato

Gabrielli de Oliveira e Silva da Cruz- [Linkedin](https://www.linkedin.com/in/gabrielli-oliveira-cruz/) - gabrielli.osc@gmail.com
<p>Link do Projeto: https://github.com/gabrielliosc/webgis-app</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Créditos

* [Ceperj](https://gis-portal.westeurope.cloudapp.azure.com/iderj/?page=Cat%C3%A1logo-de-Dados&views=Parceiros-3%2CExibir-22%2CExibir-10)
* [Font Awesome](https://fontawesome.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[Arcgis]: https://img.shields.io/badge/ArcGIS-2C7AC3.svg?style=for-the-badge&logo=ArcGIS&logoColor=white
[Javascript]: https://img.shields.io/badge/Javascript-efd81d?style=for-the-badge&logo=javascript&logoColor=ffffff
[Javascript-url]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
[HTML5]: https://img.shields.io/badge/Html5-ea5d24?style=for-the-badge&logo=Html5&logoColor=ffffff
[HTML5-url]: https://developer.mozilla.org/en-US/docs/Glossary/HTML5
[CSS3]: https://img.shields.io/badge/css3-2862e9?style=for-the-badge&logo=css3&logoColor=ffffff
[CSS3-url]: https://developer.mozilla.org/pt-BR/docs/Web/CSS
