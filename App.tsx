import { SafeAreaView, StatusBar } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar animated barStyle="default" />
      <Routes />
    </SafeAreaView>
  );
}
