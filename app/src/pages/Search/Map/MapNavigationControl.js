// External dependencies
import { NavigationControl } from 'react-map-gl';
import styles from './Map.module.scss';

// Internal dependencies

export default function MapNavigationControl() {
  return (
    <div className={styles.navControl}>
      <NavigationControl showCompass={false} zoomInLabel={'Zoom in'} zoomOutLabel={'Zoom out'} />
    </div>
  );
}

MapNavigationControl.propTypes = {};
