import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { Text } from '@react-three/drei';
import { OrbitControls, Reflector, Stars } from '@react-three/drei';
import { SpotLightHelper, Color } from 'three';

function ChatGPT() {
    const textRef = useRef();
    const controlsRef = useRef();
    const spotLight1Ref = useRef();
    const spotLight2Ref = useRef();
    const spotLight3Ref = useRef();
    const spotLightHelper1Ref = useRef();
    const spotLightHelper2Ref = useRef();
    const spotLightHelper3Ref = useRef();

    const handleSpotLight1Ready = (spotLight) => {
        spotLight1Ref.current = spotLight;
        spotLightHelper1Ref.current = new SpotLightHelper(spotLight, 0x00ff00); 
        spotLight.add(spotLightHelper1Ref.current);
    };
    
    const handleSpotLight2Ready = (spotLight) => {
        spotLight2Ref.current = spotLight;
        spotLightHelper2Ref.current = new SpotLightHelper(spotLight, 0xff0000);
        spotLight.add(spotLightHelper2Ref.current);
    };

    const handleSpotLight3Ready = (spotLight) => {
        spotLight3Ref.current = spotLight;
        spotLightHelper3Ref.current = new SpotLightHelper(spotLight, 0x0000ff);
        spotLight.add(spotLightHelper3Ref.current);
    };
    
    return (
        <Canvas style={{ width: "100vw", height: "100vh" }}>
        <ambientLight intensity={0.5} />
        <Text
            fontSize={1}
            position={[0, 0, 0]}
            color="#ff00ff"
            anchorX="center"
            anchorY="middle"
            ref={textRef}
        >
            Hello World!
        </Text>
        <OrbitControls ref={controlsRef} autoRotate autoRotateSpeed={2} />
        <Stars />
        <Reflector
            position={[0, -1.5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            args={[10, 10, 1]}
            >
            {(Material, props) => <Material color="#000000" {...props} />}
        </Reflector>
        <spotLight
            position={[1, 1, 1]}
            angle={1}
            penumbra={1}
            intensity={100}
            color={new Color('blue')}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            target={textRef.current}
            onReady={handleSpotLight1Ready}
            />
        <spotLight
            position={[-1, 1, 0.3]}
            angle={1}
            penumbra={1}
            intensity={100}
            color={new Color('red')}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            target={textRef.current}
            onReady={handleSpotLight2Ready}
        />
        <spotLight
            position={[1, 1, -2]}
            angle={1}
            penumbra={1}
            intensity={100}
            color={new Color('green')}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            target={textRef.current}
            onReady={handleSpotLight3Ready}
        />
    </Canvas>
    );
}

export default ChatGPT;
