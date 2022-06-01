import { Text, View } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native'; 
import theme from '../style';

export default function Details(){
    //navigation
    const navigation  = useNavigation(); 
    const route = useRoute(); 
    const u = route.params; 
    //JSX
    return (
      <View>
        <Text style={theme.label}>Name</Text>
        <Text>{u.firstName} {u.lastName}</Text>
        <Text style={theme.label}>Age</Text>
        <Text>{u.age}</Text>
        <Text style={theme.label}>Email</Text>
        <Text>{u.email}</Text>
        <Text style={theme.label}>Phone</Text>
        <Text>{u.phone}</Text>
        <Text style={theme.label}>Department</Text>
        <Text>{u.department}</Text>
        <Text style={theme.label}>Address</Text>
        <Text>{`${u.address.street}, ${u.address.suburb}, ${u.address.state}, ${u.address.postCode}, ${u.address.country}`}</Text>
      </View>
    ); 
  }