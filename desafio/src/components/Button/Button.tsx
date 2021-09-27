import React from 'react';

import * as S from './Button.styles';

interface IButton { // define interface (contrato) 
  width?: number; // ?: não obrigatório
  title: string;
  loading?: boolean;
  disabled: boolean;
  icon?: React.ReactNode;
  onPress: () => void;
}

const Button = ({ // componente Button do tipo IButton
  width,
  title,
  loading,
  icon,
  disabled,
  onPress,
}: IButton) => {
  
  return (
    <S.Container> {/* view vazio */}
      <S.Button onPress={onPress} width={width} disabled={disabled}> {/* props */}
        <S.Text>{title}</S.Text>
        {icon && null}
        {loading && <S.Loading animating={loading} />}
      </S.Button>
    </S.Container>
  );
};

export default Button;
