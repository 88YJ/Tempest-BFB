import { StyleSheet } from 'react-native'
import { GLOBAL } from '../../utils/Constants'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: GLOBAL.SCREEN_HEIGHT,
    backgroundColor: 'black',
  },
  profileContent: {
    alignSelf: 'center',
    height: 270,
    backgroundColor: '#000411',
    borderBottomColor: '#384D48',
    borderBottomWidth: 2,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: 'white',
    alignSelf: 'center',
  },
  profileInfoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  profileName: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  profileTitle: {
    color: 'white',
    fontSize: 15,
    marginTop: 5,
  },
  profileCompany: {
    color: 'white',
    fontSize: 25,
    marginTop: 5,
  },
  profileOptions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 20,
  },
  profileOptionsText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
  },
  option: {
    alignItems: 'center',
  },
  optionCenter: {
    alignItems: 'center',
    marginTop: 35,
  },
  optionCenter2: {
    alignItems: 'center',
    marginTop: 35,
  },
  optionCenter3: {
    alignItems: 'center',
    marginTop: 25,
  },
  optionColor: {
    color: '#d3d3d3',
  },
  optionColor2: {
    color: 'red',
  },
})

export default styles
