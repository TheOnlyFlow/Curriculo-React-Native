import {StyleSheet} from 'react-native'


const style = StyleSheet.create({


    card_container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20

      },
      card_header:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#e07a5f',
        borderRadius: 10

      },
      card: {

        width: '90%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#252422',
        padding: 10,
        marginBottom:5,
        backgroundColor: '#f4f1de'


      },
      card_content: {
        marginTop: 10,


      },
      card_content_text: {

        color: '#252422',
        padding: 10
      }
})

export default style