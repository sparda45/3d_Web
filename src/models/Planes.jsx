import React, { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';

import planesScene from '../assets/3d/plane.glb';

const Planes = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planesScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (!actions) return; // Check if actions is undefined
    if (isRotating) {
      const take001Action = actions['Take 001'];
      if (take001Action) take001Action.play(); // Check if the action is defined
    } else {
      const take001Action = actions['Take 001'];
      if (take001Action) take001Action.stop(); // Check if the action is defined
    }
  }, [actions, isRotating]);

  if (!scene) return null; // Check if scene is undefined

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Planes;
