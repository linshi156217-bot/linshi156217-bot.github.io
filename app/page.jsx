import Image from "next/image";

const iconPaths = {
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
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
  leaf: (
    <>
      <path d="M20 4C11 4 5 8 5 15c0 3 2 5 5 5 7 0 10-8 10-16Z" />
      <path d="M5 20c2-5 6-8 11-11" />
    </>
  ),
  access: (
    <>
      <circle cx="12" cy="4" r="2" />
      <path d="M8 8h8M12 6v6m0 0-4 8m4-8 5 7" />
    </>
  ),
  dog: (
    <>
      <path d="M7 10 4 7v5c0 5 3 8 8 8s7-3 7-7V9l-3 2" />
      <path d="M8 4c2 0 4 2 4 4 0-2 2-4 4-4" />
      <circle cx="9" cy="12" r=".5" fill="currentColor" />
      <circle cx="15" cy="12" r=".5" fill="currentColor" />
      <path d="M10 16h4" />
    </>
  ),
  child: (
    <>
      <circle cx="12" cy="5" r="2" />
      <path d="M8 10h8M12 8v7m0 0-4 5m4-5 4 5" />
    </>
  ),
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  chevron: <path d="m8 10 4 4 4-4" />,
};

function Icon({ name, size = 22 }) {
  return (
    <svg
      aria-hidden="true"
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
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
    alt: "Pan-roasted hake with crushed potatoes, spring greens and caper butter",
    label: "From the coast",
    name: "North Sea hake",
    description: "Crushed new potatoes, spring greens, brown butter & capers.",
    price: "£26",
  },
  {
    image: "/assets/crab-linguine.webp",
    alt: "Crab linguine with tomatoes, chilli, lemon and parsley",
    label: "Guest favourite",
    name: "Whitby crab linguine",
    description: "Cherry tomatoes, chilli, lemon, parsley & shellfish butter.",
    price: "£24.5",
  },
  {
    image: "/assets/rhubarb-tart.webp",
    alt: "Yorkshire rhubarb and almond tart with crème fraîche",
    label: "Save room",
    name: "Rhubarb almond tart",
    description: "Forced Yorkshire rhubarb, crème fraîche & warm compote.",
    price: "£9",
  },
];

const menuGroups = [
  {
    title: "To start",
    note: "Smaller plates for the table",
    items: [
      ["Smoked haddock croquettes", "Mustard mayonnaise · watercress", "£9.5"],
      ["Brown crab rarebit", "Sourdough · pickled shallot", "£11"],
      ["Woodland mushrooms", "Soft polenta · thyme · hazelnut", "£10"],
    ],
  },
  {
    title: "Main plates",
    note: "The coast, the moors and the season",
    items: [
      ["North Sea hake", "Crushed potatoes · greens · caper butter", "£26"],
      ["Whitby crab linguine", "Tomato · chilli · lemon · parsley", "£24.5"],
      ["Yorkshire lamb rump", "Peas · mint · charred little gem", "£28"],
      ["Salt-baked celeriac", "Pearl barley · leek · smoked almond", "£22"],
    ],
  },
  {
    title: "Something sweet",
    note: "Made in our small kitchen",
    items: [
      ["Rhubarb almond tart", "Crème fraîche · rhubarb compote", "£9"],
      ["Sticky toffee pudding", "Miso caramel · vanilla ice cream", "£9"],
      ["Yorkshire cheeses", "Oatcakes · apple · chutney", "£12"],
    ],
  },
];

