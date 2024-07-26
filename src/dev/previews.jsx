import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import {Header} from '../c-cpns/Header';
import {Footer} from '../c-cpns/Footer';

const ComponentPreviews = () => {
  return (
      <Previews palette={<PaletteTree/>}>
        <ComponentPreview path="/Header">
          <Header/>
        </ComponentPreview>
        <ComponentPreview
            path="/Footer">
          <Footer/>
        </ComponentPreview>
      </Previews>
  );
};

export default ComponentPreviews;
