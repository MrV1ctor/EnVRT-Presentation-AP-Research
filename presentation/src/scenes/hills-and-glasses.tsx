import {makeScene2D, Circle, Img} from '@motion-canvas/2d';
import {all, createRef, easeOutCubic} from '@motion-canvas/core';
import {beginSlide, Direction, fadeTransition, slideTransition} from '@motion-canvas/core';

import hillSrc from '../../images/intro/hill.jpg';
import vrSrc from '../../images/intro/vr.png';

export default makeScene2D(function* (view) {

    view.fill('black');

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
        />
    );

    
    yield* slideTransition(Direction.Left, 1.5);

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
 