// Toggle the navigation menu
var navLinks = document.getElementById("navLinks");
var overlay = document.getElementById("overlay");

function showMenu() {
  navLinks.style.right = "0";
  overlay.classList.add("active");
}

function hideMenu() {
  navLinks.style.right = "-280px";
  overlay.classList.remove("active");
}

// Hero slideshow - change slide every 5 seconds
const heroSlides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

function showNextSlide() {
  heroSlides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % heroSlides.length;
  heroSlides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 5000);

// Scroll-down arrow - jump to next section smoothly
const scrollArrow = document.querySelector(".scroll-down-arrow");

if (scrollArrow) {
  scrollArrow.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("services").scrollIntoView({
      behavior: "smooth",
    });
  });
}

// Slide in animation on scroll for services cards
const serviceCards = document.querySelectorAll(
  ".our-services-col, .fade-up, .partner-col, .cta-section .cta-buttons .hero-btn, .team-col, .impact-col, .programme-row",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);

serviceCards.forEach((card) => observer.observe(card));

// Current Year in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Team member bio data

const teamdata = {
  david: {
    name: "David Oduor",
    role: "Founder & Programs Lead",
    photo: "images/david-oduor.jpg",
    quote:
      '"I didn\'t just learn to read in this library — I learned to think ahead, on the chessboard and in life. Now I get to open that same door for the next child."',
    bio: `<p>David grew up right here in Mathare — and once needed the very support he now provides. As a student at Mashimoni School of Hope, he discovered more than books: he found chess, mentors, and a reason to believe in his future.</p>
        <p>Today, as Founder and Programs Lead, he's turned that experience into a mission — building safe spaces where children learn to read, think several moves ahead on a chessboard, and see a future beyond their circumstances.</p>
        <p>He works hand-in-hand with students, volunteers, and the wider community to run programs that open doors many thought were closed. For David, every child who learns to love a book, play a game of chess, or simply believe in themselves is proof that where you start doesn't decide where you finish.</p>`,
  },

  kevin: {
    name: "Kevin Olengo",
    role: "Community Engagement & Partnerships",
    photo: "images/kevin-olengo.jpg",
    quote: '"Change doesn\'t happen to a community — it happens with one."',
    bio: `<p>Kevin believes meaningful change happens when communities work together. He builds relationships with local leaders, schools, volunteers, and partners who share YouthRiseChangeMakers' vision of empowering children and youth.</p>
        <p>His work focuses on strengthening collaboration, mobilizing resources, and making sure every initiative creates lasting impact within the community.</p>
        <p>Kevin is driven by one belief: sustainable change begins when communities become active participants in shaping their own future.</p>`,
  },

  damaris: {
    name: "Damaris Adhiambo",
    role: "Education & Child Development",
    photo: "images/damaris-adhiambo.jpeg",
    quote: '"Every child deserves a room where they feel like they belong."',
    bio: `<p>Damaris is dedicated to creating safe, inclusive, and inspiring learning environments where every child feels valued.</p>
        <p>She supports educational activities, literacy programs, and mentorship sessions that help children grow academically while building confidence, creativity, and essential life skills.</p>
        <p>Her passion is simple: helping every learner discover their potential, regardless of where they started.</p>`,
  },

  nephine: {
    name: "Nephine",
    role: "Youth Empowerment Coordinator",
    photo: "images/nephine.jpg",
    quote:
      '"Your circumstances are not your future — I\'m here to prove that."',
    bio: `<p>Nephine works alongside young people to nurture leadership, creativity, and personal growth.</p>
        <p>She organizes mentorship programs, life-skills workshops, and youth engagement activities that help participants become confident leaders in their schools and communities.</p>
        <p>Her mission: making sure every young person believes their circumstances should never define their future.</p>`,
  },

  kanguto: {
    name: "David Kanguto",
    role: "Operations & Community Programs",
    photo: "images/David-kanguto.jpeg",
    quote: "\"Impact isn't glamorous. It's showing up, every single day.\"",
    bio: `<p>David helps coordinate the day-to-day activities that keep YouthRiseChangeMakers running effectively.</p>
        <p>From supporting volunteers and organizing community initiatives to making sure programs reach the children who need them most, he plays an essential role in turning ideas into action.</p>
        <p>He's committed to building sustainable programs that create long-term opportunities for children, youth, and families throughout the community.</p>`,
  },

  james: {
    name: "James Ochieng",
    role: "Head Coach, BoardLords Chess Club",
    photo: "images/jimmy.jpeg",
    quote:
      '"A queen sacrificed is not a queen lost — it\'s a lesson the board just taught you."',
    bio: `<p>James didn't set out to build a chess club — he set out to share something he loved. What began as a volunteer teaching kids openings and puzzles after school soon became something bigger: a standing invitation for any child in Mathare to sit down, think, and discover what they were capable of.</p>
    <p>Today, as Head Coach of BoardLords Chess Club, James trains students not just to play chess, but to think several moves ahead — on the board and in life. Under his coaching, BoardLords has gone on to compete against — and beat — other Schools of Hope and schools from across Kenya, proving that talent in Mathare has never been the question, only opportunity.</p>
    <p>But for James, the trophies are the smallest part of the story. What matters more is watching a child who once made impulsive moves learn to pause, calculate, and choose wisely — then carry that same patience into how they handle a hard exam, a disagreement, or a setback. Every checkmate his students learn to see coming is proof that with the right guidance, kids from Mathare can out-think, out-plan, and outlast whatever the world puts in front of them.</p>`,
  },
};

