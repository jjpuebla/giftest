const optionLabels = ["A", "B", "C", "D"];
const selectedAnswers = {};
const checkedAnswers = {};

const questions = [
  {
    "id": "picture-analogies-1",
    "category": "Picture Analogies",
    "image": "images/PICTURE_ANALOGIES_001.png",
    "answer": "D",
    "explanation": "Surfboards are used at the beach; skis are used in the mountains."
  },
  {
    "id": "picture-analogies-2",
    "category": "Picture Analogies",
    "image": "images/PICTURE_ANALOGIES_002.png",
    "answer": "B",
    "explanation": "Windows are found in houses; portholes are found in ships."
  },
  {
    "id": "picture-analogies-3",
    "category": "Picture Analogies",
    "image": "images/PICTURE_ANALOGIES_003.png",
    "answer": "D",
    "explanation": "Stars go on top of the Christmas trees; candles go on top of the birthday cakes."
  },
  {
    "id": "picture-analogies-4",
    "category": "Picture Analogies",
    "image": "images/PICTURE_ANALOGIES_004.png",
    "answer": "B",
    "explanation": "Eyebrows are located above the eyes; mustaches are located above the mouth."
  },
  {
    "id": "picture-analogies-5",
    "category": "Picture Analogies",
    "image": "images/PICTURE_ANALOGIES_005.png",
    "answer": "B",
    "explanation": "Fries are cooked in the fryer; chicken is cooked in the oven."
  },
  {
    "id": "picture-analogies-6",
    "category": "Picture Analogies",
    "image": "images/PICTURE_ANALOGIES_006.png",
    "answer": "B",
    "explanation": "The tablecloth is placed on the table; the blanket is placed on the bed."
  },
  {
    "id": "picture-analogies-7",
    "category": "Picture Analogies",
    "image": "images/PICTURE_ANALOGIES_007.png",
    "answer": "B",
    "explanation": "The iron is used to smooth out shirts; the hair straightener is used to straighten hair. 117"
  },
  {
    "id": "picture-analogies-8",
    "category": "Picture Analogies",
    "image": "images/PICTURE_ANALOGIES_008.png",
    "answer": "C",
    "explanation": "To wash dishes you use the dishwasher; to wash shirts you use the washing machine."
  },
  {
    "id": "picture-analogies-9",
    "category": "Picture Analogies",
    "image": "images/PICTURE_ANALOGIES_009.png",
    "answer": "A",
    "explanation": "The diving mask is worn on the face; fins are worn on the feet."
  },
  {
    "id": "picture-analogies-10",
    "category": "Picture Analogies",
    "image": "images/PICTURE_ANALOGIES_010.png",
    "answer": "A",
    "explanation": "The polisher is used to clean the floor. The vacuum cleaner is used for the carpet."
  },
  {
    "id": "picture-analogies-11",
    "category": "Picture Analogies",
    "image": "images/PICTURE_ANALOGIES_011.png",
    "answer": "C",
    "explanation": "Kneepads protect the knees; helmets protect the head."
  },
  {
    "id": "picture-analogies-12",
    "category": "Picture Analogies",
    "image": "images/PICTURE_ANALOGIES_012.png",
    "answer": "A",
    "explanation": "The teacher works in the school; the doctor works in the hospital."
  },
  {
    "id": "picture-analogies-13",
    "category": "Picture Analogies",
    "image": "images/PICTURE_ANALOGIES_013.png",
    "answer": "A",
    "explanation": "Arms are for canoeing; legs are for biking."
  },
  {
    "id": "picture-analogies-14",
    "category": "Picture Analogies",
    "image": "images/PICTURE_ANALOGIES_014.png",
    "answer": "B",
    "explanation": "The padded jacket is used when it snows; the swimsuit is used when it's sunny."
  },
  {
    "id": "picture-analogies-15",
    "category": "Picture Analogies",
    "image": "images/PICTURE_ANALOGIES_015.png",
    "answer": "A",
    "explanation": "The lawnmower is used to cut grass; the razor is used to trim beards. 118"
  },
  {
    "id": "picture-analogies-16",
    "category": "Picture Analogies",
    "image": "images/PICTURE_ANALOGIES_016.png",
    "answer": "B",
    "explanation": "The skeleton belongs to man; the bone belongs to fish."
  },
  {
    "id": "picture-analogies-17",
    "category": "Picture Analogies",
    "image": "images/PICTURE_ANALOGIES_017.png",
    "answer": "C",
    "explanation": "The ruler is for drawing lines; the compass is for drawing circles."
  },
  {
    "id": "picture-analogies-18",
    "category": "Picture Analogies",
    "image": "images/PICTURE_ANALOGIES_018.png",
    "answer": "D",
    "explanation": "The wrench is for turning bolts; the screwdriver is for turning screws. 119"
  },
  {
    "id": "picture-classification-1",
    "category": "Picture Classification",
    "image": "images/PICTURE_CLASSIFICATION_001.png",
    "answer": "A",
    "explanation": "Hens, penguins, ostriches, and turkeys are non-flying birds."
  },
  {
    "id": "picture-classification-2",
    "category": "Picture Classification",
    "image": "images/PICTURE_CLASSIFICATION_002.png",
    "answer": "C",
    "explanation": "The colander, microwave, blender, toaster are items that are used in the kitchen."
  },
  {
    "id": "picture-classification-3",
    "category": "Picture Classification",
    "image": "images/PICTURE_CLASSIFICATION_003.png",
    "answer": "B",
    "explanation": "The chess horse, playing cards, puzzles, dominoes are board games."
  },
  {
    "id": "picture-classification-4",
    "category": "Picture Classification",
    "image": "images/PICTURE_CLASSIFICATION_004.png",
    "answer": "A",
    "explanation": "The iron, washing machine, iron board and basket with dirty laundry are items that are found in the laundry room."
  },
  {
    "id": "picture-classification-5",
    "category": "Picture Classification",
    "image": "images/PICTURE_CLASSIFICATION_005.png",
    "answer": "C",
    "explanation": "Hummingbirds, eagles, parrots and owls are flying birds."
  },
  {
    "id": "picture-classification-6",
    "category": "Picture Classification",
    "image": "images/PICTURE_CLASSIFICATION_006.png",
    "answer": "B",
    "explanation": "The lawnmower, rake, watering can and wheelbarrow are gardening items. 120"
  },
  {
    "id": "picture-classification-7",
    "category": "Picture Classification",
    "image": "images/PICTURE_CLASSIFICATION_007.png",
    "answer": "B",
    "explanation": "The school, the museum, the hospital, and the house are all buildings for humans."
  },
  {
    "id": "picture-classification-8",
    "category": "Picture Classification",
    "image": "images/PICTURE_CLASSIFICATION_008.png",
    "answer": "C",
    "explanation": "Rhinos, elephants, lions and gazelles are all animals living in the African savannah."
  },
  {
    "id": "picture-classification-9",
    "category": "Picture Classification",
    "image": "images/PICTURE_CLASSIFICATION_009.png",
    "answer": "D",
    "explanation": "Dolphins, dogs, tigers, and whales are all mammals."
  },
  {
    "id": "picture-classification-10",
    "category": "Picture Classification",
    "image": "images/PICTURE_CLASSIFICATION_010.png",
    "answer": "D",
    "explanation": "Fridges, safes, backpacks and bookcases are made to store items."
  },
  {
    "id": "picture-classification-11",
    "category": "Picture Classification",
    "image": "images/PICTURE_CLASSIFICATION_011.png",
    "answer": "B",
    "explanation": "The microwave, deep fryer, electric oven and frying pan are for cooking food."
  },
  {
    "id": "picture-classification-12",
    "category": "Picture Classification",
    "image": "images/PICTURE_CLASSIFICATION_012.png",
    "answer": "C",
    "explanation": "The birdcage, fish bowl, birdhouse and doghouse are structures made for animals."
  },
  {
    "id": "picture-classification-13",
    "category": "Picture Classification",
    "image": "images/PICTURE_CLASSIFICATION_013.png",
    "answer": "A",
    "explanation": "The boat, life buoy, canoe and balloon can float in the water."
  },
  {
    "id": "picture-classification-14",
    "category": "Picture Classification",
    "image": "images/PICTURE_CLASSIFICATION_014.png",
    "answer": "A",
    "explanation": "Apatosaurus, triceratops, t-rexes, and stegosaurs were dinosaurs. 121"
  },
  {
    "id": "picture-classification-15",
    "category": "Picture Classification",
    "image": "images/PICTURE_CLASSIFICATION_015.png",
    "answer": "A",
    "explanation": "Snow, rain, wind, and tornadoes are weather phenomena."
  },
  {
    "id": "picture-classification-16",
    "category": "Picture Classification",
    "image": "images/PICTURE_CLASSIFICATION_016.png",
    "answer": "B",
    "explanation": "Santa Claus, the Witch, the Wizard and the Mermaid are fantastic characters."
  },
  {
    "id": "picture-classification-17",
    "category": "Picture Classification",
    "image": "images/PICTURE_CLASSIFICATION_017.png",
    "answer": "C",
    "explanation": "Cheese, milk, ham, and eggs are foods of animal origin."
  },
  {
    "id": "picture-classification-18",
    "category": "Picture Classification",
    "image": "images/PICTURE_CLASSIFICATION_018.png",
    "answer": "D",
    "explanation": "The dragon, the unicorn, the three-headed monster and the frog prince are characters from fairy tales. 122"
  },
  {
    "id": "sentence-completion-1",
    "category": "Sentence Completion",
    "image": "images/SENTENCE_COMPLETION_001.png",
    "answer": "A",
    "explanation": "Penguin is classified as bird."
  },
  {
    "id": "sentence-completion-2",
    "category": "Sentence Completion",
    "image": "images/SENTENCE_COMPLETION_002.png",
    "answer": "D",
    "explanation": "The swimsuit doesn\u2019t protect against the cold."
  },
  {
    "id": "sentence-completion-3",
    "category": "Sentence Completion",
    "image": "images/SENTENCE_COMPLETION_003.png",
    "answer": "C",
    "explanation": "The oven will not be found in the garden."
  },
  {
    "id": "sentence-completion-4",
    "category": "Sentence Completion",
    "image": "images/SENTENCE_COMPLETION_004.png",
    "answer": "B",
    "explanation": "Bats are mammals."
  },
  {
    "id": "sentence-completion-5",
    "category": "Sentence Completion",
    "image": "images/SENTENCE_COMPLETION_005.png",
    "answer": "D",
    "explanation": "John will use the ball in the D box."
  },
  {
    "id": "sentence-completion-6",
    "category": "Sentence Completion",
    "image": "images/SENTENCE_COMPLETION_006.png",
    "answer": "C",
    "explanation": "Spiders aren't insects. The group is called the Arachnida."
  },
  {
    "id": "sentence-completion-7",
    "category": "Sentence Completion",
    "image": "images/SENTENCE_COMPLETION_007.png",
    "answer": "D",
    "explanation": "The head contains the brain. 123"
  },
  {
    "id": "sentence-completion-8",
    "category": "Sentence Completion",
    "image": "images/SENTENCE_COMPLETION_008.png",
    "answer": "A",
    "explanation": "Trucks have wheels."
  },
  {
    "id": "sentence-completion-9",
    "category": "Sentence Completion",
    "image": "images/SENTENCE_COMPLETION_009.png",
    "answer": "A",
    "explanation": "You need a telescope."
  },
  {
    "id": "sentence-completion-10",
    "category": "Sentence Completion",
    "image": "images/SENTENCE_COMPLETION_010.png",
    "answer": "C",
    "explanation": "You can use a battery-powered flashlight."
  },
  {
    "id": "sentence-completion-11",
    "category": "Sentence Completion",
    "image": "images/SENTENCE_COMPLETION_011.png",
    "answer": "B",
    "explanation": "Ham does not contain sugar."
  },
  {
    "id": "sentence-completion-12",
    "category": "Sentence Completion",
    "image": "images/SENTENCE_COMPLETION_012.png",
    "answer": "D",
    "explanation": "Eggplants don't grow on trees."
  },
  {
    "id": "sentence-completion-13",
    "category": "Sentence Completion",
    "image": "images/SENTENCE_COMPLETION_013.png",
    "answer": "B",
    "explanation": "Planet Earth never stands still."
  },
  {
    "id": "sentence-completion-14",
    "category": "Sentence Completion",
    "image": "images/SENTENCE_COMPLETION_014.png",
    "answer": "D",
    "explanation": "A compass is generally not found in the laundry room."
  },
  {
    "id": "sentence-completion-15",
    "category": "Sentence Completion",
    "image": "images/SENTENCE_COMPLETION_015.png",
    "answer": "C",
    "explanation": "Horses don't eat meat. 124"
  },
  {
    "id": "sentence-completion-16",
    "category": "Sentence Completion",
    "image": "images/SENTENCE_COMPLETION_016.png",
    "answer": "B",
    "explanation": "The TV remote control works with batteries."
  },
  {
    "id": "sentence-completion-17",
    "category": "Sentence Completion",
    "image": "images/SENTENCE_COMPLETION_017.png",
    "answer": "D",
    "explanation": "Seals don't lay eggs."
  },
  {
    "id": "sentence-completion-18",
    "category": "Sentence Completion",
    "image": "images/SENTENCE_COMPLETION_018.png",
    "answer": "B",
    "explanation": "A seamstress doesn't use a saw. 125"
  },
  {
    "id": "figure-matrices-1",
    "category": "Figure Matrices",
    "image": "images/FIGURE_MATRICES_001.png",
    "answer": "B",
    "explanation": "The white figure rotates by 180 degrees and turns black."
  },
  {
    "id": "figure-matrices-2",
    "category": "Figure Matrices",
    "image": "images/FIGURE_MATRICES_002.png",
    "answer": "D",
    "explanation": "Both figures rotate by 180 degrees and the inside shape turns white."
  },
  {
    "id": "figure-matrices-3",
    "category": "Figure Matrices",
    "image": "images/FIGURE_MATRICES_003.png",
    "answer": "C",
    "explanation": "The larger figure gets smaller and stands next to the others."
  },
  {
    "id": "figure-matrices-4",
    "category": "Figure Matrices",
    "image": "images/FIGURE_MATRICES_004.png",
    "answer": "C",
    "explanation": "The two inside figures are placed to the left of the larger figure."
  },
  {
    "id": "figure-matrices-5",
    "category": "Figure Matrices",
    "image": "images/FIGURE_MATRICES_005.png",
    "answer": "B",
    "explanation": "The two figures are placed side by side horizontally and become white."
  },
  {
    "id": "figure-matrices-6",
    "category": "Figure Matrices",
    "image": "images/FIGURE_MATRICES_006.png",
    "answer": "A",
    "explanation": "The lower figure rotates by 180 degrees, turns white, and moves on top of the other. a"
  },
  {
    "id": "figure-matrices-7",
    "category": "Figure Matrices",
    "image": "images/FIGURE_MATRICES_007.png",
    "answer": "D",
    "explanation": "The upper figure disappears. The lower figure takes the place of the other one and turns black."
  },
  {
    "id": "figure-matrices-8",
    "category": "Figure Matrices",
    "image": "images/FIGURE_MATRICES_008.png",
    "answer": "D",
    "explanation": "The larger figure rotates by 45 degrees clockwise. The inside shape turns black."
  },
  {
    "id": "figure-matrices-9",
    "category": "Figure Matrices",
    "image": "images/FIGURE_MATRICES_009.png",
    "answer": "C",
    "explanation": "The larger figure rotates by 90 degrees clockwise. The inner figure rotates by 90 degrees counterclockwise."
  },
  {
    "id": "figure-matrices-10",
    "category": "Figure Matrices",
    "image": "images/FIGURE_MATRICES_010.png",
    "answer": "D",
    "explanation": "The internal figure is removed."
  },
  {
    "id": "figure-matrices-11",
    "category": "Figure Matrices",
    "image": "images/FIGURE_MATRICES_011.png",
    "answer": "C",
    "explanation": "The figure rotates by 45 degrees clockwise and turns black."
  },
  {
    "id": "figure-matrices-12",
    "category": "Figure Matrices",
    "image": "images/FIGURE_MATRICES_012.png",
    "answer": "B",
    "explanation": "The higher figure takes the place of the lower one and vice versa."
  },
  {
    "id": "figure-matrices-13",
    "category": "Figure Matrices",
    "image": "images/FIGURE_MATRICES_013.png",
    "answer": "D",
    "explanation": "The 2 figures rotate by 90 degrees clockwise."
  },
  {
    "id": "figure-matrices-14",
    "category": "Figure Matrices",
    "image": "images/FIGURE_MATRICES_014.png",
    "answer": "D",
    "explanation": "The smaller figure moves to the left of the larger one and turns black. 127"
  },
  {
    "id": "figure-matrices-15",
    "category": "Figure Matrices",
    "image": "images/FIGURE_MATRICES_015.png",
    "answer": "A",
    "explanation": "The two figures switch places and colors."
  },
  {
    "id": "figure-matrices-16",
    "category": "Figure Matrices",
    "image": "images/FIGURE_MATRICES_016.png",
    "answer": "C",
    "explanation": "The right stars have 2 more points than the one on the left."
  },
  {
    "id": "figure-matrices-17",
    "category": "Figure Matrices",
    "image": "images/FIGURE_MATRICES_017.png",
    "answer": "D",
    "explanation": "The inside shape is removed. The upper shape moves inside the larger figure."
  },
  {
    "id": "figure-matrices-18",
    "category": "Figure Matrices",
    "image": "images/FIGURE_MATRICES_018.png",
    "answer": "A",
    "explanation": "Figures rotate 90 degrees counterclockwise. 128"
  },
  {
    "id": "figure-classification-1",
    "category": "Figure Classification",
    "image": "images/FIGURE_CLASSIFICATION_001.png",
    "answer": "B",
    "explanation": "3 circles, one black, one gray and one white, in different positions."
  },
  {
    "id": "figure-classification-2",
    "category": "Figure Classification",
    "image": "images/FIGURE_CLASSIFICATION_002.png",
    "answer": "A",
    "explanation": "Combos of 2 gray circles, 3 black circles and a black star."
  },
  {
    "id": "figure-classification-3",
    "category": "Figure Classification",
    "image": "images/FIGURE_CLASSIFICATION_003.png",
    "answer": "D",
    "explanation": "Combos of a 5-sided figure and a circle."
  },
  {
    "id": "figure-classification-4",
    "category": "Figure Classification",
    "image": "images/FIGURE_CLASSIFICATION_004.png",
    "answer": "C",
    "explanation": "Figures pointing down."
  },
  {
    "id": "figure-classification-5",
    "category": "Figure Classification",
    "image": "images/FIGURE_CLASSIFICATION_005.png",
    "answer": "C",
    "explanation": "Same black rotated figure."
  },
  {
    "id": "figure-classification-6",
    "category": "Figure Classification",
    "image": "images/FIGURE_CLASSIFICATION_006.png",
    "answer": "B",
    "explanation": "Combos of three hearts. 129"
  },
  {
    "id": "figure-classification-7",
    "category": "Figure Classification",
    "image": "images/FIGURE_CLASSIFICATION_007.png",
    "answer": "A",
    "explanation": "2 intersecting circles."
  },
  {
    "id": "figure-classification-8",
    "category": "Figure Classification",
    "image": "images/FIGURE_CLASSIFICATION_008.png",
    "answer": "C",
    "explanation": "2 identical figures, one white and one black, pointing in opposite directions."
  },
  {
    "id": "figure-classification-9",
    "category": "Figure Classification",
    "image": "images/FIGURE_CLASSIFICATION_009.png",
    "answer": "A",
    "explanation": "Six-sided shapes."
  },
  {
    "id": "figure-classification-10",
    "category": "Figure Classification",
    "image": "images/FIGURE_CLASSIFICATION_010.png",
    "answer": "D",
    "explanation": "Combos of a white square, a black arrow and a white arrow."
  },
  {
    "id": "figure-classification-11",
    "category": "Figure Classification",
    "image": "images/FIGURE_CLASSIFICATION_011.png",
    "answer": "A",
    "explanation": "Two shapes pointing in the same direction."
  },
  {
    "id": "figure-classification-12",
    "category": "Figure Classification",
    "image": "images/FIGURE_CLASSIFICATION_012.png",
    "answer": "C",
    "explanation": "Figures divided into 2 equal parts."
  },
  {
    "id": "figure-classification-13",
    "category": "Figure Classification",
    "image": "images/FIGURE_CLASSIFICATION_013.png",
    "answer": "A",
    "explanation": "Figures consisting only of curved lines."
  },
  {
    "id": "figure-classification-14",
    "category": "Figure Classification",
    "image": "images/FIGURE_CLASSIFICATION_014.png",
    "answer": "A",
    "explanation": "2 straight lines in each figure. 130"
  },
  {
    "id": "figure-classification-15",
    "category": "Figure Classification",
    "image": "images/FIGURE_CLASSIFICATION_015.png",
    "answer": "C",
    "explanation": "Parallelograms."
  },
  {
    "id": "figure-classification-16",
    "category": "Figure Classification",
    "image": "images/FIGURE_CLASSIFICATION_016.png",
    "answer": "A",
    "explanation": "Same rotated figures and same colors."
  },
  {
    "id": "figure-classification-17",
    "category": "Figure Classification",
    "image": "images/FIGURE_CLASSIFICATION_017.png",
    "answer": "C",
    "explanation": "7 white circles and 2 black circles. The 2 black circles are always separated by a white circle."
  },
  {
    "id": "figure-classification-18",
    "category": "Figure Classification",
    "image": "images/FIGURE_CLASSIFICATION_018.png",
    "answer": "C",
    "explanation": "Combos of 2 black circles, 1 white circle and 2 black stars. 131"
  },
  {
    "id": "paper-folding-1",
    "category": "Paper Folding",
    "image": "images/PAPER_FOLDING_001.png",
    "answer": "D",
    "explanation": ""
  },
  {
    "id": "paper-folding-2",
    "category": "Paper Folding",
    "image": "images/PAPER_FOLDING_002.png",
    "answer": "A",
    "explanation": ""
  },
  {
    "id": "paper-folding-3",
    "category": "Paper Folding",
    "image": "images/PAPER_FOLDING_003.png",
    "answer": "C",
    "explanation": ""
  },
  {
    "id": "paper-folding-4",
    "category": "Paper Folding",
    "image": "images/PAPER_FOLDING_004.png",
    "answer": "B",
    "explanation": ""
  },
  {
    "id": "paper-folding-5",
    "category": "Paper Folding",
    "image": "images/PAPER_FOLDING_005.png",
    "answer": "B",
    "explanation": ""
  },
  {
    "id": "paper-folding-6",
    "category": "Paper Folding",
    "image": "images/PAPER_FOLDING_006.png",
    "answer": "D",
    "explanation": ""
  },
  {
    "id": "paper-folding-7",
    "category": "Paper Folding",
    "image": "images/PAPER_FOLDING_007.png",
    "answer": "B",
    "explanation": ""
  },
  {
    "id": "paper-folding-8",
    "category": "Paper Folding",
    "image": "images/PAPER_FOLDING_008.png",
    "answer": "C",
    "explanation": ""
  },
  {
    "id": "paper-folding-9",
    "category": "Paper Folding",
    "image": "images/PAPER_FOLDING_009.png",
    "answer": "D",
    "explanation": ""
  },
  {
    "id": "paper-folding-10",
    "category": "Paper Folding",
    "image": "images/PAPER_FOLDING_010.png",
    "answer": "C",
    "explanation": ""
  },
  {
    "id": "paper-folding-11",
    "category": "Paper Folding",
    "image": "images/PAPER_FOLDING_011.png",
    "answer": "B",
    "explanation": ""
  },
  {
    "id": "paper-folding-12",
    "category": "Paper Folding",
    "image": "images/PAPER_FOLDING_012.png",
    "answer": "A",
    "explanation": ""
  },
  {
    "id": "paper-folding-13",
    "category": "Paper Folding",
    "image": "images/PAPER_FOLDING_013.png",
    "answer": "B",
    "explanation": ""
  },
  {
    "id": "paper-folding-14",
    "category": "Paper Folding",
    "image": "images/PAPER_FOLDING_014.png",
    "answer": "D",
    "explanation": ""
  },
  {
    "id": "number-puzzle-1",
    "category": "Number Puzzle",
    "image": "images/NUMBER_PUZZLE_001.png",
    "answer": "B",
    "explanation": "7=2+5"
  },
  {
    "id": "number-puzzle-2",
    "category": "Number Puzzle",
    "image": "images/NUMBER_PUZZLE_002.png",
    "answer": "B",
    "explanation": "6=8-2"
  },
  {
    "id": "number-puzzle-3",
    "category": "Number Puzzle",
    "image": "images/NUMBER_PUZZLE_003.png",
    "answer": "C",
    "explanation": "3=10-4-3"
  },
  {
    "id": "number-puzzle-4",
    "category": "Number Puzzle",
    "image": "images/NUMBER_PUZZLE_004.png",
    "answer": "C",
    "explanation": "12=8+2+2"
  },
  {
    "id": "number-puzzle-5",
    "category": "Number Puzzle",
    "image": "images/NUMBER_PUZZLE_005.png",
    "answer": "A",
    "explanation": "10=8+3-1"
  },
  {
    "id": "number-puzzle-6",
    "category": "Number Puzzle",
    "image": "images/NUMBER_PUZZLE_006.png",
    "answer": "B",
    "explanation": "12=5-3+10"
  },
  {
    "id": "number-puzzle-7",
    "category": "Number Puzzle",
    "image": "images/NUMBER_PUZZLE_007.png",
    "answer": "D",
    "explanation": "5=3+9-7 136"
  },
  {
    "id": "number-puzzle-8",
    "category": "Number Puzzle",
    "image": "images/NUMBER_PUZZLE_008.png",
    "answer": "B",
    "explanation": "12=10-5+7"
  },
  {
    "id": "number-puzzle-9",
    "category": "Number Puzzle",
    "image": "images/NUMBER_PUZZLE_009.png",
    "answer": "C",
    "explanation": "9=3+8-2"
  },
  {
    "id": "number-puzzle-10",
    "category": "Number Puzzle",
    "image": "images/NUMBER_PUZZLE_010.png",
    "answer": "C",
    "explanation": "20=11+2+7"
  },
  {
    "id": "number-puzzle-11",
    "category": "Number Puzzle",
    "image": "images/NUMBER_PUZZLE_011.png",
    "answer": "A",
    "explanation": "9=11-10+8"
  },
  {
    "id": "number-puzzle-12",
    "category": "Number Puzzle",
    "image": "images/NUMBER_PUZZLE_012.png",
    "answer": "B",
    "explanation": "2=9+5-12"
  },
  {
    "id": "number-puzzle-13",
    "category": "Number Puzzle",
    "image": "images/NUMBER_PUZZLE_013.png",
    "answer": "D",
    "explanation": "18=7+2+9"
  },
  {
    "id": "number-puzzle-14",
    "category": "Number Puzzle",
    "image": "images/NUMBER_PUZZLE_014.png",
    "answer": "C",
    "explanation": "1=15+5-19 137"
  },
  {
    "id": "number-analogies-1",
    "category": "Number Analogies",
    "image": "images/NUMBER_ANALOGIES_001.png",
    "answer": "B",
    "explanation": "3 more."
  },
  {
    "id": "number-analogies-2",
    "category": "Number Analogies",
    "image": "images/NUMBER_ANALOGIES_002.png",
    "answer": "B",
    "explanation": "9 less."
  },
  {
    "id": "number-analogies-3",
    "category": "Number Analogies",
    "image": "images/NUMBER_ANALOGIES_003.png",
    "answer": "D",
    "explanation": "6 more."
  },
  {
    "id": "number-analogies-4",
    "category": "Number Analogies",
    "image": "images/NUMBER_ANALOGIES_004.png",
    "answer": "A",
    "explanation": "6 less."
  },
  {
    "id": "number-analogies-5",
    "category": "Number Analogies",
    "image": "images/NUMBER_ANALOGIES_005.png",
    "answer": "C",
    "explanation": "3 less."
  },
  {
    "id": "number-analogies-6",
    "category": "Number Analogies",
    "image": "images/NUMBER_ANALOGIES_006.png",
    "answer": "B",
    "explanation": "2 more."
  },
  {
    "id": "number-analogies-7",
    "category": "Number Analogies",
    "image": "images/NUMBER_ANALOGIES_007.png",
    "answer": "D",
    "explanation": "2 less. 138"
  },
  {
    "id": "number-analogies-8",
    "category": "Number Analogies",
    "image": "images/NUMBER_ANALOGIES_008.png",
    "answer": "B",
    "explanation": "3 more."
  },
  {
    "id": "number-analogies-9",
    "category": "Number Analogies",
    "image": "images/NUMBER_ANALOGIES_009.png",
    "answer": "C",
    "explanation": "5 less."
  },
  {
    "id": "number-analogies-10",
    "category": "Number Analogies",
    "image": "images/NUMBER_ANALOGIES_010.png",
    "answer": "A",
    "explanation": "6 less."
  },
  {
    "id": "number-analogies-11",
    "category": "Number Analogies",
    "image": "images/NUMBER_ANALOGIES_011.png",
    "answer": "A",
    "explanation": "8 more."
  },
  {
    "id": "number-analogies-12",
    "category": "Number Analogies",
    "image": "images/NUMBER_ANALOGIES_012.png",
    "answer": "A",
    "explanation": "3 less."
  },
  {
    "id": "number-analogies-13",
    "category": "Number Analogies",
    "image": "images/NUMBER_ANALOGIES_013.png",
    "answer": "B",
    "explanation": "6 less."
  },
  {
    "id": "number-analogies-14",
    "category": "Number Analogies",
    "image": "images/NUMBER_ANALOGIES_014.png",
    "answer": "C",
    "explanation": "2 more."
  },
  {
    "id": "number-analogies-15",
    "category": "Number Analogies",
    "image": "images/NUMBER_ANALOGIES_015.png",
    "answer": "B",
    "explanation": "4 less. 139"
  },
  {
    "id": "number-analogies-16",
    "category": "Number Analogies",
    "image": "images/NUMBER_ANALOGIES_016.png",
    "answer": "D",
    "explanation": "3 less."
  },
  {
    "id": "number-analogies-17",
    "category": "Number Analogies",
    "image": "images/NUMBER_ANALOGIES_017.png",
    "answer": "B",
    "explanation": "8 more."
  },
  {
    "id": "number-analogies-18",
    "category": "Number Analogies",
    "image": "images/NUMBER_ANALOGIES_018.png",
    "answer": "B",
    "explanation": "6 more. 140"
  },
  {
    "id": "number-series-1",
    "category": "Number Series",
    "image": "images/NUMBER_SERIES_001.png",
    "answer": "B",
    "explanation": "+2 -3, +1, +2, -3, +1, etc."
  },
  {
    "id": "number-series-2",
    "category": "Number Series",
    "image": "images/NUMBER_SERIES_002.png",
    "answer": "B",
    "explanation": "+6, -6, +6, -6, +6, -6, etc."
  },
  {
    "id": "number-series-3",
    "category": "Number Series",
    "image": "images/NUMBER_SERIES_003.png",
    "answer": "C",
    "explanation": "-1,-1,-1,-1,-1,-1, etc."
  },
  {
    "id": "number-series-4",
    "category": "Number Series",
    "image": "images/NUMBER_SERIES_004.png",
    "answer": "B",
    "explanation": "-1, +1, -1, +1, -1, +1, etc."
  },
  {
    "id": "number-series-5",
    "category": "Number Series",
    "image": "images/NUMBER_SERIES_005.png",
    "answer": "A",
    "explanation": "+1, +2, -2, +1, +2, -2, etc."
  },
  {
    "id": "number-series-6",
    "category": "Number Series",
    "image": "images/NUMBER_SERIES_006.png",
    "answer": "B",
    "explanation": "-6, +5, +1, -6, +5, +1, etc."
  },
  {
    "id": "number-series-7",
    "category": "Number Series",
    "image": "images/NUMBER_SERIES_007.png",
    "answer": "D",
    "explanation": "+3, -2, +1, +3, -2, +1, etc. 141"
  },
  {
    "id": "number-series-8",
    "category": "Number Series",
    "image": "images/NUMBER_SERIES_008.png",
    "answer": "D",
    "explanation": "+1, +0, +1, +1, +0, +1, etc."
  },
  {
    "id": "number-series-9",
    "category": "Number Series",
    "image": "images/NUMBER_SERIES_009.png",
    "answer": "B",
    "explanation": "-5, +6, -5, +6, -5, +6, etc."
  },
  {
    "id": "number-series-10",
    "category": "Number Series",
    "image": "images/NUMBER_SERIES_010.png",
    "answer": "C",
    "explanation": "+1, +2, +2, +1, +2, +2, etc."
  },
  {
    "id": "number-series-11",
    "category": "Number Series",
    "image": "images/NUMBER_SERIES_011.png",
    "answer": "D",
    "explanation": "-2, +1, -3, -2, +1, -3, etc."
  },
  {
    "id": "number-series-12",
    "category": "Number Series",
    "image": "images/NUMBER_SERIES_012.png",
    "answer": "C",
    "explanation": "+1, +1, +2, +1, +1, +2, etc."
  },
  {
    "id": "number-series-13",
    "category": "Number Series",
    "image": "images/NUMBER_SERIES_013.png",
    "answer": "A",
    "explanation": "+3, -4, +1, +3, -4, +1, etc."
  },
  {
    "id": "number-series-14",
    "category": "Number Series",
    "image": "images/NUMBER_SERIES_014.png",
    "answer": "D",
    "explanation": "+2, +1, -3, +2, +1, -3 etc."
  },
  {
    "id": "number-series-15",
    "category": "Number Series",
    "image": "images/NUMBER_SERIES_015.png",
    "answer": "D",
    "explanation": "+4, +0, +1, +4, +0, +1 etc. 142"
  },
  {
    "id": "number-series-16",
    "category": "Number Series",
    "image": "images/NUMBER_SERIES_016.png",
    "answer": "D",
    "explanation": "+1, +0, +4, +1, +0, +4 etc."
  },
  {
    "id": "number-series-17",
    "category": "Number Series",
    "image": "images/NUMBER_SERIES_017.png",
    "answer": "C",
    "explanation": "-3, +3, -2, -3, +3, -2 etc."
  },
  {
    "id": "number-series-18",
    "category": "Number Series",
    "image": "images/NUMBER_SERIES_018.png",
    "answer": "B",
    "explanation": "-3, +4, -3, -3, +4, -3 etc. 143"
  }
];

