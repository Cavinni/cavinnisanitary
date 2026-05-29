"use client";
export const runtime = 'edge';

import { motion } from "framer-motion";

const collections = [
  {
    title: "Shower System",
    image: "/images/CVN02BG.png",
  },
  {
    title: "Faucet Collection",
    image:
      "/images/KRAN WASTAFEL CAVINNI BLACK C-016.jpg",
  },
  {
    title: "Kitchen Collection",
    image:
      "/images/Kitchen Sink Set BCP-LED-SET.jpg",
  },
  {
    title: "Bathroom Accessories",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
];

const showcases = [
  {
    title: "Matte Black Basin Faucet",
    description:
      "Minimal contemporary faucet crafted with clean geometry and premium matte finishing for modern bathroom interiors.",
    image: "/images/KRAN WASTAFEL CAVINNI BLACK C-016.jpg",
  },
  {
    title: "Architectural Simplicity",
    description:
      "Balanced modern aesthetics with practical functionality for contemporary living spaces.",
    image: "/images/CVN02BG.png",
  },
];

const materials = [
  {
    title: "Solid Brass Material",
    description:
      "Built with durable brass construction for long-term reliability.",
  },
  {
    title: "Premium Finishing",
    description:
      "Carefully crafted surfaces with modern matte and metallic textures.",
  },
  {
    title: "Modern Engineering",
    description:
      "Balanced water flow and ergonomic design for daily comfort.",
  },
];

const fadeUp = {
  initial: {
    opacity: 0,
    y: 24,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
  },
};

export default function CavinniHomepage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white antialiased">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="/" className="flex items-center">
            <img
              src="/images/002BAL-logo.png"
              alt="CAVINNI"
              className="h-8 w-auto object-contain"
            />
          </a>

          <nav className="hidden items-center gap-10 text-sm text-white/70 md:flex">
            <a href="#collections" className="transition hover:text-white">
              Collections
            </a>
            <a href="#philosophy" className="transition hover:text-white">
              Philosophy
            </a>
            <a href="#showcase" className="transition hover:text-white">
              Products
            </a>
            <a href="#materials" className="transition hover:text-white">
              Materials
            </a>
          </nav>

          <button className="border border-white/15 px-5 py-2 text-sm transition duration-300 hover:bg-white hover:text-black">
            Contact
          </button>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#111111] pt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-black to-[#111111]" />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-20 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
              Contemporary Sanitary Collection
            </p>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Designed For Modern Water Spaces
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
              Clean architectural sanitary solutions crafted for contemporary
              homes, combining modern aesthetics, comfort, and reliable daily
              performance.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
                Explore Collection
              </button>

              <button className="border border-white/15 px-7 py-3 text-sm text-white transition hover:bg-white hover:text-black">
                Download Catalog
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute bottom-0 right-10 h-[420px] w-[420px] rounded-full bg-[#d6c2a1]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#181818] shadow-2xl">
              <img
                src="/images/CVN02BG.png"
                alt="CAVINNI Shower"
                className="h-auto w-full max-w-[620px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="collections" className="border-t border-white/10 bg-[#141414] py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/40">
                Collections
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
                Curated collections designed for modern architectural living.
              </h2>
            </div>

            <p className="max-w-md leading-relaxed text-white/55">
              Focused product categories crafted to deliver a cleaner and more refined browsing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {collections.map((item, index) => {
              const largeCard = index === 0;

              return (
                <motion.article
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-neutral-950 ${
                    largeCard
                      ? "lg:col-span-7 lg:row-span-2"
                      : "lg:col-span-5"
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      largeCard ? "aspect-[4/4.2]" : "aspect-[4/3]"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-8 lg:p-10">
                      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/50">
                        CAVINNI Collection
                      </p>

                      <h3 className="text-2xl font-medium lg:text-4xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#181818] py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black"
          >
            <img
              src="/images/Kitchen Sink Set BCP-LED-SET.jpg"
              alt="Kitchen Sink Set"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-white/40">
              Kitchen Innovation
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Contemporary kitchen essentials designed for modern living.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/60">
              A modern kitchen sink collection combining clean aesthetics,
              practical functionality, and subtle contemporary technology for
              today’s living spaces.
            </p>

            <button className="mt-10 border border-white/15 px-6 py-3 text-sm transition hover:bg-white hover:text-black">
              Explore Kitchen Collection
            </button>
          </motion.div>
        </div>
      </section>

      <section id="philosophy" className="border-t border-white/10 bg-[#f5f3ef] py-32 text-black">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-black/40">
              Design Philosophy
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Quiet modernism inspired by architectural simplicity.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-black/60">
              CAVINNI products are designed with a clean architectural approach,
              balancing aesthetics, comfort, and durability for contemporary
              Indonesian homes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#121212] py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_1fr] lg:px-10">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-white/40">
              Smart Shower Experience
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Contemporary shower innovation with architectural elegance.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/60">
              The CAVINNI Piano Shower Set combines modern functionality,
              refined detailing, and contemporary styling to create a premium
              shower experience for sophisticated living spaces.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
                Explore Shower Collection
              </button>

              <button className="border border-white/15 px-7 py-3 text-sm transition hover:bg-white hover:text-black">
                View Product Details
              </button>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#1a1a1a]"
          >
            <img
              src="/images/Piano Shower Set SHOWER TIANG PIANO CVN-05BN.jpg"
              alt="Piano Shower Set"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      <section id="showcase" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl space-y-24 px-6 lg:px-10">
          {showcases.map((item, index) => {
            const reverseLayout = index % 2 !== 0;

            return (
              <div
                key={item.title}
                className={`grid items-center gap-16 lg:grid-cols-2 ${
                  reverseLayout ? "lg:grid-flow-dense" : ""
                }`}
              >
                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.6 }}
                  className={reverseLayout ? "lg:col-start-2" : ""}
                >
                  <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-neutral-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.7 }}
                  className={reverseLayout ? "lg:col-start-1" : ""}
                >
                  <p className="mb-5 text-sm uppercase tracking-[0.25em] text-white/40">
                    Product Showcase
                  </p>

                  <h3 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                    {item.title}
                  </h3>

                  <p className="mt-6 max-w-lg leading-relaxed text-white/60">
                    {item.description}
                  </p>

                  <button className="mt-10 border border-white/15 px-6 py-3 text-sm transition hover:bg-white hover:text-black">
                    Discover More
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="materials" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-white/40">
              Materials & Trust
            </p>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Reliable quality for everyday spaces.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {materials.map((item, index) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border border-white/10 bg-neutral-950 p-8"
              >
                <h3 className="mb-4 text-2xl font-medium">{item.title}</h3>

                <p className="leading-relaxed text-white/60">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <img
              src="/images/002BAL-logo.png"
              alt="CAVINNI"
              className="h-8 w-auto object-contain"
            />

            <p className="mt-4 max-w-sm text-sm text-white/45">
              Contemporary sanitary solutions designed for modern architecture
              and everyday comfort.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-sm text-white/55">
            <a href="#collections" className="transition hover:text-white">
              Collections
            </a>

            <a href="#philosophy" className="transition hover:text-white">
              About
            </a>

            <a href="#materials" className="transition hover:text-white">
              Contact
            </a>

            <a href="#showcase" className="transition hover:text-white">
              Catalog
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
