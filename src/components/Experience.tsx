import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Specialist (Ford Motors Project)',
      company: 'SACHA',
      location: 'Chennai',
      period: 'Nov 2025 – Present',
      level: 'Level 4 Premium Software Engineer',
      highlights: [
        'Python backend development for enterprise-level solutions',
        'AngularJS frontend development with TypeScript',
        'Cross-functional collaboration with international teams',
        'Implementing enterprise-level standards and best practices'
      ]
    },
    {
      title: 'Senior Software Engineer',
      company: 'Bahwan CyberTek',
      location: 'Chennai',
      period: 'Jul 2024 – Nov 2025',
      highlights: [
        'Led full-stack development initiatives',
        'Architected scalable web applications',
        'Mentored junior developers',
        'Optimized application performance and code quality'
      ]
    },
    {
      title: 'Frontend Engineer (RummyVerse)',
      company: 'Boom Games',
      location: 'Bangalore',
      period: 'Mar 2023 – May 2024',
      highlights: [
        'Developed interactive gaming interfaces using React.js',
        'Implemented real-time features and animations',
        'Optimized frontend performance for mobile devices',
        'Collaborated with backend team for API integration'
      ]
    },
    {
      title: 'Software Developer',
      company: 'QAssure Technologies',
      location: 'Chennai',
      period: 'Nov 2021 – Feb 2023',
      highlights: [
        'Built responsive web applications',
        'Developed RESTful APIs',
        'Implemented automated testing solutions',
        'Participated in agile development processes'
      ]
    },
    {
      title: 'Founder',
      company: 'Atlarz Enterprises',
      location: 'Namakkal',
      period: 'Aug 2018 – Oct 2021',
      highlights: [
        'Founded and managed technology-focused business',
        'Delivered custom software solutions to clients',
        'Managed end-to-end project lifecycles',
        'Built client relationships and business development'
      ]
    },
    {
      title: 'Sales & Dispatch',
      company: 'V.P. Tex Private Limited',
      location: 'Chennai',
      period: 'Jul 2017 – Jul 2018',
      highlights: [
        'Managed sales operations and logistics',
        'Coordinated with multiple departments',
        'Optimized dispatch processes'
      ]
    },
    {
      title: 'Co-Founder',
      company: 'Spider Plugs',
      location: 'Namakkal',
      period: 'Aug 2016 – Jun 2017',
      highlights: [
        'Co-founded tech startup',
        'Developed product strategy and roadmap',
        'Led technical development initiatives'
      ]
    },
    {
      title: 'Import Trade Analyst',
      company: 'Estrelz Global Trace Pvt Ltd',
      location: 'Bangalore',
      period: 'Jul 2015 – Jun 2016',
      highlights: [
        'Analyzed international trade data',
        'Generated insights for business decisions',
        'Managed import documentation and compliance'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800 dark:text-slate-100">
          Professional Experience
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-16"></div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:mb-16">
              <div className={`flex flex-col md:flex-row gap-8 items-start ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                <div className="md:w-1/2"></div>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="md:w-1/2 ml-16 md:ml-0">
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                      {exp.company}
                    </p>
                    {exp.level && (
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-medium mb-2">
                        {exp.level}
                      </p>
                    )}
                    <p className="text-sm text-slate-500 dark:text-slate-500 mb-4">
                      {exp.period} • {exp.location}
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm">
                          <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
