import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'A Book Reading App',
    desc:
      'An application to track your book reading time and also we can a new book to read. I developed the website.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'OTP Verification App',
    desc:
      'An app to verify the OTP which is send to your mobile phone. This is only for Security Purpose.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Contact List Viewer',
    desc:
      'Using this app you can track your number of contacts saved in the app and you can add contacts as well.',
    img: CoinTrackerImg,
  },
];

export default projects;
