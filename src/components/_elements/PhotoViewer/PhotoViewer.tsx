import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import cx from 'classnames';
import Image from 'next/image';

type Img = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type Props = {
  className?: string;
  images: Img[];
  hoverEffects?: boolean;
};

const PhotoViewer: React.FC<Props> = (props) => {
  return (
    <PhotoProvider>
      <div className={props.className ? props.className : ''}>
        {props.images.map((img, index) => {
          return (
            <PhotoView src={img.src} key={index}>
              <Image
                className={cx({ img_zoom: props.hoverEffects })}
                src={img.src}
                alt={img.alt}
                width={img.width ? img.width : 150}
                height={img.height ? img.height : 74}
                quality={75}
                blurDataURL={img.src}
                placeholder="blur"

              />
            </PhotoView>
          );
        })}
      </div>
    </PhotoProvider>
  );
};

export default PhotoViewer;
