import React, { useState, useRef } from 'react'
import {
  Popover,
  Position,
  InputGroup,
  Button,
  Icon
} from '@blueprintjs/core'
import styled from 'styled-components'

const PopoverContent = styled('div')`
  text-align: center;
  padding: 10px;
  background: #fff;
  span.label {
    display: block;
    margin: 8px 0;
  }
  button {
    margin-top: 8px;
  }
`

export default (props) => {
  const { contentText, onSubmit, icon } = props
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const popoverRef = useRef(null)

  const onInputValueChange = (event) => setInputValue(event.target.value)

  const onButtonClick = () => {
    onSubmit(inputValue)
    setInputValue('')
    setIsPopoverOpen(false)
  }

  const popoverContent = (
    <PopoverContent>
      <span className="label">
        { contentText }
      </span>
      <InputGroup onChange={onInputValueChange} value={inputValue} autoFocus />
      <Button text="Add" intent="success" onClick={onButtonClick} />
    </PopoverContent>
  )

  return (
    <Popover
      ref={popoverRef}
      isOpen={isPopoverOpen}
      onClose={() => setIsPopoverOpen(false)}
      content={popoverContent}
      target={<Button icon={<Icon icon={icon} />} onClick={() => setIsPopoverOpen(true)} />}
      position={Position.BOTTOM}
    />
  )
}
