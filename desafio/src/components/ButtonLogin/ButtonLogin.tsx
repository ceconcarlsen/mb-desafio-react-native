import React from 'react';

import * as S from './ButtonLogin.styles';

interface IButtonLogin {
  width?: number;
  title: string;
  onPress: () => void;
}

const ButtonLogin = ({ width, title, onPress }: IButtonLogin) => {
  return (
    <S.Container>
      <S.Button onPress={onPress} width={width}>
        <S.Text>{title}</S.Text>
      </S.Button>
    </S.Container>
  );
};

export default ButtonLogin;
