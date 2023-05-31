import React, { useState, createContext } from "react";
// import Home from '../../Routes/Home/index'

export const AppData = createContext();
function Store(props) {
  const [data, setdata] = useState([
    
    
    {id:1, 
      ide: 1,
      cat: "Hollywood",
      for: "ArticleList",
      Overview:'Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.', 
     
      img: "https://images.thedirect.com/media/article_full/ant-man-3-trailer-date.jpg", 
      date:' 02/17/2023 ',
      
      title:"Ant-Man and the Wasp: Quantumania", 
      description: " I had a terrific time watching 'Ant-Man and the Wasp: Quantumania', despite hearing 'meh' things about it here and there online. It surpassed my expectations, to be honest. Great cast, entertaining action, super interesting world building (my favourite from the MCU for a while, in that regard) and the humour is good.\n\nStar of the show in my opinion is Michelle Pfeiffer. I don't recall her standing out in 'Ant-Man and the Wasp', but here she's excellent from beginning to end. Elsewhere, Jonathan Majors is brilliant - great to see that guy all over the place recently. Paul Rudd remains a strong lead, while the likes of Michael Douglas and Kathryn Newton are positives too.\n\nLove the Quantum Realm setting. I'm nothing like an MCU nut, I'm only aware of the films, so didn't know what to expect, but the place looks fantastic - from the environment to the creatures; shoutout Veb. Like Pfeiffer, Corey Stoll didn't really register on my radar in prior films, but him as M.O.D.O.K. is a lot of fun.\n\nLooking at my personal MCU ranking, this goes in at no. 8 - I didn't anticipate that! A literal quick glance at the average rating on here suggests I'm in the minority but I truly found much enjoyment from this. Quite the improvement on Ant-Man 2, which is at the bottom of my aforementioned ranking."
    
  }, 
  {id:2, 
    ide: 2,
      cat: "Hollywood",
      sp: "home-banner",
      for: "ArticleList",
      date:' 03/24/2023',
      title:"The GodFather",
      img2: "https://lh3.googleusercontent.com/WQaCzk7X12wxR2RiwHR1wVtLZuHvI3fE9cC49PTbJjLZ94CgWQHr3aLDIaRbxh2MXhOpgLrYejsO3EMzficuQQ5MhFj7JMZ_q8KkF5A",
      img: "https://lh3.googleusercontent.com/WQaCzk7X12wxR2RiwHR1wVtLZuHvI3fE9cC49PTbJjLZ94CgWQHr3aLDIaRbxh2MXhOpgLrYejsO3EMzficuQQ5MhFj7JMZ_q8KkF5A",
      Overview: 'American romance drama film Titanic was released in 1997. If you enjoy watching movies, you must have seen Titanic at least once, and if you havent, you probably have heard about it. This film is among the top choices for you if you enjoy watching romantic movies. The main lead actor and actresses in this film are Leonardo DiCaprio and Kate Winslet. The main characters of this film are a guy and a girl who fall in love on a ship. Do not miss this masterpiece if you enjoy romance movies.',
      description: "American romance drama film Titanic was released in 1997. If you enjoy watching movies, you must have seen Titanic at least once, and if you haven't, you probably have heard about it. This film is among the top choices for you if you enjoy watching romantic movies. The main lead actor and actresses in this film are Leonardo DiCaprio and Kate Winslet. The main characters of this film are a guy and a girl who fall in love on a ship. Do not miss this masterpiece if you enjoy romance movies."
      
  },  
  {id:3, 
    ide: 3,
      cat: "Hollywood",
      for: "ArticleList",
      date:' 03/03/2023',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg',
      title:'Creed III',
      Overview: 'After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. ',
      description: "This reminded me quite a lot of 'Rocky IV' (1985) only instead of a Russian auto-box doing the challenging, it's 'Damian' (Jonathan Majors). Former champion 'Adonis' (Michael B. Jordan) is living the life of a retired sportsman, wealthy and happy with his family whilst managing the gym with 'Duke' (Wood Harris). Leaving, one afternoon, he discovers a guy sitting on his car and after a quick chat realizes that it's his long-lost childhood pal who has been incarcerated for the last eighteen years. He ('Damian') is now determined to succeed in the ring and so his friend tries to sort it all out - only to discover that this lean, mean, fighting machine has an altogether different agenda and that is going to force the former champ to prove whether or not he still has what it takes. The story is a hybrid of too many others and plays out as predictably as the sun coming up. Add to the mix a degree of familial discord and melodrama and we are left with something largely forgettable that I found to be a pretty poor relation of the previous, much more charismatic and grittier efforts in this franchise. The actual boxing scenes are impressively photographed but there's just no jeopardy - and I'd largely given up. Pretty to look at, yes - but not a great watch."

  },
  {id:4, 
    ide: 4,
      cat: "Hollywood",
      for: "ArticleList",
      date:' 05/05/2023',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg',
      title:'Guardians of the Galaxy Vol. 3',
      Overview: 'Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.',
      description: "Guardians of the Galaxy Vol. 3 is the perfect farewell to this quirky group of rogues we never expected to love so much.\n\nOur faith in the Marvel Cinematic Universe waned throughout Phase 4 with films that felt hollow, rushed, and insincere. Guardians of the Galaxy Vol. 3 rekindled my hope as James Gunn and the cast’s love and passion for these characters shined in every moment of this beautiful, heartfelt send-off. Gunn reminded us of the magic of comic book movies when the storyteller cares more about the characters than the box office. Chris Pratt, Bradley Cooper, Karen Gillan, Dave Bautista, and the rest of the cast pour themselves into entertaining and genuine performances. This film is surprisingly emotional and had me wondering how they convinced me to care so deeply about such a zany group of goofballs, but that they did. Vol. 3 is one of the best conclusions to a film trilogy that had me leave the theater full of satisfaction and nostalgia. While Guardians of the Galaxy Vol. 3 is wonderful in nearly every way, if I had a complaint, it would be the soundtrack felt forced at times rather than complimenting strong moments in the first film. The villain wasn’t exceptional but was better than the average Marvel villain, and honestly, Vol. 3 wasn’t about the villain or battles as much as it was a farewell to a family of heroes we have all come to love. This movie is well worth your time, and the fantastic effects and cinematography warrant a trip to the cinema to enjoy it to its fullest! MCU doubters need to set aside their skepticism and enjoy saying goodbye to these beloved characters with this outstanding film."
    },
    {id:5,
      ide: 5, 
      cat: "Hollywood",
      for: "ArticleList",
      date:'04/18/2023 ',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/liLN69YgoovHVgmlHJ876PKi5Yi.jpg',
      title:'Ghosted',
      Overview: 'Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes the shocking discovery that she’s a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.',
      description: "The direction and visuals were all fairly good. The visuals looked fine for the majority of the film with no complaints whatsoever, including Ana de Armas’ wig. The direction was good, with some decent action choreography that was filmed pretty well, although there were a few scenes that suffered from too many jump cuts. I thought the intimate scene towards the beginning of the film was very stylistic and done really well. It was not just your standard grunts and moans that you see in so many films today.\n\nThe story was very oddly paced. The beginning section was really rushed, and the romantic build-up did not feel genuine in the slightest. Due to a poor script, their chemistry was non-existent in some sections, as the dialogue was atrocious. While there are some laughs to be had for sure, the majority of the comedy did not work for me. There was heavy use of modern songs throughout the entirety of the film. While some sections were complimented by the tracks, many others felt really out of place.\n\nThe performances were decent, but I think were hindered by the poor script. Ana de Armas was fine, although I never really liked her in anything since Knives Out as her performances always seem a little dull. Chris Evans played a character he's played many times before, which was entertaining, but he could not alone save the terrible dialogue he was given. "
  },
  {id:6,
    ide: 6, 
      cat: "Hollywood",
      for: "ArticleList",
      sp: "home-latestBig",
      date:' 12/16/2022',
      img2: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
      img: "https://insomniac.games/wp-content/uploads/2018/09/Spider-Man_PS4_Selfie_Photo_Mode_LEGAL.jpg",
      title:'Spiderman ',
      Overview: 'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
      description: "More than ten years have passed since the events of the first Avatar film. Avatar: The Way of Water sees Jake Sully (Sam Worthington) as chief as he and Neytiri (Zoe Saldana) now have five children. Humans have returned to Pandora once again to attempt to colonize it. "
  },
  {id:7, 
    ide: 7,
      cat: "Hollywood",
      for: "ArticleList",
      date:' 03/17/2023 ',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg',
      title:'Shazam! Fury of the Gods',
      Overview: 'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.',
      description: "Shazam! Fury of the Gods is a run-of-the mill superhero sequel that doesn’t progress the genre forward, but delivers two hours of pure entertainment. \n\n This film does not do any one thing great, but it was still a pretty decent watch. The plot is average—nothing we have not seen on the big screen before. Our villains have no development; their motivations are sound, but there is nothing further that develops them into something greater. \n\n This movie starts off incredibly strong, with a fantastic first act that had me laughing hysterically. The comedy hits more often than not, which was a surprise for me. There is a bridge rescue scene that is electric. The combination of I Need a Hero mixed with all of the heroes showcasing their abilities was amazing. I think superhero films have dropped the ball by not showing heroes rescuing everyday people. The stakes have gotten so high outside of the everyday troubles that this art is lost. I really enjoyed that aspect of the film, but unfortunately, after the first act, this story becomes inflated to a point where it is indistinguishable from many other superhero blockbusters.\n\n The final act is overly long and bloated with a plethora of CGI monsters for our heroes to defeat. I think the CGI actually looked pretty good, but it just was not an engaging conclusion for me. The stakes were high, but not built up properly for me to be genuinely interested. The action is pretty decent, but I couldn’t care less. The finale did have emotional beats in terms of the family connection, which worked surprisingly well. That is when this franchise works best. When the focus is on family and not on god's attempts to destroy Earth, \n\n The performances overall were pretty good. Zachary Levi is fantastic as Shazam; he has mastered the art of playing a child in a man's body. Jack Dylan Grazer is hilarious; his comedic timing is brilliant. Grace Caroline Currey is a queen. Rachel Zegler is a standout, and her chemistry with Grazer is top notch. The rest of the Shazamly do a great job as well. I think Helen Mirren and Lucy Liu are fine as antagonists but were wasted with a lack of screen time and development. \n\n Overall, this might not be good, but it is entertaining. That is a lot more than can be said for some of the recently released superhero films (Black Adam and Ant-Man and the Wasp: Quantumania). "
    },
    {id:8,
      ide: 8, 
      cat: "Hollywood",
      for: "TopList",
      date:' 04/21/2023',
      img: 'https://www.themoviedb.org/t/p/w220_and_h330_face/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg',
      title:'Evil Dead Rise',
      Overview: 'Three siblings find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.',
      description: "This is certainly a triumph for the visual and audio effects folks. Otherwise, I found it all a bit derivative and frankly a rather classless rehash of the much more entertaining original. It's tough to just keep on re-inventing these themes - they do tire, and as I reckon with the recent updates of the Halloween franchise, they maybe just rely too heavily on a current generation who were not around to see the originals in the cinema first time round, and who maybe just don't appreciate that the acting and the writing - though never exactly crucial to these plots - did have more of a role than just relying on well made-up (virtual) demons spinning around the ceiling emitting threatening shrieks. It's not terrible - it moves along quickly for ninety minutes and might just put you off a bath anytime shortly afterwards, but there just isn't any real sense of menace or jeopardy and to be honest I wasn't entirely sure that the family weren't nightmarish enough - before their visitor arrived. "
    },
    {id:9, 
      ide: 9,
      cat: "Hollywood",
      for: "TopList",
      date:' 04/21/2023  ',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/aX0H63vho7rZ9Rm3I567Zf00Z1t.jpg',
      title:"TGuy Ritchie's The Covenant",
      Overview: 'During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain.',
      description: "Director Guy Ritchie is no stranger to crafting exciting action films, but his latest project is quite different than his previous work. The narrative is linear, there aren’t any montages, and the story isn’t about criminals, gangsters, or Brits. Fans of Ritchie will absolutely still recognize his visual style (hello, overhead shots) and testosterone-fueled themes, but 'The Covenant' is a more dramatic, mature, and restrained work from the legendary director.\n\nSet during the war in Afghanistan in 2018, the film tells the story of U.S. Army sergeant John Kinley (Jake Gyllenhaal) and his local Afghan interpreter, Ahmed (Dar Salim). Called a traitor by his people for helping the Americans, Ahmed has volunteered to seek revenge against the Taliban that killed his son. He has also been promised visas for his service so his family can flee to safety in America. After a lethal ambush in the desert, Kinley is gravely injured by enemy fire. With his platoon gone, Ahmed refuses to leave a fellow soldier behind to die, so he drags Kinley through the mountainous terrain in order to get him back to the base for medical help.\n\nThe film tells the story of their 100 mile journey, but then pivots to Kinley’s return to the United States. It’s months after he gets home that Kinley learns Ahmed and his family were not given safe passage as promised and, as a way to repay the debt he owes his friend, he returns to Afghanistan to retrieve them. It won’t be easy, because Ahmed has been placed at the top of the Taliban’s most wanted hit list.\n\nIt’s a meaningful story of honor and brotherhood wrapped up in an intense wartime thriller. The story is told in three major acts, from the early days Ahmed and Kinley spent chasing IEDs, to their dangerous journey, to the red tape of getting a man what he’s owed. There are plenty of thrilling acting sequences throughout, and they will keep you on the edge of your seat.\n\nRitchie has an extraordinary sense of timing and instincts for shooting action scenes, and the brutal, graphic wartime violence puts you in the be-or-be-killed survival mind of a front line soldier."
},
    {id:10, 
      ide: 10,
      cat: "Hollywood",
      for: "TheTopList",
      date:'  09/03/2022',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/7yyFEsuaLGTPul5UkHc5BhXnQ0k.jpg',
      title:'The Last Kingdom: Seven Kings Must Die',
      Overview: 'In the wake of King Edwards death, Uhtred of Bebbanburg and his comrades adventure across a fractured kingdom in the hopes of uniting England at last.',
      description: " Seven Kings Must Die is the conclusion of The Last Kingdom series. A conclusion that didn't feel necessary as the story ended with a satisfying resolution and characters we had grown to love over five seasons finding happiness and a rewarding future. Instead, this 2-hour movie is more of a finale that disrupts our story's happy ending and leaves it all with less closure than before. With the promise of a movie, I was hoping that the film would enjoy greater production quality and resources than the typical show, but that was not the case. Seven Kings Must Die was just an entire season of The Last Kingdom crammed into 2 hours. Fans of the series might enjoy seeing more of their favorite characters (although they might be disappointed with the conclusion of those characters' stories). Unfortunately, those unfamiliar with The Last Kingdom would be confused by the partial narrative they receive with this film. Seven King Must Die might have been a decent finale to an additional season of the show, but as someone who liked how the show ended, I wish I had joined my wife and gone to bed without finishing the film. The show is excellent, so watch that instead. It really isn't as bad as I am sharing, but I was happier as a fan without it, and non-fans would probably not find it worth their time, either."
    },
    {id:11,
      ide: 11, 
      cat: "Hollywood",
      for: "TopList",
      date:' 05/04/2023',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vnRthEZz16Q9VWcP5homkHxyHoy.jpg',
      title:'The Mother ',
      Overview: 'A deadly female assassin comes out of hiding to protect the daughter that she gave up years before, while on the run from dangerous men.',
      description: "Ironically, these tale about a mother and daughter, fails because the male characters have no depth. The villain is evil sure, but also extremely stupid and escaping from her first attempt to kill him in a very unbelievable and unexplained way.\n\nThe romantic tension between Cruise and the mother also doesn't work and the age old friendship with Jons is also not given any backstory. I'm enclined to blame the casting here. Well, the story was lacking and oddly edited as well, but it may be because there wasn't much to work with. Either way, it's clear this is supposed to be about a mother/daughter relationship, but also be an action move and the director / writers / actors couldn't make it work. 3/10, 2 points cause I've seen worse, not because I can find something positive in it. "
    },
    {id:12, 
      ide: 1,
      cat: "Bollywood",
      for: "ArticleList",
      date:' 08 March, 2023 ',
      img: 'https://www.koimoi.com/wp-content/new-galleries/2023/03/tu-jhoothi-main-makkaar-box-office-day-1-advance-booking-1-day-to-go-001.jpg',
      title:'Tu Jhoothi Main Makaar ',
      Overview: 'Madness ensues when a player in the world of romantic relationships finds a girl whos a worthy opponent, that believes love is a battle of wits.',
      description: "Mickey belongs to a well-known business family, as a side business he along with his friend Dabbas help couples to separate who are not happy in their relationships.During bachelor-rate of Dabbas he meets Tinni and both fall in love after lot of hide and seek in relationship.Mickey and Tinni's parents agree for their marriage but Tinni finds that Mickey's family is quite possessive about him.Tinni feels that she won't be able to adjust in his family as she wants her own space.Tinni contacts for advise in breaking her relationship not knowing that she is speaking to none other then Mickey "
    },  
    {id:13, 
      ide:2,
      cat: "Bollywood",
      for: "ArticleList",
      sp:"home-latestArt",
      date:' 25 January, 2023',
      img: 'https://im.rediff.com/movies/2021/aug/06hahk5.jpg',
      title:'Hum Aapke Hain Koun',
      Overview: "This 1990s blockbuster was directly responsible for audiences in India and elsewhere returning to Bollywood after a drastic drop in attendance in the 1980s due to video piracy and disillusionment with the crude action films of that era.",
      description: " morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis"
    },{
      id: 14,
      ide:3,
      cat: "Bollywood",
      for: "ArticleList",
      date:" 06 September, 2019 ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrFGWUg0dZzOwyI-vLRFc46nWLx_qpquRRaQ&usqp=CAU",
      title: "Yeh Jawaani Hai Deewani",
      Overview:"This romantic and full comedy movie fits the Bollywood funny Hindi movie template perfectly: it boasts flamboyant colors, songs, dance, and, more importantly, a big fat Indian wedding. It tells of two characters, Bunny (Kapoor) and Naina (Padukone), and their group of friends, who we first meet as they leave university before the film flashes forward to the end of their twenties. What made the film doubly successful was that its two stars were former lovers in real life, lending them special chemistry onscreen.",
      description: " This romantic and full comedy movie fits the Bollywood funny Hindi movie template perfectly: it boasts flamboyant colors, songs, dance, and, more importantly, a big fat Indian wedding. It tells of two characters, Bunny (Kapoor) and Naina (Padukone), and their group of friends, who we first meet as they leave university before the film flashes forward to the end of their twenties. What made the film doubly successful was that its two stars were former lovers in real life, lending them special chemistry onscreen."
    },
    {
      id: 15,
      ide:4,
      cat: "Bollywood",
      for: "ArticleList",
      img:"https://i.ytimg.com/vi/sd2bOhJTIlY/maxresdefault.jpg",
      title: "Veer-Zaara",
      date: "11 January, 2004",
      Overview:"Yash Chopra, Bollywood’s most successful and respected director, delivers a groundbreaking musical romance on an epic scale. Will the Hindi love story that Indian Hindu Veer (Khan) and Pakistani Muslim Zaara (Zinta) feel for each other be able to overcome cross-cultural, emotional, and physical borders? Chopra employs his trademark ‘chiffon sari in the Swiss Alps’ style while including progressive political and social messages about Indo-Pak unity, women’s rights, inept justice and hope for the future. The late composer Madan Mohan and Lata Mangeshkar’s tunes achieve lyrical perfection. The result is an uplifting, colorful and soulful gem.",
      description: "Yash Chopra, Bollywood’s most successful and respected director, delivers a groundbreaking musical romance on an epic scale. Will the Hindi love story that Indian Hindu Veer (Khan) and Pakistani Muslim Zaara (Zinta) feel for each other be able to overcome cross-cultural, emotional, and physical borders? Chopra employs his trademark ‘chiffon sari in the Swiss Alps’ style while including progressive political and social messages about Indo-Pak unity, women’s rights, inept justice and hope for the future. The late composer Madan Mohan and Lata Mangeshkar’s tunes achieve lyrical perfection. The result is an uplifting, colorful and soulful gem. "
    },
    {
      id: 16,
      ide:5,
      cat: "Bollywood",
      for: "ArticleList",
      date:" 19 December, 2014",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJkvozW6XIwFGeXbid1Rm_YKfr9Xj6lFVnQ&usqp=CAU",
      title: "Kati-Patang",
      Overview:"Inspired by the Hollywood weepie ‘No Man of Her Own (1950), Shakti Samanta’s film addresses the still-taboo theme of widows remarrying. The film goes out of its way to proclaim the untainted virgin status of its female lead, as Madhu (Parekh) only pretends to be a widow to assume a new identity. Complications follow when she is attracted to her ‘dead’ husband’s best mate (Khanna). The real superstar of this melodramatic film is RD Burman’s classic score: every track remains popular to this day.",
      description: "Inspired by the Hollywood weepie ‘No Man of Her Own (1950), Shakti Samanta’s film addresses the still-taboo theme of widows remarrying. The film goes out of its way to proclaim the untainted virgin status of its female lead, as Madhu (Parekh) only pretends to be a widow to assume a new identity. Complications follow when she is attracted to her ‘dead’ husband’s best mate (Khanna). The real superstar of this melodramatic film is RD Burman’s classic score: every track remains popular to this day. "
    },
    {
      id: 17,
      ide:6,
      cat: "Bollywood",
      for: "ArticleList",
      date:" 22 December, 2017",
      img: "data:image/jpeg;base64,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",
      title: "Tiger Zinda Hai",
      Overview:"Tiger (Salman Khan) and Zoya (Katrina Kaif) escape from the clutches of ISI and RAW and then they start living an idyllic life somewhere in the snow-covered ranges of Europe. Meanwhile in Ikrit, Iraq, Abu Usman (Sajjad Delafrooz) emerges as the head of ISC which turns into the world’s richest...",
      description: " Tiger (Salman Khan) and Zoya (Katrina Kaif) escape from the clutches of ISI and RAW and then they start living an idyllic life somewhere in the snow-covered ranges of Europe. Meanwhile in Ikrit, Iraq, Abu Usman (Sajjad Delafrooz) emerges as the head of ISC which turns into the world’s richest and the most dangerous terrorist organization. The Americans are angry and they launch an attack on Abu and his convoy, and it injures Abu. At the same time, a group of 40 nurses – 25 Indian and 15 Pakistani – are heading to the hospital where they work. Abu’s men force the nurses to take an injured Abu with them for immediate treatment. They also take over the hospital and keep the nurses as hostage. The Americans then decide to launch an airstrike on the hospital within 7 days. Hence, the Indians have just a week to rescue the nurses. Infiltrating into the high security ISC region is next to impossible. The senior officer of RAW, Shenoy (Girish Karnad) suggests that Tiger should be called in as he’s the only one who can successfully complete this mission. Tiger is found and he takes up the job. How Tiger manages to infiltrate the ISC area and rescue the nurses forms the rest of the film"
    },
    {
      id: 18,
      ide:7,
      cat: "Bollywood",
      for: "ArticleList",
      date:" 31 May, 2013",
      img: "data:image/jpeg;base64,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",
      title: "Dilwale Dulhania Le Jayenge",
      Overview:"It is a story of the exhilarating and terrifying journey of four characters as they navigate through their youth; from their carefree laughter as they set off on a holiday together in their colleges days, until their bittersweet tears as they watch the first of their bunch get married.",
      description: "Familiar themes of personal choice versus family responsibility, and forbidden love, are remixed for the 1990s in this epic, era-defining romance. In London, Raj (Khan) is an immature young man, while straight-laced Simran (Kajol) is all set for a marriage arranged by her domineering father. She goes InterRailing in Europe, meets Raj and they fall in love against the backdrop of Swiss mountains. The popularity of the film (the title translates as ‘The brave-hearted will take away the bride’) is reflected in the fact that it has screened daily in Mumbai’s Maratha Mandir cinema for 19 years and counting. This ultimate romance also raised the bar impossibly high for guys chasing girls."
    },
    {
      id: 19,
      ide:8,
      sp: "home-ban",
      cat: "Bollywood",
      for: "TopList",
      date:" 28 April, 2017",
      img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBsY1YLnVYF1qmqY3nZ0fHB42KydQwyoI6hw&usqp=CAU",
      img: "https://www.pianomint.com/apnifiles/Sach-Keh-Raha-Hai-Rehna-Hai-Terre-Dil-Main.jpg",
      title: "Rehna Hai Tere Dil Main",
      Overview:"Madhav (Maddy) has love at first site with Reena.He finds from her friend Shruti that she is to be married to Rajiv an NRI.Maddy with the help of his friends importers as Rajiv and woes Reena and both fall in love.When the real Rajiv arrives Reena gets a shock that Maddy was posing as his impostor.When Rajiv and Maddy comes face to face they Maddy realizes that Rajiv is his college rival and war continues.",
      description:" The story revolves around a young and charming guy named Maddy (R. Madhavan), who is a carefree and fun-loving individual. He falls deeply in love with a beautiful girl named Reena (Dia Mirza) after a chance encounter. However, Reena mistakenly believes that Maddy is a rich, sophisticated man named Rajeev, as she has been corresponding with Rajeev through letters To win Reenas heart, Maddy decides to impersonate Rajeev, hiding his true identity. He moves into the same apartment complex where Reena lives and tries to get closer to her. In the process, Maddy befriends Reenas best friend, Saif (Saif Ali Khan), who is genuinely in love with Reena. As Maddy spends more time with Reena, their bond grows stronger, and Reena starts falling in love with him, unaware of his true identity However, things take a complicated turn when the real Rajeev (played by Saif Ali Khan) returns and creates confusion. Reena becomes torn between her feelings for Maddy and her commitment to Rajeev. The story unfolds with emotional ups and downs as Maddys secret is revealed, leading to heartbreak, forgiveness, and a rollercoaster of emotions. "
    },
    {
      id: 20,
      ide:9,
      cat: "Bollywood",
      for: "TheTopList",
      sp: "home-Toplist",
      date:"14 April, 2022 ",
      img: " https://www.pinkvilla.com/english/images/2022/11/2130561467_pushpa-2-exclusive-makers-of-allu-arjun-and-rashmika-mandanna-starrer-eyeing-this-release-date_1280*720.jpg",
      title: "Pushpa ",
      Overview:"KGF - CHAPTER 2 [Hindi] is the story of a man who faces new challenges after successfully taking over an empire. Rocky kills Garuda (Ramachandra Raju) in the Kolar Gold Fields, aka, KGF, and takes charge, much to the annoyance of Guru Pandian (Achyuth Kumar), Andrews (B S Avinash), Rajendra...",
      description: " KGF - CHAPTER 2 [Hindi] is the story of a man who faces new challenges after successfully taking over an empire. Rocky kills Garuda (Ramachandra Raju) in the Kolar Gold Fields, aka, KGF, and takes charge, much to the annoyance of Guru Pandian (Achyuth Kumar), Andrews (B S Avinash), Rajendra Desai (Lakki Lakshman). They had expected to rule KGF and take over its immense wealth. However, Rocky, with the help of the slaves who consider him a messiah, usurps the throne. He even kills Virat (Vinay Bidappa), brother of Garuda and the heir apparent to the KGF throne. Rocky however spares Vanaram (Ayyappa P Sharma), the commander of the army at KGF. Vanaram, angry at first, joins Rocky and trains young kids who become the new guards of the territory. Rocky discovers that there are several unexcavated mines in the area and he orders the men to start extracting gold from these places. The idea is to discover as much gold as possible in the shortest possible time. Meanwhile, Adheera (Sanjay Dutt), brother of Suryavardhan, the founder of KGF, was presumed dead. However, he is alive and arrives at KGF for revenge and to claim ownership. He smartly gets Rocky out of KGF and shoots him. He allows Rocky to survive so that the word is spread in KGF that the terrifying Adheera is here. Rocky recuperates but realizes that no one is able to move out of KGF as Adheera’s men have surrounded the mines. Meanwhile, Shetty (Dinesh Mangaluru), Rocky’s ex-boss in Bombay, has tied up with fellow gangsters across West and South India, and plans to act against Rocky. They are also dealing with Inayat Khalil (Balakrishna), a dreaded gangster from Dubai. How Rocky fights all these elements forms the rest of the film."
    },
    {
      id: 21,
      ide:10,
      cat: "Bollywood",
      for: "TopList",
      date:" 25 December, 2009 ",
      img: " https://www.bollywoodhungama.com/wp-content/uploads/2016/03/3-Idiots.jpg",
      title: "3 Idiots",
      Overview:"Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them 'idiots'.",
      description: " 3 IDIOTS belongs to everyone. But, yes, there's no denying that Aamir makes you forget all his past achievements as you watch the amazing actor play Rancho. To state that this ranks amongst his finest works would be an understatement. Madhavan is incredible, especially in the sequence when he explains his point of view to his father [Pareekshit Sahani]. Sharman is outstanding from start to end. This was a difficult role to portray and only an actor of calibre could've pulled it off. Boman is superb as the vicious head of the institute. The scenes between Aamir and Boman are extra-ordinary and it's a treat to watch these two powerful actors clash on the big screen, without getting overdramatic. Boman's appearance, mannerisms and dialogue delivery are exemplary.\n\nThe length of Kareena's role may not be as much as Aamir, Madhavan and Sharman, but she registers a strong impact nonetheless. Omi is excellent and the viewers are sure to love his acidic tongue and gestures in the movie. Mona Singh doesn't get much scope. Jaaved Jaffery is competent. Pareekshit Sahani is decent.\n\nOn the whole, 3 IDIOTS easily ranks amongst Aamir, Rajkumar Hirani and Vidhu Vinod Chopra's finest films. Do yourself and your family a favour: Watch 3 IDIOTS. It's emotional, it's entertaining, it's enlightening. The film has tremendous youth appeal and feel-good factor to work in a big way."
    },
    {
      id: 22,
      ide:11,
      cat: "Bollywood",
      for: "TopList", 
       date:"12 July, 2019 ",
      img: "https://stat5.bollywoodhungama.in/wp-content/uploads/2017/06/Super-30-1-306x393.jpg ",
      title: "Super 30",
      Overview:"SUPER 30 is the story of a selfless man fighting for the cause of education-for-all. The year is 1996. Anand Kumar (Hrithik Roshan) has completed his graduation and is passionate about mathematics. He’s so good in the subject that he is felicitated at the hands of the education minister (Pankaj...",
      description: "UPER 30 is the story of a selfless man fighting for the cause of education-for-all. The year is 1996. Anand Kumar (Hrithik Roshan) has completed his graduation and is passionate about mathematics. He’s so good in the subject that he is felicitated at the hands of the education minister (Pankaj Tripathi). Anand manages to solve a complex mathematical problem, which has baffled scholars all around the world. His feat lands him a seat in the prestigious Cambridge University. His father Eshwar Kumar (Virendra Saxena) is a postman who takes out his PF to fund Anand’s foreign education. When the money falls short, he and Anand knock at the doors of the education minister, who had promised him help. But the minister refuses to help. Meanwhile, Eshwar passes away one day suddenly. He was the only earning member of the family and hence, Anand sheds his ambition and begins selling papad to survive. One day, he bumps into Lallan Singh (Aditya Srivastava) who runs Excellence Coaching Centre, an institute for those giving the IIT-JEE exams. He is aware of Anand’s brilliance in mathematics since he was in the college when Anand was felicitated. He gets Anand enrolled in his coaching institute as a premium teacher. Since Anand’s teaching methods guarantee success, he becomes quite sought after. Excellence Coaching Centre management even promote themselves by using Anand’s picture on their banners. Anand’s financial condition also improves as he’s even made one of the signatories. However, he soon realizes that some brilliant students aren’t getting a fair chance to excel in life because of their underprivileged background. Overnight, Anand quits Excellence Coaching Centre. He starts his own centre, where he decides to teach 30 students for IIT entrance exams for free. Not just that, he even arranges for their accommodation and food. Lallan obviously is livid and he tries his best to persuade Anand. When nothing works, he tries to demotivate Anand, saying that all his students who fail will go back to their impoverished lives. It’s important that each and every student of Anand manages to crack the IIT exam. What happens next forms the rest of the film. "
    },
    {
      id: 23,
      ide:1,
      cat: "Food",
      for: "ArticleList", 
       date:" MAY 15, 2023",
      img: "https://media.istockphoto.com/id/614313140/photo/soft-beef-tacos-with-fries.jpg?s=612x612&w=0&k=20&c=KxBKdcWFKWCQwLWiil-Rgvlpl9l8SZXwkvjnCiWcia8=",
      title: "Salmon Tacos with Mango Corn Salsa",
      Overview:"Super easy salmon tacos loaded with a mango, sweet corn, and cucumber salsa!",
      description: "These tacos are THE dinner for me right now! \n\n A few nights ago, I made them (again), and I set the sheet pan of salmon down on the table and my whole family literally descended upon it and started grabbing at the salmon with their hands and forks as I stood by watching in half shock, half pride. It was a feeding frenzy. \n\n Of course, we love salmon. It’s a great source of nutrition and protein and, when cooked well, it gently slides apart into buttery, juicy, delightful little flakes.\n\n But I’m not going to lie to you: the main event here is that mango corn salsa. \n\n The salmon itself is completely SOS (taco seasoning and THAT’S IT), which is why I think it makes sense to put all your effort and energy into the salsa. This salsa is also the thing that’s going to keep you sitting at the table long after you’re done eating tacos, just scooping some extra salsa bites all on its own and suddenly thinking of it as more of a salad? It can be a salad, right? I would totally eat this salsa on its own as a salad. \n\n Each bite is extra crispy and unexpected from the raw sweet corn and cucumber with a little burst of juicy flavor. But it’s also mainstream enough with the mango that my two young kids are usually happy to devour it right along with us. \n\n I love a million sauces on my tacos (okay, fine, on every recipe). But with this one, all it needs is a bit of extra lime and honey to finish it off. Simple, minimal effort, max deliciousness."

    },
    {
      id: 24,
      ide:2,
      cat: "Food",
      for: "ArticleList", 
       date:"MAY 8, 2023 ",
       sp: "home-latest",
      img: "https://c4.wallpaperflare.com/wallpaper/1016/528/45/cuisine-food-india-indian-wallpaper-preview.jpg",
      title: "Chili Garlic Pappardelle with Smashed Broccoli and Soft Eggs",
      Overview:"Slippery, spicy, bossy noodles with a minimal-ingredient sauce, topped with a pile of roasty smashed broccoli and a perfectly messy soft egg. Yes, please.",
      description: "Oh man, these slippery, spicy noodles are a TREAT. Silky, rich, full of deep flavor and a flash of heat! \n\n I would say this recipe belongs less in the “normal family dinner” category and more in the “hangry / hardcore craving / last minute meal” category.\n\nThe big flavors end up being a bit much for my kids, so I make this for a need-it-right-now hungry mom moment that calls for something ultra-satisfying, silky, and spicy. I often end up eating it right over the stove in a moment of pure and absolute joy. \n\nAnd luckily, the components can work for everybody (buttered noodles is always a kid win, plus eggs and broccoli!), so it can be easily worked into something family-friendly or meal-prep friendly if you batch some extra broccoli and eggs to throw into other meals throughout the week. SOS at its finest. \n\n The miso just does something magical to this whole thing – if you don’t have it I think you’ll still end up just fine. But if you have it (hopefully I already convinced you to buy some with the Miso Crunch Salad!) it will elevate the flavor and add a depth that’s just really amazing for such a fast and easy recipe."
    },

    {
      id: 25,
      ide:3,
      cat: "Food",
      for: "ArticleList", 
       date:" MAY 1, 2023",
      img: "https://pinchofyum.com/wp-content/uploads/Stephs-Chickpea-Curry-Square-960x960.png",
      title: "Steph’s Chickpea Curry with Spinach and Rice",
      Overview:"Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description: "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment." 
       
    },

    {
      id: 26,
      ide:4,
      cat: "Food",
      for: "ArticleList", 
       date:"APRIL 25, 2023 ",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      title: "Join Us for Three Weeks of Meal Plans",
      Overview:"Three weeks, three meal plans, everything you need to make getting dinner on the table each night easy, doable, and delicious. Join us!",
      description: "Ahhhhh, summer. We love to love it and also how are there this many end-of-school projects and assemblies and how am I supposed to rush to one more dance class and why do I feel like I want to do anything else besides cook when it’s this nice out. "
    },

    {
      id: 27,
      ide:5,
      cat: "Food",
      sp:"home-latestArt",
      for: "ArticleList", 
       date:" APRIL 24, 2023",
      img: "https://holidayshunt.com/wp-content/uploads/2022/08/Kashmiri-Tabak-Maaz_17e7774ad6c_large.jpg",
      title: "Kashmiri Wazwan",
   
      Overview:"When one talks about Hindustani cuisine, Wazwan scores the top position. The ’36-dish multi-course meal’ is not meant to satiate your hunger but to indulge you in an out-of-the-world experience.",
      description: "Once upon a time, Kashmir was the centre of the Silk Route connecting Asia to the Mediterranean. The silk merchants used to pass this land for business and that’s how Kashmir was introduced to Persian and Russian flavours. In 1398 when Taimoor invaded Hindustan, he brought with him cooks (Waza) from the land of Samarkand (Uzbekistan). And these Wazas amalgamated the Persian, Turkish and Afghan techniques to develop the Kashmiri cuisine. Wazas are obsessive and passionate artistes. The preparation of the meal begins long before sunrise — at 3 am. The Wasta Waza (Master Chef) supervises all other Wazas. The authentic Wazwan is made only of sheep meat – and different dishes require meat from different organs. Meat is prepared to be cooked within one hour of the butchering to maintain taste. It is minced with a walnut wood hammer on stone until it loses its stringiness. Wazas beat the meat till all nerves of the mutton are entirely dissolved for a creamy consistency.  "
    },

    {
      id: 28,
      ide:6,
      cat: "Food",
      for: "ArticleList", 
       date:"APRIL 17, 2023 ",
      img: "https://pinchofyum.com/wp-content/uploads/Red-Chile-Tostadas-with-Eggs-Square-960x960.png",
      title: "Red Chile Tostadas with Eggs",
      Overview:"We’re making Red Chile Tostadas with Eggs! We’re talking creamy, crunchy, drippy, and tangy – the absolute perfect flavor combination.",
      description: " The combination of flavors and textures is unmatched, plus so many of these things can be made ahead or store-bought (the enchilada sauce, the refried beans, the tostada if you want). It is my perfect food combination: something creamy, something crunchy, something tangy, and something drippy and messy to really make you feel alive. \n\n I have eaten (slash, continue to eat) these for ANY meal of the day, which is another reason why I love them. They are breakfast, brunch, lunch, and dinner all in one cute, crunchy little package. \n\n I hope you love these as much as I do – and if you do, these cauliflower tostadas with queso are your next stop! "
    },

    {
      id: 29,
      ide:7,
      cat: "Food",
      for: "ArticleList", 
       date:"APRIL 10, 2023 ",
      img: "https://pinchofyum.com/wp-content/uploads/Cilantro-Orange-Chicken-61-Square-960x960.jpg",
      title: "Cilantro Orange Chicken with Rice and Beans",
      Overview:"This golden Cilantro Orange Chicken is so flavorful, crisped to golden brown perfection, and just very finger-licking good! Served with rice, beans, and a quick homemade pineapple salsa.",
      description: "This is a brand new recipe that’s part of our Spring 2023 SOS Series – in other words, EASY recipes! View our full collection of SOS recipes here.\n\n This post contains referral links for products we love. Pinch of Yum earns a small commission on these links at no cost to you, and the links will always be marked with an asterisk. We ♡ honesty! "
    },

    {
      id: 30,
      ide:8,
      cat: "Food",
      for: "TheTopList", 
      sp: "home-ToplistA",
       date:" APRIL 3, 2023",
      img: "https://pinchofyum.com/wp-content/uploads/butter-chicken-3-1200x1200.jpg",
      title: "Butter Chicken Meatballs",
      Overview:"These butter chicken meatballs are covered in a rich and mildly spiced tomato gravy that is made luxurious with just a little bit of butter and cream. Serious weeknight magic!",
      description: "Butter chicken, but make it meatballs!\n\n Oh my goodness, it’s so good! My family is truly in love with this recipe.\n\n These butter chicken meatballs are covered in a rich and mildly spiced tomato gravy that is made luxurious with just a little bit of butter and cream. It is a thing of beauty. I look forward to dinner all day long when I know we are having this. And as I’m sure you imagine, the leftovers are even better, so lunch the next day is something to look forward to, too.\n\n You can make it on the stovetop or in the Instant Pot, and you can use a regular or immersion blender to get your sauce nice and creamy. I often have a batch of baked chicken meatballs on hand so I like to use those, but this would be delicious and easy with some store-bought meatballs to really lock in the SOS goodness here "
    },

    {
      id: 31,
      ide:9,
      cat: "Food",
      for: "TopList", 
       date:"MARCH 27, 2023 ",
      img: "data:image/jpeg;base64,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",
      title: "Carrot Cake Coffee Cake",
      Overview:"Carrot Cake Coffee Cake! A super easy batter loaded with shredded carrots, topped with a thick crumbly cinnamony streusel, and finished with a melty sweet honey butter.",
      description: "This recipe is a fan favorite for spring and was originally published in 2021. It is also part of this year’s Spring Bucket List! Find out more about the bucket list here.\n\n I know it might be confusing – carrot cake, which is like vegetables meets cake, but also still cake, combined with coffee cake, which is also cake but the kind you can eat for breakfast and it will still be totally appropriate and, obviously, cakey? \n\n But no need to be confused. \n\n If you like a carrot cake that tastes just slightly cinnamony and teeters perfectly between springy and dense… \n\n And you like a coffee cake that is loaded with a mega amount of streusel topping… \n\n And you like cakes that look beautiful and taste even more beautiful with a proper shmear of honey butter… \n\ nI HELLO! Meet your one true match. This one is for you. "
    },

    {
      id: 32,
      ide:10,
      cat: "Food",
      for: "TopList", 
       date:" MARCH 13, 2023",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIn1ztAXcVtxnf1fc5mLOwPuIaVQ0C6NzJuw&usqp=CAU",
      title: "Favorite Browned Butter Chocolate Chip Cookies",
      Overview:"Browned butter and brown sugar caramelly goodness, crispy edges, barely thick and soft centers, and melty little puddles of chocolate chips.",
      description: "Browned butter and brown sugar caramelly goodness, crispy edges, barely thick and soft centers, melty little puddles of chocolate chips and sprinkles of just enough salt to cut the sweetness and make you feel like you could probably eat 5 of them.\n\n My first favorite thing about these browned butter chocolate chip cookies is that they combine the best of both the thin-cookie and thick-cookie worlds with that satisfying little crunch around the edge AND underbaked centers that are thick enough to really sink your teeth into. Best. Of. Both. Worlds. \n\n My second favorite thing about these cookies is that they also just shine, and I mean really shine, with rich, deep, caramelly flavor thanks to a whole lot of browned butter. "
    },

    {
      id: 33,
      ide:11,
      cat: "Food",
      for: "TopList", 
       date:"MARCH 6, 2023 ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWMZtiPo2Mj5l4OQSkjarShvrKvMExxy8685AvWCirVmMVvvjhCZ0iRTznqX9L19FhyjM&usqp=CAU",
      title: "Yummy Salmon Burgers with Slaw",
      Overview:"These salmon burgers are THE YUMMIEST! and made with just five ingredients. The best for a quick + easy high protein lunch or dinner.",
      description: "These salmon burgers. They are just so extremely good. \n\n  We’re talking crispy outsides, flaky insides, and a perfect golden color, not to mention lots of nutrition, THANK YOU SALMON. \n\n They are also easy to make and require (usually) minimal, if not zero, grocery shopping, assuming you keep a decently stocked pantry. I love, love, love these crispy pan-fried little guys. \n\n And as if the salmon burgers weren’t good enough already to eat on their own (which, um, they are), I need you to make this slaw to serve your salmon burgers in/on/around. It is nothing fancy – just a shredded cabbage, yogurt, herbs, garlic, and vinegar situation, but paired with the salmon burgers? The crispy-salty-tangy combo is an ON-POINT combo. "
    },

    {
      id: 34,
      ide:1,
      cat: "Fitness",
      for: "ArticleList", 
       date:"25/05/23  ",
      img: "https://media.istockphoto.com/id/1299421209/photo/diet-and-exercise-for-weight-loss.jpg?b=1&s=170667a&w=0&k=20&c=OilzXOdxnV_MeN5V9Q-Y5TvmhU2F8nNNXazNsfpqgiw=",
      title: "Tredmill Training Plan ",
      Overview:"Learn the basics of sports nutrition and get your sport-specific nutrition guide to optimize athletic performance.",
      description: " More the just eating well, sports nutrition is a strategic way of eating that optimizes your athletic performance. It ensures your calorie, protein, carbohydrate, fat, vitamin, mineral, and fluid intake will meet the demands of your sport, the unique needs of your body, and your individual goals. \n\n All so you can train your hardest, perform your best, and unlock your full potential as an athlete.\n\n In this article, we’ll give you the essential sports nutrition strategies for peak performance, backed by scientific recommendations and practical advice."
    },
    {
      id: 35,
      ide:2,
      cat: "Fitness",
      for: "ArticleList", 
       date:" 25/05/23 ",
      img: "https://assets.precisionnutrition.com/2023/02/motivational-interviewing-fb-768x403.jpg",
      title: "Motivational Interviewing:",
      Overview:"Motivational Interviewing: The proven coaching method that helps people change—even when they’re feeling stuck",
      description: "Coaches who use Motivational Interviewing function kind of like tour guides for someone exploring a new country.\n\ (In this case, that country is the Land of Fitness and Nutrition.) \n\n Like a personal tour guide, you have expertise, insider’s knowledge, and ideas on the best things to do, but you don’t have a programmed route that you’ll force clients to stick to. \n\n You might share some of your insights, but ultimately, your clients will decide where to go. \n\n  A good Motivational Interviewing coach will also be genuinely curious, respectful, and non-judgemental about a client’s preferences.\n\n(“Oh, you’d rather spend the day picnicking on the Seine instead of visiting the Eiffel Tower? I totally get that.”) \n\n You respect your client’s autonomy, and interact with them as an equal partner. \n\n You often say, “What would you like to do next? I have some ideas, but I’d love to hear what you’re thinking first.” \n\n  As a result, even when they’re in foreign territory, clients end up feeling supported, but also free. "
    },

    {
      id: 36,
      ide:3,
      cat: "Fitness",
      sp: "home-latest",
      for: "ArticleList", 
       date:"25/05/23  ",
      img: "https://bloggingkarma.com/wp-content/uploads/2019/08/Best-Fitness-Blogs.jpg",
      title: "Health And Fitness:",
      Overview:"Good health isn’t just about your cholesterol levels, body composition, and fitness level. Here’s a deeper look.",
      description: " When most people hear that question, they immediately think about their blood work or maybe a nagging problem, like back pain or heartburn or migraines. \n\n Others might focus on a fitness achievement: “Just completed my third marathon this year. Never been healthier!” \n\nMany people simply consider their weight or overall appearance: \n\n [pinches stomach] “I’m still using the same belt hole I used in my twenties, so I must be healthy, right?”"
    },
    {
      id: 37,
      ide:4,
      cat: "Fitness",
      for: "ArticleList", 
       date:"25/05/23  ",
      img: "https://c8.alamy.com/comp/2E1NCAA/six-characteristics-of-quality-care-2E1NCAA.jpg",
      title: "How to Become a Sucessfull Female Blogger",
      Overview:"Losing 10 pounds. Running a half marathon. Getting six-pack abs. How do you turn short-term client goals into something meaningful, sustainable, and inspiring?",
   
      description: "superficial physical goals into substantive life gold? \n\n After working with over 100,000 clients, we believe you can get more ambitious—and be more effective and fulfilled—with an approach that goes far beyond the superficial. \n\n It’s called coaching for Deep Health.\n\n This is when all dimensions of health are in sync, instead of just the physical.\n\nIt’s not only about how your clients look or perform.\n\nIt’s also about how they think, respond, solve problems, and deal with the world around them.\n\n“Wait,” you might say. “I’m all for Deep Health, but my 4pm is here and they want to lose 20 pounds.” \n\n Coaching for Deep Health will help you get them there faster and more easily than ever before—in a way that fits their life and is sustainable. " },
    {
      id: 38,
      ide:5,
      cat: "Fitness",
      for: "ArticleList", 
      sp:"home-latestArt",
       date:"25/05/23  ",
      img: "https://media.istockphoto.com/id/500874808/photo/lose-weight-concept-with-person-on-a-scale-measuring-kilograms.webp?b=1&s=170667a&w=0&k=20&c=HE_kBCOHR24_IicaEsutI2cZvTIxo7yMTRzFFw4w7RY=",
      title: "Keep Your Body Moving",
      Overview:"Find out your body percentage and how it affects your health.",
      description: "Want to know your body fat percentage? This free body fat calculator estimates it instantly, using three scientifically validated formulas.\n\n But that’s just for starters: Our body fat calculator does way more than spit out numbers.\n\n In addition to getting your body fat percentage estimate, you’ll also receive a FREE report that’ll help you understand what your results REALLY mean—and what you should do next to reach your health and fitness goals. "
    },
    {
      id: 39,
      ide:6,
      cat: "Fitness",
      for: "ArticleList", 
       date:" 25/05/23 ",
      img: "https://assets.precisionnutrition.com/2023/01/blood-sugar-chart-1200-630-1-768x403.jpg",
      title: "Muscle Activation",
      Overview:"Just because you can track your blood sugar levels doesn’t mean you…",
      description: "Continuous glucose monitors were developed for people with type 1 and type 2 diabetes. The devices typically attach to the upper arm via skin-piercing filaments. They’re kept in place with an adhesive that makes them look like a nicotine patch. \n\n Continuous glucose monitors help people with diabetes identify swings in blood sugar before they cause problems. For those who depend on insulin, the CGM device can help their doctor modify the dose. \n\n It was only a matter of time until people without diabetes began exploring the potential of CGMs to help them meet their goals. \n\n An endurance athlete, for example, might want to know if continuous glucose monitors could help them maintain steady fuel levels. "
    },
    {
      id: 40,
      ide:7,
      cat: "Fitness",
      for: "ArticleList", 
       date:" 25/05/23 ",
      img: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      title: "Gym Streak",
      Overview:"Give your clients a jumpstart on their goals, any time of the year.",
      description: "Suppose you set a New Year’s resolution to start running. \n\n In your mind, your “old self” (the one glued to the couch) expires December 31. Your new self (the one who runs!) begins January 1.\n\n Because your brain distinguishes between these two selves, it’s much easier to believe that your “new self” will succeed.\n\n That might sound silly: After all, you won’t actually magically transform the moment the ball drops on New Year’s Eve or a new calendar day dawns.\n\n  But human psychology is a funny thing, and this separation of self enables us to release ourselves from our past “failures,” and believe that a different way forward is possible.\n\n That belief is critical for behavior change.\n\n “When we believe we can get better at something, we develop self-efficacy,” says Dr. Nordin. “Self-efficacy leads to increased motivation, enabling us to tackle the challenges in front of us, which ultimately leads to behavior change.” "
     
    },
    {
      id: 41,
      ide:8,
      cat: "Fitness",
      for: "TheTopList", 
      sp: "home-ToplistA",
       date:"25/05/23 ",
      img: "https://images.pexels.com/photos/4098228/pexels-photo-4098228.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "The Market of Indian Gym Equipments",
      Overview:"These are the challenges most likely to plague your clients—and maybe you, too. Here’s a round-up of sage advice.",
      description: "The relationship between stress and health has gained a lot more attention and validity in the past 30 years.\n\n As a result, you’ve likely learned to associate stress with all kinds of terrible things: heart attacks, hair loss, early death.\n\n And while excessive, unrelenting stress definitely erodes health, let’s clear something up:\n\n Not all stress is bad.\n\n In fact, in order to thrive, we actually need some stress to feel juicy, purposeful, and alive. "
    },
    {
      id: 42,
      ide:9,
      cat: "Fitness",
      for: "TopList", 
       date:" ",
      img: "https://assets.precisionnutrition.com/2022/11/sleep-problems-fb-768x403.jpg",
      title: "Science-based solutions to the most vexing sleep",
      Overview:"if BILLIONS of people are wondering why they can’t sleep, why they keep waking up at night, what they can do to fall asleep faster, and how long they should be sleeping, your clients are wondering, too.",
      description: "Google hears about everyone’s sleep problems, at all hours of the night. \n\n And chances are, if BILLIONS of people are wondering why they can’t sleep, why they keep waking up at night, what they can do to fall asleep faster, and how long they should be sleeping, your clients are wondering, too.\n\n In this article, we’re going to cover everything you need to know about the sleep problems your clients are likely to struggle with the most, along with science-supported practices that can help.\n\n In this article, we’ll try to give you some resources to do that.  "
    },
    {
      id: 43,
      ide:10,
      cat: "Fitness",
      for: "TopList", 
       date:"25/05/23  ",
      img: "https://assets.precisionnutrition.com/2022/10/what-is-a-wellness-coach-fb-768x403.jpg",
      title: "Wellness coaching",
      Overview:"Make time for sweating, meditating, time in nature—whatever helps you feel recharged and strong.",
      description: "When you think of your health, you might consider your blood pressure, cholesterol levels, and other physical markers that your primary care doc would examine at a regular check up. You might also think of the quality of your sleep, diet, or exercise.\n\n While “wellness” includes physical health, it’s more of a holistic concept that also captures mental, emotional, and spiritual / existential well-being. ",
      
    },
    {
      id: 44,
      ide:11,
      cat: "Fitness",
      for: "TopList", 
       date:"25/05/23 ",
      img: "https://assets.precisionnutrition.com/2022/07/TWITTER-lose-weight-id1325862997-768x384.jpg",
      title: "Lose 50, 75, 100+ pounds ",
      Overview:"Use these mindset strategies to get through the grind—and finally meet your best-feeling body.",
      description: "Rather, it’s about three people who kept going—overcoming the nearly universal setbacks and challenges during major body transformations.\n\n Not only did all three eventually lose 80-plus pounds apiece, but they also changed in other ways: Dom, Stephen, and Katey have all become certified health and nutrition coaches who now help others eat, move, and live better. \n\n In this story, you’ll discover their top mindset strategies for persevering when fat loss feels impossible (or at least just very frustrating). "
    },
    {
      id: 45,
      ide:1,
      sp: "home-ban",
      cat: "Technology",
      for: "ArticleList", 
       date:"BY SCOTT STEIN ",
      img2: "https://www.cnet.com/a/img/resize/0b173307ae96ad67c12d5be249756ea2410a294c/hub/2023/05/11/becf5d26-cac0-4b93-9e45-3aeae8e93eb2/indy.jpg?auto=webp&fit=crop&height=228&width=416",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhkPWZXV7fwFd7fpVsIsoxHqChuTcCHx8bqA&usqp=CAU",
      title: "AI Takes the Wheel at the Indy Autonomous Challenge",
      Overview:"CNET gets a behind-the-scenes look at the event, where teams from around the world put their AI drivers to the test for the chance to win $1 million.",
      description: "I attended a race earlier this year where the winning car went 180 mph with nobody behind the wheel. That's because everything was in the hands of artificial intelligence. \n\n At the Indy Autonomous Challenge, teams from around the world crafted their very own AI driving systems and raced them head to head for the chance to win a $1 million cash prize. The event was held at the Las Vegas Motor Speedway shortly after CES in January. \n\n Big name brands from the automotive and computing world donated hardware to ensure every team was using the same basic vehicle and computing stack so that it really all came down to the AI. \n\n We spoke to representatives from various teams to learn about the challenges of building AI drivers to operate at such high speeds, what to do when you have a crash shortly before race day, and what gives their AI an edge over the competition. \n\n  In the end, only one team could take home the prize. In doing so, it set a world record for fastest autonomous driving on a racetrack. ",
    },
    {
      id: 46,
      ide:2,
      cat: "Technology",
      sp: "home-latest",
      for: "ArticleList", 
       date:"BY SCOTT STEIN ",
      img: "https://www.cnet.com/a/img/resize/dc11b6c1d23354ae419e97c505a979c2f4753693/hub/2022/10/19/6cea4c49-d6cd-4e16-96c0-e44db2a7f29a/oculus-quest-2-vr-virtual-reality-1102.jpg?auto=webp&fit=crop&height=228&width=416",
      title: "Meta Quest 3: What to Expect in 2023",
      Overview:"Meta's next headset should be a lot less expensive than Apple's, and is arriving this year. Could it have an edge?",
      description: "This has been a big year for new VR headsets: the PlayStation VR 2 and Vive XR Elite are already here, and Apple's mixed reality headset should be announced in a matter of weeks. The biggest product of all of them, however, could be the Meta Quest 3.\n\n Meta's sequel to the most popular VR headset in the world right now will be a 2023 product, and Meta's Mark Zuckerberg has already confirmed it will be priced similarly to the Quest 2. That should mean it'll be a far more affordable headset than what Apple is readying. "
    },
    {
      id: 47,
      ide:3,
      cat: "Technology",
      for: "ArticleList", 
      sp:"home-latestArt",
       date:"BY LISA ",
      img: "https://media.gettyimages.com/id/1182014860/photo/secure-network-concept.jpg?s=2048x2048&w=gi&k=20&c=0Qnso4fCj4VQJBMymNfWuyvsUcQt4sN7yKUYx3GZ7D8=",
      title: "Best VPN Deals: Get Top VPNs Starting at Less Than $2 a Month",
      Overview:"With these discounts, you can get a top VPN like ExpressVPN, Surfshark or NordVPN at a great rate.",
      description: "With cybercrime rates on the rise, it's more important than ever to protect yourself online. You should always exercise caution when opening links and visiting unvetted websites, but for true security, you'll want to use a VPN, or virtual private network. A VPN creates an encrypted connection between your devices and the internet, which allows you to browse securely and keep your sensitive data away from prying eyes. We've tested out and rounded up some of the the best VPNs available in 2023, and now we've short-listed some of the best offers you can get right now to help you sign up with a VPN service at a low price. \n\n There are many good reasons to use a virtual private network. For example, did you know your internet service provider amasses as much data as possible on your digital activity? A 2021 Federal Trade Commission report noted that the leading ISPs have gathered user data on topics as personal as race, sexual orientation and real-time location. They've combined it, cross-referenced it and shared it with third-party partners. Yikes."
    },
    {
      id: 48,
      ide:4,
      cat: "Technology",
      for: "ArticleList", 
       date:"BY LISA ",
      img: "https://www.cnet.com/a/img/resize/667b3a76dd0865b1a63a5fb2efdc3eff4bb2b04c/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&fit=crop&height=108&width=196",
      title: "The Pixel 7A Raises the Bar for the Pixel 8",
      Overview:"Commentary: The Pixel 7A proves that Google needs to do more to separate its main Pixel phone from its more budget-friendly option.",
      description: "The Pixel 8 didn't make an appearance at Google's I/O conference, but the company did launch the Pixel 7A -- its budget-minded alternative to the Pixel 7. That's a win for Pixel fans, since the 7A offers many of the same benefits as the Pixel 7 -- including a great camera and the new Tensor G2 processor -- for $100 less. \n\n  But it also makes me wonder whether Google's A-series phones are beginning to overshadow its flagship Pixels. \n\n   Now that Google has narrowed the gap between the Pixel 7 and 7A, it should think more carefully about its target audience for the Pixel 8. If the Pixel 7A is for those who want a basic Pixel experience without compromising on performance and camera quality, and the Pixel 7 Pro is for photography enthusiasts, then who's the Pixel 7 for? That's the question I'm hoping Google answers with the Pixel 8, along with some other routine improvements to software support and battery life.  \n\n  Google typically releases new Pixel phones in the fall, so we're expecting to learn more about the Pixel 8 in a few months. "
    },
    {
      id: 49,
      ide:5,
      cat: "Technology",
      for: "ArticleList", 
       date:" BY SCOTT ",
      img: "https://www.cnet.com/a/img/resize/abf6551eab5adc5cee46eb4102842de09f2d596f/hub/2023/05/17/5c9f2a28-c920-49fe-b508-98337d5033ed/spacetop-ar-laptop.jpg?auto=webp&fit=crop&height=228&width=416",
      title: "I Tried an AR Laptop. It's Way Ahead of Its Time",
      Overview:"The Spacetop is like a Chromebook for AR headsets. With Apple's hardware looming, it also feels like a reminder of how computers could change.",
      description: "A small keyboard and trackpad lies in my lap. But there's no screen. Not that you can see, anyway. To me, I have a curved wraparound workspace with dozens of windows open. I'm seeing it on a pair of AR glasses (with prescription inserts) perched on my nose. \n\n I first tried the Spacetop in Las Vegas back in January, but the company that developed it, Sightful, is finally announcing the early-access product experiment now. I've seen tons of AR and VR headsets, but very few unique peripherals designed to work together with these future goggles and glasses. Instead of gaming or social experiences, Spacetop's main pitch is to turn laptops into AR-assisted devices with endless virtual displays. \n\n If that sounds like a weird pitch, consider that I've already lived it. I've paired Meta's Quest Pro to my laptop to extend its virtual monitors around my head, and plenty of solutions like this already exist using available apps. The interfaces can be clunky, and the hardware isn't totally made to be mobile. Spacetop's keyboard base, with its own Qualcomm processor inside, acts as a spatially tracked anchor that the AR glasses can follow and track the floating displays to. The tracking can work while in motion in a car or plane, and a button on the keyboard can make the floating displays vanish for an in-room conversation with someone, toggling the virtual screens on and off.  "
    },
  
    {
      id: 50,
      ide:6,
      cat: "Technology",
      for: "ArticleList", 
       date:" BY DANIEL",
      img: "https://www.cnet.com/a/img/resize/c6941fa2c5f29c26656aae025e3c60e8658e7135/hub/2023/05/17/73ccdc7b-7256-477c-bb15-34a7482d37b9/gettyimages-1225396175.jpg?auto=webp&fit=crop&height=108&width=196",
      title: "Hearing Loss Is on the Rise. A New Wave of Tech Might Help",
      Overview:"Hearing aids are getting cheaper and more accessible.",
      description: " Between pounding jackhammers and screeching machinery, the cacophony of a construction site is unpleasant to most. Not to Christine, an 18-year-old from Alabama. After getting her first pair of hearing aids, Christine found the noises profound.\n\n 'It was surprising to stop and hear what things actually sound like to other people,' she said. 'I sat down beside a construction site just to hear the different noises. I like to listen to the machines running. My favorite is the 18-wheelers driving around the site'. \n\n  'The rumble sounds better than before.'\n\n  Christine struggled to hear out of her left ear for her whole life. In March, she was prescribed her first pair of hearing aids. In addition to dramatically improving her hearing, they also notably improved her balance. \n\n Christine is one of the 38 million Americans who have some degree of hearing loss. Hers was genetic, but many more are put at risk by exposure to loud noises. The World Health Organization estimates that over a billion young adults are at risk of hearing loss 'due to unsafe listening practices.' "
    },
    {
      id: 51,
      ide:7,
      cat: "Technology",
      for: "ArticleList", 
       date:"BY MEARA ",
      img: "https://www.cnet.com/a/img/resize/5b903e6df9dca4123983af81d6f86d5039e1ba22/hub/2023/05/18/e1f84082-50e8-47b1-8e9d-d7df6492dd56/untitled-design.png?auto=webp&fit=crop&height=228&width=416",
      title: "ChatGPT Comes to Your iPhone With OpenAI's New iOS App",
      Overview:"OpenAI says an Android app is coming 'soon.'",
      description: "OpenAI continues to develop ChatGPT -- the company began rolling out plugins for the AI chatbot last month -- but has denied it's working on GPT-5 yet following an open letter signed by Elon Musk, Steve Wozniak and others at the end of March. The letter urged labs to take at least a six-month pause in artificial intelligence development due to the 'profound risks' to society.\n\n In February, Microsoft entered the AI chatbot realm with Bing AI search, which makes use of ChatGPT, and for which Microsoft earlier this week launched widgets on Android and iOS. Rival Google followed with AI Bard in March. The waitlist to try Bard has now been removed, with the service publicly available as of this week. \n\n Chinese giant Alibaba also unveiled a ChatGPT rival, with both Chinese and English capabilities, while Tesla and Twitter CEO Elon Musk has created an artificial intelligence company called X.AI. \n\n CNET has broken down the performance of ChatGPT, Bing and Google Bard to work out which AI chatbot is the most helpful. "
    },
    {
      id: 52,
      ide:8,
      cat: "Technology",
      for: "TopList", 
       date:" BY LINDSAY ",
      img: "https://www.cnet.com/a/img/resize/8a3e82c2ee427cd4c9e6d850c7361d8be08b8fea/hub/2023/03/06/aa40eda8-8fed-429d-a9d9-96f1e9ed464c/red-coupon-1.png?auto=webp&fit=crop&height=173&width=308",
      title: "CNET's Free Shopping Extension Saves You Time and Money. Give It a Try Today",
      Overview:"No one likes to pay full price -- and that's what the CNET Shopping extension is here to help prevent.",
      description: " Spring has sprung, and the weather is warming up across most of the country. Now's a perfect time to upgrade your outdoor gear with a new grill, maybe some patio furniture. Or maybe you just want to stay inside and splurge for a new TV. Regardless of what you're looking for, the one thing you need to be worried about is the price, and ensuring you find the best one available -- and that's where CNET Shopping comes in.\n\n  This free-to-use browser extension (which was previously known as PriceBlink) works in the background and helps find you the best price as you browse products of interest -- whether it be a coupon code or a discount at another retailer."
    },
    {
      id: 53,
      ide:9,
      cat: "Technology",
      for: "TheTopList", 
      sp: "home-ToplistA",
       date:"BY EDWARD  ",
      img: "https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg",
      title: "AI Draws Attention at G-7 Summit, With Leaders Calling for Guideline",
      Overview:"The leaders of the Group of Seven nations say we need to develop an international, framework to achieve the common vision and goal of trustworthy AI.",
      description: " The heads of the G-7 countries -- Canada, France, Germany, Italy, Japan, the UK and the US (plus the EU) -- called for a G-7 working group to establish by the end of the year the Hiroshima AI process, for carrying out talks about how best to deal with chatbots, image generators and other AI technologies. The talks would center on developing an international framework 'to achieve the common vision and goal of trustworthy AI,' the bulletin says.\n\n 'These discussions could include topics such as governance, safeguard of intellectual property rights including copy rights, promotion of transparency, response to foreign information manipulation, including disinformation, and responsible utilization of these technologies,' the bulletin says.\n\n Though it's unclear what exactly might come of the talks, the G-7's focus on AI is another sign that people in high places are aware of the worries around the technology and are cautious about letting its development continue unfettered. The G-7's bulletin follows other recent moves by government to examine and address AI and its potential perils."
    },
    {
      id: 54,
      ide:10,
      cat: "Technology",
      for: "TopList", 
       date:" BY JAMES ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13DCGd9u3tQBDh7i_aQAGvzCcGLv7DuKMqoNV_ZDg&s",
      title: "Google's AI Search Could Mean Radical Changes for Your Internet Experience",
      Overview:"At Google I/O, the company unveiled an experimental version of Search that integrates AI-generated responses. Will it break the balance of the internet?.",
      description: "The future of Google Search is a big green box. \n\n That's exactly what Google showed off this month at Google I/O, the company's yearly developer conference. The theme for 2023 was AI, a term mentioned more than 140 times during the two-hour keynote presentation. Google unveiled AI products that will actually be released to the public, an about-face for the apprehensive internet giant in response to growing competition. \n\n  Late last year, OpenAI launched ChatGPT to near-universal adulation. Suddenly, everybody had access to a generative AI engine that could seemingly answer any question with a novel response. It's powered by a large language model, or LLM, that essentially lets it act as 'autocomplete on steroids,' using massive amounts of text data to figure out what the next best word should be.  \n\n  The power and ease of ChatGPT helped it become the fastest growing consumer web platform ever. It prompted Microsoft to up its investment into OpenAI and integrate ChatGPT's tech directly into Bing search earlier this year, a move that helped the company see a 16% increase in traffic. The day before Microsoft unveiled Bing AI, Google announced its own generative AI engine, Bard, although it flubbed the launch and lost $100 billion in stock market value in the process. The stock has since rebounded to its highest level so far this year. \n\n  In many ways, Google I/O was a referendum on the company's wonky entrance into consumer AI and a clear message to skeptics (and investors) that it's willing to take radical steps to stay at the forefront of internet search, even if that means upending its core product. Google Search has long been the engine for how we all look for product information, find the latest news and otherwise interact with the internet, and for how many businesses make money. "
    },
    {
      id: 55,
      ide:11,
      cat: "Technology",
      for: "TopList", 
       date:"BY SCOTT ",
      img: "https://thumbs.dreamstime.com/b/internet-information-technology-businessman-hand-showing-concept-75784736.jpg",
      title: "Download iOS 16.5 Right Now",
      Overview:"The update fixes a few security issues that might be actively exploited.",
      description: "The latest iPhone update patches almost 40 issues and bugs, Apple said in its patch notes, including three security issues that might be actively exploited. These three security issues relate to WebKit, the internet browser engine used in Safari and developed by Apple. \n\n One of these issues could disclose sensitive information to a third party, and another could allow a third party to execute commands on your device without your knowledge. Fixes for these issues are in 16.5 for anyone who missed the release of the first iPhone Rapid Security Response, iOS 16.4.1 (a). The third issue could allow a third party access to more information across your device than is allowed.\n\n The iOS update also patches an issue where someone could access your contacts from your lock screen. While Apple has provided ways to customize your lock screen, some people have run into issues where the lock screen can allow others to access some iPhone features, like replying to messages and even your Wallet."
    },

  


  ]);

  return (
    <AppData.Provider value={[data, setdata]}>
      {/* <Home/> */}
      {props.children}
    </AppData.Provider>
  );
}

export default Store;
