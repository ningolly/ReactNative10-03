import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import placaMae from './placaMae';
import placaVideo from './placaVideo';

const Stack = createStackNavigator();

export default function RotaBotao() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="placaMae" component={placaMae}/>
          <Stack.Screen name="placaVideo" component={placaVideo}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}