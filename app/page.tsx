'use client'

import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { Table } from './utils/types'
import { getAllTables } from './utils/firebase'
import homeStyles from './styles/home.module.css'
import { AuthContext } from './context/AuthContext'
import LogIn from './components/LogIn'

export default function Home() {
  const [tables, setTables] = useState<Table[] | null>(null)
  const router = useRouter()
  const { user } = useContext(AuthContext)
  const store = user?.displayName

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

  return (
    <>
      {user ? (
        <div className={homeStyles.homeContainer}>
          <div className={homeStyles.tables}>
            {tables?.map((table) => (
              <div
                onClick={() => router.push(`/${table.tableNumber}`)}
                className={homeStyles.table}
              >
                <p>{table.tableNumber}</p>
              </div>
            ))}
          </div>
          <div className={homeStyles.footer}>
            <p>Developed by hjkim</p>
          </div>
        </div>
      ) : user === null ? (
        <LogIn />
      ) : null}
    </>
  )
}
