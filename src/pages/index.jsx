import React, {useEffect, useRef, useState} from 'react';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './coming-soon.module.css';

export default function ComingSoon() {
  const [orientation, setOrientation] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const mediaRoot = useBaseUrl('/media/coming-soon/');

  useEffect(() => {
    const portrait = window.matchMedia('(orientation: portrait)');
    const selectVideo = () => setOrientation(portrait.matches ? 'portrait' : 'landscape');
    selectVideo();
    portrait.addEventListener('change', selectVideo);
    return () => portrait.removeEventListener('change', selectVideo);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;
    let frame;
    let lastTime = -1;
    let resized = true;
    const observer = new ResizeObserver(() => { resized = true; });
    observer.observe(canvas);

    const draw = () => {
      if (video.readyState >= 2 && (resized || video.currentTime !== lastTime)) {
        const density = Math.min(window.devicePixelRatio || 1, 2);
        if (resized) {
          canvas.width = Math.round(canvas.clientWidth * density);
          canvas.height = Math.round(canvas.clientHeight * density);
          resized = false;
        }
        const {width, height} = canvas;
        const scale = Math.min(width / video.videoWidth, height / video.videoHeight);
        const tileWidth = video.videoWidth * scale;
        const tileHeight = video.videoHeight * scale;
        const left = (width - tileWidth) / 2;
        const top = (height - tileHeight) / 2;
        // One decoded frame supplies every tile, keeping all repetitions in sync.
        const pattern = context.createPattern(video, 'repeat');
        if (pattern) {
          pattern.setTransform(new DOMMatrix().translate(left, top).scale(scale));
          context.fillStyle = pattern;
          context.fillRect(0, 0, width, height);
        }
        lastTime = video.currentTime;
      }
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>SHE Docs — Coming soon</title>
        <meta name="description" content="SHE Docs V2 is in development." />
      </Head>
      <main className={styles.screen} aria-label="SHE Docs V2 is coming soon">
        <div className={styles.poster} style={{
          '--landscape-poster': `url("${mediaRoot}landscape.webp")`,
          '--portrait-poster': `url("${mediaRoot}portrait.webp")`,
        }} />
        <video
          ref={videoRef}
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
        <canvas ref={canvasRef} className={styles.tiles} aria-hidden="true" />
      </main>
    </>
  );
}
