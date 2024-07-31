import ThemeContext from '../context/context';
import {useContext} from 'react';

const with_theme = function(OriginComponent) {
  return (prop) => {
    const context = useContext(ThemeContext);
    return (
        <OriginComponent {...context} {...prop}/>
    )
  }
}

export default with_theme
