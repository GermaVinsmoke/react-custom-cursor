import Image1 from 'images/image1.jpg';
import Image2 from 'images/image2.jpg';
import Image3 from 'images/image3.jpg';
import Image4 from 'images/image4.jpg';

const getImage = idx => {
  switch (idx) {
    case 1:
      return Image1;
    case 2:
      return Image2;
    case 3:
      return Image3;
    case 4:
      return Image4;
    default:
      return Image1;
  }
};

export default getImage;