const teamModalOverlay = document.getElementById("teamModalOverlay");

function openTeamModal(key) {
  const member = teamdata[key];

  document.getElementById("modalPhoto").src = member.photo;
  document.getElementById("modalPhoto").alt = member.name;
  document.getElementById("modalName").textContent = member.name;
  document.getElementById("modalRole").textContent = member.role;
  document.getElementById("modalQuote").textContent = member.quote;
  document.getElementById("modalBio").innerHTML = member.bio;

  teamModalOverlay.classList.add("active");
}

function closeTeamModal(event) {
  if (
    !event ||
    event.target === teamModalOverlay ||
    event.target.classList.contains("team-modal-close")
  ) {
    teamModalOverlay.classList.remove("active");
  }
}

//Animated count-up for Impact numbers
const impactNumbers = document.querySelectorAll(".impact-number");

function animateCount(el) {
  const target = parseInt(el.getAttribute("data-target"));
  let current = 0;
  const increment = target / 60;

  function updateCount() {
    current += increment;
    if (current < target) {
      el.textContent = Math.ceil(current);
      requestAnimationFrame(updateCount);
    } else {
      el.textContent = target + "+";
    }
  }

  updateCount();
}

const imapctObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        imapctObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);

impactNumbers.forEach((num) => imapctObserver.observe(num));

