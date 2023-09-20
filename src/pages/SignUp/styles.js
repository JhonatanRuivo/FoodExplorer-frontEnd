import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
  width: 100vw;

  animation-name: show;
  animation-duration: 0.8s;

  @media (max-width: 1023px) {
    width: 316px;
    margin: auto;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 73px;
  }
`

export const Form = styled.form`
  background-color: ${({ theme }) => theme.COLORS.DARK700};
  border-radius: 16px;
  height: fit-content;
  width: 476px;
  
  padding: 64px;
  margin: auto;
  gap: 32px;

  justify-content: center;
  flex-direction: column;
  display: flex;

  > h3 {
    font-family: Poppins;
    font-weight: 500;
    font-size: 32px;
    margin: auto;
  }
  > .input {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media (max-width: 1023px) {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT400};
    width: 100%;
    padding: 0;
    margin: 0;

    > h3 {
      display: none;
    }
  }

  @keyframes show {
    0% {
      opacity: 0;
    }
  }
`
