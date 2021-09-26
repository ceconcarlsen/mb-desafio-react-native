import React, { useState } from 'react';
import { success, error, info } from '@mobile/services/Toast';

/*Gabriel Cecon Carlsen*/
import * as S from './style';
import { images } from '../../../assets/images/images'
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Linking,
} from 'react-native';

const Login: React.FC = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const onPress = () => {
    success('Hi', 'You are logged in.');
  };

  return (
    <ScrollView style={{ alignContent: 'center', backgroundColor: 'white' }}>
      <S.ImageBackground
        source={images.mb.uri}
      />

      <S.View>
        <S.MainText>ENTRE COM SUA CONTA</S.MainText>
      </S.View>

      <View
        style={{
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 20,
          width: 350,
        }}
      >
        <S.SubText>
          Conecte-se a sua rede e explore milhares de projetos no mundo todo.
        </S.SubText>
      </View>

      <View style={{ alignItems: 'center', marginTop: 30 }}>
        <S.TextInput placeholder="Email" keyboardType="email-address" />
        <S.TextInput placeholder="Password" keyboardType="visible-password" />
        <S.SubText onPress={() => Linking.openURL('http://mblabs.com.br')}>esqueceu sua senha ?</S.SubText>
      </View>

      <View style={{ marginTop: 50, alignItems: 'center' }}>
        <S.TouchableOpacity onPress={onPress}>
          <S.TextTouchableOpacity>LOGIN</S.TextTouchableOpacity>
        </S.TouchableOpacity>
      </View>

    </ScrollView>
  );
};

export default Login;