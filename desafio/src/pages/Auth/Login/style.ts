import styled from 'styled-components/native';

export const ImageBackground = styled.ImageBackground`
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

export const View = styled.View`
  background-color: #664c9c;

  align-self: center;
  justify-content: center;
  align-items: center;

  height: 50;
  width: 300;
  border-radius: 20;
  margin-top: 25;
`;

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

export const TouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  background-color: #664c9c;
  padding: 10px;

  height: 50;
  width: 200;

  border-radius: 15;


`;

export const TextTouchableOpacity = styled.Text`
  color: #ffff;
  font-size: 20;
  font-family: 'Poppins-BoldItalic';
`;
