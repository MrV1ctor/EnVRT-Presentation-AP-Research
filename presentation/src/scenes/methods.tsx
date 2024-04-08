import {Code, makeScene2D, Img, QuadBezier} from '@motion-canvas/2d';
import {useLogger, all, createRef, beginSlide, Direction, slideTransition, fadeTransition, easeOutCubic} from '@motion-canvas/core';

import unitySrc from '../../images/methods/unity logo.png';
import unrealSrc from '../../images/methods/unreal engine logo.png';


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
    
    
    
    
    
    
    
    yield* beginSlide("Template2");
    
    






    
    
    

});