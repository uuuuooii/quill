"use client"

import React, { useState } from 'react'
import { QueryClient } from "@tanstack/react-query"

const Providers = () => {
  const queryClient = useState(() => new QueryClient())
  const trcpClient = useState(() => { })

  return (
    <div>Providers</div>
  )
}

export default Providers