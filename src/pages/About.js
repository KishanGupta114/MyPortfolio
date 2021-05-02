import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.jpg';
import AboutInfoItems from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Kishan Gupta</span>
              </p>
              <h2 className="about__heading">A freelance Web developer</h2>
              <div className="about__info">
                <PText>
                  I am from Indore, India. A place of beauty and nature . I love
                  to contribute in open source projects. I always try to do the
                  stuff with my unique point of view. I also love to create
                  things that can be usefull to others.
                  <br /> <br />
                  I started coding since I was in 2nd year. Coding is also an
                  art for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <Button
                btnText="Download CV"
                btnLink="https://drive.google.com/fil
              e/d/1ZZ1E9IzJBVHqaUVsKAtsptsf1gwltYpj/view?
              usp=sharing"
              />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItems
                title="School [10th]"
                items={['St. Keena Ram Public School, Robertsganj']}
              />
              <AboutInfoItems
                title="School [10+2]"
                items={['Bharatiya Inter College, Ghorawal']}
              />
              <AboutInfoItems
                title="Collage"
                items={['Sagar Institute of Research and Technology, Indore']}
              />
              <AboutInfoItems
                title="University"
                items={['Rajiv Gandhi Proudyogiki Vishwavidyalaya']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItems
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript']}
              />
              <AboutInfoItems
                title="BackEnd"
                items={['Node JS', 'Java', 'C/C++', 'Python']}
              />
              <AboutInfoItems
                title="Frameworks/Tools"
                items={['ReactJs', 'React Native', 'VS Code']}
              />
              <AboutInfoItems title="" items={['Android Studio', 'Eclipse']} />
              <AboutInfoItems
                title="Database"
                items={['MySQL', 'Oracle', 'MongoDB']}
              />
              <AboutInfoItems
                title="Operating System"
                items={['Windows', 'Android', 'Linux']}
              />
              <AboutInfoItems title="Others" items={['Git / GitHub']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItems
                title="2019-2020"
                items={['Software Development Engineer (Intern) at FeedBox']}
              />
              <AboutInfoItems
                title="2019-Present"
                items={['Community Lead at Codezila']}
              />
              <AboutInfoItems
                title="2021-Present"
                items={['Open Source Contributor at 69coders']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Responsibilities</h1>
              <AboutInfoItems
                title="Gooogle Developers Group (Tech Event Volunteer)"
                items={[
                  'I am a Tech Event Volunteer at Google Developers Group Indore since 2019 and with my team we are organized a DevFest 2019.',
                ]}
              />
              <AboutInfoItems
                title="Facebook Developer Circle (Event Volunteer)"
                items={[
                  'I am also volunteer at Facebook Developer Circle, Indore and participated in many community development programs.',
                ]}
              />
              <AboutInfoItems
                title="National Engineering Olympiad (Campus Coordinator)"
                items={[
                  'Campus Coordinator of National Engineering Olympiad at my college',
                ]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
