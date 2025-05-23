import React, { useState } from 'react';
// Update the import line at the top
import { Github, Linkedin, Mail, MapPin, Phone, Youtube, Globe, FileText } from 'lucide-react';

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

  const weeklyLogs = [
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
    <div className="min-h-screen" style={{ backgroundColor: '#CFFFDC' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full shadow-sm z-50" style={{ backgroundColor: '#2E6F40' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              {['about', 'projects', 'weekly'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeSection === section
                      ? 'border-[#CFFFDC] text-white'
                      : 'border-transparent text-[#CFFFDC] hover:border-[#68BA7F] hover:text-[#CFFFDC]'
                    }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* About Section */}
        <section className={`py-12 ${activeSection === 'about' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#68BA7F]">
                <div className="text-center">
                  <img
                    className="h-32 w-32 rounded-full mx-auto ring-4 ring-[#68BA7F]"
                    src="/img/potr.jpg"
                    alt="Profile"
                  />
                  <h2 className="mt-4 text-xl font-bold text-[#253D2C]">Himanshu Singh Aswal</h2>
                  <p className="text-sm text-[#2E6F40]">Machine Learning Engineer</p>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#68BA7F]" />
                    <span className="text-sm text-[#253D2C]">+91-781-794-9407</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#68BA7F]" />
                    <span className="text-sm text-[#253D2C]">aswalh0707@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="h-5 w-5 text-[#68BA7F]" />
                    <span className="text-sm text-[#253D2C]">himanshu-singh-aswal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#68BA7F]" />
                    <span className="text-sm text-[#253D2C]">Dehradun, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary and Education */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#68BA7F]">
                <h3 className="text-lg font-semibold text-[#253D2C]">About Me</h3>
                <p className="mt-4 text-[#2E6F40]">
                  Machine Learning Engineer with 2+ years of hands-on experience in developing AI solutions, published researcher in computer vision, and winner of multiple hackathons. Specialized in deep learning applications with expertise in TensorFlow, computer vision, and full-stack development.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-[#68BA7F]" />
                <a
                  href="/pdf/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#253D2C] hover:underline"
                >
                  View My Resume
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#68BA7F]">
                <h3 className="text-lg font-semibold text-[#253D2C]">Education</h3>
                <div className="mt-4">
                  <h4 className="font-medium text-[#253D2C]">Graphic Era Hill University (2022–2026)</h4>
                  <p className="text-sm text-[#2E6F40]">B.E. Computer Science — CGPA: 8.11/10</p>
                  <p className="mt-2 text-sm text-[#2E6F40]">
                    Relevant Coursework: Machine Learning, Deep Learning, Computer Vision, Data Structures & Algorithms, DBMS, Cloud Computing
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#68BA7F]">
                <h3 className="text-lg font-semibold text-[#253D2C]">Publications</h3>
                <div className="mt-4">
                  <h4 className="font-medium text-[#253D2C]">"Neuroscience of Virtual Reality" (IEEE, 2022)</h4>
                  <p className="mt-2 text-sm text-[#2E6F40]">
                    Developed a novel methodology for analyzing neural correlates in VR environments using EEG and machine learning techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className={`py-12 ${activeSection === 'projects' ? 'block' : 'hidden'}`}>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#68BA7F]">
              <h3 className="text-lg font-semibold text-[#253D2C]">Technical Projects</h3>
              <div className="mt-6 grid grid-cols-1 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="border-l-4 border-[#2E6F40] pl-4 py-2">
                    <h4 className="font-medium text-[#253D2C]">{project.title}</h4>
                    <p className="mt-2 text-sm text-[#2E6F40]">{project.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 text-xs font-medium bg-[#CFFFDC] text-[#253D2C] rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.stack.map((s, i) => (
                        <span key={i} className="px-2 py-1 text-xs font-medium bg-[#68BA7F] text-white rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#68BA7F]">
              <h3 className="text-lg font-semibold text-[#253D2C]">Technical Skills</h3>
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-medium text-[#253D2C]">Languages</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Python', 'JavaScript', 'C/C++', 'SQL', 'Java', 'TypeScript'].map((skill, index) => (
                      <span key={index} className="px-2 py-1 text-xs font-medium bg-[#68BA7F] text-white rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-[#253D2C]">Machine Learning</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['TensorFlow', 'PyTorch', 'OpenCV', 'scikit-learn', 'Pandas', 'Deep Learning', 'Computer Vision', 'NLP'].map((skill, index) => (
                      <span key={index} className="px-2 py-1 text-xs font-medium bg-[#68BA7F] text-white rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-[#253D2C]">Web Development</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['React', 'Node.js', 'Flask', 'REST APIs', 'GraphQL'].map((skill, index) => (
                      <span key={index} className="px-2 py-1 text-xs font-medium bg-[#68BA7F] text-white rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-[#253D2C]">Tools</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Docker', 'Git', 'AWS', 'MongoDB', 'MySQL', 'Linux'].map((skill, index) => (
                      <span key={index} className="px-2 py-1 text-xs font-medium bg-[#68BA7F] text-white rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#68BA7F]">
              <h3 className="text-lg font-semibold text-[#253D2C]">Achievements</h3>
              <ul className="mt-4 space-y-3 list-disc list-inside text-[#2E6F40]">
                <li>1st Place - CodeFest 2022 AI Challenge (Among 150+ teams)</li>
                <li>Top 5% - Google Kick Start Programming Competition 2023</li>
                <li>Grant Recipient - NVIDIA Academic Hardware Grant (2023)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Weekly Log Section */}
        <section className={`py-12 ${activeSection === 'weekly' ? 'block' : 'hidden'}`}>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#68BA7F]">
            <h3 className="text-lg font-semibold text-[#253D2C]">Weekly Progress Log</h3>
            <div className="mt-6 space-y-6">
              {weeklyLogs.map((log, index) => (
                <div key={index} className="border-b border-[#CFFFDC] pb-6 last:border-0 last:pb-0">
                  <h4 className="font-medium text-[#253D2C]">{log.week}</h4>
                  <p className="mt-2 text-[#2E6F40]">{log.summary}</p>
                  {log.details && (
                    <div className="mt-2 text-sm text-[#2E6F40]">
                      {Array.isArray(log.details)
                        ? log.details.map((detail, i) => <p key={i}>{detail}</p>)
                        : <p>{log.details}</p>}
                    </div>
                  )}
                  {/* Watch Progress Video link */}
                  <a
                    href={log.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-sm text-[#2E6F40] hover:text-[#68BA7F]"
                  >
                    <Youtube className="h-4 w-4 mr-1" />
                    Watch Progress Video
                  </a>
                  <br />
                  {/* Visit Site link */}
                  {log.siteLink && (
                    <a
                      href={log.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center text-sm text-[#2E6F40] hover:text-[#68BA7F]"
                    >
                      <Globe className="h-4 w-4 mr-1" />
                      Visit Site
                    </a>
                  )}
                  {/* PDF link section added below each week */}
                  <div className="flex items-center space-x-3 mt-2">
                    <FileText className="h-5 w-5 text-[#68BA7F]" />
                    <a
                      href={log.pdf || `/pdf/${log.week.replace(/\s+/g, '').toLowerCase()}.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#253D2C] hover:underline"
                    >
                      {log.week} PDF
                    </a>
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
