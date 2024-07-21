import React, {useRef, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {FlatList, Swipeable} from 'react-native-gesture-handler';
import {Companies, ICompany} from '../assets/fake.data';
import {useTheme} from '../providers/Theme.provider';
import {HomeScreenNavigationProp} from '../types/screens';

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<HomeProps> = ({navigation}) => {
  const {theme} = useTheme();
  const [openRow, setOpenRow] = useState<null | string>(null);
  const swipeableRefs = useRef<{[key: string]: Swipeable | null}>({});

  const renderItem = ({item}: {item: ICompany}) => (
    <Swipeable
      ref={ref => {
        if (ref && item.id) {
          swipeableRefs.current[item.id] = ref;
        }
      }}
      onSwipeableWillOpen={() => {
        if (openRow && openRow !== item.id) {
          swipeableRefs.current[openRow]?.close();
        }
        setOpenRow(item.id);
      }}
      onSwipeableClose={() => {
        if (openRow === item.id) {
          setOpenRow(null);
        }
      }}
      renderRightActions={() => (
        <View
          style={{backgroundColor: theme.colors.primary, ...styles.deleteBtn}}>
          <Image
            source={require('../assets/icons/bin.png')}
            style={styles.deleteIcon}
          />
        </View>
      )}>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('Company', {
            data: Companies[1 - parseInt(item.id)],
          })
        }>
        <View
          style={{
            backgroundColor: theme.colors.secondary,
            ...styles.listItem,
          }}>
          <View>
            <Text style={{color: theme.colors.foreground, ...styles.listText}}>
              {item.company}
            </Text>
            <Text
              style={{
                color: theme.colors.secondaryForeground,
                ...styles.listMail,
              }}>
              {item.mail}
            </Text>
          </View>
          <View style={styles.itemInfo}>
            <Text
              style={{
                ...styles.listAppliedAt,
                color: theme.colors.primaryForeground,
              }}>
              {item.appliedAt}
            </Text>
            <Image
              style={styles.listOpenIcon}
              source={require('../assets/icons/folder.png')}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Swipeable>
  );

  return (
    <View style={{backgroundColor: theme.colors.secondaryContainer}}>
      <FlatList
        data={Companies}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    minHeight: 50,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 2,
    marginHorizontal: 5,
    borderRadius: 10,
    flexDirection: 'row',
  },

  listText: {
    fontSize: 20,
    fontFamily: 'FiraSans-Medium',
    fontWeight: '200',
  },

  deleteBtn: {
    width: 100,
    minHeight: 50,
    marginVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  deleteIcon: {
    width: 30,
    height: 30,
  },

  listMail: {
    fontSize: 15,
  },

  listAppliedAt: {
    fontFamily: 'PTSerif-Italic',
    fontSize: 16,
  },

  itemInfo: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 3,
  },

  listOpenIcon: {
    width: 22,
    height: 22,
  },
});

export default Home;
