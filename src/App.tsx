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
  Smile
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-brand-green text-white overflow-hidden rounded-b-[3rem] pb-32">
        {/* Background Pattern (Subtle Dots) */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', 
            backgroundSize: '30px 30px' 
          }}
        ></div>

        {/* Navigation */}
        <nav className="container mx-auto px-6 py-6 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2">
            <div className="bg-white p-1.5 rounded-md">
              <Sparkles className="w-5 h-5 text-brand-green" />
            </div>
            <span className="text-xl font-semibold tracking-tight">HomeMaster</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-brand-orange transition-colors">Home</a>
            <a href="#" className="hover:text-brand-orange transition-colors">About</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Services</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Contact</a>
          </div>
          <button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-colors">
            BOOK NOW
          </button>
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-6 pt-16 pb-24 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Your Trusted<br />
              Partner for Home<br />
              Clean Solutions
            </h1>
            <p className="text-gray-200 mb-10 text-lg leading-relaxed max-w-md">
              We take pride in our attention to detail and commitment to customer satisfaction. Whether you require regular maintenance.
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-md font-semibold text-base transition-colors flex items-center gap-2">
                Explore Services <ArrowRight className="w-5 h-5" />
              </button>
              <a href="#" className="text-white font-medium underline underline-offset-8 decoration-2 hover:text-gray-300 transition-colors">
                Discover More
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block h-[500px]">
            {/* Image placeholder */}
            <div className="absolute right-0 bottom-[-150px] w-[500px] h-[650px] z-10">
               <img 
                 src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800" 
                 alt="Cleaning Professional" 
                 className="w-full h-full object-cover rounded-t-full mask-image-bottom"
                 style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
               />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-10 h-10 border-2 border-white/30 rounded-full"></div>
            <div className="absolute top-24 left-20 w-4 h-4 border-2 border-white/30 rounded-full"></div>
            
            {/* SOAP Graphic */}
            <div className="absolute top-1/2 right-0 rotate-[15deg] z-20">
              <div className="border-2 border-white rounded-2xl p-4 inline-block transform -translate-y-12 translate-x-12">
                <span className="text-white font-bold tracking-widest text-xl">SOAP</span>
              </div>
              <div className="absolute -top-4 -right-4 w-3 h-3 border-2 border-white rounded-full"></div>
              <div className="absolute -bottom-6 left-4 w-4 h-4 border-2 border-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Cards */}
      <section className="container mx-auto px-6 relative z-20 -mt-24">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-brand-orange" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Trustworthiness</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Building trust with clients by being transparent, honest, and reliable in all interactions, including respecting privacy.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-brand-orange" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Professionalism</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Conducting all cleaning tasks with professionalism, including arriving on time, adhering to safety standards.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
              <ThumbsUp className="w-6 h-6 text-brand-orange" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Customer Satisfaction</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Prioritizing the needs and preferences of customers and striving to exceed their expectations.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative pl-4">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] w-[85%] shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1584820927498-cafe5c152a00?auto=format&fit=crop&q=80&w=800" 
                alt="Cleaning Professional" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute bottom-12 right-0 w-[65%] rounded-3xl overflow-hidden border-[10px] border-white shadow-2xl rotate-[-4deg]">
              <img 
                src="https://images.unsplash.com/photo-1628177142898-93e46e6d60d5?auto=format&fit=crop&q=80&w=800" 
                alt="Cleaning Team" 
                className="w-full h-full object-cover aspect-square" 
              />
            </div>
          </div>
          
          <div className="pr-4">
            <h2 className="text-4xl lg:text-5xl font-bold leading-[1.15] mb-6 tracking-tight text-gray-900">
              Behind the HomeMaster<br />Company Stories.
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed text-[15px]">
              Explore the core mission and vision that drives us every day. At Behind the Stories Company, we're not just about cleaning homes; we're about making a difference in the lives of our clients and our community.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-brand-orange flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white stroke-[3]" />
                </div>
                <span className="font-semibold text-[15px] text-gray-900">Clean Homes, Happy Hearts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-brand-orange flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white stroke-[3]" />
                </div>
                <span className="font-semibold text-[15px] text-gray-900">Sparkle Every Space</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-brand-orange flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white stroke-[3]" />
                </div>
                <span className="font-semibold text-[15px] text-gray-900">Purify. Refresh. Revitalize.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-brand-orange flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white stroke-[3]" />
                </div>
                <span className="font-semibold text-[15px] text-gray-900">Cleanliness Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Cleaning Services</h2>
            <p className="text-gray-500">We offer a wide range of professional cleaning services tailored to meet your specific needs and exceed your expectations.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Home, title: 'Standard Cleaning', desc: 'Regular maintenance to keep your home looking its best.' },
              { icon: Droplets, title: 'Deep Cleaning', desc: 'Thorough cleaning for those hard-to-reach areas.' },
              { icon: Wind, title: 'Move In/Out', desc: 'Start fresh or leave a spotless space behind.' },
              { icon: Sparkles, title: 'Post-Construction', desc: 'Clearing dust and debris after renovations.' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors">
                  <service.icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                <a href="#" className="text-brand-orange font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
            <p className="text-gray-500">Get your home sparkling clean in just three simple steps.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gray-100 -z-10"></div>
            
            {[
              { icon: Calendar, title: '1. Book Online', desc: 'Choose your preferred date, time, and cleaning package.' },
              { icon: CreditCard, title: '2. Confirm & Pay', desc: 'Securely pay online and receive an instant confirmation.' },
              { icon: Smile, title: '3. Relax & Enjoy', desc: 'Our professionals will handle the rest while you relax.' },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm relative z-10">
                  <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center text-white">
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-brand-green text-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-300">Don't just take our word for it. Here's what our happy customers have to say about our services.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Homeowner', quote: 'The team was incredibly professional and thorough. My house has never looked this clean! Highly recommend their deep cleaning service.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150' },
              { name: 'Michael Chen', role: 'Apartment Renter', quote: 'I used HomeMaster for my move-out clean. They got my full deposit back for me. The booking process was seamless and easy.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150' },
              { name: 'Emily Davis', role: 'Working Mother', quote: 'Having them come bi-weekly has been a lifesaver. I finally have my weekends back to spend with my family instead of scrubbing floors.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150' },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <div className="flex gap-1 text-brand-orange mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-200 mb-8 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-brand-orange" />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-orange">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready for a Cleaner Home?</h2>
          <p className="text-orange-100 mb-10 max-w-2xl mx-auto text-lg">Book your first cleaning today and get 20% off. Let us handle the mess so you can focus on what matters most.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-brand-orange hover:bg-gray-50 px-8 py-4 rounded-md font-bold text-base transition-colors shadow-lg">
              Book an Appointment
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-md font-bold text-base transition-colors">
              Call Us Now
            </button>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-16 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl font-bold flex items-center gap-2"><Sparkles className="w-6 h-6"/> innovio</div>
            <div className="text-2xl font-bold flex items-center gap-2"><Award className="w-6 h-6"/> ZenZap</div>
            <div className="text-2xl font-bold flex items-center gap-2"><ShieldCheck className="w-6 h-6"/> techtide</div>
            <div className="text-2xl font-bold flex items-center gap-2"><Sparkles className="w-6 h-6"/> Craftgram</div>
            <div className="text-2xl font-bold flex items-center gap-2"><div className="w-6 h-6 bg-current rounded-sm"></div> LumLabs</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-gray-100">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4 pr-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-green p-1.5 rounded-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">HomeMaster</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              A leading provider of professional cleaning management solutions.
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-gray-400 mb-6 text-sm">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-900">
              <li><a href="#" className="hover:text-brand-orange transition-colors">About</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Service</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-gray-400 mb-6 text-sm">Resources</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-900">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">License</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-4">
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 font-medium">4296 Coplin Avenue, Phoenix<br />Arizona, 59412</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <a href="mailto:chat@clearmaster.pro" className="text-gray-600 font-medium hover:text-brand-orange transition-colors underline underline-offset-4">chat@clearmaster.pro</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 font-medium">+021 480-202-5906</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
