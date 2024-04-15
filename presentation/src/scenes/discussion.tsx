import {Knot, Spline, CubicBezier, Code, makeScene2D, Img, QuadBezier} from '@motion-canvas/2d';
import {PossibleVector2, useLogger, all, createRef, beginSlide, Direction, slideTransition, fadeTransition, easeOutCubic, waitFor, makeRef} from '@motion-canvas/core';


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
        code={'Discussion'}
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
    
    yield* beginSlide("Discussion");
    
    yield* all(
        text().fontSize(100, 0.5),
        text().y(0, 0.5),
        
        note().code("", 0.5),
    );
    
    yield* text().code("Project goal was met", 1.5);

    yield* all(
        text().y(-1080/2+200, 1.5),
        text().fontSize(75, 1.5),
    );
    
    yield* all(
        note().code("but with limitations", 1.5),
    );


    yield* beginSlide("limitations");
    
    yield* all(
        note().code.replace(note().findFirstRange("but with "), "", 1.5),

        text().opacity(0, 1),

        note().fontSize(75, 1),

        note().y(-300, 1),


    );
    
    yield* all(
        note().opacity(0, 0),
        note().y(300, 0),
        note().code("", 0),
        note().fontSize(50, 0),
        note().y(-200, 0),

        text().code("limitations", 0),
        text().opacity(1, 0),
        text().y(-300, 0),
    );
    
    yield* beginSlide("texture quality");

    yield* all(
        note().opacity(1, 1),
        note().y(-100, 1),
    );

    let txt = "-low texture quality";
    let t = 1.5;
    for (let i = 0; i < txt.length; i++) {
        yield* note().code.append(txt[i], t/txt.length);
    }
    
    yield* beginSlide("depth map quality");
    
    txt = "\n\n-untrained depth map";
    t = 1.5;
    for (let i = 0; i < txt.length; i++) {
        yield* note().code.append(txt[i], t/txt.length);
    }
    
    yield* beginSlide("scope");
    
    yield* all(
        text().code("Scope", 1.5),
        note().code("", 1.5),
    );
    
    yield* beginSlide("sounds");
    
    txt = "-ambient nature sounds";
    t = 1.5;
    for (let i = 0; i < txt.length; i++) {
        yield* note().code.append(txt[i], t/txt.length);
    }
    
    yield* beginSlide("support");
    
    txt = "\n\n-native support for the\n app on headsets";
    t = 1.5;
    for (let i = 0; i < txt.length; i++) {
        yield* note().code.append(txt[i], t/txt.length);
    }
    

    yield* beginSlide("future directions");
    
    yield* all(
        text().code("Future directions", 1.5),
        note().code("", 1.5),
    );
    
    yield* beginSlide("effectiveness");
    
    txt = "-study the effectiveness of the app";
    t = 1.5;
    for (let i = 0; i < txt.length; i++) {
        yield* note().code.append(txt[i], t/txt.length);
    }
    
    yield* beginSlide("supsport");
    
    txt = "\n\n-use similar methods as previous\n studies";
    t = 1.5;
    for (let i = 0; i < txt.length; i++) {
        yield* note().code.append(txt[i], t/txt.length);
    }
    

    yield* beginSlide("conclusion");
    
    yield* all(
        text().code("In conclusion ", 1.5),
        note().code("", 1.5),

        text().fontSize(100, 1.5),
        text().y(0, 1.5),
    );

    txt = "...";
    t = 1.5;
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < txt.length; i++) {
            yield* text().code.append(txt[i], t/(txt.length+1));
        }
        yield* text().code("In conclusion ", t/(txt.length+1));
    }//last time
    for (let i = 0; i < txt.length; i++) {
        yield* text().code.append(txt[i], t/(txt.length+1));
    }

    yield* beginSlide("bibliography");
    
    yield* all(
        text().code("Bibliography", 1.5),
        text().y(-400, 1.5),
        text().fontSize(75, 1.5),
    );
    
    
    yield* beginSlide("questions");
    
    view.removeChildren();
    
    yield* beginSlide("last slide");

});