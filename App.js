import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.prof}>
      <Text>Home Screen of the app</Text>
      <Button
        onPress={() =>
          navigate('Profile', { names: ['Mehdi', 'Imad', 'Walid'] })
        }
        title="See profiles"
      />
    </View>
  );
}

function ProfileScreen({ navigation, route }) {
  return (
    <View style={styles.prof}>
      <Text>Profile Screen</Text>
      <Text>Users: </Text>
      <Text>{route.params.names[0]}</Text>
      <Text>{route.params.names[1]}</Text>
      <Text>{route.params.names[2]}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  prof:{ flex: 1, alignItems: 'center', justifyContent: 'center' },
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
