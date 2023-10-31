'use client'

import { usePathname, useParams, useRouter } from 'next/navigation'
import { useState, useEffect, useContext } from 'react'
import { FaHome, FaPowerOff } from 'react-icons/fa'
import { getCompanyName } from '../utils/firebase'
import headerStyles from '../styles/header.module.css'
import { AuthContext } from '../context/AuthContext'
import Loading from './Loading'

export default function Header() {
  const [companyName, setCompanyName] = useState<string | null>(null)

  const pathName = usePathname()
  const router = useRouter()

  const { user, logOut } = useContext(AuthContext)
  const store = user?.displayName
  const { table } = useParams()

  useEffect(() => {
    async function fetchCompanyName() {
      if (typeof store !== 'string') {
        throw Error('Type of store should be string!')
      }
      const data = await getCompanyName(store)
      setCompanyName(data)
    }

    if (store) {
      fetchCompanyName()
    }
  }, [store])

  async function handleLogOut() {
    if (confirm('Are you sure you want to log out?')) {
      await logOut()
    } else {
      return
    }
  }

  return (
    <>
      {user ? (
        <div className={headerStyles.headerContainer}>
          {companyName ? (
            <p>{companyName}</p>
          ) : (
            <div className={headerStyles.loading}>
              {' '}
              <Loading size="1.25rem" />
            </div>
          )}
          {table ? <p>Table: {table}</p> : null}
          {pathName !== '/' ? (
            <FaHome
              onClick={() => router.push('/')}
              className={headerStyles.home}
              size="1.25rem"
            />
          ) : null}
          <FaPowerOff
            onClick={handleLogOut}
            className={headerStyles.logOut}
            size="1.25rem"
          />
        </div>
      ) : null}
    </>
  )
}
