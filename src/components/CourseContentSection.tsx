const CourseContentSection = () => {
  const modules = [
    {
      id: "01",
      title: "FUNDAMENTOS IA",
      subtitle: "Domina las bases",
      description: "Aprende ChatGPT, Claude y herramientas esenciales",
      project: "🤖 Crea tu primer asistente IA",
      skills: ["Prompt Engineering", "ChatGPT Advanced", "Claude AI", "Perplexity"],
      duration: "Semana 1"
    },
    {
      id: "02", 
      title: "AUTOMATIZACIÓN",
      subtitle: "Workflows inteligentes",
      description: "Conecta herramientas y automatiza procesos",
      project: "⚙️ Sistema de ventas automatizado",
      skills: ["Zapier + IA", "Make.com", "APIs", "Integraciones"],
      duration: "Semana 2"
    },
    {
      id: "03",
      title: "PRODUCTIVIDAD 10X",
      subtitle: "Casos reales",
      description: "Implementa IA en tu trabajo específico",
      project: "🚀 Tu stack de productividad personal",
      skills: ["Casos de uso", "Optimización", "Escalamiento", "ROI"],
      duration: "Semana 3"
    }
  ];

  return (
    <section className="py-16 bg-card relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="retro-window p-8">
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-6 border-b border-primary pb-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-destructive rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <span className="font-terminal text-sm text-muted-foreground">contenido_curso.zip</span>
            </div>

            <div className="text-center mb-12">
              <div className="terminal-text">
                <h2 className="font-pixel text-2xl md:text-3xl mb-4 neon-glow">
                  CONTENIDO DEL CURSO
                </h2>
              </div>
              <div className="font-terminal text-lg text-accent">
                <span className="blink">▋</span> Descomprimiendo módulos formativos...
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {modules.map((module, index) => (
                <div 
                  key={module.id}
                  className="retro-window p-6 hover:scale-105 transition-all duration-300 group cursor-pointer"
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {/* Module Header */}
                  <div className="flex items-center justify-between mb-4 border-b border-primary pb-2">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full blink"></div>
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                    <span className="font-terminal text-xs text-muted-foreground">
                      modulo_{module.id}.exe
                    </span>
                  </div>

                  {/* Module Content */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="font-pixel text-sm text-accent mb-1">
                        {module.duration}
                      </div>
                      <div className="font-pixel text-lg text-primary group-hover:neon-glow transition-all duration-300">
                        {module.title}
                      </div>
                      <div className="font-terminal text-secondary text-sm">
                        {module.subtitle}
                      </div>
                    </div>

                    <div className="bg-muted p-4 pixel-border">
                      <div className="font-terminal text-sm text-foreground">
                        {module.description}
                      </div>
                    </div>

                    <div className="bg-background p-4 pixel-border">
                      <div className="font-terminal text-sm">
                        <div className="text-accent mb-2">MINI-PROYECTO:</div>
                        <div className="text-primary">{module.project}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="font-terminal text-xs text-accent">HABILIDADES:</div>
                      {module.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center space-x-2">
                          <span className="text-secondary">▸</span>
                          <span className="font-terminal text-sm text-foreground">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="text-center pt-4">
                      <div className="font-terminal text-xs text-muted-foreground">
                        {'>'}  status: READY_TO_LOAD
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-background p-6 pixel-border">
              <div className="text-center">
                <div className="font-terminal text-xl text-primary mb-4">
                  💾 EXTRAS INCLUIDOS:
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="font-terminal text-sm">
                    <div className="text-secondary">📚 Plantillas</div>
                    <div className="text-muted-foreground">50+ prompts listos</div>
                  </div>
                  <div className="font-terminal text-sm">
                    <div className="text-secondary">🎥 Grabaciones</div>
                    <div className="text-muted-foreground">Acceso de por vida</div>
                  </div>
                  <div className="font-terminal text-sm">
                    <div className="text-secondary">👥 Comunidad</div>
                    <div className="text-muted-foreground">Grupo exclusivo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContentSection;