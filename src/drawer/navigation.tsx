import React from 'react';
import {
  createDrawerNavigator,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import {Button, IconButton, TextInput} from 'react-native-paper';
import {useTheme} from '../providers/Theme.provider';
import Home from '../screens/Home';
import Company from '../screens/Company';
import About from '../screens/About';
import CustomDrawerContent from './drawer';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Setup from '../screens/Setup';

type DrawerParamList = {
  Home: undefined;
  Company: undefined;
  About: undefined;
  Setup: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

type RoutesProps = DrawerScreenProps<DrawerParamList>;

const Routes: React.FC<RoutesProps> = () => {
  const {theme} = useTheme();
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: string) => setSearchQuery(query);
  const navigationFun = useNavigation();

  return (
    <Drawer.Navigator
      initialRouteName="Setup"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={({navigation}) => ({
        title: '',
        headerRight: () => (
          <IconButton
            icon={require('../assets/icons/menu.png')}
            iconColor={theme.colors.foreground}
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerLeft: () => (
          <TextInput
            placeholder="Search"
            value={searchQuery}
            onChangeText={onChangeSearch}
            style={{
              ...styles.searchInput,
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.border,
            }}
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            theme={{colors: {text: theme.colors.foreground}}}
            // right={
            //   <TextInput.Icon icon={require('../assets/icons/magnifier.png')} />
            // }
          />
        ),
      })}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Setup" component={Setup} />
      <Drawer.Screen
        name="Company"
        component={Company}
        options={{
          drawerLabel: () => null,
          title: '',
          drawerIcon: () => null,
          headerLeft: () => {
            return (
              <Button
                mode="text"
                icon={require('../assets/icons/go-back.png')}
                textColor={theme.colors.foreground}
                onPress={() => navigationFun.goBack()}>
                Back
              </Button>
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    height: 56,
  },
  searchInput: {
    width: 320,
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    height: 40,
    backgroundColor: 'transparent',
    flex: 1,
    color: 'white',
    borderRadius: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
});

export default Routes;
