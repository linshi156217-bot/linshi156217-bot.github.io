import Image from "next/image";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Whitby+Harbour";

const iconPaths = {
  pin: (
    <>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  phone: (
    <path d="M8.4 3.7 6.8 2.2a2 2 0 0 0-2.8 0L2.8 3.4c-2.5 2.5 2.2 8.8 5.1 11.7 2.9 2.9 9.2 7.6 11.7 5.1l1.2-1.2a2 2 0 0 0 0-2.8l-1.5-1.6a2 2 0 0 0-2.6-.2l-1.7 1.3a2 2 0 0 1-2.5-.1l-4.1-4.1a2 2 0 0 1-.1-2.5l1.3-1.7a2 2 0 0 0-.2-2.6Z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  walk: (
    <>
      <circle cx="13" cy="4.5" r="2" />
      <path d="m11 8-2.5 4 3 2 1.5 6M11 8l4 3 3-1M8.5 12 5 18" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  down: <path d="m7 10 5 5 5-5" />,
};

function Icon({ name, size = 20 }) {
  return (
    <svg
      aria-hidden="true"
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  );
}

const dishes = [
  {
    image: "/assets/hake.webp",
    alt: "Pan-roasted North Sea hake with crushed potatoes, greens and caper butter",
    number: "01",
    name: "North Sea hake",
    detail: "Crushed new potatoes · spring greens · brown butter · capers",
    price: "£26",
    className: "dish-featured",
  },
  {
    image: "/assets/crab-linguine.webp",
    alt: "Whitby crab linguine with tomatoes, chilli, lemon and parsley",
    number: "02",
    name: "Whitby crab linguine",
    detail: "Cherry tomato · chilli · lemon · parsley · shellfish butter",
    price: "£24.50",
    className: "",
  },
  {
    image: "/assets/rhubarb-tart.webp",
    alt: "Yorkshire rhubarb and almond tart with crème fraîche",
    number: "03",
    name: "Rhubarb & almond",
    detail: "Forced Yorkshire rhubarb · crème fraîche · warm compote",
    price: "£9",
    className: "",
  },
  {
    image: "/assets/salt-hawthorn/croquettes.webp",
    alt: "Three smoked haddock croquettes with mustard mayonnaise and watercress",
    number: "04",
    name: "Smoked haddock croquettes",
    detail: "Mustard mayonnaise · watercress · pickled shallot",
    price: "£9.50",
    className: "",
  },
  {
    image: "/assets/salt-hawthorn/lamb.webp",
    alt: "Yorkshire lamb rump with peas, broad beans and charred little gem",
    number: "05",
    name: "Yorkshire lamb rump",
    detail: "Peas · broad beans · mint · charred little gem",
    price: "£28",
    className: "",
  },
];

const menuGroups = [
  {
    title: "First",
    note: "A few things to begin",
    items: [
      ["Smoked haddock croquettes", "Mustard mayonnaise · watercress", "£9.50"],
      ["Brown crab rarebit", "Sourdough · pickled shallot", "£11"],
      ["Woodland mushrooms", "Soft polenta · thyme · hazelnut", "£10"],
    ],
  },
  {
    title: "Main",
    note: "The coast, the moors and the season",
    items: [
      ["North Sea hake", "Crushed potatoes · greens · caper butter", "£26"],
      ["Whitby crab linguine", "Tomato · chilli · lemon · parsley", "£24.50"],
      ["Yorkshire lamb rump", "Peas · mint · charred little gem", "£28"],
      ["Salt-baked celeriac", "Pearl barley · leek · smoked almond", "£22"],
    ],
  },
  {
    title: "Last",
    note: "Puddings and Yorkshire cheese",
    items: [
      ["Rhubarb & almond tart", "Crème fraîche · rhubarb compote", "£9"],
      ["Sticky toffee pudding", "Miso caramel · vanilla ice cream", "£9"],
      ["Yorkshire cheeses", "Oatcakes · apple · chutney", "£12"],
    ],
  },
];

const visitDetails = [
  {
    number: "01",
    title: "From the harbour",
    text: "About five minutes on foot from Whitby Harbour and the swing bridge.",
  },
  {
    number: "02",
    title: "Accessibility",
    text: "Level entrance at the front with an accessible ground-floor loo.",
  },
  {
    number: "03",
    title: "Children",
    text: "Highchairs are available and the kitchen can prepare smaller portions.",
  },
  {
    number: "04",
    title: "Dogs",
    text: "Well-behaved dogs are welcome at our two outdoor pavement tables.",
  },
  {
    number: "05",
    title: "Dietaries",
    text: "Vegetarian dishes daily, with gluten-free adaptations where possible.",
  },
  {
    number: "06",
    title: "What to wear",
    text: "Come as you are. Walking boots, sea-salt hair and celebrations are all welcome.",
  },
];

function Wordmark({ light = false }) {
  return (
    <span className={`wordmark${light ? " wordmark-light" : ""}`}>
      <span className="wordmark-monogram">S&amp;H</span>
      <span className="wordmark-copy">
        <strong>Salt &amp; Hawthorn</strong>
        <small>Whitby · North Yorkshire</small>
      </span>
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <div className="demo-ribbon">
        <p>
          <a href="/work/">Linshi portfolio ↑</a>
          <span>Concept website</span>
          Fictional restaurant created for demonstration
        </p>
      </div>

      <header className="site-header">
        <a href="#top" aria-label="Salt and Hawthorn home">
          <Wordmark light />
        </a>
        <nav aria-label="Main navigation">
          <a href="#restaurant">Restaurant</a>
          <a href="#menu">Menu</a>
          <a href="#visit">Your visit</a>
          <a
            className="header-directions"
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            Directions <Icon name="arrow" size={16} />
          </a>
        </nav>
        <a
          className="mobile-header-action"
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Open directions in Google Maps"
        >
          <Icon name="pin" size={21} />
        </a>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <Image
            className="hero-image"
            src="/assets/hero-exterior.webp"
            alt="A warmly lit coastal restaurant on a wet Whitby street overlooking the sea"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-overlay" />
          <div className="hero-content page-shell">
            <p className="overline hero-overline">A coastal dining room in Whitby</p>
            <h1>
              The North Sea,
              <br />
              <em>brought to the table.</em>
            </h1>
            <div className="hero-lower">
              <p>
                Fish from the harbour, produce from Yorkshire and a warm room at
                the end of a day on the coast.
              </p>
              <div className="hero-actions">
                <a className="button button-ivory" href="#menu">
                  Explore the menu <Icon name="arrow" size={17} />
                </a>
                <a
                  className="button button-glass"
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="pin" size={17} /> Find us
                </a>
              </div>
            </div>
          </div>
          <div className="hero-status">
            <span>
              <Icon name="clock" size={16} /> Tuesday–Sunday
            </span>
            <span>
              <Icon name="walk" size={16} /> Five minutes from the harbour
            </span>
          </div>
          <a className="scroll-marker" href="#restaurant" aria-label="Discover the restaurant">
            <span>Discover</span>
            <Icon name="down" size={16} />
          </a>
        </section>

        <section className="introduction section" id="restaurant">
          <div className="page-shell intro-grid">
            <div className="section-index">
              <span>01</span>
              <p>The restaurant</p>
            </div>
            <div className="intro-copy">
              <p className="overline">Whitby · 54.4863° N, 0.6133° W</p>
              <h2>
                A little restaurant
                <br />
                with the whole coast outside.
              </h2>
              <div className="intro-body">
                <p className="lead">
                  Salt &amp; Hawthorn is imagined as the place you hope to find
                  after a long walk by the sea: calm, generous and unmistakably
                  of its surroundings.
                </p>
                <p>
                  The menu changes with the boats, the farms and the weather.
                  Inside, twenty-eight seats face an open kitchen; outside,
                  Whitby Harbour is only a few minutes away.
                </p>
              </div>
            </div>
          </div>
          <div className="page-shell fact-line" aria-label="Restaurant quick facts">
            <div>
              <span>28</span>
              <p>Seats in the dining room</p>
            </div>
            <div>
              <span>5 min</span>
              <p>Walk from the harbour</p>
            </div>
            <div>
              <span>Tue–Sun</span>
              <p>Lunch and dinner</p>
            </div>
          </div>
        </section>

        <section className="dishes section" aria-labelledby="dishes-title">
          <div className="page-shell">
            <div className="editorial-heading">
              <div className="section-index">
                <span>02</span>
                <p>From the kitchen</p>
              </div>
              <div>
                <p className="overline">Right now</p>
                <h2 id="dishes-title">
                  Five reasons
                  <br />
                  to come inside.
                </h2>
              </div>
              <p className="heading-note">
                Familiar ingredients, treated carefully. These are the plates
                our fictional regulars would ask for by name.
              </p>
            </div>

            <div className="dish-layout">
              {dishes.map((dish) => (
                <article
                  className={`dish-editorial ${dish.className}`}
                  key={dish.name}
                >
                  <div className="dish-photo">
                    <Image
                      src={dish.image}
                      alt={dish.alt}
                      fill
                      sizes={
                        dish.className
                          ? "(max-width: 799px) 100vw, 62vw"
                          : "(max-width: 799px) 100vw, 34vw"
                      }
                    />
                    <span className="dish-number">{dish.number}</span>
                  </div>
                  <div className="dish-information">
                    <div>
                      <h3>{dish.name}</h3>
                      <p>{dish.detail}</p>
                    </div>
                    <span>{dish.price}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="menu-section section" id="menu">
          <div className="page-shell">
            <div className="menu-intro">
              <div className="section-index section-index-light">
                <span>03</span>
                <p>The menu</p>
              </div>
              <div>
                <p className="overline overline-gold">An illustrative selection</p>
                <h2>From coast, field &amp; fire.</h2>
              </div>
              <p>
                A concise menu feels more confident than a catalogue. The dishes
                below are fictional and show how a real merchant&apos;s current
                offering could be presented.
              </p>
            </div>

            <div className="menu-list">
              {menuGroups.map((group) => (
                <section className="menu-group" key={group.title}>
                  <header>
                    <p>{group.note}</p>
                    <h3>{group.title}</h3>
                  </header>
                  <ul>
                    {group.items.map(([name, detail, price]) => (
                      <li key={name}>
                        <div>
                          <h4>{name}</h4>
                          <p>{detail}</p>
                        </div>
                        <span>{price}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <div className="menu-footer">
              <p>
                Please tell us about allergies before ordering. Our small
                kitchen handles gluten, dairy, nuts, shellfish and other
                allergens.
              </p>
              <a href="#visit">
                Plan your visit <Icon name="arrow" size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="room-section">
          <div className="room-image">
            <Image
              src="/assets/dining-room.webp"
              alt="An intimate restaurant dining room with oak tables, candlelight and an open kitchen"
              fill
              sizes="(max-width: 799px) 100vw, 62vw"
            />
            <span>Twenty-eight seats · one small kitchen</span>
          </div>
          <div className="room-copy">
            <p className="overline">The room</p>
            <blockquote>
              “Come in from the weather.
              <br />
              Stay for pudding.”
            </blockquote>
            <p>
              No starched formality. Just warm light, thoughtful cooking and a
              team that knows when to leave you to the conversation.
            </p>
            <div className="room-signature" aria-hidden="true">
              Salt &amp; Hawthorn
            </div>
          </div>
        </section>

        <section className="visit-section section" id="visit">
          <div className="page-shell">
            <div className="visit-heading">
              <div className="section-index">
                <span>04</span>
                <p>Your visit</p>
              </div>
              <div>
                <p className="overline">Before you set off</p>
                <h2>The details that make a difference.</h2>
              </div>
              <p>
                The useful answers visitors rarely find on Google Maps, presented
                before they need to ask.
              </p>
            </div>

            <div className="visit-list">
              {visitDetails.map((detail) => (
                <article key={detail.title}>
                  <span>{detail.number}</span>
                  <h3>{detail.title}</h3>
                  <p>{detail.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="location-section" id="find-us">
          <div className="location-atmosphere" aria-hidden="true">
            <span className="coordinate coordinate-one">54.4863° N</span>
            <span className="coordinate coordinate-two">0.6133° W</span>
            <span className="location-ring ring-one" />
            <span className="location-ring ring-two" />
            <span className="location-dot">
              <Icon name="pin" size={26} />
            </span>
          </div>
          <div className="location-content">
            <p className="overline overline-gold">Find us in Whitby</p>
            <h2>
              Five minutes
              <br />
              from the water.
            </h2>
            <address>
              Harbour Quarter
              <br />
              Whitby, North Yorkshire
              <small>Concept location — not a real address</small>
            </address>

            <div className="opening-hours">
              <div>
                <span>Tuesday–Thursday</span>
                <strong>12–3 · 5–10</strong>
              </div>
              <div>
                <span>Friday–Saturday</span>
                <strong>12–10</strong>
              </div>
              <div>
                <span>Sunday</span>
                <strong>12–8</strong>
              </div>
              <div>
                <span>Monday</span>
                <strong>Closed</strong>
              </div>
            </div>

            <a
              className="button button-gold"
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="pin" size={18} /> Open in Google Maps
            </a>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="page-shell contact-grid">
            <div>
              <p className="overline">No booking system required</p>
              <h2>
                Find us, call us,
                <br />
                or simply walk in.
              </h2>
            </div>
            <div className="contact-copy">
              <p>
                This demo deliberately keeps the journey simple. For a real
                restaurant, the buttons below become one-tap directions and a
                direct call to the team.
              </p>
              <div className="contact-actions">
                <a
                  className="button button-dark"
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get directions <Icon name="arrow" size={16} />
                </a>
                <a className="button button-outline" href="#menu">
                  View menu
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="page-shell footer-top">
          <Wordmark light />
          <p>
            A fictional mobile-first restaurant concept for visitors arriving
            from Google Maps.
          </p>
          <a href="#top">
            Back to top <span>↑</span>
          </a>
        </div>
        <div className="page-shell footer-bottom">
          <span>Concept only · not a real restaurant</span>
          <span>Whitby · North Yorkshire</span>
        </div>
      </footer>

      <nav className="mobile-dock" aria-label="Quick actions">
        <a href="#menu">
          <Icon name="menu" size={20} />
          <span>Menu</span>
        </a>
        <a
          className="dock-primary"
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="pin" size={20} />
          <span>Directions</span>
        </a>
        <a href="#contact">
          <Icon name="phone" size={20} />
          <span>Contact</span>
        </a>
      </nav>
    </>
  );
}
