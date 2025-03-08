import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './Context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import HeadComponent from './head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './components/Home';
import NotFoundPage from './components/NotFoundPage';
import DashboardLayout from './components/Adimn/DashboardLayout';
import Dashboard from './components/Adimn/Dashboard';
import CreateContract from './components/Adimn/Contract/CreateContract';
import ContractList from './components/Adimn/Contract/ContractList';
import ContactManagement from './components/Adimn/Contact/ContactManagement';
import LoginForm from './components/Adimn/LoginForm';
import Logout from './components/Adimn/Logout';
import Blog from './components/Pages/Blog';
import BlogPost from './components/Pages/Blog/BlogPost';
import LatestBlogs from './components/Pages/Blog/latestBlogs';
import Service from './components/Pages/Service';
import BrandingPage from './components/Pages/service/Branding';
import Design from './components/Pages/service/Design';
import VideoProduction from './components/Pages/service/Video-Production';
import DigitalMarketing from './components/Pages/service/Digital-Marketing';
import Connect from './components/Pages/Connect';
import Webs from './components/Pages/service/webs';
import Sidebar from './components/Pages/Sidebar';
import About from './components/Pages/About';
import AIPrompt from './components/Pages/service/AIPrompt';
import FAQPage from './components/Pages/WebDevelopment/faq';
import FAQPopup from './components/Pages/WebDevelopment/FaqPage';

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return user ? children : <Navigate to="/" />;
};
//dedafr

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
<div className="flex flex-col min-h-screen overflow-y-hidden ">
<HeadComponent
        title="Home | Ato Creative"
        description="Welcome to Ato Creative, your partner in creative marketing solutions for startups."
        keywords="home, creative marketing, startups, branding, web development"
        url="https://atocreative.et/"
        image="https://atocreative.et/logo.png"
        lang="en"
      />
      <AuthProvider>
        <Router>
          <div className="flex min-h-full w-full bg-grid font-urbanist">
            {/* Left Sidebar */}
            {/* <div className="hidden md:block w-1/8"> */}
              {/* <Sidebar /> 
            </div>*/}


            {/* Main Content Area */}
            <div className="flex flex-col w-full mx-[5%] md:mx-[10%] lg:mx-[15%] xl:mx-[15%]">
            <div className=" flex-1 mt-4">
                            <Navbar  />
                            </div>

              <div className=" flex-1 mt-4">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<LoginForm />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/ourStory" element={<About />} />
                  <Route path="/ai-prompt" element={<AIPrompt />} /> {/* New AI Prompt Route */}

                  <Route path="/blogpost" element={<BlogPost />} />
                  <Route path="/Blog/LatestBlogs" element={<LatestBlogs />} />
                  <Route path="/service" element={<Service />} />
                  <Route path="/service/branding" element={<BrandingPage />} />
                  <Route path="/service/design" element={<Design />} />
                  <Route path="/service/digital-marketing" element={<DigitalMarketing />} />
                  <Route path="/service/video-production" element={<VideoProduction />} />
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/connect" element={<Connect />} />
                  <Route path="/FAQ" element={<FAQPage />} />

                  {/* Protected Routes */}
                  <Route
                    path="/admin/*"
                    element={
                      <ProtectedRoute>
                        <DashboardLayout />
                      </ProtectedRoute>
                    }
                  >
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="contract/create-contract" element={<CreateContract />} />
                    <Route path="contract/contracts" element={<ContractList />} />
                    <Route path="contact/contact-management" element={<ContactManagement />} />
                  </Route>

                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </div>
              
           
            </div>


          </div>
          <Footer />
          <FAQPopup/>
          <BackToTop />
        </Router>
      </AuthProvider>
</div>
  );
};

export default App;
