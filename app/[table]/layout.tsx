'use client'

import { useEffect, useState, useContext } from 'react'
import { useParams } from 'next/navigation'
import { getAllTables } from '@/app/utils/firebase'
import { Table } from '@/app/utils/types'
import { CartContextProvider } from '@/app/context/CartContext'
import { AuthContext } from '../context/AuthContext'
import LogIn from '../components/LogIn'

export default function QrOrderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [tables, setTables] = useState<Table[] | null>(null)

  const { user } = useContext(AuthContext)
  const store = user?.displayName
  const { table } = useParams()

  useEffect(() => {
    async function fetchTables() {
      if (typeof store !== 'string') {
        throw Error('Type of store should be string!')
      }

      const data = await getAllTables(store)
      setTables(data)
    }

    if (store) {
      fetchTables()
    }
  }, [store])

  function isValidTable() {
    if (tables !== null) {
      for (const t of tables) {
        if (t.tableNumber === table) {
          return true
        }
      }
    }

    return false
  }

  return (
    <section>
      {user ? (
        <>
          {isValidTable() ? (
            <CartContextProvider>{children}</CartContextProvider>
          ) : null}
        </>
      ) : user === null ? (
        <LogIn />
      ) : null}
    </section>
  )
}