// Programme detail data
const programmesData = {
  library: {
    name: "Evening Library & Learning Hub",
    meta: "Open daily · All ages · Mashimoni Library",
    photo: "images/safe-learning-spaces.jpeg",
    bio: `<p>Some children walk through a door and find a library. Ours walk through a door and find belonging.</p>
        <p>Warm light, quiet corners, and shelves stacked with worlds waiting to be opened — every evening, this room turns a hard day into a fresh start. Children, teens, and even adults from the community come to read, study, and simply have a safe place to be.</p>
        <p>No book stays unread here. No child sits unseen.</p>`,
  },
  discussions: {
    name: "Group Discussions",
    meta: "Held daily · All ages · Mashimoni Library",
    photo: "images/group-discussions.jpeg",
    bio: `<p>Give a child a topic, and watch them find their voice.</p>
        <p>In every circle, opinions are welcomed, not corrected. Kids learn to disagree with respect, listen without interrupting, and speak up like their ideas matter — because they do.</p>
        <p>This is where confidence gets its first rehearsal, one honest conversation at a time.</p>`,
  },
  elearning: {
    name: "E-Learning Sessions",
    meta: "During school holidays · All ages · Mashimoni Library",
    photo: "images/Zoom-sessions.jpeg",
    bio: `<p>A laptop. A signal. And suddenly, the whole world is in the room.</p>
        <p>Through live e-learning sessions, students in Mathare sit shoulder-to-shoulder — virtually — with educators who believe geography should never decide how far a child can go.</p>
        <p>Sessions run whenever school is out, turning holiday downtime into a head start.</p>`,
  },
  chess: {
    name: "Chess Training & Competitions",
    meta: "Wednesdays & Fridays · All ages · Mashimoni Library",
    photo: "images/chess-competion.jpg",
    bio: `<p>Every match starts the same way: one pawn, one decision.</p>
        <p>But what a child learns on this board — patience, focus, the courage to think three moves ahead — follows them long after the game ends. Coached by BoardLords Chess Club, students train twice a week and compete against other Schools of Hope and schools across Kenya.</p>
        <p>Here, Mathare's next grandmasters are already making their opening moves.</p>`,
  },
  debate: {
    name: "Debate Competitions",
    meta: "Scheduled through the term · All ages · Venue varies",
    photo: "images/debate-competitons.jpeg",
    bio: `<p>Give them a microphone, and they'll give you a reason to believe.</p>
        <p>In every debate, students learn to build an argument, hold their ground, and win a room with nothing but words and conviction. Competitions are held periodically through the term, in partnership with Great Debaters.</p>
        <p>This is where young voices become impossible to ignore.</p>`,
  },
  girlsclub: {
    name: "Girls' Club Sessions",
    meta: "Weekly · Girls, all ages · Mashimoni Library",
    photo: "images/girls-club-sessions.jpeg",
    bio: `<p>A closed door. An open conversation.</p>
        <p>In this circle, girls talk about the things that matter most — their bodies, their boundaries, their futures — without shame and without judgment.</p>
        <p>Here, every girl leaves a little braver than she arrived.</p>`,
  },
};

const programmeModalOverlay = document.getElementById("programmeModalOverlay");

function openProgrammeModal(key) {
  const programme = programmesData[key];
  if (!programme || !programmeModalOverlay) return;

  document.getElementById("modalProgrammePhoto").src = programme.photo;
  document.getElementById("modalProgrammePhoto").alt = programme.name;
  document.getElementById("modalProgrammeName").textContent = programme.name;
  document.getElementById("modalProgrammeMeta").textContent = programme.meta;
  document.getElementById("modalProgrammeBio").innerHTML = programme.bio;

  programmeModalOverlay.classList.add("active");
}

function closeProgrammeModal(event) {
  if (
    !event ||
    event.target === programmeModalOverlay ||
    event.target.classList.contains("team-modal-close")
  ) {
    programmeModalOverlay.classList.remove("active");
  }
}

// Filter tags - show/hide programme rows by category
const filterTags = document.querySelectorAll(".filter-tags");
const programmeRows = document.querySelectorAll(".programme-row");

filterTags.forEach((tag) => {
  tag.addEventListener("click", () => {
    filterTags.forEach((t) => t.classList.remove("active"));
    tag.classList.add("active");

    const filter = tag.getAttribute("data-filter");

    programmeRows.forEach((row) => {
      const categories = row.getAttribute("data-category");

      if (filter === "all" || categories.includes(filter)) {
        row.style.display = "flex";
      } else {
        row.style.display = "none";
      }
    });
  });
});

const blogCards = document.querySelectorAll(".blog-card");

if (blogCards.length) {
  filterTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      const filter = tag.getAttribute("data-filter");

      blogCards.forEach((card) => {
        const categories = card.getAttribute("data-category");

        if (filter === "all" || categories.includes(filter)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// Photo lightbox
const photoModalOverlay = document.getElementById("photoModalOverlay");

function openPhotoModal(el) {
  document.getElementById("photoModalImage").src = el.getAttribute("data-src");
  document.getElementById("photoModalImage").alt =
    el.getAttribute("data-caption");
  document.getElementById("photoModalCaption").textContent =
    el.getAttribute("data-caption");

  photoModalOverlay.classList.add("active");
}

function closePhotoModal(event) {
  if (
    !event ||
    event.target === photoModalOverlay ||
    event.target.classList.contains("photo-modal-close")
  ) {
    photoModalOverlay.classList.remove("active");
  }
}

// Gallery filter tags
/* const filterTags = document.querySelectorAll(".filter-tags"); */
const galleryItems = document.querySelectorAll(".gallery-item");

if (galleryItems.length) {
  filterTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      const filter = tag.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        const category = item.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}
