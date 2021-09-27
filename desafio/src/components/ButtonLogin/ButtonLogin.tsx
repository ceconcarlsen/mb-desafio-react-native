import React from 'react';

import * as S from './ButtonLogin.styles';

interface IButtonLogin {
  width?: number;
  title: string;
  loading?: boolean;
  icon?: React.ReactNode;
  onPress: () => void;
}

const ButtonLogin = ({ width, title, onPress }: IButtonLogin) => {
  return (
      <S.Button onPress={onPress} width={width}>
        <S.Text>{title}</S.Text>
      </S.Button>
  );
};

export default ButtonLogin;
