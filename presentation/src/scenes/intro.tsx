import {makeScene2D, Code, Path, Img} from '@motion-canvas/2d';
import {all, chain, beginSlide, createRef, DEFAULT, fadeTransition, waitFor} from '@motion-canvas/core';

//using the path data from the svgs in /images/intro

import hillSrc from '../../images/flashback/hill.jpg';


export default makeScene2D(function* (view) {
    const text = createRef<Code>();

    view.fill('black');

    view.add(
        <Code
        ref={text}
        fontSize={100}
        fontFamily={'JetBrains Mono, monospace'}
        x={0}
        code={'Hi'}
        />,
    );

    yield* fadeTransition(1);

    yield* beginSlide("name");

    yield* text().code.replace(text().findFirstRange('Hi'), 'I\'m Victor Urumov', 0.6),

    yield* beginSlide("EnVRT");

    yield* text().code.append(0.6)`\nCreated EnVRT`;
    yield* text().selection(text().findFirstRange('EnVRT'), 0.6),
        
    yield* beginSlide("What is EnVRT");

    let t = 1.5;

    yield* all(
        text().fontSize(50, t).to(75, t),
        text().selection(DEFAULT, t),
        text().code.replace(text().findFirstRange('I\'m Victor Urumov\nCreated '), '', t),
        text().code.replace(text().findFirstRange('En'), 'Environmental ', t),
        text().code.replace(text().findFirstRange('VR'), 'Virtual Reality ', t),
        text().code.replace(text().findFirstRange('T'), 'Therapy', t),
    );

    yield* beginSlide("Video of EnVRT");

    yield* text().code('', 0);
    yield* waitFor(5);
    //put a video here of me looking at title screen, going to an environment, and changing environment
	
    yield* beginSlide("Why make EnVRT?");
    yield* text().code('Why make EnVRT?', 0.6);


    t=1.5;
    yield* beginSlide("What is Env Therapy?");
    yield* all(
        text().code.replace(text().findFirstRange('Why '), 'What ', t),
        text().code.replace(text().findFirstRange('make '), 'is ', t),
        text().code.replace(text().findFirstRange('En'), 'Environmental ', t),
        text().code.remove(text().findFirstRange('VR'), t),
        text().code.replace(text().findFirstRange('T'), 'Therapy', t),
    );
    yield* text().selection(text().findFirstRange('Environmental Therapy?'), 1);

    yield* beginSlide("Env Therapy");
    
    //type it each character out over time
    yield* all(
        text().code.append(0.5)`\n`,
        text().selection(DEFAULT, 0.5),

    );

    let txt = "-emphasizes a strong bond\n between humans and nature.";
    t = 1.5;
    for (let i = 0; i < txt.length; i++) {
        yield* text().code.append(txt[i], t/txt.length);
    }
    




    yield* beginSlide("Humans");
    const person = createRef<Path>();
    const forest = createRef<Path>();
    view.add(
        <Path
            ref={person}
            data={"M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"}
            fill={"white"}
            x={-1080/2}
            y={1080}
            scale={0}
        />
    );

    t=0.75;
    yield* all(
        text().selection(text().findFirstRange('humans'), t),
        person().y(1080/2, t),
        person().scale(0.35, t),
    );




    yield* beginSlide("Nature");
    view.add(
        <Path
            ref={forest}
            data={"M280-80v-160H0l154-240H80l280-400 120 172 120-172 280 400h-74l154 240H680v160H520v-160h-80v160H280Zm389-240h145L659-560h67L600-740l-71 101 111 159h-74l103 160Zm-523 0h428L419-560h67L360-740 234-560h67L146-320Zm0 0h155-67 252-67 155-428Zm523 0H566h74-111 197-67 155-145Zm-149 80h160-160Zm201 0Z"}
            fill={"white"}
            x={1080/2-400}
            y={1080}
            scale={0}
        />
    );

    
    t=0.75;
    yield* all(
        text().selection(text().findAllRanges(/((\bhumans\b)|(\bnature\b))/g), t),
        forest().y(1080/2, t),
        forest().scale(0.35, t),
    );

    yield* beginSlide("next text");

    yield* all(
        text().selection(DEFAULT, 1),
        text().code.remove(text().findFirstRange(txt), 1),
        person().opacity(0, 1),
        forest().opacity(0, 1),
    );

    
    const note = createRef<Code>();//14, 12, 6, 10,   16, 17
    view.add(
        <Code
        ref={note}
        fontSize={25}
        fontFamily={'JetBrains Mono, monospace'}
        x={0}
        y={1080/2-50}
        code={'(Wang et al., 2019; Zeng et al., 2020; Lee et al., 2014; Song et al., 2013; Lee et al., 2020; Sahlin et al., 2015)'}
        />,
    );

    txt = "-can lower heart rate, blood\n pressure, depression, and\n anxiety.";
    t = 1.5;
    for (let i = 0; i < txt.length; i++) {
        yield* text().code.append(txt[i], t/txt.length);
    }
    
    yield* beginSlide("walking");

    const hill = createRef<Img>();
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
    
    yield* all(
        text().opacity(0, 0.25),
        note().opacity(0, 0.25),
        hill().opacity(1, 0.25),
    );




    yield* beginSlide("don't have to be there");
    
    yield* text().code('You don\'t have to be there', 0),
    yield* note().code('(not physically)', 0),
    yield* note().y(200, 0),
    yield* note().fontSize(40, 0),
    yield* all(
        hill().opacity(0, 1),
        text().opacity(1, 1),
    );


    yield* beginSlide("not physically");
    yield* note().opacity(1, 1);
    
    
    yield* beginSlide("imaginative");
    
    yield* text().code.remove(text().findFirstRange('You don\'t have to be there'), 0.5); 
    yield* all(
        text().code('Thinking about nature helped people have:', 0.5),
        text().fontSize(45, 0.5),

        note().fontSize(30, 0.5),
        note().code('(Meuwese et al., 2021)', 0.5),
    );

    
    yield* beginSlide("thinking effects");
    txt = "\n\n-deeper self-reflection\n-introspection";
    t = 1.5;
    for (let i = 0; i < txt.length; i++) {
        yield* text().code.append(txt[i], t/txt.length);
    }
    
    yield* beginSlide("audio");
    yield* text().code("", 0.5);        
    yield* text().code("Cognitive benefits could even be had\nfrom listening to sounds found in nature", 0.5);

    
    yield* beginSlide("cog. & sound selected");
    
    const headphones = createRef<Path>();
    view.add(
        <Path
            ref={headphones}
            data={"M360-120H200q-33 0-56.5-23.5T120-200v-280q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v280q0 33-23.5 56.5T760-120H600v-320h160v-40q0-117-81.5-198.5T480-760q-117 0-198.5 81.5T200-480v40h160v320Zm-80-240h-80v160h80v-160Zm400 0v160h80v-160h-80Zm-400 0h-80 80Zm400 0h80-80Z"}
            fill={"white"}
            x={1080/2-200}
            y={1080}
            scale={0}
        />
    );



    yield* all(
        text().selection(text().findAllRanges(/((\bCognitive benefits\b)|(\blistening to sounds\b))/g), 1.5),

        headphones().y(1080/4, t),
        headphones().scale(0.35, t),
        // rotate
        headphones().rotation(45, t*2),

    );


    
    yield* beginSlide("vr therapy");

    yield* all(
        text().selection(DEFAULT, 1),
        
        headphones().x(1920/2, 1),
        headphones().opacity(0, 2),

        note().opacity(0, 1),
        
        text().code("", 1),
        text().code('Therapy works in VR too.', 1),  
    );


    yield* beginSlide("vr t2herapy");


});
