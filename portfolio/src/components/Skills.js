import React from 'react';

function Skills() {
  const skillCategories = {
    webDevelopment: {
      title: "web development",
      skills: ["HTML", "CSS", "Bootstrap", "TailwindCSS", "JavaScript", "React.js", "Node.js", "Express.js", "PHP", "Symfony", "Java", "MongoDB", "PostgreSQL", "Oracle SQL"],
      bgColor: "from-purple-900 to-red-800"
    },
    ai: {
      title: "AI",
      skills: ["Deep Reinforcement Learning", "Python", "Tensorflow", "Keras", "XGBoost", "Django", "Scilearn", "Pandas", "Numpy", "Computer Vision"],
      bgColor: "from-teal-600 to-teal-900"
    },
    other: {
      title: "other",
      skills: ["Git", "GitHub", "Linux", "C++", "C", "Assembly", "VSCode"],
      bgColor: "from-slate-600 to-slate-800"
    }
  };

  return (
    <section id="skills" className="my-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
      <h2 className="text-4xl font-bold mb-16 text-gray-800 dark:text-gray-200 text-center">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.values(skillCategories).map((category) => (
          <div 
            key={category.title}
            className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${category.bgColor}`}
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-white capitalize">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="text-white/90 hover:text-white transition-colors duration-200 text-lg"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;