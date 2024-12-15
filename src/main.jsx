import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import CertificatesAndAwards from './components/Certificates&Awards/Certificates&Awards.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/GIthub/Github.jsx'
import Home from './components/Home/Home.jsx'
import Project from './components/Project/Project.jsx'
import Technologies from './components/Technologies/Technologies.jsx'
import User from './components/User/User.jsx'
import './index.css'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
      <Route path="/user/:userId" element={<User />} />
      <Route path="/github" element={<Github />} />
      <Route path="/technologies" element={<Technologies />} />
      <Route path="/certificates" element={<CertificatesAndAwards />} />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
