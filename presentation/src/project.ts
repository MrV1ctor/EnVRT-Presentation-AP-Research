import {makeProject} from '@motion-canvas/core';

// import example from './scenes/example?scene';
import flashback from './scenes/flashback?scene';
import intro from './scenes/intro?scene';
import methods from './scenes/methods?scene';

export default makeProject({
  scenes: [flashback, intro, methods],
});
