'use client'

import { useState } from 'react'
import { Dialog } from '../ui/dialog'

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <Dialog open={isOpen} onOpenChange={(value) => {
      if (!value) {
        setIsOpen(value)
      }
    }}>UploadButton</Dialog>
  )
}

export default UploadButton