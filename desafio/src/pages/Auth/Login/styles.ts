import styled from 'styled-components/native';
import * as Window from '@mobile/services/dimensions';

interface IProps {
  // interface para props
  backGroundColor?: string;
  width?: number;
  fontFamily?: string;
  textSize?: number;
}
export const ScrollView = styled.ScrollView`
  align-content: center;
  background-color: ${(props: IProps) =>
    props.backGroundColor ? props.backGroundColor : 'white'};
`;

export const Image = styled.ImageBackground`
  width: ${({ width }: IProps) =>
    width ? Window.widthScale(width) : Window.widthScale(0.45)}px;
  height: ${Window.heightScale(0.25)};
  align-self: center;
  margin-top: ${Window.heightScale(0.04)};
`;

export const ViewMain = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  align-self: center;
  justify-content: center;
  align-items: center;

  height: ${Window.heightScale(0.07)};
  width: ${({ width }: IProps) =>
    width ? Window.widthScale(width) : Window.widthScale(0.8)}px;
  border-radius: ${Window.normalizeScale(10)}px;
  margin-top: ${Window.heightScale(0.04)};
`;

export const ViewSub = styled.View`
  align-items: center;
  align-self: center;
  margin-top: ${Window.heightScale(0.04)};
  width: ${({ width }: IProps) =>
    width ? Window.widthScale(width) : Window.widthScale(0.85)}px;
`;

export const Link = styled.Text`
  color: ${({ theme }) => theme.colors.textsub};
  font-family: ${(props: IProps) => (props.fontFamily ? props.fontFamily : '')};
  font-size: ${(props: IProps) =>
    Window.fontScale(props.textSize ? props.textSize : (12 as number))}px;
`;

export const TextInput = styled.TextInput`
  height: ${Window.heightScale(0.06)};
  width: ${({ width }: IProps) =>
    width ? Window.widthScale(width) : Window.widthScale(0.9)}px;

  border-color:  ${({ theme }) => theme.colors.borderColor};

  border-width: ${Window.widthScale(0.005)};
  border-radius: ${Window.normalizeScale(10)}px;

  margin-top: ${Window.heightScale(0.015)};
  padding:  ${Window.heightScale(0.01)}px;

`;
