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
        code={'Design'}
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
    
    yield* beginSlide("Design");
    
    yield* all(
        text().fontSize(100, 0.5),
        text().y(0, 0.5),
        
        note().code("", 0.5),
    );
    
    yield* text().code("Creating the images", 1.5);
    
    yield* all(
        text().y(-1080/2+200, 1.5),
        text().fontSize(75, 1.5),
    );
    
    yield* beginSlide("checkpoint");
    
    const checkpoint = createRef<Img>();
    view.add(
        <Img
        ref={checkpoint}
        src={checkpointSrc}
        x={0}
        y={300}
        scale={0.5}
        opacity={0}
        />
    );
    
    yield* all(
        checkpoint().opacity(1, 1),
        checkpoint().scale(1.75, 1),

        note().fontSize(50, 1),
        note().code("Checkpoint", 1),
    );
    
    yield* beginSlide("lora");
    
    const lora = createRef<Img>();
    view.add(
        <Img
        ref={lora}
        src={loraSrc}
        x={200}
        y={300}
        scale={0.5}
        opacity={0}
        />
    );
    
    
    const checkpointLoraClip = createRef<CubicBezier>();
    view.add(
        <CubicBezier
        ref={checkpointLoraClip}
        lineWidth={6}
        stroke={'yellow'}
        p0={[checkpoint().x() + 325, checkpoint().y()]}
        p1={[checkpoint().x() + 360, lora().y()]}
        p2={[checkpoint().x() + 335, lora().y()-20]}
        p3={[checkpoint().x() + 340, lora().y()-20]}
        end={0}
        endArrow
        arrowSize={15}
        />,
    );
    const checkpointLoraModel = createRef<CubicBezier>();
    view.add(
        <CubicBezier
        ref={checkpointLoraModel}
        lineWidth={6}
        stroke={'pink'}
        p0={[checkpoint().x() + 325, checkpoint().y()-40]}
        p1={[checkpoint().x() + 360, lora().y()-40]}
        p2={[checkpoint().x() + 335, lora().y()-20-40]}
        p3={[checkpoint().x() + 340, lora().y()-20-40]}
        end={0}
        endArrow
        arrowSize={15}
        />,
    );

    yield* all(
        checkpoint().x(-500, 2),

        lora().opacity(1, 2),
        lora().scale(1.5, 2),

        checkpointLoraClip().p0.x((checkpoint().x()+325)-500, 2),
        checkpointLoraClip().p1.x((checkpoint().x()+325)-495, 2),
        checkpointLoraClip().p2.x((checkpoint().x()+325)-490, 2),
        checkpointLoraClip().p3.x((checkpoint().x()+325)-400, 2),
        checkpointLoraClip().end(1, 2),

        checkpointLoraModel().p0.x((checkpoint().x()+325)-500, 2),
        checkpointLoraModel().p1.x((checkpoint().x()+325)-495, 2),
        checkpointLoraModel().p2.x((checkpoint().x()+325)-490, 2),
        checkpointLoraModel().p3.x((checkpoint().x()+325)-400, 2),
        checkpointLoraModel().end(1, 2),

        note().code("Lora", 2),
    );
    
    yield* beginSlide("w/ vs w/o lora");
    
    const woLora = createRef<Img>();
    view.add(
        <Img
        ref={woLora}
        src={woLoraSrc}
        x={-400}
        y={-300}
        scale={0.5}
        opacity={0}
        />
    );
    const wLora = createRef<Img>();
    view.add(
        <Img
        ref={wLora}
        src={wLoraSrc}
        x={400}
        y={-300}
        scale={0.5}
        opacity={0}
        />
    );

    yield* all(

        text().opacity(0, 1),

        woLora().opacity(1, 1),
        woLora().scale(0.75, 1),
        
        note().code("Without Lora", 1),
        note().x(-400, 1),
    );

    yield* waitFor(2);

    yield* all(
        wLora().opacity(1, 1),
        wLora().scale(0.75, 1),
        
        note().code("With Lora", 1),
        note().x(400, 1),
    );
    
    yield* beginSlide("pos prompt");

    const positive = createRef<Img>();
    view.add(
        <Img
        ref={positive}
        src={positiveSrc}
        x={400}
        y={0}
        scale={0.5}
        opacity={0}
        />
    );
    
    const loraPos = createRef<CubicBezier>();
    view.add(
        <CubicBezier
        ref={loraPos}
        lineWidth={6}
        stroke={'yellow'}
        p0={[lora().x() + 275, lora().y()-23]}
        p1={[lora().x()-200, lora().y()]}
        p2={[positive().x() - 400,  positive().y()-60]}
        p3={[positive().x() - 360, positive().y()-100]}
        end={0}
        endArrow
        arrowSize={15}
        />,
    );


    yield* all(
        
        woLora().opacity(0, 1),
        wLora().opacity(0, 1),
        text().opacity(1, 1),

        text().code("Image Prompts", 1),


        positive().opacity(1, 1),
        positive().scale(1.5, 1),
        
        note().code("Positive Prompt", 1),
        note().x(-400, 1),

        //move all left
        checkpoint().x(checkpoint().x()-500, 1),
        lora().x(lora().x()-500, 1),
        checkpointLoraClip().p0.x(checkpointLoraClip().p0.x()-500, 1),
        checkpointLoraClip().p1.x(checkpointLoraClip().p1.x()-500, 1),
        checkpointLoraClip().p2.x(checkpointLoraClip().p2.x()-500, 1),
        checkpointLoraClip().p3.x(checkpointLoraClip().p3.x()-500, 1),
        checkpointLoraModel().p0.x(checkpointLoraModel().p0.x()-500, 1),
        checkpointLoraModel().p1.x(checkpointLoraModel().p1.x()-500, 1),
        checkpointLoraModel().p2.x(checkpointLoraModel().p2.x()-500, 1),
        checkpointLoraModel().p3.x(checkpointLoraModel().p3.x()-500, 1),

        loraPos().p0.x(loraPos().p0.x()-500, 1),
        loraPos().end(1, 1),


    );




    yield* beginSlide("neg prompt");
    
    const negative = createRef<Img>();
    view.add(
        <Img
        ref={negative}
        src={negativeSrc}
        x={400}
        y={400}
        scale={0.5}
        opacity={0}
        />
    );
    
    const loraNeg = createRef<CubicBezier>();
    view.add(
        <CubicBezier
        ref={loraNeg}
        lineWidth={6}
        stroke={'yellow'}
        p0={[lora().x() + 275, lora().y()-23]}
        p1={[lora().x()+250, lora().y()]}
        p2={[lora().x() + 350,  negative().y()-60]}
        p3={[negative().x() - 370, negative().y()-35]}
        end={0}
        endArrow
        arrowSize={15}
        />,
    );
    
    yield* all(

        negative().opacity(1, 1),
        negative().scale(1.5, 1),
        
        note().code("Negative Prompt", 1),
        note().x(-400, 1),

        loraNeg().end(1, 1),


    );
    
    yield* beginSlide("latent image");
    
    const latentimage = createRef<Img>();
    view.add(
        <Img
        ref={latentimage}
        src={latentimageSrc}
        x={-300}
        y={300}
        scale={0.5}
        opacity={0}
        />
    );
    
    yield* all(

        latentimage().opacity(1, 1),
        latentimage().scale(1.5, 1),

        text().opacity(0, 1),
        note().code("Latent Image", 1),
        
        //move all up 300
        checkpoint().y(checkpoint().y()-300, 1),
        lora().y(lora().y()-300, 1),
        positive().y(positive().y()-300, 1),
        negative().y(negative().y()-300, 1),
        note().y(note().y()-300, 1),
        //also all points
        checkpointLoraClip().p0.y(checkpointLoraClip().p0.y()-300, 1),
        checkpointLoraClip().p1.y(checkpointLoraClip().p1.y()-300, 1),
        checkpointLoraClip().p2.y(checkpointLoraClip().p2.y()-300, 1),
        checkpointLoraClip().p3.y(checkpointLoraClip().p3.y()-300, 1),
        checkpointLoraModel().p0.y(checkpointLoraModel().p0.y()-300, 1),
        checkpointLoraModel().p1.y(checkpointLoraModel().p1.y()-300, 1),
        checkpointLoraModel().p2.y(checkpointLoraModel().p2.y()-300, 1),
        checkpointLoraModel().p3.y(checkpointLoraModel().p3.y()-300, 1),
        loraPos().p0.y(loraPos().p0.y()-300, 1),
        loraPos().p1.y(loraPos().p1.y()-300, 1),
        loraPos().p2.y(loraPos().p2.y()-300, 1),
        loraPos().p3.y(loraPos().p3.y()-300, 1),
        loraNeg().p0.y(loraNeg().p0.y()-300, 1),
        loraNeg().p1.y(loraNeg().p1.y()-300, 1),
        loraNeg().p2.y(loraNeg().p2.y()-300, 1),
        loraNeg().p3.y(loraNeg().p3.y()-300, 1),



    )
    
    yield* beginSlide("ksampler");
    
    const ksampler = createRef<Img>();
    view.add(
        <Img
        ref={ksampler}
        src={ksamplerSrc}
        x={450}
        y={-100}
        scale={0.5}
        opacity={0}
        />
    );

    const loraKsamplerModel = createRef<CubicBezier>();
    view.add(
        <CubicBezier
        ref={loraKsamplerModel}
        lineWidth={6}
        stroke={'pink'}
        p0={[lora().x() + 275, lora().y()-58]}
        p1={[ksampler().x() + 0, ksampler().y()+170]}
        p2={[ksampler().x() - 400, ksampler().y()-230]}
        p3={[ksampler().x() - 280, ksampler().y()-230]}
        end={0}
        endArrow
        arrowSize={15}
        />,
    );

    const posKsamplerCon = createRef<CubicBezier>();
    view.add(
        <CubicBezier
        ref={posKsamplerCon}
        lineWidth={6}
        stroke={'orange'}
        p0={[positive().x() - 340,  positive().y()-105]}
        p1={[ksampler().x() - 320, ksampler().y()-190]}
        p2={[ksampler().x() - 270, ksampler().y()-190]}
        p3={[ksampler().x() - 270, ksampler().y()-190]}
        end={0}
        endArrow
        arrowSize={15}
        />,
    );
    const negKsamplerCon = createRef<CubicBezier>();
    view.add(
        <CubicBezier
        ref={negKsamplerCon}
        lineWidth={6}
        stroke={'orange'}
        p0={[negative().x() - 340,  negative().y()-40]}
        p1={[ksampler().x() - 270, ksampler().y()-190]}
        p2={[ksampler().x() - 270, ksampler().y()-150]}
        p3={[ksampler().x() - 270, ksampler().y()-150]}
        end={0}
        endArrow
        arrowSize={15}
        />,
    );
    const latentKsampler = createRef<Spline>();
    const latentKsamplerKnotPoints: PossibleVector2[] = [
        [latentimage().x() + 275-700, latentimage().y()-45],
        [latentimage().x() + 275, latentimage().y()-45],

        [ksampler().x() - 350, latentimage().y()-105],
        
        [ksampler().x() - 300, ksampler().y()-120],
        [ksampler().x() - 270, ksampler().y()-120],
    ];
    const latentKsamplerKnots: Knot[] = [];
    view.add(
        <Spline
        ref={latentKsampler}
        lineWidth={6}
        stroke={'magenta'}
        end={0.54}
        start={0.54}
        endArrow
        arrowSize={15}
        >
            {latentKsamplerKnotPoints.map((point, i) => (
                <Knot
                ref={makeRef(latentKsamplerKnots, i)}
                position={point}
                />

            ))}
            
        </Spline>,
    );




    yield* all(

        //move everything left 700 including arrows
        checkpoint().x(checkpoint().x()-700, 1),
        lora().x(lora().x()-700, 1),
        positive().x(positive().x()-700, 1),
        negative().x(negative().x()-700, 1),
        latentimage().x(latentimage().x()-700, 1),
        checkpointLoraClip().p0.x(checkpointLoraClip().p0.x()-700, 1),
        checkpointLoraClip().p1.x(checkpointLoraClip().p1.x()-700, 1),
        checkpointLoraClip().p2.x(checkpointLoraClip().p2.x()-700, 1),
        checkpointLoraClip().p3.x(checkpointLoraClip().p3.x()-700, 1),
        checkpointLoraModel().p0.x(checkpointLoraModel().p0.x()-700, 1),
        checkpointLoraModel().p1.x(checkpointLoraModel().p1.x()-700, 1),
        checkpointLoraModel().p2.x(checkpointLoraModel().p2.x()-700, 1),
        checkpointLoraModel().p3.x(checkpointLoraModel().p3.x()-700, 1),
        loraPos().p0.x(loraPos().p0.x()-700, 1),
        loraPos().p1.x(loraPos().p1.x()-700, 1),
        loraPos().p2.x(loraPos().p2.x()-700, 1),
        loraPos().p3.x(loraPos().p3.x()-700, 1),
        loraNeg().p0.x(loraNeg().p0.x()-700, 1),
        loraNeg().p1.x(loraNeg().p1.x()-700, 1),
        loraNeg().p2.x(loraNeg().p2.x()-700, 1),
        loraNeg().p3.x(loraNeg().p3.x()-700, 1),

        
        
        ksampler().opacity(1, 1),
        ksampler().scale(1.5, 1),

        note().code("Tiled KSampler", 1),
        note().opacity(1, 1),
        note().x(450, 1),
        note().y(300, 1),


        loraKsamplerModel().end(1, 1),
        loraKsamplerModel().p0.x(loraKsamplerModel().p0.x()-700, 1),

        posKsamplerCon().end(1, 1),
        negKsamplerCon().end(1, 1),
        
        latentKsampler().end(1, 1),
        latentKsampler().start(0, 1),

        //photo for tiling example
        wLora().opacity(1, 1),
        wLora().x(-300, 1),
        wLora().y(400, 1),
        wLora().scale(.5, 1),

    )
    
    yield* beginSlide("VAE decode");


    const decode = createRef<Img>();
    view.add(
        <Img
        ref={decode}
        src={decodeSrc}
        x={430}
        y={-280}
        scale={0.5}
        opacity={0}
        />
    );

    const modelDecode = createRef<Spline>();
    const modelDecodeKnotPoints: PossibleVector2[] = [
        [-1080, latentimage().y()+45],
        [latentimage().x() + 275, latentimage().y()+45],

        [ksampler().x() - 450, latentimage().y()],
        
        [ksampler().x() - 330, ksampler().y()-120],
        [ksampler().x() - 270, ksampler().y()-120],
    ];
    const modelDecodeKnots: Knot[] = [];
    view.add(
        <Spline
        ref={modelDecode}
        lineWidth={6}
        stroke={'red'}
        end={0}
        endArrow
        arrowSize={15}
        >
            {modelDecodeKnotPoints.map((point, i) => (
                <Knot
                ref={makeRef(modelDecodeKnots, i)}
                position={point}
                />

            ))}
            
        </Spline>,
    );

    const ksamplerLatent = createRef<CubicBezier>();
    view.add(
        <CubicBezier
        ref={ksamplerLatent}
        lineWidth={6}
        stroke={'pink'}
        p0={[ksampler().x() - 425,  ksampler().y()-225]}
        p1={[ksampler().x() - 270, ksampler().y()-130]}
        p2={[ksampler().x() - 300, ksampler().y()-150]}
        p3={[ksampler().x() - 270, ksampler().y()-160]}
        end={0}
        endArrow
        arrowSize={15}
        />,
    );
    
    yield* all(

        //move everything left
        checkpoint().x(checkpoint().x()-700, 1),
        lora().x(lora().x()-700, 1),
        positive().x(positive().x()-700, 1),
        negative().x(negative().x()-700, 1),
        latentimage().x(latentimage().x()-700, 1),
        ksampler().x(ksampler().x()-700, 1),
        checkpointLoraClip().p0.x(checkpointLoraClip().p0.x()-700, 1),
        checkpointLoraClip().p1.x(checkpointLoraClip().p1.x()-700, 1),
        checkpointLoraClip().p2.x(checkpointLoraClip().p2.x()-700, 1),
        checkpointLoraClip().p3.x(checkpointLoraClip().p3.x()-700, 1),
        checkpointLoraModel().p0.x(checkpointLoraModel().p0.x()-700, 1),
        checkpointLoraModel().p1.x(checkpointLoraModel().p1.x()-700, 1),
        checkpointLoraModel().p2.x(checkpointLoraModel().p2.x()-700, 1),
        checkpointLoraModel().p3.x(checkpointLoraModel().p3.x()-700, 1),
        loraPos().p0.x(loraPos().p0.x()-700, 1),
        loraPos().p1.x(loraPos().p1.x()-700, 1),
        loraPos().p2.x(loraPos().p2.x()-700, 1),
        loraPos().p3.x(loraPos().p3.x()-700, 1),
        loraNeg().p0.x(loraNeg().p0.x()-700, 1),
        loraNeg().p1.x(loraNeg().p1.x()-700, 1),
        loraNeg().p2.x(loraNeg().p2.x()-700, 1),
        loraNeg().p3.x(loraNeg().p3.x()-700, 1),
        loraKsamplerModel().p0.x(loraKsamplerModel().p0.x()-700, 1),
        loraKsamplerModel().p1.x(loraKsamplerModel().p1.x()-700, 1),
        loraKsamplerModel().p2.x(loraKsamplerModel().p2.x()-700, 1),
        loraKsamplerModel().p3.x(loraKsamplerModel().p3.x()-700, 1),
        posKsamplerCon().p0.x(posKsamplerCon().p0.x()-700, 1),
        posKsamplerCon().p1.x(posKsamplerCon().p1.x()-700, 1),
        posKsamplerCon().p2.x(posKsamplerCon().p2.x()-700, 1),
        posKsamplerCon().p3.x(posKsamplerCon().p3.x()-700, 1),
        negKsamplerCon().p0.x(negKsamplerCon().p0.x()-700, 1),
        negKsamplerCon().p1.x(negKsamplerCon().p1.x()-700, 1),
        negKsamplerCon().p2.x(negKsamplerCon().p2.x()-700, 1),
        negKsamplerCon().p3.x(negKsamplerCon().p3.x()-700, 1),
        latentKsamplerKnots[0].position.x(latentKsamplerKnots[0].position.x()-700, 1),
        latentKsamplerKnots[1].position.x(latentKsamplerKnots[1].position.x()-700, 1),
        latentKsamplerKnots[2].position.x(latentKsamplerKnots[2].position.x()-700, 1),
        latentKsamplerKnots[3].position.x(latentKsamplerKnots[3].position.x()-700, 1),
        latentKsamplerKnots[4].position.x(latentKsamplerKnots[4].position.x()-700, 1),
        
        wLora().opacity(0, 1),

        decode().opacity(1, 1),
        decode().scale(2, 1),

        note().code("Circular VAE Decode", 1),
        note().y(-100, 1),

        modelDecode().end(1, 2),
        ksamplerLatent().end(1, 2),


    );
    
    yield* beginSlide("final image");
    
    const finalimage = createRef<Img>();
    view.add(
        <Img
        ref={finalimage}
        src={finalimageSrc}
        x={0}
        y={0}
        scale={0.5}
        opacity={0}
        />
    );


    
    yield* all(
        finalimage().opacity(1, 1),
        finalimage().scale(1.5, 1),

        //move everything left 1400
        checkpoint().x(checkpoint().x()-1400, 1),
        lora().x(lora().x()-1400, 1),
        positive().x(positive().x()-1400, 1),
        negative().x(negative().x()-1400, 1),
        latentimage().x(latentimage().x()-1400, 1),
        ksampler().x(ksampler().x()-1400, 1),
        decode().x(decode().x()-1400, 1),
        checkpointLoraClip().p0.x(checkpointLoraClip().p0.x()-1400, 1),
        checkpointLoraClip().p1.x(checkpointLoraClip().p1.x()-1400, 1),
        checkpointLoraClip().p2.x(checkpointLoraClip().p2.x()-1400, 1),
        checkpointLoraClip().p3.x(checkpointLoraClip().p3.x()-1400, 1),
        checkpointLoraModel().p0.x(checkpointLoraModel().p0.x()-1400, 1),
        checkpointLoraModel().p1.x(checkpointLoraModel().p1.x()-1400, 1),
        checkpointLoraModel().p2.x(checkpointLoraModel().p2.x()-1400, 1),
        checkpointLoraModel().p3.x(checkpointLoraModel().p3.x()-1400, 1),
        loraPos().p0.x(loraPos().p0.x()-1400, 1),
        loraPos().p1.x(loraPos().p1.x()-1400, 1),
        loraPos().p2.x(loraPos().p2.x()-1400, 1),
        loraPos().p3.x(loraPos().p3.x()-1400, 1),
        loraNeg().p0.x(loraNeg().p0.x()-1400, 1),
        loraNeg().p1.x(loraNeg().p1.x()-1400, 1),
        loraNeg().p2.x(loraNeg().p2.x()-1400, 1),
        loraNeg().p3.x(loraNeg().p3.x()-1400, 1),
        loraKsamplerModel().p0.x(loraKsamplerModel().p0.x()-1400, 1),
        loraKsamplerModel().p1.x(loraKsamplerModel().p1.x()-1400, 1),
        loraKsamplerModel().p2.x(loraKsamplerModel().p2.x()-1400, 1),
        loraKsamplerModel().p3.x(loraKsamplerModel().p3.x()-1400, 1),
        posKsamplerCon().p0.x(posKsamplerCon().p0.x()-1400, 1),
        posKsamplerCon().p1.x(posKsamplerCon().p1.x()-1400, 1),
        posKsamplerCon().p2.x(posKsamplerCon().p2.x()-1400, 1),
        posKsamplerCon().p3.x(posKsamplerCon().p3.x()-1400, 1),
        negKsamplerCon().p0.x(negKsamplerCon().p0.x()-1400, 1),
        negKsamplerCon().p1.x(negKsamplerCon().p1.x()-1400, 1),
        negKsamplerCon().p2.x(negKsamplerCon().p2.x()-1400, 1),
        negKsamplerCon().p3.x(negKsamplerCon().p3.x()-1400, 1),
        latentKsamplerKnots[0].position.x(latentKsamplerKnots[0].position.x()-1400, 1),
        latentKsamplerKnots[1].position.x(latentKsamplerKnots[1].position.x()-1400, 1),
        latentKsamplerKnots[2].position.x(latentKsamplerKnots[2].position.x()-1400, 1),
        latentKsamplerKnots[3].position.x(latentKsamplerKnots[3].position.x()-1400, 1),
        latentKsamplerKnots[4].position.x(latentKsamplerKnots[4].position.x()-1400, 1),
        modelDecodeKnots[0].position.x(modelDecodeKnots[0].position.x()-1400, 1),
        modelDecodeKnots[1].position.x(modelDecodeKnots[1].position.x()-1400, 1),
        modelDecodeKnots[2].position.x(modelDecodeKnots[2].position.x()-1400, 1),
        modelDecodeKnots[3].position.x(modelDecodeKnots[3].position.x()-1400, 1),
        modelDecodeKnots[4].position.x(modelDecodeKnots[4].position.x()-1400, 1),
        ksamplerLatent().p0.x(ksamplerLatent().p0.x()-1400, 1),
        ksamplerLatent().p1.x(ksamplerLatent().p1.x()-1400, 1),
        ksamplerLatent().p2.x(ksamplerLatent().p2.x()-1400, 1),
        ksamplerLatent().p3.x(ksamplerLatent().p3.x()-1400, 1),

        note().code("Saving the final image", 1),
        note().x(0, 1),
        note().y(400, 1),

        text().code("Creating the images", 1),
        text().opacity(1, 1),
        text().y(-400, 1),
        

        
    );


    const imageSave = createRef<CubicBezier>();
    view.add(
        <CubicBezier
        ref={imageSave}
        lineWidth={6}
        stroke={'#aaccff'}
        p0={[decode().x() + 235, decode().y()+10]}
        p1={[decode().x() + 235, decode().y()+10]}
        p2={[finalimage().x() - 460, finalimage().y()-230]}
        p3={[finalimage().x() - 430, finalimage().y()-220]}
        end={0}
        endArrow
        arrowSize={15}
        />,
    );


    yield* imageSave().end(1, 1);
    
    yield* beginSlide("Depth map");

    yield* all(
        text().code("Creating the depth map", 1),
        note().code("", 1),

        decode().opacity(0, 1),
        finalimage().opacity(0, 1),
        imageSave().start(1, 1),
        imageSave().opacity(0, 1),
    );
    
    view.removeChildren();
    //add back text and note
    view.add(
        <Code
        ref={text}
        fontSize={75}
        fontFamily={'JetBrains Mono, monospace'}
        x={0}
        y={-400}
        code={'Creating the depth map'}
        />,
    );
    view.add(
        <Code
        ref={note}
        fontSize={50}
        fontFamily={'JetBrains Mono, monospace'}
        x={0}
        code={''}
        />,
    );

    yield* beginSlide("zoedepth");
    
    const zoedepth = createRef<Img>();
    view.add(
        <Img
        ref={zoedepth}
        src={zoedepthSrc}
        x={0}
        y={0}
        scale={0.5}
        opacity={0}
        />
    );

    yield* all(
        zoedepth().opacity(1, 1),
        zoedepth().scale(1., 1),

        text().opacity(1, 1),
        text().y(-450, 1),

        note().code("ZoeDepth", 1),
        note().y(450, 1),
        note().opacity(1, 1),
    );
    
    yield* beginSlide("used zoedepth");
    
    const usedZoedepth = createRef<Img>();
    view.add(
        <Img
        ref={usedZoedepth}
        src={usedZoedepthSrc}
        x={0}
        y={0}
        scale={1}
        opacity={0}
        />
    );

    yield* all(
        zoedepth().opacity(0, 1),

        usedZoedepth().opacity(1, 1),

        note().code("Used ZoeDepth", 1),
    );
    
    yield* beginSlide("genesis");
    
    const genesis = createRef<Img>();
    view.add(
        <Img
        ref={genesis}
        src={genesisSrc}
        x={0}
        y={0}
        scale={1}
        opacity={0}
        />
    );


    yield* all(
        usedZoedepth().opacity(0, 1),

        genesis().opacity(1, 1),

        text().code("Creating the 3D landscape", 1),
        note().code("Genesis", 1),
    );
    
    yield* beginSlide("base texture");
    
    const baseTexture = createRef<Img>();
    view.add(
        <Img
        ref={baseTexture}
        src={baseTextureSrc}
        x={0}
        y={0}
        scale={1}
        opacity={0}
        />
    );

    yield* all(
        genesis().opacity(0, 1),

        baseTexture().opacity(1, 1),

        note().code("Base Texture", 1),
    );
    
    yield* beginSlide("genesis depth map");
    
    const genesisDepth = createRef<Img>();
    view.add(
        <Img
        ref={genesisDepth}
        src={genesisDepthSrc}
        x={0}
        y={0}
        scale={1}
        opacity={0}
        />
    );

    yield* all(
        baseTexture().opacity(0, 2),

        genesisDepth().opacity(1, 2),

        note().code("Genesis Depth Map", 1),
    );
    
    yield* beginSlide("zoedepth depth map");
        
    const zoedepthDepth = createRef<Img>();
    view.add(
        <Img
        ref={zoedepthDepth}
        src={zoedepthDepthSrc}
        x={0}
        y={0}
        scale={1}
        opacity={0}
        />
    );

    yield* all(
        genesisDepth().opacity(0, 2),

        zoedepthDepth().opacity(1, 2),

        note().code("ZoeDepth Depth Map", 1),
    );
        
    yield* beginSlide("altogether depth maps");
        
    //move base left and zoedepth right
    yield* all(
        baseTexture().x(-500, 2),
        baseTexture().opacity(1, 1),

        zoedepthDepth().x(500, 2),
        
        genesisDepth().opacity(1, 1),
    
        note().fontSize(35, 1),
        note().y(300, 1),
        note().x(35, 1),
        note().code.prepend("Base Texture         Genesis Depth Map       ", 1),
    );        
    
    yield* beginSlide("Smoothing");
    
    yield* all(

        baseTexture().opacity(0, 1),
        genesisDepth().opacity(0, 1),
        zoedepthDepth().opacity(0, 1),

        note().opacity(0, 1),

        text().code("Fixing the Seam", 1),
    );
    
    yield* beginSlide("Untouched Seam");
    
    const noSmoothing = createRef<Img>();
    view.add(
        <Img
        ref={noSmoothing}
        src={noSmoothingSrc}
        x={0}
        y={0}
        scale={1.3}
        opacity={0}
        />
    );

    yield* all(
        noSmoothing().opacity(1, 1),

        note().code("Untouched Seam", 1),
        note().opacity(1, 1),
        note().x(0, 1),
        note().fontSize(50, 1),
    );
    
    yield* beginSlide("1 pixel smoothing");
    
    const onePXSmoothing = createRef<Img>();
    view.add(
        <Img
        ref={onePXSmoothing}
        src={onePXSmoothingSrc}
        x={0}
        y={0}
        scale={1.3}
        opacity={0}
        />
    );

    yield* all(
        noSmoothing().opacity(0, 1),

        onePXSmoothing().opacity(1, 1),

        note().code("1 pixel smoothing", 1),
    );

    yield* beginSlide("100 pixel smoothing");

    const oneHundredPXSmoothing = createRef<Img>();
    view.add(
        <Img
        ref={oneHundredPXSmoothing}
        src={oneHundredPXSmoothingSrc}
        x={0}
        y={0}
        scale={1.3}
        opacity={0}
        />
    );

    yield* all(
        onePXSmoothing().opacity(0, 1),

        oneHundredPXSmoothing().opacity(1, 1),

        note().code("100 pixel smoothing", 1),
    );
    
    yield* beginSlide("altogether smoothed");

    yield* all(
        oneHundredPXSmoothing().x(550, 1),

        onePXSmoothing().opacity(1, 1),

        noSmoothing().opacity(1, 1),
        noSmoothing().x(-550, 1),

        note().fontSize(35, 1),
        note().y(300, 1),
        note().x(0, 1),
        note().code.prepend("Untouched Seam         1 pixel smoothing         ", 1),
    );
    
    yield* beginSlide("Smoothing depth map");
    
    const smoothingDepthMap = createRef<Img>();
    view.add(
        <Img
        ref={smoothingDepthMap}
        src={smoothingDepthMapSrc}
        x={0}
        y={0}
        scale={2.5}
        opacity={0}
        />
    );
    
    yield* all(
        onePXSmoothing().opacity(0, 1),
        oneHundredPXSmoothing().opacity(0, 1),
        noSmoothing().opacity(0, 1),
        
        smoothingDepthMap().opacity(1, 1),
        
        note().code("", 1),
    );
    
    yield* beginSlide("Highlighted smoothing depth map");
    
    const highlightedSmoothingDepthMap = createRef<Img>();
    view.add(
        <Img
        ref={highlightedSmoothingDepthMap}
        src={highlightedSmoothingDepthMapSrc}
        x={0}
        y={0}
        scale={2.5}
        opacity={0}
        />
    );

    yield* all(
        smoothingDepthMap().opacity(0, 1),
        
        highlightedSmoothingDepthMap().opacity(1, 1),
        
        note().y(450, 1),
    );
    
    yield* note().code("50px                                                   50px\n\n                   (for 100px smoothing)", 1);
    
    yield* beginSlide("");
    
    
    
    
    
    
    
    
    
    
    
    
























});