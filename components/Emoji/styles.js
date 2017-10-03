import { StyleSheet, Dimensions } from 'react-native'

const window = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    marginLeft: 15,
    marginBottom: 15,
    width: window.width / 5,
    height: window.width / 5,
    alignItems: 'center' ,
    justifyContent: 'center',
  },
  font: {
    fontSize: window.height / 15,
    textAlign: 'center',
    alignItems: 'center' ,
    justifyContent: 'center',
  },
  copied: {
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
    color: 'black',
    opacity: 0.8,
  }
})