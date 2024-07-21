import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export const PhoneAuth = async () => {
  try {
    await GoogleSignin.configure({
      webClientId:
        '123456789000-abcdefghijklmnopqrstuvwxyz123456.apps.googleusercontent.com',
    });
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    console.log(idToken);
  } catch (error) {
    console.error(error);
  }
};
