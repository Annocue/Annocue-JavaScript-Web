import Home from '../components/Home'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import Dashboard from '../components/Dashboard'
import Chats from '../components/Chats'
import Events from '../components/Events'
import Messages from '../components/Messages'
import Links from '../components/Links'
import Connections from '../components/Connections'
import Error404 from '../components/Error404'

// This is where you add all your site routes
// Each route is set as an obect in the array
// For a the most basic route just set
// the path & component to load

export const routes = [{
  path: '',
  name: 'home',
  component: Home
},
{
  path: '/sign-in',
  name: 'signIn',
  component: SignIn
},
{
  path: '/sign-up',
  name: 'signUp',
  component: SignUp
},
{
  path: '/dashboard',
  name: 'dashboard',
  component: Dashboard,
  meta: {
    requiresAuth: true
  }
},
{
  path: '/chats',
  name: 'chats',
  component: Chats,
  meta: {
    requiresAuth: true
  }
},
{
  path: '/events',
  name: 'events',
  component: Events,
  meta: {
    requiresAuth: true
  }
},
{
  path: '/messages',
  name: 'messages',
  component: Messages,
  meta: {
    requiresAuth: true
  }
},
{
  path: '/links',
  name: 'links',
  component: Links,
  meta: {
    requiresAuth: true
  }
},
{
  path: '/connections',
  name: 'connections',
  component: Connections,
  meta: {
    requiresAuth: true
  }
},
{
  path: '/404',
  name: '404',
  component: Error404
},
{
  path: '*',
  redirect: '/404'
}
]
