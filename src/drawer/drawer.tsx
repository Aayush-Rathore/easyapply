import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { useTheme } from '../providers/Theme.provider';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const { theme } = useTheme();

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://github.com/shadcn.png' }}
          style={styles.profileImage}
        />
        <Text style={[styles.headerText, { color: theme.colors.foreground }]}>
          Aayush Rathore
        </Text>
      </View>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
        labelStyle={{ color: theme.colors.foreground, fontSize: 16 }}
      />
      <DrawerItem
        label="About"
        onPress={() => props.navigation.navigate('About')}
        labelStyle={{ color: theme.colors.foreground, fontSize: 16 }}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  headerText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomDrawerContent;
