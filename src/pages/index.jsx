import React, {useEffect, useState} from 'react';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './coming-soon.module.css';

export default function ComingSoon() {
  const [orientation, setOrientation] = useState(null);
  const mediaRoot = useBaseUrl('/media/coming-soon/');

  useEffect(() => {
    const portrait = window.matchMedia('(orientation: portrait)');
    const selectVideo = () => setOrientation(portrait.matches ? 'portrait' : 'landscape');
    selectVideo();
    portrait.addEventListener('change', selectVideo);
    return () => portrait.removeEventListener('change', selectVideo);
  }, []);

  return (
    <>
      <Head>
        <title>SHE Docs — Coming soon</title>
        <meta name="description" content="SHE Docs V2 is in development." />
      </Head>
      <main className={styles.screen} aria-label="SHE Docs V2 is coming soon">
        <picture>
          <source media="(orientation: portrait)" srcSet={`${mediaRoot}portrait.webp`} />
          <img className={styles.visual} src={`${mediaRoot}landscape.webp`} alt="" fetchPriority="high" />
        </picture>
        <video
          className={styles.visual}
          src={orientation ? `${mediaRoot}${orientation}.mp4` : undefined}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
        />
      </main>
    </>
  );
}
