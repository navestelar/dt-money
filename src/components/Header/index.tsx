import { HeaderContainer, HeaderContant, NewTransactionButton } from './styles'
import Logo from '../../assets/Logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContant>
        <img src={Logo} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContant>
    </HeaderContainer>
  )
}
