import { HeaderContainer, HeaderContant, NewTransactionButton } from "./styles";
import Logo from "../../assets/Logo.svg"
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContant>
        <img src={Logo} />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContant>
    </HeaderContainer>
  )
}