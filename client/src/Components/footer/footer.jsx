import { Link } from 'react-router-dom'
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter'
import style from './footer.module.css'
import { GithubOutlined } from '@ant-design/icons'

const footerLinks = ['home', 'dashboard', 'profile', 'login']
const socialLinks = ['https://github.com/UCI-team-project/communiTEA']

const FooterComponent = () => {
  return (
    <footer>
      <section className={style.footerSection}>
        <h2>
          <Link className={style.footerTitle} to='/home'>
            CommuniTEA
          </Link>
        </h2>
      </section>
      <section className={style.footerSection}>
        {footerLinks.map((link, key) => (
          <Link className={style.footerLinks} to={`/${link}`} key={key}>
            {capitalizeFirstLetter(link)}
          </Link>
        ))}
      </section>
      <section className={style.footerSection}>
        <a
          className={style.socialLink}
          href={socialLinks[0]}
          target='_blank'
          rel='noreferrer'
        >
          <GithubOutlined />
        </a>
      </section>
    </footer>
  )
}

export default FooterComponent

// <Footer
// style={{
//   textAlign: 'center',
// }}
// >
// ©2023 Created by CommuniTEA
// </Footer>
