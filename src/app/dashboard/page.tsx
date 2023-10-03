import Dashboard from '@/components/dashboard'
import { db } from '@/lib/db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const DashboardPage = async () => {
  const { getUser } = getKindeServerSession()
  const user = getUser()

  // if (!user || !user.id) {
  //   redirect('/auth-callback?origin=dashboard')
  // }

  // const dbUser = await db.user.findFirst({
  //   where: {
  //     id: user.id
  //   }
  // })
  // console.log(dbUser)
  // if (!dbUser) {
  //   redirect('/auth-callback?origin=dashboard')
  // }

  return (
    <Dashboard />
  )
}

export default DashboardPage