const categoryBounds = {};
questions.forEach((q, index) => {
  if (!categoryBounds[q.category]) {
    categoryBounds[q.category] = { start: index, end: index };
  } else {
    categoryBounds[q.category].end = index;
  }
});
const categories = Object.keys(categoryBounds);

const app = document.getElementById("app");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const checkBtn = document.getElementById("check");
const scoreEl = document.getElementById("score");
const gradeEl = document.getElementById("grade");
const progressEl = document.getElementById("progress");
const progressBarEl = document.getElementById("progress-bar");
const answeredCountEl = document.getElementById("answered-count");
const categoryNameEl = document.getElementById("category-name");
const categoryStatsEl = document.getElementById("category-stats");
const overallTimeEl = document.getElementById("overall-time");
const categoryTimeEl = document.getElementById("category-time");
const timersEl = document.getElementById("timers");
const resultsPanelEl = document.getElementById("results-panel");
const confirmModalEl = document.getElementById("confirm-modal");
const confirmMessageEl = document.getElementById("confirm-message");
const confirmCancelBtn = document.getElementById("confirm-cancel");
const confirmEndBtn = document.getElementById("confirm-end");
const questionNavEl = document.getElementById("question-nav");
const resultsBtn = document.getElementById("results");
const resetCategoryBtn = document.getElementById("reset-category");
const resetTestBtn = document.getElementById("reset-test");
const resetModalEl = document.getElementById("reset-modal");
const resetTitleEl = document.getElementById("reset-title");
const resetMessageEl = document.getElementById("reset-message");
const resetCancelBtn = document.getElementById("reset-cancel");
const resetConfirmBtn = document.getElementById("reset-confirm");

