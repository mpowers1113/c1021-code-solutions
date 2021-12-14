import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const App = props => {

  return (

      <div>
          <Carousel image={['https://www.telegraph.co.uk/content/dam/news/2018/11/29/TELEMMGLPICT000180922366_trans_NvBQzQNjv4BqzSmwx-LVxZRCbzmV7mD6uDk3iH_pM5toCkJjjeJ-e3Y.jpeg?imwidth=480', 'https://2.bp.blogspot.com/-ZzrT2V18jsA/TcqiV2SebGI/AAAAAAAAAfw/hOKVKL4DdWM/s1600/Starry%2BNight.jpg', 'https://3.bp.blogspot.com/-AfVmDpYj4PU/Td3JAHF_iCI/AAAAAAAACSw/mH3MGxnrRwo/s1600/Irises-Vincent_Van_Gogh.jpg', 'https://i.ebayimg.com/images/i/390795452465-0-1/s-l1000.jpg', 'https://fineartamerica.com/images-medium-5/friedrich-nietzsche-watercolor-portrait-fabrizio-cassetta.jpg', 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/friedrich-nietzsche-pop-art-dan-sproul.jpg', 'http://www.borromeoseminary.org/wp-content/uploads/2013/10/NIETZSCHE.jpg', 'https://www.artvoice.com/wp-content/uploads/2016/06/nietzsche-e1466722083161.jpg', 'https://cdn.quotesgram.com/img/55/4/406926057-Friedrich_Nietzsche_corte.jpg', 'https://www.thefamouspeople.com/profiles/images/friedrich-nietzsche-22.jpg', 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/self-portrait-with-hands-on-chest-1910-egon-schiele.jpg', 'https://i.pinimg.com/originals/da/ab/dc/daabdcf74de56188f3c05550014ee7eb.jpg', 'https://paintingandframe.com/art-imgs/egon_schiele/arthur_roessler-3400.jpg']}/>
      </div>

  );

};

ReactDOM.render(<App />, document.getElementById('root'));
