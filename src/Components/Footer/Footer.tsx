import Link from 'next/link';
// import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
          <div className='logos cursor'>

<Link href="/" >
  {/* <a><h1 className="site-logo"><Logo />E-Shop</h1></a> */}
  {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675357773/logo_ghli5e.jpg */}
  {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png */}
  <img className='img' src='https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png' alt="" />
</Link>
</div>
            <p className='footer-p'>0096171330473
مستحضرات طبيعية 100 %
شعارنا العودة إلى الطبيعة
مبيع
 جملة ومفرق + تسليم صفحات الاونلاين
 </p>
            {/* <ul className="site-footer__social-networks">
              <li><a href="https://www.facebook.com/profile.php?id=100063581229923" rel="noreferrer" target='_blank'><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href={`${process.env.NEXT_PUBLIC_INSTA}`}rel="noreferrer" target='_blank' ><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul> */}
          </div>

          <div className="site-footer__links">
            <ul>
              <li className='link-title'>Shopping online</li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Shipping and Delivery</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Payment options</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <ul>
              <li className='link-title'>Information</li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Find a store</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Bacome a member</a></li>
              <li><a href="#">Site feedback</a></li>
            </ul>
            <ul>
              <li className='link-title'>Contact</li>
              
              <li><a href="#">البازورية , Tyre, Lebanon</a></li>
              <li><a href="#">simplebeirut@gmail.com</a></li>
              <li><a href={'https://wa.me/96171330473'}>Phone/Whatsapp:{` +961 71330473`}</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <p>Website Updated by 
            <a style={{color:'blue'}} href={`${process.env.NEXT_PUBLIC_US}`}>{' '}Simple Beirut Web</a></p>
        </div>
      </div>
    </footer>
  )
};


export default Footer