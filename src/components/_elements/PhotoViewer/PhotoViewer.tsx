import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import cx from 'classnames';

type Img = {
  src: string;
  alt: string;
};

type Props = {
  className?: string;
  images: Img[];
  hoverEffects?: boolean;
};

const PhotoViewer: React.FC<Props> = (props) => {
  return (
    <PhotoProvider >
      <div className={props.className ? props.className : ''}>
        {props.images.map((img) => {
          return (
            <PhotoView src={img.src}>
              <img
                className={cx({ img_zoom: props.hoverEffects })}
                src={img.src}
                alt={img.alt}
              />
            </PhotoView>
          );
        })}
      </div>
    </PhotoProvider>
  );
};

export default PhotoViewer;
