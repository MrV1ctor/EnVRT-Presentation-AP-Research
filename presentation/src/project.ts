import {makeProject} from '@motion-canvas/core';

// import example from './scenes/example?scene';
import flashback from './scenes/flashback?scene';
import hills_and_glasses from './scenes/hills-and-glasses?scene';
import intro from './scenes/intro?scene';

export default makeProject({
  scenes: [flashback, hills_and_glasses, intro],
});
