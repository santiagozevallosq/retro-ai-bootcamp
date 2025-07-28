const CourseContentSection = () => {
  const modules = [
    {
      id: "01",
      title: "FUNDAMENTOS IA",
      subtitle: "Importancia y bases mínimas",
      description: "¿Qué está en juego si no aprendes IA? Diferencias entre IA e IA Generativa, herramientas por tipo, prompts efectivos y riesgos",
      project: "🎯 Identifica las herramientas IA que necesitas",
      skills: ["Herramientas por categoría", "Prompts efectivos", "Riesgos y alucinaciones", "Casos reales de productividad"],
      duration: "Tema 1"
    },
    {
      id: "02", 
      title: "LENGUAJE IA",
      subtitle: "Aprende a comunicarte con IA",
      description: "Cómo funcionan los prompts, estructuras básicas y avanzadas, crea prompts reutilizables e identifica actividades automatizables",
      project: "📝 Crea tu librería de prompts personalizados",
      skills: ["Estructuras de prompts", "Prompts reutilizables", "Identificación de tareas", "Redacción, ideas y análisis"],
      duration: "Tema 2"
    },
    {
      id: "03",
      title: "HERRAMIENTAS PRÁCTICAS: CHATGPT",
      subtitle: "Domina el asistente más versátil",
      description: "Explora a fondo ChatGPT (gratuito y pago): funcionalidades clave, GPT Store, Sora, Codex y automatización avanzada de tareas frecuentes.",
      project: "🧠 Mini-proyecto: genera un informe ejecutivo a partir de un Excel, PDF y noticia online.",
      skills: [
        "Chat, dictado por voz, Live y compartir chats",
        "GPT Store y asistentes personalizados",
        "Carga de archivos, integración con Google Drive y OneDrive",
        "Análisis de datos, creación de imágenes y documentos",
        "ChatGPT Plus: Codex, Tareas, Sora y conectores"
      ],
      duration: "Tema 3"
    },
    {
      id: "04",
      title: "HERRAMIENTAS PRÁCTICAS: GEMINI",
      subtitle: "IA conectada al ecosistema Google",
      description: "Aprende a crear GEMS (bots personalizados), integrar Google Workspace, y prototipar con IA. Accede a funciones premium como VEO 3.",
      project: "🌐 Mini-proyecto: crea una página de presentación de tu proyecto profesional o tesis.",
      skills: [
        "Chat, dictado por voz, búsqueda en internet",
        "Canvas, generación de imágenes y carga de archivos",
        "Integración con Gmail, Drive, Calendar y YouTube",
        "Creación de GEMS con memoria e instrucciones",
        "Prototipado: páginas web, infografías y apps"
      ],
      duration: "Tema 4"
    },
    {
      id: "05",
      title: "HERRAMIENTAS PRÁCTICAS: NOTEBOOK LM",
      subtitle: "Organiza, resume e interactúa con tus documentos",
      description: "Descubre cómo transformar tus archivos en conocimiento accionable con resúmenes, mapas mentales y conversaciones inteligentes.",
      project: "📚 Mini-proyecto: carga tu CV o documentos académicos y genera una presentación profesional interactiva.",
      skills: [
        "Análisis de múltiples formatos (PDF, YouTube, audio, web)",
        "Carpetas inteligentes y reducción de alucinaciones",
        "Resúmenes, guías de estudio, notas automáticas",
        "Mapas mentales y audios estilo podcast",
        "Interacción en tiempo real con tus archivos"
      ],
      duration: "Tema 5"
    },
    {
      id: "06",
      title: "HERRAMIENTAS PRÁCTICAS: GOOGLE AI STUDIO",
      subtitle: "Explora el laboratorio de modelos de Google",
      description: "Domina Stream, TTS y VEO. Aprende a interactuar con la IA en tiempo real con voz, cámara y pantalla compartida.",
      project: "🎥 Mini-proyecto: crea un video de 8 segundos y una demo en vivo con pantalla compartida y voz.",
      skills: [
        "Stream: hablar, compartir pantalla y cámara en vivo",
        "Generación de imágenes con Gemini 2.0 Flash",
        "Conversaciones en vivo usando voz (Stream – Talk)",
        "IA como guía paso a paso con pantalla compartida",
        "Text to Speech (TTS) y creación de videos con VEO 2"
      ],
      duration: "Tema 6"
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
                <h2 className="font-pixel text-3xl md:text-4xl mb-4 neon-glow">
                  CONTENIDO DEL CURSO
                </h2>
              </div>
              <div className="font-terminal text-xl text-accent">
                <span className="blink">▋</span> Cargando contenido práctico y casos reales...
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
                      <div className="font-pixel text-xl md:text-2xl text-primary group-hover:neon-glow transition-all duration-300">
                        {module.title}
                      </div>
                      <div className="font-terminal text-secondary text-lg">
                        {module.subtitle}
                      </div>
                    </div>

                    <div className="bg-muted p-4 pixel-border">
                      <div className="font-terminal text-base text-foreground leading-relaxed">
                        {module.description}
                      </div>
                    </div>

                    <div className="bg-background p-4 pixel-border">
                      <div className="font-terminal text-base">
                        <div className="text-accent mb-2 text-lg">PROYECTO PRÁCTICO:</div>
                        <div className="text-primary text-lg">{module.project}</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="font-terminal text-base text-accent">APRENDERÁS:</div>
                      {module.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center space-x-2">
                          <span className="text-secondary text-lg">▸</span>
                          <span className="font-terminal text-base text-foreground">
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
                <div className="font-terminal text-2xl text-primary mb-6">
                  🎁 DIRIGIDO A:
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="font-terminal text-lg">
                    <div className="text-secondary mb-2">👨‍🎓 ESTUDIANTES UNIVERSITARIOS</div>
                    <div className="text-muted-foreground">Que quieren multiplicar su productividad académica</div>
                  </div>
                  <div className="font-terminal text-lg">
                    <div className="text-secondary mb-2">👨‍💼 PROFESIONALES</div>
                    <div className="text-muted-foreground">Que buscan incrementar su productividad laboral</div>
                  </div>
                  <div className="font-terminal text-lg">
                    <div className="text-secondary mb-2">🚀 EMPRENDEDORES</div>
                    <div className="text-muted-foreground">Que quieren automatizar procesos sin programación</div>
                  </div>
                  <div className="font-terminal text-lg">
                    <div className="text-secondary mb-2">⚡ INNOVADORES</div>
                    <div className="text-muted-foreground">Que buscan ventaja competitiva con IA</div>
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