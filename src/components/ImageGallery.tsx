import { useState } from 'react';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

interface ImageGalleryProps {
    pictures: {src: string, alt: string}[];
}

function ImageGallery({ pictures }: ImageGalleryProps){
    const [index, setIndex] = useState(-1);

    const imgItems = [];
    for(let i = 0; i < pictures.length; i++){
        imgItems.push(
            <img className="ProjectPicture" key={i} src={pictures[i].src} alt={pictures[i].alt} onClick={() => setIndex(i)} />
        );
    }

  return (
    <>
      {imgItems}

      <Lightbox
        slides={pictures}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}

export default ImageGallery;