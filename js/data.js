/* ============================================================
   The King's Academy Junior High Math Team — site data
   Edit this file to update coaches, bios, houses, and links.
   Photos: drop a file in  assets/coaches/  named exactly as the
   "photo" field below (e.g. assets/coaches/henry-lo.jpg).
   ============================================================ */

const LINKS = {
  application: "https://docs.google.com/forms/d/e/1FAIpQLScPugfh6mRtwgqoHSuXL9hyia3RepA0afQsKn1yL2oJLGv77w/viewform?usp=preview",
  absence: "https://docs.google.com/forms/d/e/1FAIpQLSefdjvlRfgR_F4X_kilBatuWKdhLgrwglXUizAeFTWHpg2uKg/viewform?usp=header",
};

// Key timeline dates for the application cycle.
const TIMELINE = [
  { date: "Aug 24", title: "Applications Due", detail: "Submit your math team application form." },
  { date: "Aug 25", title: "Diagnostic Test", detail: "3:00 PM — a short diagnostic to help place you." },
  { date: "Follow-ups", title: "Interviews", detail: "Selected applicants are invited for a quick interview." },
  { date: "Sep 8", title: "Decisions", detail: "Final decisions announced by this date." },
];

// The four houses. `accent` is used for that house's color highlight.
const HOUSES = [
  { key: "johan",  name: "Johan",  accent: "#339cc6" },
  { key: "kaleb",  name: "Kaleb",  accent: "#5fb8d8" },
  { key: "jackie", name: "Jackie", accent: "#7d6fd1" },
  { key: "kyle",   name: "Kyle",   accent: "#2a7fb5" },
];

const GRADE_LABEL = { 9: "Freshman", 10: "Sophomore", 11: "Junior", 12: "Senior" };

/* Coaches. `photo` is a filename in assets/coaches/.
   Missing bios are left as "" and the site shows a friendly placeholder. */
