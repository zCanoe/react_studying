import styled from 'styled-components';
import {primarySize} from './style/variable';

const AppWrapper = styled.div.attrs({
  sColor: (p) => p.color || 'red'
})`
  .section {
      border: 1px solid red;
      color: ${(p) => p.sColor};
      font-size: ${primarySize};
      
      &:hover {
          background-color: skyblue;
      }
  }
`

export default AppWrapper
