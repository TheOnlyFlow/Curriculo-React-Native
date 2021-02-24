import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import foto from './Assets/foto.jpg'



const App = () => {
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>Guilherme Correa</Text>
          <Text style={style.funcao}>Desenvolvedor Front-end</Text>
          <View style={style.redes_sociais}>
            <Icon name='github' size={30} />
            <Icon name='linkedin' size={30} />


          </View>
        </View>

        <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text>Experiência Profissional</Text>
            </View>

            <View style={style.card_content}>
              <Text style={style.card_content_text}>Experiência Profissional</Text>
              <Text style={style.card_content_text}>Experiência Profissional</Text>
              <Text style={style.card_content_text}>Experiência Profissional</Text>
            </View>
          </View>
        </View>

      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,

  },
  container_cabecalho: {

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  foto: {

    width: 250,
    height: 250,
    borderRadius: 125

  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {

    color: '#939393',
    marginBottom: 10
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: 20
  },
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20

  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#fff'


  },
  card_content:{
    marginTop:10

  },
  card_content_text:{
    color:'#939393',
    padding:10
  }

})

export default App;
