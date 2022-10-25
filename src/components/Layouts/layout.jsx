import SiteNav from '../SiteNav/sitenav.jsx'


const Layout = ({ children }) => (
  <>
  <SiteNav />
  {children}
  </>  
);

export default Layout;