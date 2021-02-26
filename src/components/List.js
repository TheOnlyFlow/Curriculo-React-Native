import React from 'react'
import {View, Text, SectionList} from 'react-native'

import style from './Card/style'

const SectionListBasics = () => {
    return (
      <View style={style.card_container}>
        <SectionList style={style.card}
          sections={[
            {title: 'Formação Acadêmica', data: ['Ensino Superior - Universidade Nove de Julho; Sistemas de Informação (conclusão prevista: 2022)', 'Vue JS Completo – Udemy, conclusão em 2020',
            'Web Moderno JavaScript – Udemy, Em andamento']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={style.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={style.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }

  export default SectionListBasics