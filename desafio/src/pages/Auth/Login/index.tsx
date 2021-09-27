import React, { useState } from 'react';
import { success, error, info } from '@mobile/services/Toast';

import * as S from './styles';
import { images } from '../../../assets/images/images';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Linking,
} from 'react-native';

import ButtonLogin from '../../../components/ButtonLogin/ButtonLogin';
import Text from '../../../components/Text/Text';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const onPressLogin = () => {
    success('Hi', 'You are logged in.');
  };

  return (
    <ScrollView style={{ alignContent: 'center', backgroundColor: 'white' }}>
      <S.Image source={images.mb.uri} />

      {/*S.View > Text (template)*/}
      <S.ViewMain>
        <Text
          text='ENTRE COM SUA CONTA'
          textColor='white'
          textSize={20}
        ></Text>
      </S.ViewMain>

      <S.ViewSub
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
      </S.ViewSub>

      <View style={{ alignItems: 'center', marginTop: 30 }}>
        <S.TextInput placeholder="Email" keyboardType="email-address" />
        <S.TextInput placeholder="Password" keyboardType="visible-password" />
        <S.SubText onPress={() => Linking.openURL('http://mblabs.com.br')}>
          esqueceu sua senha ?
        </S.SubText>
      </View>

      {/*ButtonLogin*/}
      <ButtonLogin title='Login' width={300} onPress={onPressLogin} />
    </ScrollView>
  );
};

export default Login;

/*
   <View style={{ marginTop: 50, alignItems: 'center' }}>
        <S.TouchableOpacity onPress={onPressLogin}>
          <S.TextTouchableOpacity>LOGIN</S.TextTouchableOpacity>
        </S.TouchableOpacity>
      </View
*/