const COACHES = [
  // ---- Johan ----
  {
    name: "Henry Lo", grade: 12, house: "johan", role: "Co-President",
    photo: "henry-lo.jpg",
    bio: "Hey, I’m Henry, a senior, and I’ve been part of the math team since 6th grade! I’ve been doing competition math for a while, achieving DHR on the AMC 8, winning HMI and founding — as well as winning — the first annual TKAMT alongside Charlie (he highkey carried). I’ve seen the competition math community here at TKA grow from the ground up and math team has a super special place in my heart, so I hope I can give back to y’all by making math fun and exciting! I serve as both the co-competition director and co-president, and pretty much run things around here except for when I don’t, which is a lot. I do lots of stuff outside math but you’ll never know because I’m so enigmatic and mysterious. mwehehehe",
  },
  {
    name: "Charlie Huang", grade: 10, house: "johan", role: "Coach & Problem Writer",
    photo: "charlie-huang.jpg",
    bio: "I’m Charlie, a sophomore at TKA and proud to be a coach and problem writer in our Junior High Math Team. I started competitive math in 4th grade, qualified for AIME 5 times since 5th grade, and placed on the Distinguished Honor Roll for both AMC 10 and AMC 8. I also achieved several awards in SMT and BMT, such as 9th place in the Discrete Round for BMT. Outside of math, I also have a strong interest in science, badminton, vibe coding, watching movies with friends, and performing for Knightshine (the high school choir).",
  },
  {
    name: "Daniel Yang", grade: 12, house: "johan", role: "",
    photo: "daniel-yang.jpg",
    bio: "Daniel is a senior at TKA and has been a part of the math team since 6th grade. He started coaching last year and has qualified for AIME. He enjoys coming up with challenging problems and solving them, especially in discrete and geometry. He also loves playing table tennis, coding, reading books/articles, dancing to piano songs, and playing games. Don’t worry, Daniel will save your money by not drinking much boba throughout the school year (he’s altruistic like that).",
  },
  {
    name: "Yifan Jiang", grade: 9, house: "johan", role: "",
    photo: "yifan-jiang.jpg",
    bio: "Hello new math team members! My name is Yifan and I am in the 9th grade this year. During my first year in TKA during 8th grade, I loved how the math team brought math students together and I made many new friends there. At home, the only drive/motivation to go to school on Wednesday or Thursday is the math team (and my friends). During that year, I attended many math competitions with the math team and even though I didn’t do very well on many of them, they were the highlights of my middle school math career and it helped me see math as a whole picture. In the math team itself, I look back and see how I grew within my house and now know my house and other math team members very well. I hope you guys can have the same look on the 2026-27 math team as I did this year. Btw I also play soccer and other stuff.",
  },

  // ---- Kaleb ----
  {
    name: "Isabel Zheng", grade: 11, house: "kaleb", role: "Co-President",
    photo: "isabel-zheng.jpg",
    bio: "Hi! I’m Isabel, a junior at TKA. I’ve been a part of math team since 6th grade and have participated in many math competitions, including being placed on the Honor Roll for AMC 8. When I first joined, I was really shy and timid, but math team helped me grow a lot and improve my confidence. Since 9th grade, I’ve been serving as a coach and on the design team, creating the branding for our team and the annual TKA Math Tournament (including the cute mascots!) To me, math team is not about placing well in competitions, but it’s about creating a community where people can connect with others and challenge themselves through competition math, so as co-president I hope to help math team grow in that direction. Other than math, I also enjoy scrapbooking, coding, and trying out new recipes from Instagram!",
  },
  {
    name: "Kaden Leong", grade: 10, house: "kaleb", role: "Problem Writer",
    photo: "kaden-leong.jpg",
    bio: "Sup y’all 😎! I’m Kaden, a sophomore at TKA. I’ve been a part of TKA’s math team since 6th grade and have participated in dozens of competitions in middle and high school. Throughout my competition math journey, I’ve earned DHR on the AMC 8, top 25% for BmMT in 6th, 7th, and 8th grade, top 25% at SMT and 1.5pts below the AIME cutoff twice for AMC 10. I am also a problem writer for TKAMT and the math team diagnostic. Outside of the math realm, I enjoy traveling and playing Bananagrams, and I was also on our high school badminton team.",
  },
  {
    name: "James Song", grade: 9, house: "kaleb", role: "",
    photo: "james-song.jpg",
    bio: "Hello fellow humans! My name is James and I am in 9th grade this year. This is my third year in TKA, and my third year in the math team. Math team was a huge part of my junior high experience, I have met many friends during it, and have also gone to various math competitions. Doing well in some and not so well in others. I have gotten a Distinguished Honor Roll for the AMC 8 and am working towards getting into AIME. I like playing video games and table tennis. I also do computer programming and am fluent in Chinese. I have a pet dog named Rocky and am also a First Class Scout in Boy Scouts. I hope that math team is just as good this year as it was last year. I hope all of you have fun, grow, and make lasting memories in this year of the JH math team.",
  },
  {
    name: "Leo Yang", grade: 9, house: "kaleb", role: "",
    photo: "leo-yang.jpg",
    bio: "Hello people! My name is Leo and I am in 9th grade this year. Math Team was a very important part of my time here at TKA. I have grown in my math skills by learning during meetings as well as going to competitions with the team. I have also met many new friends at Math Team. I like to play video games and tennis. I have a pet dog named Sam.",
  },

  // ---- Jackie ----
  {
    name: "Andrew Wong", grade: 12, house: "jackie", role: "",
    photo: "andrew-wong.jpg",
    bio: "Hi, I’m Andrew, a senior at TKA. I’ve been part of the math team since I joined during COVID when I was in 6th grade. Some of my first memories of TKA came from our practices over Zoom that year and meeting all my teammates. I’ve competed at several different math competitions over middle and high school, including getting DHR on the AMC 8 qualifying for AIME 3 times through the AMC 10. The math team community was a huge part of my middle school experience, so I wanted to continue contributing to it throughout high school and I started coaching in 9th grade. I look forward to coaching again this year and I hope everyone can find something they enjoy about math this year! Outside of the math team, I enjoy working on 3D printed projects and robotics, as well as playing chess and tennis.",
  },
  {
    name: "Katherine Yang", grade: 11, house: "jackie", role: "",
    photo: "katherine-yang.jpg",
    bio: "Hi everyone! I’m Katherine, a junior at TKA. I’ve been passionate about math since I was in elementary school, participating in various competitions from then through high school. I’m on the Honor Roll for AMC 8 and the Achievement Roll for AMC 10. Watching the TKA Annual Math Tournament and the community has made me even more passionate about contributing to TKA’s math team. I’m extremely excited to be giving back to the math community that I’ve been a part of for so long. Outside of math, I love business, science, dancing, and photography.",
  },
  {
    name: "Daniel Han", grade: 9, house: "jackie", role: "",
    photo: "daniel-han.jpg",
    bio: "Hi! I’m Daniel, a freshman at TKA. I joined the Math Team in 6th grade, and it’s been a big part of my middle school years. Looking back, I remember spending Wednesdays and Thursdays solving problems with friends, getting stuck on one question for way too long, and feeling relieved when someone finally figured it out. Now, I am excited to be on the other side as a coach, and give back to the team that gave me so much. I hope I can help make Math Team a place where students aren’t afraid to ask questions, challenge themselves, and enjoy the process of learning. Aside from math, I love sailing, playing video games, singing, and exploring science and technology.",
  },
  {
    name: "Dayeon Lim", grade: 12, house: "jackie", role: "",
    photo: "dayeon-lim.jpg",
    bio: "Hi! I’m Dayeon, a senior at TKA. I’ve been part of the math team since 10th grade and participated in many math competitions throughout middle school, including earning DHR on the AMC 8 and qualifying for AIME. I loved being part of the math team as a middle schooler, and I hope I can help make the community just as fun and welcoming for you all! Outside of math, I also enjoy dancing, coding, and ceramics :)",
  },

  // ---- Kyle ----
  {
    name: "Eric Aranjo", grade: 12, house: "kyle", role: "",
    photo: "eric-aranjo.jpg",
    bio: "Salutations huzz. I am Eric John Aranjo, the most diverse and talented member of math team leadership. I am a senior at TKA and am known for being extremely charismatic and sigma. I have many esteemed competition math accomplishments from the past year, which include a distinguished honorable mention at the University of California Berkeley Mathematics Tournament, notably outdoing fellow math team coach Dayeon Lim. I enjoy extracurriculars such as water polo, investment banking, and serving the homeless at local soup kitchens. I am really honored to lead a house of middle schoolers for the math team, as I think it would be such a meaningful experience, and I’d really value the chance to work together. I feel like I could create a really positive and encouraging environment for the students, especially since middle school is such an important time for building confidence in math. It would be great to help them not only improve their skills, but also feel more comfortable asking questions and challenging themselves. Overall, it would mean a lot to me to take on this role, and I think I can make it a really impactful and fun experience for everyone involved.",
  },
  {
    name: "Emma Jin", grade: 10, house: "kyle", role: "Design & Tech Team",
    photo: "emma-jin.jpg",
    bio: "Hey guys I’m Emma, a sophomore at TKA. I joined Math Team back in 6th grade and I remember it being a huge part of my junior high years. Looking back it has taught me many skills and was a very fun experience. I have participated in many competitions and did good in some, and not so good in others. This year I am excited to work on the design and tech team. Outside of Math Team, I like playing volleyball, reading, sleeping, and hanging out with my sister. I hope to meet all of you!",
  },
  {
    name: "Jeff Hsu", grade: 10, house: "kyle", role: "",
    photo: "jeff-hsu.jpg",
    bio: "Hi Math Team! I’m Jeff, a sophomore at TKA. I’ve been a part of the math team since 7th grade and have gone to lots of competitions. I really loved the math team when I first joined and it was a great experience! I hope I can make your math team experience just as fun and amazing. I believe that math team is more than just a place to learn math, it’s a community where you learn and grow with all the students and coaches around you. Besides the math team, I’m also on the TKA Robotics team, working as our business lead. My hobbies are swimming, K-pop, and I also work as a tutor. Thanks!",
  },
  {
    name: "Brian Jiang", grade: 9, house: "kyle", role: "Secretary & Tech Team",
    photo: "brian-jiang.jpg",
    bio: "Hi! I’m Brian, a freshman at TKA. I joined math team in 8th grade and 8th grade was easily the most fun year out of all so far at TKA because of math team. Now that I am a coach, I hope to give back to this amazing community through coaching all of you. Math team is such a great community and I hope I can add to this. This year I am excited to be the secretary and on the tech team. Outside of math, I love to fold origami, play tennis, and watch anime (don’t ask which 🥴). Hope y’all have a great year!",
  },
];

