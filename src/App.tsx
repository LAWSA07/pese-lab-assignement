import React, { useState } from 'react';
// Update the import line at the top
import { Github, Linkedin, Mail, MapPin, Phone, Youtube, Globe, FileText } from 'lucide-react';

// Add interface for weekly logs at the top of the file
interface WeeklyLog {
  week: string;
  summary: string;
  link: string;
  siteLink: string;
  pdf?: string;
  details?: string[];
}

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: "Deep Fake Detection System",
      description: "Developed a ResNet-50 model achieving 92% accuracy on the FaceForensics++ dataset",
      tech: ["Python", "TensorFlow", "OpenCV"],
      stack: ["TensorFlow", "Keras", "NumPy", "Flask"]
    },
    {
      title: "AI-Powered Sports Analytics Platform",
      description: "Processed 500+ hours of game footage using YOLOv5 for player tracking, reducing manual analysis time by 70%",
      tech: ["MERN Stack", "Python"],
      stack: ["React.js", "Node.js", "MongoDB", "OpenCV"]
    },
    {
      title: "Medical Chatbot with NLP",
      description: "Deployed a BERT-based diagnostic assistant handling 100+ daily queries with 85% accuracy",
      tech: ["Python", "Transformers"],
      stack: ["HuggingFace", "Flask", "Docker", "AWS EC2"]
    }
  ];

  const weeklyLogs: WeeklyLog[] = [
    {
      week: "Week 1",
      summary: "Self introduction",
      link: "https://youtube.com/shorts/d-eHyNb5luk?feature=share",
      siteLink: "https://www.notion.so/SELF-INTRODUCTION-1b56d660abad80d2b95deeddf472892a?pvs=4"
    },
    {
      week: "Week 1.a",
      summary: "Adding little elements to your introduction",
      link: "https://youtube.com/shorts/yxUbfe8mp1c?feature=share",
      siteLink: "https://www.notion.so/SELF-INTRODUCTION-1b56d660abad80d2b95deeddf472892a?pvs=4"
    },
    {
      week: "Week 2",
      summary: "Great story on self love",
      link: "https://youtube.com/shorts/tocLpzi99ss?feature=share",
      siteLink: "https://www.notion.so/SELF-INTRODUCTION-1b56d660abad80d2b95deeddf472892a?pvs=4"
    },
    {
      week: "Week 3",
      summary: "How to write resume",
      link: "https://youtube.com/shorts/KTGCLepDEXU?feature=share",
      siteLink: "https://www.notion.so/SELF-INTRODUCTION-1b56d660abad80d2b95deeddf472892a?pvs=4"
    },
    {
      week: "Week 4",
      summary: "Women empowerment (1 vs 64)",
      link: "https://youtube.com/shorts/F1uVSC58zFg?feature=share",
      siteLink: "https://www.notion.so/SELF-INTRODUCTION-1b56d660abad80d2b95deeddf472892a?pvs=4"
    },
    {
      week: "Assignment",
      summary: "Movie Review- Schindler's List",
      link: "https://youtu.be/B9ZWUc4vAIA?si=fipVmf516njwLyu6",
      siteLink: "https://www.notion.so/movie-review-1b56d660abad8072be5bfc15cf85717e?pvs=4",
      pdf: "/pdf/assignment.pdf"
    },
    {
      week: "Group Discussion",
      summary: "Group discussion on current tech trends",
      link: "https://youtu.be/tx-CRdoCvxU",
      siteLink: "https://www.notion.so/group-discussion",
      pdf: "/pdf/groupdiscussion.pdf"
    },
    {
      week: "Personal Interview",
      summary: "Mock interview preparation and experience",
      link: "https://youtube.com/shorts/example2",
      siteLink: "https://www.notion.so/personal-interview",
      pdf: "/pdf/personalinterview.pdf"
    },
    {
      week: "GOOD BYE",
      summary: "Final reflections and future goals",
      link: "https://youtu.be/SyKx3Kzeh64",
      siteLink: "https://www.notion.so/goodbye",
      pdf: "/pdf/goodbye.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Modern Minimalist Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-sm bg-white/75 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-2xl font-bold tracking-tighter text-gray-900" style={{ fontFamily: "'Syne', sans-serif" }}>HIMANSHU</span>
            <div className="flex space-x-12">
              {['about', 'projects', 'weekly'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`inline-flex items-center px-1 pt-1 text-sm tracking-widest transition-all duration-300 ${
                    activeSection === section
                      ? 'text-black border-b-2 border-black font-medium'
                      : 'text-gray-500 hover:text-black font-medium'
                  }`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {section.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {/* About Section */}
        <section className={`py-12 ${activeSection === 'about' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Profile */}
            <div className="lg:col-span-4">
              <div className="space-y-8">
                <div className="aspect-square relative overflow-hidden rounded-2xl">
                  <img
                    className="object-cover w-full h-full"
                    src="/img/potr.jpg"
                    alt="Profile"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900" style={{ fontFamily: "'Syne', sans-serif" }}>Himanshu Singh Aswal</h2>
                  <p className="text-lg font-medium text-gray-500">Machine Learning Engineer</p>
                  <div className="pt-4 space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <span className="text-base text-gray-600">+91-781-794-9407</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <span className="text-base text-gray-600">aswalh0707@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Linkedin className="h-5 w-5 text-gray-400" />
                      <span className="text-base text-gray-600">himanshu-singh-aswal</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-gray-400" />
                      <span className="text-base text-gray-600">Dehradun, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary and Education */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900" style={{ fontFamily: "'Syne', sans-serif" }}>About Me</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Machine Learning Engineer with 2+ years of hands-on experience in developing AI solutions, published researcher in computer vision, and winner of multiple hackathons. Specialized in deep learning applications with expertise in TensorFlow, computer vision, and full-stack development.
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-gray-400" />
                  <a
                    href="/pdf/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-gray-600 hover:text-black transition-colors font-medium"
                  >
                    View My Resume
                  </a>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900" style={{ fontFamily: "'Syne', sans-serif" }}>Education</h3>
                  <div className="mt-4 space-y-2">
                    <h4 className="text-xl font-medium text-gray-900">Graphic Era Hill University (2022–2026)</h4>
                    <p className="text-lg text-gray-500">B.E. Computer Science — CGPA: 8.11/10</p>
                    <p className="text-base text-gray-600">
                      Relevant Coursework: Machine Learning, Deep Learning, Computer Vision, Data Structures & Algorithms, DBMS, Cloud Computing
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900" style={{ fontFamily: "'Syne', sans-serif" }}>Publications</h3>
                  <div className="mt-4">
                    <h4 className="text-xl font-medium text-gray-900">"Neuroscience of Virtual Reality" (IEEE, 2022)</h4>
                    <p className="mt-2 text-base text-gray-600">
                      Developed a novel methodology for analyzing neural correlates in VR environments using EEG and machine learning techniques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className={`py-12 ${activeSection === 'projects' ? 'block' : 'hidden'}`}>
          <div className="space-y-16">
            {/* Technical Projects */}
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 mb-8" style={{ fontFamily: "'Syne', sans-serif" }}>Technical Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <div key={index} className="group">
                    <div className="bg-white p-8 rounded-2xl transition-all duration-300 hover:shadow-xl">
                      <h4 className="text-2xl font-bold tracking-tight text-gray-900 mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>{project.title}</h4>
                      <p className="text-base text-gray-600 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <span 
                              key={i} 
                              className="px-4 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-full"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((s, i) => (
                            <span 
                              key={i} 
                              className="px-4 py-1.5 text-sm font-medium text-gray-500 border-2 border-gray-200 rounded-full"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 mb-8" style={{ fontFamily: "'Syne', sans-serif" }}>Technical Skills</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-bold tracking-tight text-gray-900 mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'JavaScript', 'C/C++', 'SQL', 'Java', 'TypeScript'].map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-4 py-2 text-base font-medium text-gray-600 bg-gray-100 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold tracking-tight text-gray-900 mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Machine Learning</h4>
                  <div className="flex flex-wrap gap-2">
                    {['TensorFlow', 'PyTorch', 'OpenCV', 'scikit-learn', 'Pandas', 'Deep Learning', 'Computer Vision', 'NLP'].map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-4 py-2 text-base font-medium text-gray-600 bg-gray-100 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold tracking-tight text-gray-900 mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Web Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'Flask', 'REST APIs', 'GraphQL'].map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-4 py-2 text-base font-medium text-gray-600 bg-gray-100 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold tracking-tight text-gray-900 mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Docker', 'Git', 'AWS', 'MongoDB', 'MySQL', 'Linux'].map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-4 py-2 text-base font-medium text-gray-600 bg-gray-100 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 mb-8" style={{ fontFamily: "'Syne', sans-serif" }}>Achievements</h3>
              <ul className="space-y-4 list-disc list-inside text-lg text-gray-600">
                <li className="font-medium">1st Place - CodeFest 2022 AI Challenge (Among 150+ teams)</li>
                <li className="font-medium">Top 5% - Google Kick Start Programming Competition 2023</li>
                <li className="font-medium">Grant Recipient - NVIDIA Academic Hardware Grant (2023)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Weekly Log Section */}
        <section className={`py-12 ${activeSection === 'weekly' ? 'block' : 'hidden'}`}>
          <div className="space-y-12">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900" style={{ fontFamily: "'Syne', sans-serif" }}>Weekly Progress Log</h3>
            <div className="grid grid-cols-1 gap-8">
              {weeklyLogs.map((log, index) => (
                <div key={index} className="group">
                  <div className="bg-white p-8 rounded-2xl transition-all duration-300 hover:shadow-xl">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold tracking-tight text-gray-900" style={{ fontFamily: "'Syne', sans-serif" }}>{log.week}</h4>
                        <p className="mt-2 text-lg text-gray-600">{log.summary}</p>
                        {log.details && (
                          <div className="mt-4 prose prose-lg max-w-none text-gray-600">
                            {log.details.map((detail, i) => (
                              <p key={i} className="mb-2">{detail}</p>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="mt-6 md:mt-0 md:ml-8 flex flex-col space-y-4">
                        <a
                          href={log.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-base font-medium text-gray-600 hover:text-black transition-colors"
                        >
                          <Youtube className="h-5 w-5 mr-2" />
                          Watch Progress Video
                        </a>
                        {log.siteLink && (
                          <a
                            href={log.siteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-base font-medium text-gray-600 hover:text-black transition-colors"
                          >
                            <Globe className="h-5 w-5 mr-2" />
                            Visit Site
                          </a>
                        )}
                        <a
                          href={log.pdf || `/pdf/${log.week.replace(/\s+/g, '').toLowerCase()}.pdf`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-base font-medium text-gray-600 hover:text-black transition-colors"
                        >
                          <FileText className="h-5 w-5 mr-2" />
                          View PDF
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
