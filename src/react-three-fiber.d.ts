import { type ThreeElements } from '@react-three/fiber'

// Make React Three Fiber's JSX elements (<points>, <group>, <bufferGeometry>, …)
// available to TypeScript's JSX type-checker.
declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}
