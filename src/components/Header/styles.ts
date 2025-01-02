import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding-block: 2.5rem 7.5rem;
`

export const HeaderContant = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding-inline: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding-inline: 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme['green-700']};
  }
`
