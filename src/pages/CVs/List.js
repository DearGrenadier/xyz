import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { push } from 'connected-react-router'
import { Button } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'

import actions from 'actions'
import AdminPageWrapper from 'components/AdminPageWrapper'
import ButtonsPanel from 'components/ButtonsPanel'
import AdminCVItem from 'components/AdminCVItem'

export default () => {
  const dispatch = useDispatch()
  const cvs = useSelector((state) => state.cvs.data)

  useEffect(() => {
    dispatch(actions.cvsGetList())
  // eslint-disable-next-line
  }, [])

  const onNewClick = () => dispatch(push('/admin/cvs/new'))

  return (
    <AdminPageWrapper>
      <ButtonsPanel>
        <Button icon={IconNames.PLUS} text="New CV" intent="primary" onClick={onNewClick} />
      </ButtonsPanel>
      {cvs.map((cv) => <AdminCVItem key={cv.id} cv={cv} />)}
    </AdminPageWrapper>
  )
}
