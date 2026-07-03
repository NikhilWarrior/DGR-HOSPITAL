import { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const COUNT = 90          // node count
const MAXDIST = 2.5       // connect distance
const BOX = { x: 16, y: 9, z: 5 }

function Network() {
  const pointsRef = useRef<THREE.Points>(null!)
  const linesRef = useRef<THREE.LineSegments>(null!)
  const groupRef = useRef<THREE.Group>(null!)
  const { pointer } = useThree()

  // node positions + velocities
  const { positions, velocities, lineArray } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3)
    const velocities = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * BOX.x
      positions[i * 3 + 1] = (Math.random() - 0.5) * BOX.y
      positions[i * 3 + 2] = (Math.random() - 0.5) * BOX.z
      velocities[i * 3] = (Math.random() - 0.5) * 0.012
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.012
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.012
    }
    // pre-allocate max line segment buffer (each pair = 2 verts * 3)
    const lineArray = new Float32Array(COUNT * COUNT * 3)
    return { positions, velocities, lineArray }
  }, [])

  useFrame((state) => {
    const pos = positions
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3] += velocities[i * 3]
      pos[i * 3 + 1] += velocities[i * 3 + 1]
      pos[i * 3 + 2] += velocities[i * 3 + 2]
      if (Math.abs(pos[i * 3]) > BOX.x / 2) velocities[i * 3] *= -1
      if (Math.abs(pos[i * 3 + 1]) > BOX.y / 2) velocities[i * 3 + 1] *= -1
      if (Math.abs(pos[i * 3 + 2]) > BOX.z / 2) velocities[i * 3 + 2] *= -1
    }
    if (pointsRef.current) pointsRef.current.geometry.attributes.position.needsUpdate = true

    // build connections
    let v = 0
    for (let a = 0; a < COUNT; a++) {
      for (let b = a + 1; b < COUNT; b++) {
        const dx = pos[a * 3] - pos[b * 3]
        const dy = pos[a * 3 + 1] - pos[b * 3 + 1]
        const dz = pos[a * 3 + 2] - pos[b * 3 + 2]
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (d < MAXDIST) {
          lineArray[v++] = pos[a * 3]; lineArray[v++] = pos[a * 3 + 1]; lineArray[v++] = pos[a * 3 + 2]
          lineArray[v++] = pos[b * 3]; lineArray[v++] = pos[b * 3 + 1]; lineArray[v++] = pos[b * 3 + 2]
        }
      }
    }
    if (linesRef.current) {
      const attr = linesRef.current.geometry.attributes.position
      attr.array.set(lineArray.subarray(0, v))
      attr.needsUpdate = true
      linesRef.current.geometry.setDrawRange(0, v / 3)
    }

    // gentle parallax toward pointer + slow drift
    if (groupRef.current) {
      const t = state.clock.elapsedTime
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, pointer.x * 0.25 + Math.sin(t * 0.05) * 0.05, 0.04)
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -pointer.y * 0.18, 0.04)
    }
  })

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={COUNT} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#008573" size={0.085} sizeAttenuation transparent opacity={0.9} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={lineArray.length / 3} array={lineArray} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#00A98F" transparent opacity={0.42} />
      </lineSegments>
    </group>
  )
}

export default function NeuralBackground() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 11], fov: 60 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <Network />
    </Canvas>
  )
}
