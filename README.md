# Cartão de Crédito Válido
 
## [Link do projeto em funcionamento](https://deboramds.github.io/SAP008-card-validation/src/index.html)

## Índice

* [1. Sobre ](#1-Sobre)
* [2. Objetivo do projeto](#2-Plano-do-projeto)
* [3. Contexto criado pela desenvolvedora](#3-Contexto-criado-pela-desenvolvedora)
* [4. Funcionalidade](#4-Funcionalidade)
* [5. Projeto Final](#5-Projeto-final)
* [6.Ferramentos Utilizadas](#6-Ferramentos-utilizadas)

***

## 1. Sobre 

O algoritmo de Luhn, também chamado de módulo 10, é um método de soma de verificação, usado para validar números de identificação, como o IMEI de telefones celulares, cartões de crédito etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem ser multiplicados por dois; se esse número for maior ou igual a 10, devemos adicionar os dígitos do resultado; o número a verificar será válido se a soma de seus dígitos finais for um múltiplo de 10.

![Algoritmo](https://github.com/deboramds/SAP008-card-validation/blob/main/thumb.png)




## 2. Objetivo do Projeto

O objetivo desse projeto é desenvolver um aplicativo da web que permita o usuário validar o número de um cartão de crédito . O projeto deve star dentro de um contexto real criado pela desenvolvedora . Deverá também conter uma funcionalidade para ocultar os primeiros dígitos e deixar visivel os quatro últimos .
O mesmo deve ser deselvolvido em Vanilla Javascript, html e Css. 

## 3. Contexto criado pela desenvolvedora 

Em tempos de grandes demandas de compras online, clientes procuram cada vez mais sites de agências de turismo para fazer comparativos de preços e pacotes . Pensando na segurança, conforto e facilidade no acesso, o Martins Turismo oferece a seus clientes um processo de pagamento ágil, baseado no algoritimo de Luhn, que foi desenvolvido por Hans Peter Luhn, da IBM, em 1954. Ele é capaz de detectar um erro simples em um dígito, assim como a maioria das transposições de um dígito com os dígitos adjacentes.

No aplicativo o cliente tera dois caminhos conforme fluxograma abaixo :

![Fluxograma](https://github.com/deboramds/SAP008-card-validation/blob/main/src/imagem/fluxograma-martins-viagens.png)

## 4. Funcionalidade 

- [x] Formulário local para inserir os dados do cartão
- [x] Botão para ativar uma verificação
- [x] Alerta com os primeiros números do cartão mascarados com a # e os 4 últimos visíveis
- [x] Botão no alerta que limpa os dados para inserir outros, sem sair do aplicativo

## 5. Projeto Final

### Imagens da última versão do projeto

Início

![Início](https://github.com/deboramds/SAP008-card-validation/blob/main/src/imagem/imagem-final.jpg)


Cartão Inválido

![Cartão Inválido](https://github.com/deboramds/SAP008-card-validation/blob/main/src/imagem/imagem-cartao-invalido.jpg)

Cartão Válido

![Cartão Válido](https://github.com/deboramds/SAP008-card-validation/blob/main/src/imagem/imagem-cartao-valido.jpg)

## Ferramentas utilizadas

- Html
- Css
- JavaScript
- Canva
- Git
- GitHub












