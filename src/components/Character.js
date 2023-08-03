/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Character(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/korrigan-wolf/model.gltf'
  )
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions['course_cavalier'].play()
    actions['course_loup'].play()

    animations.forEach((item) => {
      actions[item.name].loop = true
    })
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0, 0.48, 0]} scale={0.15}>
        <primitive object={nodes.root} />
        <skinnedMesh
          castShadow
          geometry={nodes.Cavalier.geometry}
          material={materials['color_main.015']}
          skeleton={nodes.Cavalier.skeleton}
        />
      </group>
      <group scale={0.61}>
        <primitive object={nodes.spine004} />
        <skinnedMesh castShadow geometry={nodes.Loup.geometry} material={materials['color_main.002']} skeleton={nodes.Loup.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/korrigan-wolf/model.gltf')