import {NavigationContainer} from '@react-navigation/native'; 
import {createNativeStackNavigator, transitionConfig} from '@react-navigation/native-stack';
import Index from './screens/Index'; 
import Details from './screens/Details';
import Create from './screens/Create';
import Edit from './screens/Edit';
import Delete from './screens/Delete';
import NavigationStyles from './NavigationStyles';

export default function App() {
  const Stack = createNativeStackNavigator(
  );
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index" screenOptions={NavigationStyles}>
          <Stack.Screen name="Index" component={Index} options={{ title: 'Staff Profiles' }} />
          <Stack.Screen name="Details" component={Details} options={{ title: 'Profile Details' }} />
          <Stack.Screen name="Create" component={Create} options={{ title: 'Add Profile' }}/>
          <Stack.Screen name="Edit" component={Edit} options={{ title: 'Update Profile' }}/>
          <Stack.Screen name="Delete" component={Delete} options={{ title: 'Delete Profile' }}/>
        </Stack.Navigator>
    </NavigationContainer>
    
  ); 
}