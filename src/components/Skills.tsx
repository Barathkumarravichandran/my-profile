export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React.js', 'Next.js', 'Angular (TypeScript)', 'JavaScript', 'TypeScript']
    },
    {
      category: 'Backend',
      skills: ['Python', 'FastAPI', 'Flask', 'Django', 'RESTful APIs']
    },
    {
      category: 'Programming Concepts',
      skills: ['Asynchronous Programming', 'OOP', 'Design Patterns', 'SOLID Principles']
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'CI/CD', 'PostgreSQL', 'MongoDB']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-50 dark:bg-slate-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800 dark:text-slate-100">
          Technical Skills
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
