import { ReactNode } from 'react'
import { HiXMark } from 'react-icons/hi2'
import '../App.css'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
  footer?: ReactNode
  disabled?: boolean
}

export const Modal = ({ isOpen, onClose, title, children, footer, disabled = false }: ModalProps) => {
  if (!isOpen) return null

  const handleOverlayClick = () => {
    if (!disabled) {
      onClose()
    }
  }

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div className={'modal-overlay'} onClick={handleOverlayClick}>
      <div className={'modal-content'} onClick={handleContentClick}>
        <div className={'modal-header'}>
          <h2>{title}</h2>
          <button
            className={'modal-close'}
            onClick={onClose}
            disabled={disabled}
            title="Close"
            aria-label="Close"
          >
            <HiXMark />
          </button>
        </div>
        <div className={'modal-body'}>{children}</div>
        {footer && <div className={'modal-footer'}>{footer}</div>}
      </div>
    </div>
  )
}

