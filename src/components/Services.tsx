import { Globe, Smartphone, Code, Cloud, Layout, Search, Share2, FileText, TrendingUp } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom, responsive websites built with modern frameworks and best practices'
    },
    {
      icon: Code,
      title: 'Application Development',
      description: 'Full-stack applications designed for scalability and performance'
    },
    {
      icon: Layout,
      title: 'Custom Software Development',
      description: 'Tailored software solutions to meet your unique business requirements'
    },
    {
      icon: Cloud,
      title: 'SaaS Development',
      description: 'Cloud-based software as a service platforms with robust architecture'
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'Native and cross-platform mobile apps for iOS and Android'
    },
    {
      icon: Layout,
      title: 'Web Design',
      description: 'Beautiful, user-centric designs that enhance user experience'
    },
    {
      icon: Search,
      title: 'SEO',
      description: 'Search engine optimization to improve your online visibility'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Strategic social media campaigns to grow your brand presence'
    },
    {
      icon: FileText,
      title: 'Blogging',
      description: 'Content creation and blog management for thought leadership'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies for business growth'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-slate-50 dark:bg-slate-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800 dark:text-slate-100">
          Services
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>

        <p className="text-lg md:text-xl text-center text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed">
          Empower your online presence with tailored web and mobile app development solutions
          combined with result-driven digital marketing strategies.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
