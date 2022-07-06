import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  table: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    bottom: -50,
  },
  vertical: {
    flex: 1,
    borderLeftWidth: 5,
    borderLeftColor: '#FFF',
  },
  horizontal: {
    flex: 1,
    borderTopWidth: 5,
    borderTopColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  otherActions: {
    width: '80%',
    height: 100,
    bottom: -130,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonReset: {
    backgroundColor: '#FFF',
    height: 50,
    width: 110,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelButtonReset: {
    color: '#000',
    fontSize: 16,
  },
});

export default styles;
