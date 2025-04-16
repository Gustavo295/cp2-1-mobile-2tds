import { StatusBar } from 'expo-status-bar';
import ScreenHome from './src/screens/ScreenHome';
import ScreenInfo from './src/screens/ScreenInfo';
import ScreenAboutUs from './src/screens/ScreenAboutUs';
import ScreenRecycle from './src/screens/ScreenRecycle';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
			<Stack.Navigator>


				<Stack.Screen name="ScreenHome" component={ScreenHome} options={{headerShown:false}}/>
				<Stack.Screen name="ScreenInfo" component={ScreenInfo} options={{headerShown:false}}/>
				<Stack.Screen name="ScreenRecycle" component={ScreenRecycle} options={{headerShown:false}}/>
				<Stack.Screen name="AboutUs" component={ScreenAboutUs} options={{headerShown:false}}/>

			</Stack.Navigator>
		</NavigationContainer>
  );
}
