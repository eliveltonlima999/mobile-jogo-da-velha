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
    // backgroundColor: '#FFF',
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
});

export default styles;
