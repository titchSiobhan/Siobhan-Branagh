import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Homepage from './homepage'
import AboutPage from './about'
import ProjectsPage from './projects'
import ContactPage from './contact'
import LargeProjectCard from './DetailedProjects'
import Home from './home'
import ErrorPage from './errorPage'
import WebsitesPage from './Websites'
import LargeWebsiteCard from './DetailedWebsite'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {path: 'about', element: <AboutPage />},
      {path: 'projects', element: <ProjectsPage />},
      {path: 'contact', element: <ContactPage />},
      {path: 'websites', element: <WebsitesPage />},
      {type: 'project', path: 'project/:id', element: <LargeProjectCard />},
      {type: 'website', path: 'website/:id', element: <LargeWebsiteCard />}
      
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
