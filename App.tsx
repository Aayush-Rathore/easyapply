import 'react-native-gesture-handler';
import {FAB, Portal, Modal, TextInput, Button} from 'react-native-paper';
import {useTheme} from './src/providers/Theme.provider';
import {StyleSheet, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {useState} from 'react';
import Route from './src/drawer/navigation';

const App = () => {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const {theme} = useTheme();
  return (
    <>
      <FAB
        icon={require('./src/assets/icons/plus.png')}
        style={{
          backgroundColor: theme.colors.outline,
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
          width: 60,
          height: 60,
          zIndex: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={showModal}
      />
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
              Save
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
      <Toast position="bottom" bottomOffset={5} visibilityTime={100} />
      <Route />
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    padding: 20,
    marginHorizontal: 10,
    gap: 10,
    borderRadius: 10,
    borderWidth: 2,
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
});

export default App;
