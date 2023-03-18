import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage  from "./src/LandingPage";
import FormPage from "./src/FormPage";
import ThankYou from "./src/ThankYou";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name= 'Home' component={LandingPage} options={{ title: 'Home'}}/>
        <Stack.Screen name= 'Form' component={FormPage} options={{ title: 'Sign Up'}}/>
        <Stack.Screen name= 'ThankYou' component={ThankYou} options={{ title: 'Thank You'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


