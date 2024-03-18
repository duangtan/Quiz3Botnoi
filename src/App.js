import './App.css';
import profilePic from './img/profile.jpg'
import phoneNumberImage from './img/phoneNumberImage.png';
import email from './img/email.png';
import facebook from './img/facebook.png';
import github from './img/github.png';
import linkin from './img/in.png';

function App() {
  return (
    <div className="resume">
       
      <div className="header-name">
      <img src={profilePic} alt="profile" className="profilepic"/>
        <h2>นลัทพร ดวงตา</h2>
      </div>
      <div className="container">
        <div className='personal-info'>
          <h2>ข้อมูลส่วนตัว</h2>
          <h3 className="info">ชื่อ    นลัทพร ดวงตา</h3>
          <h3 className="info">ชื่อเล่น กอหญ้า</h3>
          <h3 className="info">วันเกิด 25 มีนาคม 2545</h3>
          <h3 className="info">อายุ 22  ปี</h3>   
          <h2>ข้อมูลติดต่อ</h2>
          <div className="icon">
            <img src={phoneNumberImage} alt="Phone Number" style={{  width: '20px', height: '20px'}} />
            <h3 className="info">098-893-9553</h3>
          </div>
          <div className="icon">
            <img src={email} alt="Email" style={{  width: '20px', height: '20px' }} />
            <h3 className="info">duangta_n@silpakorn.edu</h3>
          </div>
          <div className="icon">
            <img src={facebook} alt="Facebook" style={{   width: '20px', height: '20px'}} />
            <h3 className="info">Ko'hya Ya</h3>  
          </div>
          <div className="icon">
            <img src={github} alt="Github" style={{   width: '20px', height: '20px' }} />
            <h3 className="info" >duangtan</h3>   
          </div>
          <div className="icon">
            <img src={linkin} alt="Linkin" style={{  width: '20px', height: '20px' }} />
            <h3  className="info">Nalatporn Duangta</h3>   
          </div> 
          <div className="line">.</div>  
          <div className="header-skill"><h2>ทักษะ</h2></div>
          <div className="skill">
            <div className="skill-container">
              <div className="skill-left">
                -C <br/>
                -Java<br/>
                -Javascript<br/>
                -Python<br/>
                -Dart<br/>
              </div>
              <div className="skill-right">
                -PHP<br/>
                -Html<br/>
                -Flutter<br/>
                -Python<br/>
                -MySQL<br/>
              </div>
            </div>
          </div>
          <div className="line">.</div> 
          <div className="header-skill"><h2>ภาษา</h2></div>
          <div className="header-lan">
            <p>-ภาษาไทย - เจ้าของภาษา<br/>-ภาษาอังกฤษ - ระดับกลาง</p>
          </div>
          

        </div>
        <div className="education">
          <h2>ประวัติการศึกษา</h2>
          <p className="year">ปี1-ปี4</p>
          <h3>มหาวิทยาลัยศิลปากร</h3>
          <p>คณะวิทยาศาสตร์ สาขาวิทยาการคอมพิวเตอร์</p>
          <h3>( GPA : 3.14 )</h3>
          <p className="year">ม.1-ม.6</p>
          <h3>ราชโบริกานุเคราะห์</h3>
          <p>วิทย์-คอม</p>
          <h3>( GPA : 3.51 )</h3>
          <div className="line-long">.</div>

          <h2>ประสบการณ์</h2>
          <div className="year-exper2567">
            <div><div className="exper">2567</div></div>
            <div>
              <a href="https://github.com/duangtan/NailColor2024" className="header-pro">เว็บไซต์แนะนำสีเล็บมงคล</a>
              <p>- พัฒนาออกแบบเว็บด้วย html,css,javascript</p>
            </div>
          </div>

          <div className="year-exper2565">
            <div><div className="exper">2565</div></div>
            <div>
              <a href="https://github.com/duangtan/Project630710326" className="header-pro">แอพเกมเสี่ยงโชค</a>
              <p>- โปรเจครายวิชาการพัฒนาโปรแกรมประยุกต์บนอุปกรณ์เคลื่อนที่<br/>พัฒนาและออกแบบแอพมือถือด้วย flutter</p>
              <a href="https://github.com/duangtan/os" className="header-pro">โปรแกรมรับ/ส่งไฟล์ แบบ zero-copy</a>
              <p>- โปรเจครายวิชาระบบปฏิบัติบัติ <br/> - การส่งข้อมูลแบบ Zero-Copy ด้วยไลบรารี่ Java NIO</p>
              </div>
          </div>

          <div className="year-exper2564">
            <div><div className="exper">2564</div></div>
            <div>
              <p className="header-pro">เว็บแอดมินเพื่อจัดการฐานข้อมูลร้านเช่าหนังสือ</p>
              <p>- โปรเจครายวิชาระบบฐานข้อมูล<br/>- พัฒนาและออกแบบเว็บแอดมินเพื่อจัดการฐานข้อมูล MySQLด้วยภาษา PHP</p> 
            </div>
          </div>

          <div className="year-exper2562">
          <div><div className="exper">2562</div></div>
            <div>
              <a href="https://www.youtube.com/watch?v=B5mY-fPLavI&t=889s" className="header-pro">เข้าร่วม computer camping</a>
              <p>- อบรมเกี่ยวกับการทำหนังสั้น</p>
            </div>
          </div>

          <div className="year-exper2557">
            <div><div className="exper">2557</div></div>
            <div>
              <p className="header-pro">ผ่านการอบรม computer repair center</p>
              <p>- อบรมเกี่ยวกับการประกอบคอมพิวเตอร์เบื้องต้น</p>
            </div>
          </div>
          <div className="line-long">.</div>

          <h2>รางวัลที่ได้รับ</h2>
          <div className="year-prize">
          <div> <div className="prize2562">2562</div></div>
            <div>
              <p className="header-pro">รางวัลระดับเหรียญทองแดง</p>
              <p>การประกวดโครงงานคอมพิวเตอร์ประเภทซอฟต์แวร์<br/>ระดับชั้น ม.4 - ม.6<br/>งานศิลปหัตถกรรมนักเรียน ระดับชาติ ครั้งที่ 69</p>
              <p className="header-pro">รางวัลระดับเหรียญทอง</p>
              <p>การประกวดโครงงานคอมพิวเตอร์ประเภทซอฟต์แวร์<br/>ระดับชั้น ม.4 - ม.6<br/>งานศิลปหัตถกรรมนักเรียน ระดับเขตพื้นที่การศึกษา จังหวัดราชบุรี</p>
            </div>
            
          </div>

        </div>
        
      </div>
      
      
    </div>
  );
}

export default App;
