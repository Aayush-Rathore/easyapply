import React, {useState, useEffect, useRef} from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  View,
  ToastAndroid,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useTheme} from '../providers/Theme.provider';
import {
  Modal,
  Portal,
  Text,
  Button,
  Divider,
  TextInput,
} from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';
import {PhoneAuth} from '../api/auth';

const Company = () => {
  const {theme} = useTheme();
  const [copied, setCopied] = useState(false);
  const borderColorAnim = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [records, setRecords] = useState([
    'Hello',
    'Hello',
    'Hello',
    'Hello',
    'Hello',
    'Hello',
    'Hello',
    'Hello',
    'Hello',
    'Hello',
    'Hello',
    'Hello',
  ]);

  useEffect(() => {
    Animated.timing(borderColorAnim, {
      toValue: copied ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [copied]);

  const borderColor = borderColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.border, '#80AF81'],
  });

  const renderHeader = () => (
    <View style={styles.container}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={{
            ...styles.modalContainer,
            backgroundColor: theme.colors.secondary,
            borderColor: theme.colors.border,
          }}>
          <TextInput label="Company Name" />
          <TextInput label="Company Email" />
          <TextInput label="Company Location" />
          <TextInput label="HR Name" />
          <TextInput label="Applying For" />
          <TextInput label="Contact" />
          <View style={styles.actions}>
            <Button
              mode="contained"
              textColor={theme.colors.primaryForeground}
              style={styles.applyBtn}>
              Update
            </Button>
            <Button
              mode="outlined"
              textColor={theme.colors.primaryForeground}
              style={styles.applyBtn}
              onPress={hideModal}>
              Close
            </Button>
          </View>
        </Modal>
      </Portal>
      <View>
        <Text
          style={{...styles.compName, color: theme.colors.primaryForeground}}>
          Reliance Digital Infotack Pvt. Ltd. (Hyderabad)
        </Text>
        <TouchableOpacity
          onPress={() => {
            setCopied(true);
            Clipboard.setString('aayu.r.2003@gmail.com');
            ToastAndroid.showWithGravity(
              'Email Copied',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
            setTimeout(() => {
              setCopied(false);
            }, 1000);
          }}>
          <Animated.View style={[styles.mailView, {borderColor}]}>
            <Text
              style={{
                color: theme.colors.secondaryForeground,
                ...styles.compMail,
              }}>
              aayu.r.2003@gmail.com
            </Text>
            {copied ? (
              <Image
                source={require('../assets/icons/check.png')}
                style={{width: 20, height: 20}}
              />
            ) : (
              <Image
                source={require('../assets/icons/copy.png')}
                style={{width: 20, height: 20}}
              />
            )}
          </Animated.View>
        </TouchableOpacity>
      </View>
      <Divider style={{marginVertical: 10}} />
      <View
        style={{
          backgroundColor: theme.colors.secondary,
          ...styles.otherDetails,
          borderColor: theme.colors.outline,
        }}>
        <View style={styles.details}>
          <Text
            style={{
              color: theme.colors.primaryForeground,
              ...styles.otherDetailsText,
            }}>
            HR Name
          </Text>
          <Text
            style={{
              color: theme.colors.primaryForeground,
              ...styles.otherDetailsText,
            }}>
            Aayush Hariom Singh Rathore
          </Text>
        </View>
        <Divider style={{marginVertical: 10}} />
        <View style={styles.details}>
          <Text
            style={{
              color: theme.colors.primaryForeground,
              ...styles.otherDetailsText,
            }}>
            Applied For
          </Text>
          <Text
            style={{
              color: theme.colors.primaryForeground,
              ...styles.otherDetailsText,
            }}>
            Front-End Developer
          </Text>
        </View>
        <Divider style={{marginVertical: 10}} />
        <View style={styles.details}>
          <Text
            style={{
              color: theme.colors.primaryForeground,
              ...styles.otherDetailsText,
            }}>
            Created At
          </Text>
          <Text
            style={{
              color: theme.colors.primaryForeground,
              ...styles.otherDetailsText,
            }}>
            01-02-2003
          </Text>
        </View>
        <Divider style={{marginVertical: 10}} />
        <View style={styles.details}>
          <Text
            style={{
              color: theme.colors.primaryForeground,
              ...styles.otherDetailsText,
            }}>
            Contact
          </Text>
          <Text
            style={{
              color: theme.colors.primaryForeground,
              ...styles.otherDetailsText,
            }}>
            +919098546675
          </Text>
        </View>
      </View>
      <View style={styles.actions}>
        <Button
          mode="contained"
          textColor={theme.colors.primaryForeground}
          style={styles.applyBtn}
          onPress={PhoneAuth}>
          Apply
        </Button>
        <Button
          mode="outlined"
          textColor={theme.colors.primaryForeground}
          style={styles.applyBtn}
          onPress={showModal}>
          Edit
        </Button>
      </View>
      <Divider style={{marginVertical: 10}} />
      <View>
        <Text style={{color: theme.colors.foreground, ...styles.applications}}>
          All Applications
        </Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={records}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={renderHeader}
      renderItem={({item}) => (
        <View style={{...styles.records, borderColor: theme.colors.border}}>
          <Text>{item}</Text>
        </View>
      )}
      ListEmptyComponent={() => (
        <Text
          style={{color: theme.colors.secondaryForeground, ...styles.notFound}}>
          Records not found
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  modalContainer: {
    padding: 20,
    marginHorizontal: 10,
    gap: 10,
    borderRadius: 10,
    borderWidth: 2,
  },
  compName: {
    fontSize: 23,
    fontFamily: 'FiraSans-Medium',
    marginVertical: 5,
  },
  mailView: {
    borderWidth: 2,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  compMail: {
    marginVertical: 2,
    fontSize: 15,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otherDetails: {
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  otherDetailsText: {
    fontSize: 17,
  },
  actions: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
    marginHorizontal: 2,
    marginVertical: 15,
  },
  applyBtn: {
    borderRadius: 8,
  },
  applications: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'PTSerif-Italic',
  },
  notFound: {
    fontFamily: 'PTSerif-Italic',
    fontWeight: '900',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 40,
    opacity: 0.5,
  },
  records: {
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginVertical: 5,
    marginHorizontal: 5,
  },
});

export default Company;
