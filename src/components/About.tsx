import { Code2, Rocket, Users, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Expertise',
      description: 'Proficient in both frontend and backend technologies, delivering end-to-end solutions'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Focused on building fast, efficient applications with optimal user experience'
    },
    {
      icon: Rocket,
      title: 'Modern Frameworks',
      description: 'Experienced with React.js, Next.js, Angular, FastAPI, and cutting-edge tools'
    },
    {
      icon: Users,
      title: 'Enterprise Solutions',
      description: 'Delivered scalable applications for major enterprises including Ford Motors'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800 dark:text-slate-100">
          About Me
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              I'm a passionate Full Stack Developer with extensive experience in building scalable,
              high-performance web applications. My expertise spans across modern frontend frameworks
              like React.js and Angular, combined with robust backend solutions using Python and FastAPI.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Throughout my career, I've specialized in developing RESTful APIs, implementing complex
              frontend architectures, and optimizing application performance. I excel at translating
              business requirements into technical solutions that drive user engagement and satisfaction.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Currently working at SACHA on the Ford Motors project, I bring enterprise-level
              development standards and cross-functional collaboration skills to every project,
              ensuring delivery of production-ready, maintainable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <item.icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
