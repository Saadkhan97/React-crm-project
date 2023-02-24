import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
//Email

// const Ticket = React.lazy(() => import('./views/Email/Ticket/Tickets'))
const Sent = React.lazy(() => import('./views/email/Sent/Sent'))
const General = React.lazy(() => import('./views/email/General/General'))
const Outbox = React.lazy(() => import('./views/email/Outbox/Outbox'))
const Client = React.lazy(() => import('./views/email/Client/Client'))
const Tickets = React.lazy(() => import('./views/email/Tickets/Tickets'))
const Ticket = React.lazy(() => import('./views/email/Tickets/Ticket'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/views/email/Tickets', name: 'Tickets', element: Tickets },
  { path: '/views/email/Tickets/:cticketNo', name: 'Ticket', element: Ticket },
  { path: '/views/email/General', name: 'General', element: General },
  { path: '/views/email/Sent', name: 'Sent', element: Sent },
  { path: '/views/email/Outbox', name: 'Outbox', element: Outbox },
  { path: '/views/email/Client', name: 'Client', element: Client },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
]

export default routes
