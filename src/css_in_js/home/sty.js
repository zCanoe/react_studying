import styled from 'styled-components';

const Button = styled.button`
    background-color: green;
`

export const SelfButton = styled(Button)`
   border-radius: 10px;
`

const HomeWrapper = styled.div`
  .top {
      background-color: ${(p) => p.theme.color};
  }
`

export default HomeWrapper
