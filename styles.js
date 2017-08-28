import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  formLabelTextStyle: {
    fontFamily: 'Chewy-Regular',
    alignSelf: 'center'
  },
  scrollViewStyle: {
    margin: 10,
    padding: 25,
    backgroundColor: '#d1d1e0',
    borderRadius: 20
  },
  cardFormInputStyle: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 0,
    margin: 0
  },
  textStyle: {
    fontFamily: 'Chewy-Regular'
  },
  dateTimeView: {
    flex: 1, justifyContent: 'flex-start',
    //flex-start defaults the layout of item to the top left of the component
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  loginTextStyle: {
    color: '#fff',
    margin: 5,
    fontFamily: 'Chewy-Regular'
  }
});