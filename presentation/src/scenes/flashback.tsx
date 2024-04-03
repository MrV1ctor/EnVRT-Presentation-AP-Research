import {makeScene2D, Img, QuadBezier} from '@motion-canvas/2d';
import {all, createRef, beginSlide, Direction, slideTransition, fadeTransition, easeOutCubic} from '@motion-canvas/core';

import forestSrc from '../../images/flashback/forest.jpg'
import benchSrc from '../../images/flashback/bench.jpg'
import beachSrc from '../../images/flashback/beach.jpeg'

import hillSrc from '../../images/flashback/hill.jpg';
import vrSrc from '../../images/flashback/vr.png';

//make linear tween function

export default makeScene2D(function* (view) {
    
    //eyelids
    const topLid = createRef<QuadBezier>();
    const botLid = createRef<QuadBezier>();
    view.add(
        <QuadBezier
            ref={topLid}
            lineWidth={1920/2+200}
            stroke={"black"}
            p0={{x: -1920, y: -1080/2-50}}
            p1={{x: 0, y: -1080*2}}
            p2={{x: 1920, y: -1080/2-50}}
        />
    );
    view.add(
        <QuadBezier
            ref={botLid}
            lineWidth={1920/2+200}
            stroke={"black"}
            p0={{x: -1920, y: 1080/2+50}}
            p1={{x: 0, y: 1080*2}}
            p2={{x: 1920, y: 1080/2+50}}
        />
    );
    yield* beginSlide("Eyes Close");
    
    yield* all(
            topLid().p1.y(-1080/2, 3),
            botLid().p1.y(1080/2, 3)
        );

    yield* beginSlide("flashback start");


    //flashback
    const forest = createRef<Img>();
    const beach = createRef<Img>();
    const bench = createRef<Img>();

    view.add(
        <Img
            ref={forest}
            src={forestSrc}
            x={-600}
            y={0}
            width={1}
            height={1}
            alpha={0}
            radius={50}
        />
    );
    view.add(
        <Img
            ref={beach}
            src={beachSrc}
            x={0}
            y={0}
            width={1}
            height={1}
            alpha={0}
            radius={50}
        />
    );
    view.add(
        <Img
            ref={bench}
            src={benchSrc}
            x={600}
            y={0}
            width={1}
            height={1}
            alpha={0}
            radius={50}
        />
    );

    forest().fill(forest().getColorAtPoint(0));
    beach().fill(beach().getColorAtPoint(0));
    bench().fill(bench().getColorAtPoint(0));

    yield* all(
        
        forest().radius(150, 1.5),
        forest().size([300, 300], 1.5),

        beach().radius(150, 1.5),
        beach().size([300, 300], 1.5),

        bench().radius(150, 1.5),
        bench().size([300, 300], 1.5),
    );
        
    yield* beginSlide("forest");
    yield* all(
        forest().alpha(1, 1.5),
        forest().size([350, 600], 1.5),
        forest().radius(20, 1.5),
    );
            

    yield* beginSlide("beach");
    yield* all(
        beach().alpha(1, 1.5),
        beach().size([350, 600], 1.5),
        beach().radius(20, 1.5),
    );
    
    yield* beginSlide("bench");
    yield* all(
        bench().alpha(1, 1.5),
        bench().size([350, 600], 1.5),
        bench().radius(20, 1.5),
    );


    yield* beginSlide("flashback end");
    // yield* fadeTransition(1.5);

    // make image
    const hill = createRef<Img>();
    const vr = createRef<Img>();
    view.add(
        <Img
            ref={hill}
            src={hillSrc}
            x={0}
            y={0}
            width={1920}
            height={1080}
            opacity={0}
        />
    );
    view.add(
        <Img
            ref={vr}
            src={vrSrc}
            x={0}
            y={1080/2}
            width={1}
            height={1}
            opacity={0}
        />
    );

    
    yield* all(
        beach().opacity(0, .5),
        forest().opacity(0, .5),
        bench().opacity(0, .5),
        hill().opacity(1, .5),
        vr().opacity(1, .5),
    );

    yield* beginSlide("vr come up");

    yield* all(
        vr().position.y(0, 3, easeOutCubic),
        vr().size([5000, null], 3),

    );

    yield* beginSlide("vr zoom in");

    yield* all(
        vr().size([100_000, null], 1.),
        vr().position.y(-1200, 1.),
    );


});