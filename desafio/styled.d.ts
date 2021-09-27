import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    tab: {
      active: string;
      background: string;
    };
    colors: {
      primary: string;
      text: string;
      textsub: string;
      background: string;
      borderColor: string;
    };
  }
}
