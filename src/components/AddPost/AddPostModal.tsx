import React, { useEffect, useState } from 'react'

import './AddPostModal.scss'

interface Props {
  visible: boolean
  onAddPost: (text: string) => void
  onClose: () => void
}

const AddPostModal = ({
  visible = false,
  onAddPost,
  onClose,
}: Props) => {

  const [text, setText] = useState('');
  const [isTextValid, setIsTextValid] = useState(true);

  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Escape':
        onClose()
        break
    }
  }

  const onHandleChangeText = ({ target }: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { value } = target;

    if (value.trim().length >= 200) {
      setIsTextValid(false)
      return
    }
    setIsTextValid(true);
    setText(value);
  };

  const onHandleAddPost = () => {
    onAddPost(text)
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  })

  if (!visible) return null

  return (
    <div className='modal' onClick={onClose}>
      <div className='modal-dialog' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h3 className='modal-title'>Write your post</h3>
          <span className='modal-close' onClick={onClose}>
            &times;
          </span>
        </div>
        <div className='modal-body'>
          <div className='modal-content'>
            <textarea
              autoFocus
              rows={8}
              onChange={onHandleChangeText}
              className={'modal-textarea ' + (!isTextValid ? 'modal-textarea__error' : '')}
              value={text}
              placeholder="Your text here"
            />
          </div>
          {!isTextValid ? <p className='modal-content__error'>The number of characters must be less than 200</p> : ''}
        </div>
        <div className='modal-footer'>
          <button onClick={onClose}>Close</button>
          <button onClick={onHandleAddPost} disabled={!isTextValid}>Add post</button>
        </div>
      </div>
    </div>
  )
}

export default AddPostModal;