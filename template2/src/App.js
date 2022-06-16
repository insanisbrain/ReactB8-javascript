// CSS Imports
import './theme-assets/css/bootstrap.min.css';
import './theme-assets/css/animate.min.css';
import './theme-assets/css/magnific-popup.css';
import './theme-assets/css/fontawesome-all.min.css';
import './theme-assets/css/owl.carousel.min.css';
import './theme-assets/css/flaticon.css';
import './theme-assets/css/odometer.css';
import './theme-assets/css/aos.css';
import './theme-assets/css/slick.css';
import './theme-assets/css/default.css';
import './theme-assets/css/style.css';
import './theme-assets/css/responsive.css';



// Component Imports
import TopHeader from './theme-layout/headers/top-header/TopHeader';
import MainHeader from './theme-layout/headers/main-header/MainHeader';
import FooterTop from './theme-layout/footers/footer-top/FooterTop';
import FooterCopyright from './theme-layout/footers/footer-copyright/FooterCopyright';

function App() {
  return (
    <>
      <header>
        <TopHeader />
        <MainHeader />
      </header>

      <footer>
        <FooterTop />
        <FooterCopyright />
      </footer>
    </>
  );
}

export default App;
