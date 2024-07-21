import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ICompany } from '../assets/fake.data';

export type RootStackParamList = {
  Home: undefined;
  Company: { data: ICompany };
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type CompanyScreenRouteProp = RouteProp<RootStackParamList, 'Company'>;
