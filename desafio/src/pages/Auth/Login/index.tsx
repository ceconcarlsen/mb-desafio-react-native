import React, { useState } from 'react';
import { success } from '@mobile/services/Toast';

import * as S from './styles';
import { images } from '../../../assets/images/images';
import { View, ScrollView, Linking } from 'react-native';

import ButtonLogin from '../../../components/ButtonLogin/ButtonLogin';
import Text from '../../../components/Text/Text';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const onPressLogin = () => {
    success('Hi', 'You are logged in.');
  };

  return (
    <S.ScrollView backGroundColor="white">
      <S.Image source={images.mb.uri} />

      <S.ViewMain>
        <Text
          text="ENTRE COM SUA CONTA"
          textColor="white"
          textSize={20}
          fontFamily="Poppins-Bold"
        ></Text>
      </S.ViewMain>

      <S.ViewSub>
        <Text
          text="Conecte-se a sua rede e explore milhares de projetos no mundo todo."
          textColor="black"
          textSize={14}
          fontFamily="Poppins-Light"
        ></Text>
      </S.ViewSub>

      <S.ViewSub>
        <S.TextInput placeholder="Email" keyboardType="email-address" />
        <S.TextInput placeholder="Password" keyboardType="visible-password" />

        <S.Link fontFamily="Poppins-Bold" onPress={() => Linking.openURL('http://mblabs.com.br')}>
          esqueceu sua senha ?
        </S.Link>
      </S.ViewSub>

      <ButtonLogin title="Login" width={300} onPress={onPressLogin} />
    </S.ScrollView>
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