const state = {
  currentIndex: 0,
  activeCategory: null,
  categoryStart: performance.now(),
  appStart: performance.now(),
  appElapsed: 0,
  timeByCategory: Object.fromEntries(categories.map((c) => [c, 0])),
  timerPaused: false,
  appPaused: false,
  isComplete: false,
  completedCategory: null,
  confirmOpen: false,
  completedCategories: new Set()
};
let pendingReset = null;

function formatTime(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function setActiveCategory(category) {
  const now = performance.now();
  if (state.activeCategory && !state.timerPaused) {
    state.timeByCategory[state.activeCategory] += now - state.categoryStart;
  }
  state.activeCategory = category;
  state.categoryStart = now;
  state.timerPaused = false;
}

function getTimeByCategory() {
  const now = performance.now();
  const times = { ...state.timeByCategory };
  if (state.activeCategory && !state.timerPaused) {
    times[state.activeCategory] =
      (times[state.activeCategory] || 0) + (now - state.categoryStart);
  }
  return times;
}

function pauseTimers() {
  const now = performance.now();
  if (!state.timerPaused && state.activeCategory) {
    state.timeByCategory[state.activeCategory] += now - state.categoryStart;
    state.timerPaused = true;
  }
  if (!state.appPaused) {
    state.appElapsed += now - state.appStart;
    state.appPaused = true;
  }
}

function setResultsVisible(isVisible) {
  if (timersEl) {
    timersEl.classList.toggle("hidden", !isVisible);
  }
  resultsPanelEl.classList.toggle("hidden", !isVisible);
}

function isLastInCategory(index) {
  const category = questions[index].category;
  return index === categoryBounds[category].end;
}

function getNextCategoryStart(index) {
  const category = questions[index].category;
  const categoryIndex = categories.indexOf(category);
  if (categoryIndex === -1 || categoryIndex === categories.length - 1) {
    return null;
  }
  const nextCategory = categories[categoryIndex + 1];
  return categoryBounds[nextCategory].start;
}

function getUnansweredInCategory(category) {
  return questions
    .map((q, index) => ({
      question: q,
      index,
      number: index + 1
    }))
    .filter(
      (item) =>
        item.question.category === category && !selectedAnswers[item.question.id]
    );
}

function showConfirmModal(unanswered) {
  const count = unanswered.length;
  const suffix = count === 1 ? "" : "s";
  confirmMessageEl.innerHTML = "";
  const message = document.createElement("div");
  message.textContent =
    `You have ${count} unanswered question${suffix} in this category. End category anyway?`;
  confirmMessageEl.appendChild(message);

  const list = document.createElement("div");
  list.className = "modal-list";
  unanswered.forEach((item) => {
    const link = document.createElement("a");
    link.href = "#";
    link.dataset.index = String(item.index);
    link.textContent = `Question ${item.number}`;
    list.appendChild(link);
  });
  confirmMessageEl.appendChild(list);

  confirmModalEl.classList.remove("hidden");
  state.confirmOpen = true;
}

function hideConfirmModal() {
  confirmModalEl.classList.add("hidden");
  state.confirmOpen = false;
}

function showResetModal(type) {
  pendingReset = type;
  const category = questions[state.currentIndex].category;
  if (type === "category") {
    resetTitleEl.textContent = "Reset category";
    resetMessageEl.textContent =
      `This will clear all answers in ${category} and reset its timer.`;
  } else {
    resetTitleEl.textContent = "Reset test";
    resetMessageEl.textContent =
      "This will clear all answers and timers for the entire test.";
  }
  resetModalEl.classList.remove("hidden");
}

function hideResetModal() {
  resetModalEl.classList.add("hidden");
  pendingReset = null;
}

function attemptEndCategory() {
  const category = questions[state.currentIndex].category;
  const unanswered = getUnansweredInCategory(category);
  if (unanswered.length > 0) {
    showConfirmModal(unanswered);
    return;
  }
  renderComplete();
}

function resetCategory() {
  const category = questions[state.currentIndex].category;
  questions.forEach((q) => {
    if (q.category === category) {
      delete selectedAnswers[q.id];
      delete checkedAnswers[q.id];
    }
  });
  state.timeByCategory[category] = 0;
  state.completedCategories.delete(category);
  state.isComplete = false;
  state.completedCategory = null;
  setResultsVisible(false);
  state.currentIndex = categoryBounds[category].start;
  state.activeCategory = category;
  state.categoryStart = performance.now();
  state.timerPaused = false;
  renderQuestion();
}

function resetTest() {
  Object.keys(selectedAnswers).forEach((key) => delete selectedAnswers[key]);
  Object.keys(checkedAnswers).forEach((key) => delete checkedAnswers[key]);
  state.completedCategories.clear();
  state.timeByCategory = Object.fromEntries(categories.map((c) => [c, 0]));
  state.appElapsed = 0;
  state.appStart = performance.now();
  state.categoryStart = performance.now();
  state.activeCategory = null;
  state.timerPaused = false;
  state.appPaused = false;
  state.isComplete = false;
  state.completedCategory = null;
  setResultsVisible(false);
  state.currentIndex = 0;
  renderQuestion();
}

function getScore() {
  return questions.reduce(
    (sum, q) => sum + (selectedAnswers[q.id] === q.answer ? 1 : 0),
    0
  );
}

function getAnsweredCount() {
  return questions.filter((q) => selectedAnswers[q.id]).length;
}

function getAccuracy() {
  const answered = getAnsweredCount();
  if (!answered) {
    return 0;
  }
  return Math.round((getScore() / answered) * 100);
}

function setAnswer(questionId, choice) {
  selectedAnswers[questionId] = choice;
  updateSummary();
  renderQuestionNav();
}

function applyResult(card, result, question) {
  const picked = selectedAnswers[question.id] || "";
  if (picked === question.answer) {
    card.classList.add("correct");
    card.classList.remove("wrong");
    result.textContent = `Correct. ${question.explanation}`;
  } else {
    card.classList.add("wrong");
    card.classList.remove("correct");
    const extra = picked ? `You chose ${picked}. ` : "No answer selected. ";
    result.textContent = `${extra}Correct answer is ${question.answer}. ${question.explanation}`;
  }
}

function renderQuestion() {
  app.innerHTML = "";
  const question = questions[state.currentIndex];

  state.isComplete = false;
  state.completedCategory = null;
  setResultsVisible(false);
  state.isComplete = false;
  if (state.appPaused) {
    state.appStart = performance.now();
    state.appPaused = false;
  }

  setActiveCategory(question.category);

  categoryNameEl.textContent = question.category;
  progressEl.textContent = `Question ${state.currentIndex + 1} of ${questions.length}`;
  progressBarEl.style.width = `${((state.currentIndex + 1) / questions.length) * 100}%`;
  answeredCountEl.textContent = `Answered ${getAnsweredCount()} of ${questions.length}`;

  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("h2");
  title.textContent = `Question ${state.currentIndex + 1}`;

  const img = document.createElement("img");
  img.className = "question-image";
  img.alt = `Question ${state.currentIndex + 1}`;
  img.src = question.image;

  const choices = document.createElement("div");
  choices.className = "choices";
  optionLabels.forEach((choice) => {
    const label = document.createElement("label");
    label.className = "choice";
    const input = document.createElement("input");
    input.type = "radio";
    input.name = question.id;
    input.value = choice;
    input.checked = selectedAnswers[question.id] === choice;
    input.addEventListener("change", () => setAnswer(question.id, choice));
    const span = document.createElement("span");
    span.textContent = `Option ${choice}`;
    label.appendChild(input);
    label.appendChild(span);
    choices.appendChild(label);
  });

  const result = document.createElement("div");
  result.className = "result";

  card.appendChild(title);
  card.appendChild(img);
  card.appendChild(choices);
  card.appendChild(result);

  app.appendChild(card);

  if (checkedAnswers[question.id]) {
    applyResult(card, result, question);
  }

  updateNav();
  updateSummary();
  renderQuestionNav();
}

function renderComplete() {
  pauseTimers();
  state.isComplete = true;
  const completedCategory = questions[state.currentIndex].category;
  state.completedCategory = completedCategory;
  state.completedCategories.add(completedCategory);
  setResultsVisible(true);
  app.innerHTML = "";

  categoryNameEl.textContent = completedCategory;
  progressEl.textContent = "Category complete";
  progressBarEl.style.width = "100%";
  answeredCountEl.textContent = `Answered ${getAnsweredCount()} of ${questions.length}`;

  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("h2");
  title.textContent = `Finished ${completedCategory}`;

  const summary = document.createElement("div");
  summary.className = "result";
  summary.textContent = `Final score ${getScore()} / ${questions.length}. Accuracy ${getAccuracy()}%.`;

  card.appendChild(title);
  card.appendChild(summary);
  app.appendChild(card);

  updateNav();
  updateSummary();
  renderQuestionNav();
}

function updateNav() {
  if (state.isComplete) {
    prevBtn.disabled = state.currentIndex === 0;
    prevBtn.textContent = "Back";
    nextBtn.disabled = false;
    nextBtn.textContent = getNextCategoryStart(state.currentIndex) === null
      ? "Review"
      : "Continue";
    checkBtn.disabled = true;
    return;
  }

  prevBtn.disabled = state.currentIndex === 0;
  prevBtn.textContent = "Previous";
  nextBtn.disabled = false;
  nextBtn.textContent = isLastInCategory(state.currentIndex)
    ? "Finish category"
    : "Next";
  checkBtn.disabled = true;
}

function updateSummary() {
  const correct = getScore();
  const answered = getAnsweredCount();
  const total = questions.length;

  scoreEl.textContent = `Score ${correct} / ${total}`;
  gradeEl.textContent = `Answered ${answered} of ${total} | Accuracy ${getAccuracy()}%`;

  const times = getTimeByCategory();
  categoryStatsEl.innerHTML = "";
  categories.forEach((category) => {
    const rows = questions.filter((q) => q.category === category);
    const categoryCorrect = rows.filter(
      (q) => selectedAnswers[q.id] === q.answer
    ).length;
    const categoryAnswered = rows.filter((q) => selectedAnswers[q.id]).length;
    const categoryWrong = categoryAnswered - categoryCorrect;
    const categoryUnanswered = rows.length - categoryAnswered;

    const row = document.createElement("div");
    row.className = "category-row";

    const name = document.createElement("div");
    name.className = "category-name";
    name.textContent = category;

    const meta = document.createElement("div");
    meta.className = "category-meta";
    meta.textContent =
      `Correct ${categoryCorrect} | Wrong ${categoryWrong} | Unanswered ${categoryUnanswered}`;

    const time = document.createElement("div");
    time.className = "category-time";
    time.textContent = `Time ${formatTime(times[category] || 0)}`;

    row.appendChild(name);
    row.appendChild(meta);
    row.appendChild(time);
    categoryStatsEl.appendChild(row);
  });
}

function renderQuestionNav() {
  questionNavEl.innerHTML = "";
  categories.forEach((category) => {
    const section = document.createElement("div");
    section.className = "nav-section";

    const title = document.createElement("div");
    title.className = "nav-title";
    title.textContent = category;

    const list = document.createElement("div");
    list.className = "nav-list";

    let categoryIndex = 1;
    questions.forEach((q, index) => {
      if (q.category !== category) {
        return;
      }
      const item = document.createElement("button");
      item.type = "button";
      item.className = "nav-item";
      if (index === state.currentIndex) {
        item.classList.add("active");
      }
      item.dataset.index = String(index);

      const dot = document.createElement("span");
      dot.className = "nav-dot";
      if (state.completedCategories.has(q.category)) {
        const isCorrect = selectedAnswers[q.id] === q.answer;
        dot.classList.add(isCorrect ? "correct" : "wrong");
      } else {
        dot.classList.add(selectedAnswers[q.id] ? "answered" : "unanswered");
      }

      const label = document.createElement("span");
      label.textContent = `Q${categoryIndex}`;

      item.appendChild(dot);
      item.appendChild(label);
      list.appendChild(item);
      categoryIndex += 1;
    });

    section.appendChild(title);
    section.appendChild(list);
    questionNavEl.appendChild(section);
  });
}

function updateTimers() {
  const now = performance.now();
  const totalElapsed = state.appPaused
    ? state.appElapsed
    : state.appElapsed + (now - state.appStart);
  if (overallTimeEl) {
    overallTimeEl.textContent = formatTime(totalElapsed);
  }
  const times = getTimeByCategory();
  const currentCategory = state.completedCategory || state.activeCategory;
  if (categoryTimeEl) {
    categoryTimeEl.textContent = formatTime(times[currentCategory] || 0);
  }
  if (state.isComplete) {
    updateSummary();
  }
}

function checkAnswer() {
  const question = questions[state.currentIndex];
  const card = app.querySelector(".card");
  const result = card.querySelector(".result");
  checkedAnswers[question.id] = true;
  applyResult(card, result, question);
  updateSummary();
}

prevBtn.addEventListener("click", () => {
  if (state.currentIndex > 0) {
    state.currentIndex -= 1;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (state.isComplete) {
    const nextCategoryStart = getNextCategoryStart(state.currentIndex);
    if (nextCategoryStart === null) {
      state.currentIndex = Math.max(0, questions.length - 1);
      renderQuestion();
    } else {
      state.currentIndex = nextCategoryStart;
      renderQuestion();
    }
    return;
  }
  if (isLastInCategory(state.currentIndex)) {
    attemptEndCategory();
    return;
  }
  if (state.currentIndex < questions.length - 1) {
    state.currentIndex += 1;
    renderQuestion();
  }
});

confirmCancelBtn.addEventListener("click", () => {
  hideConfirmModal();
});

confirmEndBtn.addEventListener("click", () => {
  hideConfirmModal();
  renderComplete();
});

resetCancelBtn.addEventListener("click", () => {
  hideResetModal();
});

resetConfirmBtn.addEventListener("click", () => {
  if (pendingReset === "category") {
    resetCategory();
  } else if (pendingReset === "test") {
    resetTest();
  }
  hideResetModal();
});

resultsBtn.addEventListener("click", () => {
  if (!state.isComplete) {
    attemptEndCategory();
  }
});

resetCategoryBtn.addEventListener("click", () => {
  showResetModal("category");
});

resetTestBtn.addEventListener("click", () => {
  showResetModal("test");
});

confirmMessageEl.addEventListener("click", (event) => {
  const target = event.target;
  if (target instanceof HTMLAnchorElement && target.dataset.index) {
    event.preventDefault();
    const index = Number(target.dataset.index);
    if (!Number.isNaN(index)) {
      hideConfirmModal();
      state.currentIndex = index;
      renderQuestion();
    }
  }
});

questionNavEl.addEventListener("click", (event) => {
  const target = event.target;
  const button = target.closest(".nav-item");
  if (!button || !button.dataset.index) {
    return;
  }
  const index = Number(button.dataset.index);
  if (!Number.isNaN(index)) {
    state.currentIndex = index;
    renderQuestion();
  }
});

checkBtn.addEventListener("click", (event) => event.preventDefault());

renderQuestion();
updateTimers();
setInterval(updateTimers, 1000);
