import { useEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  type Variants
} from 'motion/react';
import {
  ArrowRight,
  Check,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Award,
  ThumbsUp,
  Home,
  Droplets,
  Wind,
  Star,
  Calendar,
  CreditCard,
  Smile,
  Menu,
  X,
  Phone
} from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' }
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 }
  }
};

const viewportOnce = { once: true, margin: '-80px' } as const;

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 600], [0, -90]);
  const heroBgY = useTransform(scrollY, [0, 600], [0, 60]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Sticky Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm text-gray-900'
            : 'bg-transparent text-white'
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div
              className={`p-1.5 rounded-md transition-colors ${
                scrolled ? 'bg-brand-green' : 'bg-white'
              }`}
            >
              <Sparkles
                className={`w-5 h-5 transition-colors ${
                  scrolled ? 'text-white' : 'text-brand-green'
                } group-hover:rotate-12 transition-transform`}
              />
            </div>
            <span className="text-xl font-semibold tracking-tight">HomeMaster</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link hover:text-brand-orange transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="btn-shiny hidden sm:inline-flex items-center px-6 py-2.5 rounded-md font-semibold text-sm"
            >
              <span>BOOK NOW</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 rounded-md hover:bg-black/5 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="fixed top-0 right-0 bottom-0 z-[70] w-[80%] max-w-sm bg-brand-green text-white shadow-2xl md:hidden flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="bg-white p-1.5 rounded-md">
                    <Sparkles className="w-5 h-5 text-brand-green" />
                  </div>
                  <span className="text-xl font-semibold tracking-tight">HomeMaster</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-md hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex-1 flex flex-col gap-2 px-6 py-8">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.06 }}
                    className="text-2xl font-semibold py-3 border-b border-white/10 hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <div className="px-6 pb-8">
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="btn-shiny w-full inline-flex justify-center items-center px-6 py-4 rounded-md font-bold"
                >
                  <span>BOOK NOW</span>
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-brand-green text-white overflow-hidden rounded-b-[3rem] pb-32 pt-20"
      >
        {/* Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
            backgroundSize: '30px 30px',
            y: heroBgY
          }}
        />

        {/* Hero Content */}
        <div className="container mx-auto px-6 pt-16 pb-24 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="max-w-xl"
            variants={staggerParent}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight"
            >
              Your Trusted<br />
              Partner for Home<br />
              Clean Solutions
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-gray-200 mb-10 text-lg leading-relaxed max-w-md"
            >
              We take pride in our attention to detail and commitment to customer
              satisfaction. Whether you require regular maintenance.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-8"
            >
              <a
                href="#services"
                className="btn-shiny inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold text-base"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#about"
                className="text-white font-medium underline underline-offset-8 decoration-2 hover:text-brand-orange transition-colors"
              >
                Discover More
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block h-[500px]"
            style={{ y: heroImageY }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 bottom-[-150px] w-[500px] h-[650px] z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800"
                alt="Cleaning Professional"
                className="w-full h-full object-cover rounded-t-full"
                style={{
                  maskImage:
                    'linear-gradient(to bottom, black 80%, transparent 100%)',
                  WebkitMaskImage:
                    'linear-gradient(to bottom, black 80%, transparent 100%)'
                }}
              />
            </motion.div>
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-10 h-10 border-2 border-white/30 rounded-full animate-float" />
            <div className="absolute top-24 left-20 w-4 h-4 border-2 border-white/30 rounded-full animate-float-delayed" />

            {/* SOAP Graphic */}
            <motion.div
              initial={{ opacity: 0, rotate: 0, x: 40 }}
              animate={{ opacity: 1, rotate: 15, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ rotate: 22, scale: 1.05 }}
              className="absolute top-1/2 right-0 z-20"
            >
              <div className="border-2 border-white rounded-2xl p-4 inline-block transform -translate-y-12 translate-x-12">
                <span className="text-white font-bold tracking-widest text-xl">
                  SOAP
                </span>
              </div>
              <div className="absolute -top-4 -right-4 w-3 h-3 border-2 border-white rounded-full" />
              <div className="absolute -bottom-6 left-4 w-4 h-4 border-2 border-white rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Cards */}
      <section className="container mx-auto px-6 relative z-20 -mt-24">
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {[
            {
              icon: ShieldCheck,
              title: 'Trustworthiness',
              desc: 'Building trust with clients by being transparent, honest, and reliable in all interactions, including respecting privacy.'
            },
            {
              icon: Award,
              title: 'Professionalism',
              desc: 'Conducting all cleaning tasks with professionalism, including arriving on time, adhering to safety standards.'
            },
            {
              icon: ThumbsUp,
              title: 'Customer Satisfaction',
              desc: 'Prioritizing the needs and preferences of customers and striving to exceed their expectations.'
            }
          ].map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 cursor-default"
            >
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                <card.icon className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{card.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            className="relative pl-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="rounded-3xl overflow-hidden aspect-[4/5] w-[85%] shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1584820927498-cafe5c152a00?auto=format&fit=crop&q=80&w=800"
                alt="Cleaning Professional"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: 4 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ rotate: -2, scale: 1.04 }}
              className="absolute bottom-12 right-0 w-[65%] rounded-3xl overflow-hidden border-[10px] border-white shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1628177142898-93e46e6d60d5?auto=format&fit=crop&q=80&w=800"
                alt="Cleaning Team"
                className="w-full h-full object-cover aspect-square"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="pr-4"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-bold leading-[1.15] mb-6 tracking-tight text-gray-900"
            >
              Behind the HomeMaster<br />Company Stories.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-500 mb-10 leading-relaxed text-[15px]"
            >
              Explore the core mission and vision that drives us every day. At
              Behind the Stories Company, we're not just about cleaning homes;
              we're about making a difference in the lives of our clients and our
              community.
            </motion.p>

            <motion.div
              variants={staggerParent}
              className="grid sm:grid-cols-2 gap-y-6 gap-x-4"
            >
              {[
                'Clean Homes, Happy Hearts',
                'Sparkle Every Space',
                'Purify. Refresh. Revitalize.',
                'Cleanliness Standards'
              ].map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded bg-brand-orange flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white stroke-[3]" />
                  </div>
                  <span className="font-semibold text-[15px] text-gray-900">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900"
            >
              Our Cleaning Services
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500">
              We offer a wide range of professional cleaning services tailored to
              meet your specific needs and exceed your expectations.
            </motion.p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {[
              {
                icon: Home,
                title: 'Standard Cleaning',
                desc: 'Regular maintenance to keep your home looking its best.'
              },
              {
                icon: Droplets,
                title: 'Deep Cleaning',
                desc: 'Thorough cleaning for those hard-to-reach areas.'
              },
              {
                icon: Wind,
                title: 'Move In/Out',
                desc: 'Start fresh or leave a spotless space behind.'
              },
              {
                icon: Sparkles,
                title: 'Post-Construction',
                desc: 'Clearing dust and debris after renovations.'
              }
            ].map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors">
                  <service.icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <a
                  href="#contact"
                  className="text-brand-orange font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900"
            >
              How It Works
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500">
              Get your home sparkling clean in just three simple steps.
            </motion.p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line — animates in */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              style={{ transformOrigin: 'left' }}
              className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gray-200 -z-10"
            />

            {[
              {
                icon: Calendar,
                title: '1. Book Online',
                desc: 'Choose your preferred date, time, and cleaning package.'
              },
              {
                icon: CreditCard,
                title: '2. Confirm & Pay',
                desc: 'Securely pay online and receive an instant confirmation.'
              },
              {
                icon: Smile,
                title: '3. Relax & Enjoy',
                desc: 'Our professionals will handle the rest while you relax.'
              }
            ].map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{
                  delay: 0.2 + idx * 0.15,
                  type: 'spring',
                  stiffness: 200,
                  damping: 22
                }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="w-24 h-24 mx-auto bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm relative z-10"
                >
                  <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center text-white shadow-lg">
                    <step.icon className="w-8 h-8" />
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 bg-brand-green text-white relative overflow-hidden"
      >
        <div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            backgroundImage:
              'radial-gradient(circle, white 2px, transparent 2px)',
            backgroundSize: '30px 30px'
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl lg:text-4xl font-bold mb-4"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-300">
              Don't just take our word for it. Here's what our happy customers
              have to say about our services.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {[
              {
                name: 'Sarah Johnson',
                role: 'Homeowner',
                quote:
                  'The team was incredibly professional and thorough. My house has never looked this clean! Highly recommend their deep cleaning service.',
                img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
              },
              {
                name: 'Michael Chen',
                role: 'Apartment Renter',
                quote:
                  'I used HomeMaster for my move-out clean. They got my full deposit back for me. The booking process was seamless and easy.',
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
              },
              {
                name: 'Emily Davis',
                role: 'Working Mother',
                quote:
                  'Having them come bi-weekly has been a lifesaver. I finally have my weekends back to spend with my family instead of scrubbing floors.',
                img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
              }
            ].map((testimonial) => (
              <motion.div
                key={testimonial.name}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 240, damping: 22 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-brand-orange/40 hover:bg-white/15 transition-colors"
              >
                <div className="flex gap-1 text-brand-orange mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-orange"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-orange relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle, white 2px, transparent 2px)',
            backgroundSize: '40px 40px'
          }}
        />
        <motion.div
          className="container mx-auto px-6 text-center relative z-10"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
          >
            Ready for a Cleaner Home?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-orange-100 mb-10 max-w-2xl mx-auto text-lg"
          >
            Book your first cleaning today and get 20% off. Let us handle the mess
            so you can focus on what matters most.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#contact"
              className="btn-shiny-light inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold text-base"
            >
              <span>Book an Appointment</span>
            </a>
            <a
              href="tel:+0214802025906"
              className="btn-shiny-outline inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold text-base"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us Now</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Logos Section */}
      <section className="py-16 border-t border-gray-100">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="w-6 h-6" /> innovio
            </div>
            <div className="text-2xl font-bold flex items-center gap-2">
              <Award className="w-6 h-6" /> ZenZap
            </div>
            <div className="text-2xl font-bold flex items-center gap-2">
              <ShieldCheck className="w-6 h-6" /> techtide
            </div>
            <div className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="w-6 h-6" /> Craftgram
            </div>
            <div className="text-2xl font-bold flex items-center gap-2">
              <div className="w-6 h-6 bg-current rounded-sm" /> LumLabs
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="py-20 border-t border-gray-100"
      >
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4 pr-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-green p-1.5 rounded-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                HomeMaster
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              A leading provider of professional cleaning management solutions.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-gray-400 mb-6 text-sm">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-900">
              <li>
                <a
                  href="#about"
                  className="hover:text-brand-orange transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-brand-orange transition-colors"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-brand-orange transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-orange transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-gray-400 mb-6 text-sm">Resources</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-900">
              <li>
                <a href="#" className="hover:text-brand-orange transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-brand-orange transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-orange transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-orange transition-colors">
                  License
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 font-medium">
                  4296 Coplin Avenue, Phoenix
                  <br />
                  Arizona, 59412
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <a
                  href="mailto:chat@clearmaster.pro"
                  className="text-gray-600 font-medium hover:text-brand-orange transition-colors underline underline-offset-4"
                >
                  chat@clearmaster.pro
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <a
                  href="tel:+0214802025906"
                  className="text-gray-600 font-medium hover:text-brand-orange transition-colors"
                >
                  +021 480-202-5906
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
