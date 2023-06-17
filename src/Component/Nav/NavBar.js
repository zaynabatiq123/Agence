import React from 'react'
import {Container,Nav,Navbar,NavDropdown,} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import './NavBar.css'
import image1 from '/Users/mac/Documents/project-organigramme/src/images/logo.jpeg'
import image2 from '/Users/mac/Documents/project-organigramme/src/images/logo1.png'
import image3 from '/Users/mac/Documents/project-organigramme/src/images/img2.jpeg'
import image4 from '/Users/mac/Documents/project-organigramme/src/images/age.jpeg'
import img from '/Users/mac/Documents/project-organigramme/src/images/age.jpeg'
import img1 from '/Users/mac/Documents/project-organigramme/src/images/age1.jpeg'
import img2 from '/Users/mac/Documents/project-organigramme/src/images/age2.jpeg'
import img3 from '/Users/mac/Documents/project-organigramme/src/images/age3.jpeg'
import img4 from '/Users/mac/Documents/project-organigramme/src/images/age.jpeg'
import img5 from '/Users/mac/Documents/project-organigramme/src/images/mj2.jpeg'
const NavBar = () =>{
    return (
        <>
        
 <div className="logo-2"><a  href="#"><span><img src={image2} /></span></a></div>
            <Navbar expand="lg" >
      <Container >
        <Navbar.Brand href="#home"> <img className='logo' src={image1} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"  >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>

            <NavDropdown title="Divesion" id="basic-nav-dropdown">
              <Link to="/Organigramme" style={{textDecoration:"none",color:"black",marginTop:"9px",marginLeft:'15px',}}>Organigramme</Link>
              <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">FAQ's</NavDropdown.Item>
             

            </NavDropdown>

            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Service Detail</NavDropdown.Item>
            </NavDropdown>

  <input type="text"  placeholder='Recherche' />            
  <button type="button" class="btn btn-outline-primary">Primary</button>
 
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <section className="about">
        <div className="image">
            <img src={image4}/>
        </div>
        <div className="content">
            <h2> مجلس الحوض المائي <br/>  للساقية الحمراء ووادي الذهب</h2>
            <p>ترأس السيد المصطفى فارس، الكاتب العام لوزارة التجهيز والماء، الثلاثاء 11 أكتوبر 2022 بمدينة العيون، أشغال المجلس الإداري لوكالة الحوض المائي للساقية الحمراء ووادي الذهب برسم سنة 2021، والذي عرف حضور ومشاركة السيد والي جهة العيون الساقية الحمراء عامل إقليم العيون والسادة ممثلي المجالس الجهوية والغرف المهنية. وقد خصص هذا اللقاء الهام للوقوف على حصيلة عمل هذه الوكالة، وتقديم ومناقشة ميزانيتها وكذا برنامجها برسم سنة 2022.</p>
        </div>
              
    </section>
   

    <section className="home">
               <div className="left">
                   <h1>سد الساقية الحمراء</h1>
<p>
  سد الساقية الحمراء هو سد يقع في مدينة العيون على وادي الساقية الحمراء. يبلغ حجمه 1.3 مليون متر مكعب، وسعة حقينته 112 مليون متر مكعب. <br />
  ويعمل هذا السد على حماية مدينة العيون والمناطق المتواجدة بالسافلة من الفيضانات، كما يُساهم هذا السد في تطعيم الفرشة المائية عن طريق الرفع من مستوى مخزونها.


</p>  
<h1>تاريخ</h1>
<p> تم تشييد هذا السد في سنة 1995، ولكن عقب الفيضانات الاستثنائية التي عرفتها المنطقة في سنة 2016 والتي خلفت خسائر جد مهمة تسببت في محاصرة مدينة العيون لعدة أيام وإلحاق أضرار بالسد، فقد تقرر إعادة بناءه، حيث تم في سنة 2018 إطلاق أشغال إعادة بناء سد الساقية الحمراء 

في أبريل 2021، وصلت أشغال إعادة بناء سد الساقية الحمراء إلى 41%</p>

               </div>
               <div className="right">
                    <img src={image3}/>
               </div>
              
           </section>
       



 
    <section className="decoration">
        <h1>planches</h1>
        <div className="deco-list">
            <div className="deco">
                <img src={img}/>
                <p>اجتماع مجلس الحوض الماء</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing. <br/></span>
                <button className="orange_link">Order the meeting</button>
            </div>
            <div className="deco">
            <img src={img1}/>
                            <p>اجتماع مجلس الحوض الماء</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.<br/></span>
                <button className="orange_link">Order the meeting</button>
            </div>
            <div className="deco">
            <img src={img2}/>
                            <p>اجتماع مجلس الحوض الماء</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.<br/></span>
                <button className="orange_link">Order the meeting</button>
            </div>
            <div className="deco">
            <img src={img3}/>
                            <p>اجتماع مجلس الحوض الماء</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.<br/></span>
                <button className="orange_link">Order the meeting</button>
            </div>
            <div className="deco">
            <img src={img4}/>
                            <p>اجتماع مجلس الحوض الماء</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.<br/></span>
                <button className="orange_link">Order the meeting</button>
            </div>
            <div className="deco">
            <img src={img5}/>

                <p>اجتماع مجلس الحوض الماء</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.<br/></span>
                <button className="orange_link">Order the meeting</button>
            </div>
        </div>
    </section>
    
    
    
    
  


     
   
   
   
   
    <footer>
        <div className="footer-content">
            <h1>Agence</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, cum. Vero, explicabo illum. Repudiandae.</p>
            <h4>contact us</h4>
            <ul className="socials">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        <div className="footer-bottom">
        <section class="footer">
        <div class="box-container">
            <div class="box">
                <h3>Liens rapides</h3>
                <a href="#"><i class="fas fa-angle-right    "></i>accueil </a>
                <a href="#"><i class="fas fa-angle-right    "></i>a propos </a>
                <a href="#"><i class="fas fa-angle-right    "></i>paquets </a>
                <a href="#"><i class="fas fa-angle-right    "></i>reservation </a>
            </div>
          
            <div class="box">
                <h3>Liens extra</h3>
                <a href="#"><i class="fas fa-angle-right    "></i>posez questions </a>
                <a href="#"><i class="fas fa-angle-right    "></i>a propos de nous </a>
                <a href="#"><i class="fas fa-angle-right    "></i>politique de confidentialité </a>
                <a href="#"><i class="fas fa-angle-right    "></i>nos termes </a>
            </div>
            <div class="box">
                <h3>info contact</h3>
                <a href="#"><i class="fas fa-phone    "></i>ص.ب : 492 العيون، المغرب</a>
                <a href="#"><i class="fas fa-phone    "></i>+212 0528893425 </a>
                <a href="#"><i class="fas fa-phone    "></i> +212 0528893408 </a>
                <a href="#"><i class="fas fa-envelope    "></i>ronasdev@gmail.com </a>
                <a href="#"><i class="fas fa-map    "></i>cotonou - Bénin </a>
            </div>
            <div class="box">
                <h3>suivez nous</h3>
                <a href="#"><i class="fab fa-facebook    "></i>facebook </a>
                <a href="#"><i class="fab fa-twitter    "></i>twitter </a>
                <a href="#"><i class="fab fa-instagram    "></i>instagram </a>
                <a href="#"><i class="fab fa-linkedin    "></i>linkedIn </a>
            </div>
        </div><hr />
        <div class="home-right">
            créé par <span> Zaynab</span> | tout droit reservé
        </div>
        <p>Copyright &copy;2023 Zaynab Dev. Desighed by <span>Zaynab</span></p>
    </section>
        </div>
        
    </footer>
   


        </>
    )
}

export default NavBar;


