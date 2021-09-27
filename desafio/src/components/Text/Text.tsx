import React from 'react';
import * as S from './Text.styles';

interface IText {
  text: string;
  textColor?: string;
  textSize?: number;
  fontFamily?: string;
}

const Text = ({ text, textColor, textSize, fontFamily }: IText) => {
  return (
    <S.Text textColor={textColor} textSize={textSize} fontFamily={fontFamily}>
      {text}
    </S.Text>
  );
};

export default Text;
