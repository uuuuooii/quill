'use client'

import { useState } from 'react'
import { Dialog } from '../ui/dialog'
import { DialogTrigger } from '@radix-ui/react-dialog'

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <Dialog open={isOpen} onOpenChange={(value) => {
      if (!value) {
        setIsOpen(value)
      }
    }}>
      <DialogTrigger asChild></DialogTrigger>
    </Dialog>
  )
}

export default UploadButton