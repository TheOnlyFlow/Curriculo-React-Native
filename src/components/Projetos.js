import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Linking, ScrollView, SafeAreaView, } from 'react-native';
import style from './Card/style'








const Projs = (props) => {

  const conteudo = `
  Experiência:

    D&G Sistemas

      Responsável pelo desenvolvimento de sistemas web e desktop focando-se primariamente em ferramentas e tecnologias front-end. Extração de requisitos, modelagem de dados, auxiliar na implementação de melhorias e  identificação de necessidades, realizar pesquisas na área de atuação tecnológica para aplicação do conceito em projeto, atendendo as necessidades da empresa.


  Projetos (Diponíveis no meu Github):

    Javascript:

      Projeto-Gerenciamento-de-Usuarios-Js

      Projeto-Calculadora-Javascript

      Javascript-Projeto-Dropbox-Clone

  React Native:

    Curriculo-React-Native

    Calculadora-React-Native

  React:

    Projeto-Calculadora-React
`



  return (
    <View style={style.card_container}>
      <View style={style.card}>
        <View style={style.card_header}>
          <Text>{props.title}</Text>
        </View>

        <View style={style.card_content}>
          <Text style={style.card_content_text}>
            {conteudo}


          </Text>
        </View>
      </View>
    </View>
  )
}



export default Projs;
