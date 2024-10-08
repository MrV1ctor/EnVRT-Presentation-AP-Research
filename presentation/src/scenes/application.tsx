import {Knot, Spline, CubicBezier, Code, makeScene2D, Img, QuadBezier} from '@motion-canvas/2d';
import {PossibleVector2, useLogger, all, createRef, beginSlide, Direction, slideTransition, fadeTransition, easeOutCubic, waitFor, makeRef} from '@motion-canvas/core';


import itchioSrc from '../../images/application/itchio.png';
import githubSrc from '../../images/application/github.png';


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
        fontSize={50}
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
    
    yield* beginSlide("itchio");
    
    const itchio = createRef<Img>();
    view.add(
        <Img
        ref={itchio}
        src={itchioSrc}
        x={0}
        y={300}
        scale={0.5}
        opacity={0}
        />
    );

    yield* all(
        itchio().opacity(1, 1),
        itchio().scale(1, 1),

        note().code("https://mrv1ctor.itch.io/envrt", 1),
        note().y(-200, 1),
    );
    
    yield* beginSlide("source code");
    
    const github = createRef<Img>();
    view.add(
        <Img
        ref={github}
        src={githubSrc}
        x={0}
        y={200}
        scale={0.5}
        opacity={0}
        />
    );

    yield* all(
        github().opacity(1, 1),
        github().scale(1, 1),

        itchio().opacity(0, 1),

        note().code("https://github.com/MrV1ctor/EnVRT", 1),
        text().code("Viewing the source code", 1),
    );
    
    yield* beginSlide("application end");

});