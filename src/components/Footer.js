import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Kishan Gupta</h1>
          <PText>
            A freelance web designer and developer from Indore, India. I always
            try to make websites that have unique designs.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                link: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                link: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                link: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                link: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+91 7415665283',
                link: 'tel:+917415665283',
              },
              {
                title: 'kkishan114@gmail.com',
                link: 'mailto:kkishan114@gmail.com',
              },
              {
                title: 'Vijay Nagar, Indore, India',
                link: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'GitHub',
                link: 'https://github.com/KishanGupta114',
              },
              {
                title: 'Facebook',
                link: 'http://facebook.com/kishan.kumar114',
              },
              {
                title: 'Twitter',
                link: 'http://twitter.com/i_kishan_',
              },
              {
                title: 'Instagram',
                link: 'http://instagram.com/_i.kishan_',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Designed By{' '}
            <a target="_blank" rel="noreferrer" href="blank">
              Kishan Gupta
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