const visitorDetails = [
  {
    icon: "walk",
    title: "Easy from the harbour",
    text: "Around a five-minute walk from Whitby Harbour and the swing bridge.",
  },
  {
    icon: "access",
    title: "Step-free entrance",
    text: "Level access at the front door with an accessible ground-floor loo.",
  },
  {
    icon: "dog",
    title: "Dogs welcome outside",
    text: "Well-behaved dogs are welcome at our two pavement tables.",
  },
  {
    icon: "child",
    title: "Little visitors",
    text: "Highchairs available. Half portions can be prepared for children.",
  },
  {
    icon: "leaf",
    title: "Dietary needs",
    text: "Vegetarian dishes daily, with gluten-free adaptations where possible.",
  },
  {
    icon: "clock",
    title: "Best time to visit",
    text: "Quieter before 6 pm. Friday and Saturday evenings fill up quickly.",
  },
];

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <div className="concept-bar">
        <span>Concept demo</span>
        <p>Fictional restaurant · built for mobile visitors from Google Maps</p>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Salt and Hawthorn home">
          <span className="brand-mark">S</span>
          <span>
            <strong>Salt &amp; Hawthorn</strong>
            <small>Whitby · North Yorkshire</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#dishes">Highlights</a>
          <a href="#menu">Menu</a>
          <a href="#visit">Visit</a>
          <a className="nav-cta" href="#find-us">
            Find us
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <Image
            className="hero-image"
            src="/assets/hero-exterior.webp"
            alt="A warmly lit fictional coastal restaurant on a wet stone street overlooking the sea"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-shade" />
          <div className="hero-content wrap">
            <p className="eyebrow">Coast-led cooking · Whitby</p>
            <h1>
              Good food.
              <br />
              <em>Sea air.</em>
            </h1>
            <p className="hero-copy">
              A small harbour kitchen serving North Sea fish, Yorkshire produce
              and the kind of pudding worth saving room for.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#menu">
                Explore the menu <Icon name="arrow" size={18} />
              </a>
              <a
                className="button button-ghost"
                href="https://www.google.com/maps/search/?api=1&query=Whitby+Harbour"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="pin" size={18} /> Get directions
              </a>
            </div>
            <div className="hero-meta" aria-label="Quick facts">
              <span>
                <Icon name="clock" size={17} /> Tue–Sun · from 12 noon
              </span>
              <span>
                <Icon name="walk" size={17} /> 5 min from the harbour
              </span>
            </div>
          </div>
          <a className="scroll-cue" href="#dishes" aria-label="Scroll to dishes">
            Discover <Icon name="chevron" size={17} />
          </a>
        </section>

        <section className="intro section wrap" id="dishes">
          <div className="section-heading">
            <div>
              <p className="eyebrow ink">Worth coming in for</p>
              <h2>Three plates to remember.</h2>
            </div>
            <p>
              Our menu follows the boats, the growers and the weather. These are
              the dishes regulars ask for by name.
            </p>
          </div>

          <div className="dish-scroller">
            {dishes.map((dish) => (
              <article className="dish-card" key={dish.name}>
                <div className="dish-image">
                  <Image
                    src={dish.image}
                    alt={dish.alt}
                    fill
                    sizes="(max-width: 767px) 82vw, 33vw"
                  />
                </div>
                <div className="dish-copy">
                  <p>{dish.label}</p>
                  <div className="dish-title">
                    <h3>{dish.name}</h3>
                    <span>{dish.price}</span>
                  </div>
                  <p className="dish-description">{dish.description}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="swipe-note">Swipe to see more dishes →</p>
        </section>

        <section className="menu-section section" id="menu">
          <div className="wrap">
            <div className="menu-heading">
              <div>
                <p className="eyebrow sand">The current menu</p>
                <h2>Simple things, done properly.</h2>
              </div>
              <p>
                An illustrative sample menu for this concept. A real client site
                would be updated from the restaurant&apos;s approved menu.
              </p>
            </div>

            <div className="menu-groups">
              {menuGroups.map((group) => (
                <section className="menu-group" key={group.title}>
                  <div className="menu-group-heading">
                    <h3>{group.title}</h3>
                    <p>{group.note}</p>
                  </div>
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

            <div className="allergen-note">
              <Icon name="leaf" size={20} />
              <p>
                Please tell us about allergies before ordering. Our small kitchen
                handles gluten, dairy, nuts, shellfish and other allergens.
              </p>
            </div>
          </div>
        </section>

        <section className="story section">
          <div className="wrap story-grid">
            <div className="story-image">
              <Image
                src="/assets/dining-room.webp"
                alt="Warm, intimate fictional restaurant dining room with oak tables and an open kitchen"
                fill
                sizes="(max-width: 899px) 100vw, 50vw"
              />
              <p>Twenty-eight seats · one small kitchen</p>
            </div>
            <div className="story-copy">
              <p className="eyebrow ink">A room with a warm welcome</p>
              <h2>Come as you are. Stay for pudding.</h2>
              <p className="lead">
                Salt &amp; Hawthorn is imagined as the sort of place travellers
                hope to stumble upon: relaxed enough after a day on the coast,
                thoughtful enough for a special evening.
              </p>
              <p>
                The website answers the questions Google Maps cannot: what the
                food is really like, how the room feels, whether children and
                dogs are welcome, and how easy the visit will be.
              </p>
              <a className="text-link" href="#visit">
                Plan your visit <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="visit section" id="visit">
          <div className="wrap">
            <div className="section-heading visit-heading">
              <div>
                <p className="eyebrow ink">Before you set off</p>
                <h2>The useful details.</h2>
              </div>
              <p>
                The small questions that decide whether a visitor chooses this
                restaurant or goes back to the map.
              </p>
            </div>
            <div className="detail-grid">
              {visitorDetails.map((detail) => (
                <article className="detail-card" key={detail.title}>
                  <span className="detail-icon">
                    <Icon name={detail.icon} size={24} />
                  </span>
                  <h3>{detail.title}</h3>
                  <p>{detail.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="find-us" id="find-us">
          <div className="map-pattern" aria-hidden="true">
            <span className="map-coast" />
            <span className="map-road road-one" />
            <span className="map-road road-two" />
            <span className="map-road road-three" />
            <span className="map-pin">
              <Icon name="pin" size={28} />
            </span>
          </div>
          <div className="find-card">
            <p className="eyebrow sand">Find us by the harbour</p>
            <h2>A short walk from the water.</h2>
            <address>
              Harbour Quarter
              <br />
              Whitby, North Yorkshire
              <br />
              <span>Concept location — not a real address</span>
            </address>
            <div className="hours">
              <div>
                <span>Tue–Thu</span>
                <strong>12–3 · 5–10</strong>
              </div>
              <div>
                <span>Fri–Sat</span>
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
            <div className="find-actions">
              <a
                className="button button-rust"
                href="https://www.google.com/maps/search/?api=1&query=Whitby+Harbour"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="pin" size={18} /> Open Google Maps
              </a>
              <a className="button button-outline" href="#contact">
                <Icon name="phone" size={18} /> Contact details
              </a>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="wrap contact-grid">
            <div>
              <p className="eyebrow ink">Contact</p>
              <h2>One tap away when the details are real.</h2>
            </div>
            <div className="contact-note">
              <p>
                This public demo does not use a real phone number or inbox. For a
                merchant, these buttons become direct <strong>call</strong>,{" "}
                <strong>email</strong> and <strong>Google Maps</strong> actions.
              </p>
              <span>No booking system. No login. No unnecessary friction.</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-grid">
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark">S</span>
            <span>
              <strong>Salt &amp; Hawthorn</strong>
              <small>Whitby · North Yorkshire</small>
            </span>
          </a>
          <p>
            Fictional concept website. This is not a real restaurant; all
            details, prices and imagery are illustrative.
          </p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      <nav className="mobile-dock" aria-label="Quick actions">
        <a href="#menu">
          <Icon name="menu" size={22} />
          <span>Menu</span>
        </a>
        <a
          className="dock-primary"
          href="https://www.google.com/maps/search/?api=1&query=Whitby+Harbour"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="pin" size={22} />
          <span>Directions</span>
        </a>
        <a href="#contact">
          <Icon name="phone" size={22} />
          <span>Call</span>
        </a>
      </nav>
    </>
  );
}