// Faculty advisor — featured separately from student coaches.
const ADVISOR = {
  name: "Dr. Elisa Ting", role: "Faculty Advisor",
  photo: "dr-ting.jpg",
  bio: "I am extremely excited to serve as the JH Math Team advisor for the 5th year. I am inspired by the God given gifts and talents of the HS coaches and the time they devote towards the success and character development of our JH Math Team members. Mostly, I am inspired by the intellectual resilience and the strong community that is developed as they practice, problem solve, analyze, and collaborate with one another. Whether it is my role as a Math Team advisor or a Science teacher (JH & HS), I strive to help students achieve success while deepening their faith in God. “Champions never complain, they are too busy getting better” ~John Wooden",
};

/* JV Coaches — meet weekly on Wednesdays. No house assignment (JV runs
   separately from the four houses above). Drop photos in assets/coaches/
   named exactly as the "photo" field below, same as varsity coaches. */
const JV_COACHES = [
  {
    name: "Aiden Kwon", grade: 10, role: "",
    photo: "aiden-kwon.jpg",
    bio: "Hey guys! I’m Aiden, a sophomore this year. I’m super excited to be able to return to coaching TKA JVMT for the 2026-2027 season. I really enjoyed getting to know a lot of you last year, and can’t wait to help you refine your math skills this coming season. I know that part of what made my middle school years was a community that I could be myself and have fun in, and I hope to cultivate the same environment for you guys. I’m horrendous at ball sports (ask Mr. Petiti) but I love to swim and play the violin (I've been playing for 9 ish years!). I also love Clairo, Daniel Caesar, Keshi, Labubus, matcha, cafes, and wired earphones. I’m also really interested in public health, health literacy, and palliative medicine, so if you’re interested in those, let’s chat! If you need help with any math below calculus, English, biology, want to know pearls for TKA classes, or in being a professional larper, feel free to hit me up. \"The most important thing in life is to learn how to give out love, and to let it come in\" - Morrie Schwartz",
  },
  {
    name: "Letong Qu", grade: 10, role: "",
    photo: "letong-qu.jpg",
    bio: "",
  },
  {
    name: "Alex Peng", grade: 12, role: "",
    photo: "alex-peng.jpg",
    bio: "Hi to anyone who is for some reason taking the time to actually read this! I’m Alex and I’ve been part of the JV Math Team since 6th grade during the Cisco Webex years. I am very excited to be a coach again this year and truly looking forward to another season full of learning, discussions, joy, and meaning. Despite switching to humanities 👀 I still harbor an attachment and passion for math since it teaches us how things work from calculating your grocery bills to extrapolating the parabola of the sun or whatever mathletes do. Anywho, it is my pleasure and honor to hold the position as head coach of the JV team, and I will do well with my abilities to nurture the next generation of mathematicians to ace every math test, steamroll AMCs, and earn the place it deserves in the sun at competitions from Berkeley to Stanford 🙂‍↕️ 🙂‍↔️",
  },
  {
    name: "Matthew Chang", grade: 12, role: "",
    photo: "matthew-chang.jpg",
    bio: "Hi, I’m Matthew and I’m a senior this year. I’ve been on the Math Team since middle school and Varsity Coach for 2 years. I enjoy thinking in general logically about philosophy and contemplating what exactly constitutes moral behavior. I also do robotics, coding, and read lots of mangas in my free time.",
  },
  {
    name: "Dael Byun", grade: 10, role: "",
    photo: "dael-byun.jpg",
    bio: "Hi, my name is Dael Byun, and I’m a sophomore. I’m a new JV coach, and I joined the Math Team to gain some coaching experience as well as to bring enthusiasm and drive. My favorite area of math is algebra. I like playing guitar, reading, playing basketball, typing, and doing independent research. I want to major in cognitive science in college. Feel free to ask any questions about anything I said if you’re interested. My motto: work hard, pray hard.",
  },
  {
    name: "Joshua Leung", grade: 10, role: "",
    photo: "joshua-leung.jpg",
    bio: "Yo, my name is Joshua but most people just call me Josh. I’m currently in the 10th grade and enrolled in AP Pre-calc. I have absolutely zero experience with competition math however I am friends with Kaden and Jeff so I know a little bit of stuff. In fact it could be said that I absolutely destroyed Kaden in every Gimkit and Blooket ever (including math). If y'all ever need advice for sports like any sport ever I would be more than willing to help out. In fact, I’m pretty open to you guys asking me for advice for anything and I’ll try and give my best answer. Anyways, I am very excited to try being a coach this year and I can’t wait to impart all of my knowledge, tricks, and jokes to the kids.",
  },
  {
    name: "Aren Lee", grade: 10, role: "",
    photo: "aren-lee.jpg",
    bio: "Hi everyone! I’m Aren and I am a sophomore this year. I’m great with normal curriculum math stuff (I’m almost at Charlie’s level) but haven’t really done any competition math (the most I ever did was Math Kangaroo in middle school). My favorite area of math is statistics. Aside from math, I do a lot of really weird sports and competitions. I do archery, stock investing competitions, and competed in the National Spelling Bee in middle school. I also like to read and play board games. Feel free to ask me about any school-related stuff or any of my odd competitions. I’m excited to meet and coach you guys on the JV Math Team!",
  },
  {
    name: "Jingwei Guo", grade: 9, role: "",
    photo: "jingwei-guo.jpg",
    bio: "Hi, my name is Jingwei Guo, and I’m a freshman this year. I attended the math team in sixth and eighth grade. This year I decided to become a coach because I enjoy learning math with other students, so I’m very excited to meet you guys in JV! Some things I like to do outside of school include swimming, reading novels, piano, and crafts. I have attended some math competitions like AMC 8.",
  },
  {
    name: "Gloria Zhao", grade: 9, role: "",
    photo: "gloria-zhao.jpg",
    bio: "Hello! I’m Gloria Zhao, and I’m a freshman this year! I was on the math team in 8th grade, and this year I joined as a coach to gain some experience and spend time with other people who love math as much as I do. Outside of math, some of my hobbies include volleyball, robotics, art, K-pop, and writing. I’m also currently on the TKA robotics team! I’m really excited to be coaching some of you on the TKA JV Math Team, and I hope we can all have an amazing time together! XDXD",
  },
  {
    name: "Hanxuan Meng", grade: 9, role: "",
    photo: "hanxuan-meng.jpg",
    bio: "Hi! My name is Hanxuan Meng and I am a freshman this year. I did math team in 6th grade and it was really fun! Some of my previous competitions include AMC 8, AMC 10, MATHCOUNTS, and the TKA Math Tournament. Other than math, I am in Cross Country and I am playing violin in an orchestra outside of school. I also wish to become a doctor or any healthcare professional when I grow up. Anyways, I’m excited to meet all of you on the JV math team!",
  },
];
