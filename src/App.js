import React from 'react';
import { StyleSheet, View, Image, Text, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import foto from './Assets/foto.jpg'
import Card from './components/Card/Index'



const App = () => {

  function handlesocialmedia(rede_social) {

    switch (rede_social) {

      case 'github':
        Alert.alert('Meu Github', 'https://github.com/TheOnlyFlow')

        break

      case 'linkedin':
        Alert.alert('Meu Linkedin', 'https://www.linkedin.com/in/guilherme-correa-63a350138/')



        break
    }

  }

  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>Guilherme Correa</Text>
          <Text style={style.funcao}>Desenvolvedor Front-end</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handlesocialmedia('github')}>
              <Icon name='github' size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlesocialmedia('linkedin')}>
              <Icon name='linkedin' size={30} />
            </TouchableOpacity>


          </View>
        </View>

        < Card title='Formação Acadêmica' />
        < Card title='Experiência Profissional' />



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
  }


})

export default App;
