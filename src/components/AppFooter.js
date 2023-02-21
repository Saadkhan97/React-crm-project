import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://burhanisolutions.com.pk/" target="_blank" rel="noopener noreferrer">
          Burhani IT Solutions
        </a>
        <span className="ms-1">&copy; 2022 creativeLabs.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://burhanisolutions.com.pk/" target="_blank" rel="noopener noreferrer">
          Burhani IT Solutions
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
