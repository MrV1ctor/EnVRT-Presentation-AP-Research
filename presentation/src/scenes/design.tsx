import {CubicBezier, Code, makeScene2D, Img, QuadBezier} from '@motion-canvas/2d';
import {useLogger, all, createRef, beginSlide, Direction, slideTransition, fadeTransition, easeOutCubic, waitFor} from '@motion-canvas/core';


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
        stroke={'magenta'}
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
        
        note().code("With Lora", 1),
        note().x(-400, 1),
    );

    yield* waitFor(2);

    yield* all(
        wLora().opacity(1, 1),
        wLora().scale(0.75, 1),
        
        note().code("Without Lora", 1),
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
        stroke={'magenta'}
        p0={[lora().x() + 275, lora().y()-58]}
        p1={[ksampler().x() + 0, ksampler().y()+170]}
        p2={[ksampler().x() - 400, ksampler().y()-230]}
        p3={[ksampler().x() - 280, ksampler().y()-230]}
        end={0}
        endArrow
        arrowSize={15}
        />,
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



    )
    
    
    
    
    
    
    yield* beginSlide("latent image2");


















































































});