import {Code, makeScene2D, Img, QuadBezier} from '@motion-canvas/2d';
import {useLogger, all, createRef, beginSlide, Direction, slideTransition, fadeTransition, easeOutCubic} from '@motion-canvas/core';

import unitySrc from '../../images/exploration/unity logo.png';
import unrealSrc from '../../images/exploration/unreal engine logo.png';

import templateSrc from '../../images/exploration/template.png';

import environment3DSrc from '../../images/exploration/environment3d.jpg';
import forestAISrc from '../../images/exploration/forestAI.png';

import sdwebuiSrc from '../../images/exploration/sdwebui.png';
import comfyuiSrc from '../../images/exploration/comfyui.png';

export default makeScene2D(function* (view) {
    
    const log = useLogger();
    
    
    view.fill('black');
    
    const text = createRef<Code>();
    view.add(
        <Code
        ref={text}
        fontSize={100}
        fontFamily={'JetBrains Mono, monospace'}
        x={0}
        code={'Methodology'}
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


    yield* fadeTransition(1);



    yield* all(
        text().y(-1080/2+200, 0.5),
        text().fontSize(75, 0.5),

        note().fontSize(55, 0.5),
        note().opacity(1, 0.5),
        note().y(-150, 0.5),

    );
    
    yield* beginSlide("Exploration explanation");
    
    let txt = "-Exploration";
    let t = .5;
    for (let i = 0; i < txt.length; i++) {
        yield* note().code.append(txt[i], t/txt.length);
    }
    
    
    yield* beginSlide("Design explanation");
    
    txt = "\n-Design";
    t = .5;
    for (let i = 0; i < txt.length; i++) {
        yield* note().code.append(txt[i], t/txt.length);
    }
    
    
    yield* beginSlide("Application explanation");
    
    
    txt = "\n-Application";
    t = .5;
    for (let i = 0; i < txt.length; i++) {
        yield* note().code.append(txt[i], t/txt.length);
    }
    
    
    
    yield* beginSlide("Exploration Begin");
    
    yield* all(
        text().code("Exploration", 0.5),
        text().fontSize(100, 0.5),
        text().y(0, 0.5),

        note().code("", 0.5),
    );

    yield* beginSlide("Game Engine");
    
    
    yield* all(
        text().code("Game Engine", 0.5),
        text().y(-1080/2+200, 0.5),
        text().fontSize(75, 0.5),



        view.fill("#333", 0.5),
    );
    const unity = createRef<Img>();
    view.add(
        <Img
            ref={unity}
            src={unitySrc}
            x={0}
            y={200}
            scale={0.5}
            opacity={0}
        />
    );

    const unreal = createRef<Img>();
    view.add(
        <Img
            ref={unreal}
            src={unrealSrc}
            x={0}
            y={300}
            scale={0.75}
            opacity={0}
        />
    );

    
    yield* beginSlide("Unity");
    
    yield* all(
        note().code("Unity", 0.5),
        unity().opacity(1, 0.5),
    );
    
    
    
    
    yield* beginSlide("Unreal Engine");
    
    yield* all(
        note().code.append("                        Unreal Engine", 0.5),
        
        unreal().opacity(1, 0.5),
        unreal().scale(1.75, 0.5),
        unreal().x(1080/2-75, 0.5),


        
        unity().x(-1080/2-75, 0.5),
    );
    
    
    
    
    yield* beginSlide("Template");
    
    yield* all(
        unity().y(1080, 1),
        unreal().y(1080, 1),
        note().code("", 1),

        text().code("Template", 1),

        view.fill("black", 1),
    );
    yield* all(
        unity().opacity(0, 0),
        unreal().opacity(0, 0),
    )
    

    yield* beginSlide("Template img");

    const template = createRef<Img>();
    view.add(
        <Img
            ref={template}
            src={templateSrc}
            x={0}
            y={100}
            scale={1.5}
            opacity={0}
        />
    );

    yield* all(
        template().opacity(1, 1),
    );

    
    
    yield* beginSlide("type of 3d");
    
    yield* all(
        template().opacity(0, 1),
        text().code("Type of 3D environment", 1),
    );
    
    
    
    yield* beginSlide("conventional 3d");
    
    const environment3D = createRef<Img>();
    view.add(
        <Img
            ref={environment3D}
            src={environment3DSrc}
            x={0}
            y={300}
            scale={0.7}
            opacity={0}
        />
    );
    
    
    yield* all(
        note().code("Conventional", 1),
        environment3D().opacity(1, 1),
    );
    
    yield* beginSlide("ai environment");
    
    const forestAI = createRef<Img>();
    view.add(
        <Img
            ref={forestAI}
            src={forestAISrc}
            x={0}
            y={300}
            scale={0.5}
            opacity={0}
        />
    );
    
    yield* all(
        note().code.append("                 AI-Assisted", 0.5),
        
        forestAI().opacity(1, 0.5),
        forestAI().scale(1, 0.5),
        forestAI().x(1080/2-75, 0.5),
        
        
        
        environment3D().x(-1080/2+100, 0.5),
    );
    
    yield* beginSlide("AI image generator");
    
    yield* all(
        forestAI().y(1080, 1),
        environment3D().y(1080, 1),
        note().code("", 1),
        text().code("AI Image Generator", 1),
    );
    
    yield* beginSlide("stable diffusion");
    
    const sdwebui = createRef<Img>();
    view.add(
        <Img
        ref={sdwebui}
        src={sdwebuiSrc}
        x={0}
        y={300}
        scale={0.6}
        opacity={0}
        />
    );
    
    yield* note().y(-50, 0);
    yield* all(
        sdwebui().opacity(1, 1),
        note().code("Stable Diffusion Web UI", 1),
    );
    
    yield* beginSlide("comfyui");
    
    const comfyui = createRef<Img>();
    view.add(
        <Img
        ref={comfyui}
        src={comfyuiSrc}
        x={0}
        y={300}
        scale={0.5}
        opacity={0}
        />
    );
    
    yield* all(
        note().code.append("             ComfyUI", 0.5),
        note().x(-75, 0.5),

        comfyui().opacity(1, 0.5),
        comfyui().scale(0.75, 0.5),
        comfyui().x(1080/2-75, 0.5),
        
        
        
        sdwebui().x(-1080/2+100, 0.5),
    );
    
    yield* beginSlide("Exploration end");


});