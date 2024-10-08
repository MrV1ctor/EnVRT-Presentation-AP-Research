import {makeProject} from '@motion-canvas/core';

// import example from './scenes/example?scene';
import flashback from './scenes/flashback?scene';
import intro from './scenes/intro?scene';
import exploration from './scenes/exploration?scene';
import design from './scenes/design?scene';
import application from './scenes/application?scene';
import discussion from './scenes/discussion?scene';

export default makeProject({
  scenes: [flashback, intro, exploration, design, application, discussion],
});
