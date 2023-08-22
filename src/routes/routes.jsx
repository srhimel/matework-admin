import { createBrowserRouter } from 'react-router-dom'
import {
  AddNewCampaigns,
  Campaigns,
  Homepage,
  Installation,
  Placement,
  Settings,
  Widgets,
  InstallationRequest,
  InstallationSuccess,
  Segments,
  AddNewSegment,
  UpdateSegment,
  Feeds,
  AddNewFeed,
  Upgrade
} from '../views/pages'
import Layout from '../views/layout'
import Categories from '../views/pages/categories'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Homepage />
      },
      {
        path: 'categories',
        element: <Categories />
      }
    ]
  }
])

export default router
