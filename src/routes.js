import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
//Email

const Ticket = React.lazy(() => import('./views/Email/Ticket/Ticket'))
const Sent = React.lazy(() => import('./views/Email/Sent/Sent'))
const General = React.lazy(() => import('./views/Email/General/General'))
const Outbox = React.lazy(() => import('./views/Email/Outbox/Outbox'))
const Client = React.lazy(() => import('./views/Email/Client/Client'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/src/views/Email/Ticket', name: 'Ticket', element: Ticket },
  { path: '/src/views/Email/General', name: 'General', element: General },
  { path: '/src/views/Email/Sent', name: 'Sent', element: Sent },
  { path: '/src/views/Email/Outbox', name: 'Outbox', element: Outbox },
  { path: '/src/views/Email/Client', name: 'Client', element: Client },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
