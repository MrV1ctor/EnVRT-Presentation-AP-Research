import {Knot, Spline, CubicBezier, Code, makeScene2D, Img, QuadBezier} from '@motion-canvas/2d';
import {PossibleVector2, useLogger, all, createRef, beginSlide, Direction, slideTransition, fadeTransition, easeOutCubic, waitFor, makeRef} from '@motion-canvas/core';


import checkpointSrc from '../../images/design/checkpoint.png';
import loraSrc from '../../images/design/lora.png';
import woLoraSrc from '../../images/design/wolora.png';
import wLoraSrc from '../../images/design/wlora.png';
import positiveSrc from '../../images/design/positive.png';
import negativeSrc from '../../images/design/negative.png';
import latentimageSrc from '../../images/design/latentimage.png';
import ksamplerSrc from '../../images/design/ksampler.png';
import decodeSrc from '../../images/design/decode.png';
import finalimageSrc from '../../images/design/finalimage.png';

import zoedepthSrc from '../../images/design/zoedepth.png';
import usedZoedepthSrc from '../../images/design/usedZoedepth.png';

import genesisSrc from '../../images/design/genesis.png';

import baseTextureSrc from '../../images/design/baseTexture.png';
import genesisDepthSrc from '../../images/design/genesisDepth.png';
import zoedepthDepthSrc from '../../images/design/zoedepthDepth.png';

import noSmoothingSrc from '../../images/design/noSmoothing.png';
import onePXSmoothingSrc from '../../images/design/onePXSmoothing.png';
import oneHundredPXSmoothingSrc from '../../images/design/oneHundredPXSmoothing.png';

import smoothingDepthMapSrc from '../../images/design/smoothingDepthMap.png';
import highlightedSmoothingDepthMapSrc from '../../images/design/highlightedSmoothingDepthMap.png';

import spawnerSrc from '../../images/design/spawner.png';
import wristmenuSrc from '../../images/design/wristmenu.png';

import playerSrc from '../../images/design/player.png';
import fall1Src from '../../images/design/fall1.png';
import fall2Src from '../../images/design/fall2.png';

import defaultMainMenuSrc from '../../images/design/defaultMainMenu.png';
import customMainMenuSrc from '../../images/design/customMainMenu.png';


export default makeScene2D(function* (view) {
    
    view.fill('black');
    
    const log = useLogger();
    
    
    
    const text = createRef<Code>();
    view.add(
        <Code
        ref={text}
        fontSize={100}
        fontFamily={'JetBrains Mono, monospace'}
        x={0}
        code={'Application'}
        />,
    );

    const note = createRef<Code>();//14, 12, 6, 10,   16, 17
    view.add(
        <Code
        ref={note}
        fontSize={25}
        fontFamily={'JetBrains Mono, monospace'}
        x={0}
        code={''}
        />,
    );
    
    yield* slideTransition(Direction.Bottom, 1);
    
    yield* beginSlide("Application");
    
    yield* all(
        text().fontSize(100, 0.5),
        text().y(0, 0.5),
        
        note().code("", 0.5),
    );
    
    yield* text().code("Installing the app", 1.5);
    
    yield* all(
        text().y(-1080/2+200, 1.5),
        text().fontSize(75, 1.5),
    );
    
    yield* beginSlide("asdfasdfasdfasdfasdfasdfa");

});