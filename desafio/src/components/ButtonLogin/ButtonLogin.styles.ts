import styled from 'styled-components/native';
import * as Window from '@mobile/services/dimensions';

interface IProps {
  width?: number;
}

export const Container = styled.View``

export const Button = styled.TouchableOpacity`
  width: ${({ width }: IProps) =>
    width ? Window.widthScale(width) : Window.widthScale(0.7)}px;

  padding-vertical: ${Window.heightScale(0.01)}px;
  padding-horizontal: ${Window.heightScale(0.02)}px;

  margin-top: ${Window.heightScale(0.06)};

  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: center;
  align-self: center;

  border-radius: ${Window.normalizeScale(100)}px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${Window.fontScale(20)}px;
  font-family: 'Poppins-BoldItalic';
`;
