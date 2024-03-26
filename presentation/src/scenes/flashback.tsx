import {makeScene2D, Img, QuadBezier} from '@motion-canvas/2d';
import {all, createRef, waitFor, beginSlide, arcLerp, easeInSine, easeOutSine, easeInCubic, easeOutCubic} from '@motion-canvas/core';

import forestSrc from '../../images/flashback/forest.jpg'
import benchSrc from '../../images/flashback/bench.jpg'
import beachSrc from '../../images/flashback/beach.jpeg'

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
        beginSlide("flashback start"),
        
        forest().radius(150, 1.5),
        forest().size([300, 300], 1.5),

        beach().radius(150, 1.5),
        beach().size([300, 300], 1.5),

        bench().radius(150, 1.5),
        bench().size([300, 300], 1.5),
    );
        
    yield* all(
        beginSlide("forest"),
        forest().alpha(1, 1.5),
        forest().size([350, 600], 1.5),
        forest().radius(20, 1.5),
    );
            

    yield* all(
        beginSlide("beach"),
        beach().alpha(1, 1.5),
        beach().size([350, 600], 1.5),
        beach().radius(20, 1.5),
    );
    
    yield* all(
        beginSlide("bench"),
        bench().alpha(1, 1.5),
        bench().size([350, 600], 1.5),
        bench().radius(20, 1.5),
    );






});