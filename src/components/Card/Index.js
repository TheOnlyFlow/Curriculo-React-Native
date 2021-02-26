import React from 'react'
import { View, Text } from 'react-native'

import style from './style'





const Card = (props) => {

  const conteudo_card = `
  Ensino Superior - Universidade Nove de Julho; Sistemas de Informação (conclusão prevista: 2022)

  Aplicações Móveis Multiplataforma com React Native - Digital Innovation One, conclusão em 2021

  Vue JS Completo – Udemy, conclusão em 2020

  Design Digital - Escola SAGA, conclusão em 2015

  Web Moderno JavaScript – Udemy, Em andamento
 `


  return (
    <View style={style.card_container}>
      <View style={style.card}>
        <View style={style.card_header}>
          <Text>{props.title}</Text>
        </View>

        <View style={style.card_content}>
          <Text style={style.card_content_text}>
            {conteudo_card}

          </Text>
        </View>
      </View>
    </View>
  )
}

export default Card