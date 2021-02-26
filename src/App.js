import React from 'react';
import { StyleSheet, View, Image, Text, Alert, TouchableOpacity, Linking, ScrollView, SafeAreaView, } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import foto from './Assets/foto.jpg'
import Card from './components/Card/Index'
import Projs from './components/Projetos'







const App = () => {




  return (
    <>
      <SafeAreaView style={style.container}>
        <ScrollView style={style.scrollView}>
          <View style={style.container_cabecalho}>
            <Image source={foto} style={style.foto} />
            <Text style={style.nome}>Guilherme Correa</Text>
            <Text style={style.funcao}>Desenvolvedor Front-end</Text>
            <View style={style.redes_sociais}>
              <TouchableOpacity onPress={() => Linking.openURL('https://github.com/TheOnlyFlow')}>
                <Icon color='#f2cc8f'  name='github' size={30} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/guilherme-correa-63a350138/')}>
                <Icon color='#f2cc8f' name='linkedin' size={30} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('mailto:guilherme.vit.correa@gmail.com')}>
                <Icon color='#f2cc8f' name='mail' size={30} />
              </TouchableOpacity>


            </View>
          </View>

          < Card title='Formação Acadêmica / Técnica'/>

          <Projs card_content='asdiuasghduiasgdiusag' title='Experiência / Projetos' />



        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({

  container: {
    flex: 1,

  },
  scrollView: {
    backgroundColor: '#3d405b',

  },
  page: {
    backgroundColor: '#F5D3A9',
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
    marginTop: 10,
    color: '#81b29a'
  },
  funcao: {

    color: '#e07a5f',
    marginBottom: 10
  },
  redes_sociais: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 20,


  }


})

export default App;
