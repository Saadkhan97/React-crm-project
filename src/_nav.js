/* eslint-disable prettier/prettier */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilStar,
  cilEnvelopeOpen,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavGroup,
    name: 'Email',
    icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Tickets',
        icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
        to: '/views/email/Tickets',
      },
      {
        component: CNavItem,
        name: 'General',
        icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
        to: '/views/email/General',
      },
      {
        component: CNavItem,
        name: 'Outbox',
        icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
        to: '/views/email/Outbox',
      },
      {
        component: CNavItem,
        name: 'Sent',
        icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
        to: '/views/email/Sent',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Client',
    icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Emails',
        icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
        to: '/src/views/Email/Client',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav
