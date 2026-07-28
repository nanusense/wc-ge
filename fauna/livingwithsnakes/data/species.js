// Living with Snakes at Malhar — species catalogue
// Sourced from the resident's own "Common Snakes" memory-card project:
// https://shiftingradius.com/common-snakes/ (12 species, outskirts of Bangalore).
// Photos are hotlinked from that same source. Two-tier venom classification only:
// "medical" (medically significant) or "nonvenomous". No "mildly venomous" tier.
// Note: the source page lists Green Vine Snake as "Oxybelis fulgidus" (a New World
// genus not found in India); corrected here to Ahaetulla nasuta, the actual Indian
// green vine snake, confirmed by the regional name given alongside it on that page.
window.SPECIES = [
 { n:"Russell's Viper", sci:'Daboia russelii', tier:'medical', size:'Up to 5 ft', activity:'Nocturnal',
   img:'https://shiftingradius.com/wp-content/uploads/2024/10/IMG_3906.jpg',
   behaviour:"Thick-bodied, with a chain of dark oval blotches down its back and a triangular head wider than its neck. Hisses loudly and strikes fast when disturbed, and is often found in fields, grassland, and urban edges close to homes.",
   action:"Keep well back. It can strike roughly a third of its body length, and it often stands its ground rather than fleeing. Call the helpline." },
 { n:'Spectacled Cobra', sci:'Naja naja', tier:'medical', size:'4–6 ft', activity:'Diurnal',
   img:'https://shiftingradius.com/wp-content/uploads/2024/10/IMG_2145.jpg',
   behaviour:"The hood mark, two connected circles like a pair of spectacles, is unmistakable once spread. Shy by nature and hunts rodents and frogs by day, but defends itself vigorously if cornered.",
   action:"Back away slowly, keep people and pets clear, and call the helpline. Never block its escape route." },
 { n:'Common Krait', sci:'Bungarus caeruleus', tier:'medical', size:'Around 3–4 ft', activity:'Nocturnal',
   img:'https://shiftingradius.com/wp-content/uploads/2024/10/IMG_2328.jpg',
   behaviour:"Glossy black or blue-black with narrow white bands in pairs, the easiest tell against the similar-looking wolf snakes, which show single bands. Docile and reclusive by day, more active and dangerous after dark.",
   action:"Never handle one, even a sluggish daytime krait. Most bites happen indoors at night to someone sleeping on the floor; shake out bedding and call the helpline if one is found inside." },
 { n:'Rat Snake', sci:'Ptyas mucosa', tier:'nonvenomous', size:'6–8 ft', activity:'Diurnal',
   img:'https://shiftingradius.com/wp-content/uploads/2024/10/rat-snake-1.jpg',
   behaviour:"Long, slender, and fast, with distinct black lines across the face. A skilled climber and Malhar's most-seen snake, out hunting rodents in daylight. May flatten its neck and hiss to bluff a cobra, with no venom behind it.",
   action:"Give it a clear path and let it move on. It's doing pest control, not looking for trouble." },
 { n:'Checkered Keelback', sci:'Fowlea piscator', tier:'nonvenomous', size:'3–4 ft', activity:'Diurnal',
   img:'https://shiftingradius.com/wp-content/uploads/2024/10/keelback.jpg',
   behaviour:"A robust, rough-scaled swimmer with a checkerboard pattern, usually found near ponds, drains, and the lake edge hunting fish and frogs. Flattens its neck and hisses when alarmed, a display often mistaken for a cobra's.",
   action:"Keep dogs and children back until it moves off. Defensive if handled, but no real danger to people." },
 { n:'Buff-striped Keelback', sci:'Amphiesma stolatum', tier:'nonvenomous', size:'2–3 ft', activity:'Diurnal',
   img:'https://shiftingradius.com/wp-content/uploads/2024/10/striped-keelback.jpg',
   behaviour:"Slender, with two pale buff stripes running head to tail. Common in grassy, well-watered patches after rain, feeding on small frogs and insects. Shy, and would rather flee than confront.",
   action:"Harmless and easily startled. It will usually vanish into cover long before anyone gets close." },
 { n:'Anamalai Wolf Snake', sci:'Lycodon anamallensis', tier:'nonvenomous', size:'1–2 ft', activity:'Nocturnal',
   img:'https://shiftingradius.com/wp-content/uploads/2024/10/IMG_5752.jpg',
   behaviour:"Small and glossy, dark brown or black with thin pale bands, close enough to a krait's look that it's frequently misidentified. Nocturnal and secretive, hiding under rocks and leaf litter by day, hunting geckos at night.",
   action:"No threat to people. If handled it may bite defensively, but it poses no real danger." },
 { n:'Indian Wolf Snake', sci:'Lycodon aulicus', tier:'nonvenomous', size:'1–2.5 ft', activity:'Nocturnal',
   img:'https://shiftingradius.com/wp-content/uploads/2024/10/indian-wolf-snake.jpg',
   behaviour:"Almost every 'krait in the bathroom' call to the helpline turns out to be this one. Smooth, dark, with thin white or yellowish bands that are sometimes broken or incomplete, nocturnal, and hunting small lizards.",
   action:"Leave it be. It slips through the smallest gaps and rarely lingers once seen." },
 { n:'Trinket Snake', sci:'Coelognathus helena', tier:'nonvenomous', size:'3–4 ft', activity:'Diurnal',
   img:'https://shiftingradius.com/wp-content/uploads/2024/10/trinket.jpg',
   behaviour:"A boldly patterned climber with chain-link-like bands down its back, active by day and a capable hunter of small mammals and birds. Puffs up and mock-strikes when cornered but rarely actually bites.",
   action:"The bold pattern and bluster are often mistaken for a viper. Give it room and it will settle or move on." },
 { n:'Banded Kukri Snake', sci:'Oligodon arnensis', tier:'nonvenomous', size:'2–3 ft', activity:'Nocturnal',
   img:'https://shiftingradius.com/wp-content/uploads/2024/10/IMG_4593.jpeg',
   behaviour:"Glossy, dark-banded, named for its curved, kukri-shaped rear teeth, used to slit open reptile eggs rather than to bite anything larger. A ground-dweller found near forests, grassland, and garden edges.",
   action:"No real threat. It may try to nip if handled, but the bite is mild and rarely breaks skin." },
 { n:'Green Vine Snake', sci:'Ahaetulla nasuta', tier:'nonvenomous', size:'3–5 ft', activity:'Diurnal',
   img:'https://shiftingradius.com/wp-content/uploads/2024/10/DSC02937.jpg',
   behaviour:"Thin as a shoelace, vibrant green, and superbly camouflaged among leaves. Hunts lizards, frogs, and the odd bird by sight, unusual among snakes, and may gape its black-and-white mouth or sway like a vine if disturbed.",
   action:"Admire it from a short distance. It would much rather retreat into the branches than confront anyone." },
 { n:'Brahminy Blind Snake', sci:'Indotyphlops braminus', tier:'nonvenomous', size:'2–6 in', activity:'Fossorial',
   img:'https://shiftingradius.com/wp-content/uploads/2024/10/IMG_0186.jpg',
   behaviour:"Tiny and worm-like, spending nearly its whole life underground in soil and compost, feeding on ants and termites. Sometimes called the flowerpot snake, and one of the few snakes that can populate a new area from a single individual.",
   action:"Completely harmless and usually found by accident while gardening. Simply let it back into loose soil." }
];
