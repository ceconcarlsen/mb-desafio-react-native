import styled from 'styled-components/native';
import * as Window from '@mobile/services/dimensions';

interface IProps {
  // interface para props
  width?: number;
  loading?: boolean;
  disabled: boolean;
}

export const Image = styled.ImageBackground`
  width: 200;
  height: 170;
  align-self: center;
  margin-top: 20;
`;

export const MainText = styled.Text`
  align-self: center;
  color: white;
  font-size: 20px;
  font-family: 'Poppins-BoldItalic';
  padding: 10px;
`;

export const SubText = styled.Text`
  color: grey;
  font-family: 'Poppins-BoldItalic';
  font-size: 16px;
`;

export const ViewMain = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

  align-self: center;
  justify-content: center;
  align-items: center;

  height: ${Window.heightScale(0.07)};
  width: ${({ width }: IProps) =>
    width ? Window.widthScale(width) : Window.widthScale(0.7)}px;
  border-radius: ${Window.normalizeScale(10)}px;
  margin-top: ${Window.heightScale(0.06)};
`;

export const ViewSub = styled.View``;
export const TextInput = styled.TextInput`
  height: 40;
  width: 350;
  border-color: #ebc733;
  border-width: 3;
  margin-top: 10;

  padding: 8px;

  border-radius: 10;

  font-family: 'Poppins-BoldItalic';
`;
