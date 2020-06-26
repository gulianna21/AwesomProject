import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  photo: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  name: {
    marginLeft: 10,
    fontSize: 22,
    color: '#2e2e2e',
  },
  statusText: {
    marginLeft: 10,
    fontSize: 19,
    color: '#2e2e2e',
  },
  statusId: {
    marginLeft: 14,
    fontSize: 19,
    color: '#b0b0b0',
  },
  mainText: {
    marginLeft: 14,
    fontSize: 19,
    color: '#0000FF',
  },
  container: {
    paddingTop: 53,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    // height: 40,
    borderRadius: 5,
    margin: 10,
  },
  output: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 5,
    margin: 10,
    height: 80,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    borderRadius: 5,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
});
