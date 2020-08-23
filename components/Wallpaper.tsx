import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import WAVES from '../assets/lib/vanta.waves.min';
import styles from '../styles/Wallpaper.module.scss';

// TODO: Change color like rainbow effect? Can be changed dynamicly on demo site.
// https://www.vantajs.com/

const vantaSettings = {
  gyroControls: false,
  mouseControls: false,
  touchControls: false,
  color: 0x101f34,
  shininess: 15,
  waveHeight: 25,
  waveSpeed: 0.5,
  zoom: 0.9
};

export const Wallpaper: FC = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    WAVES({
      el: vantaRef.current,
      THREE,
      ...vantaSettings
    });
  }, []);

  return <aside className={styles.wallpaper} ref={vantaRef} />;
};