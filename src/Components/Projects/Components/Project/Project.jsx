import React, {useContext} from 'react'
import { ModalContext } from '../../../../Modals/Context/ModalContext'
import { Modal } from '../../../../Modals/Modal'
import { Detail } from '../Detail/Detail'
import './Project.css'

export const Project = ({title, src, description, repo, id}) => {
  const { activeModal, openModal, closeModal } = useContext(ModalContext)

  const handleOpenModal = () => {
    openModal(id)
  }

  return (
    <div className='project'>
      <h1>{title}</h1>
      <img onClick={handleOpenModal} src={src} alt="" />
      <Modal modalId={id} isOpen={activeModal === id} onClose={closeModal}>
        <Detail
          title={title}
          description={description}
          repo={repo}/>
      </Modal>
    </div>
  )
}

