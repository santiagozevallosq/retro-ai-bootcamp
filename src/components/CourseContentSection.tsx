const CourseContentSection = () => {
  const modules = [
    {
      id: "01",
      title: "IMPORTANCIA Y FUNDAMENTOS MÍNIMOS DE LA IA",
      subtitle: "Tema 1",
      description: "• ¿Qué está en juego si no aprendes IA? Cambios en el mundo del trabajo, casos reales de incremento de productividad • Diferencia entre IA e IA Generativa • Barrido general de herramientas de IA por tipo: redacción, análisis, creactividad, investigación, etc • La importancia de escribir prompts efectivos • Riesgos y alucinaciones",
      project: "N/A",
      skills: ["Cambios en el mundo del trabajo", "IA vs IA Generativa", "Herramientas de IA por tipo", "Prompts efectivos", "Riesgos y alucinaciones"],
      duration: "Tema 1"
    },
    {
      id: "02", 
      title: "APRENDE A HABLAR EN EL LENGUAJE DE LA IA Y DESCUBRE CÓMO IDENTIFICAR LA IA QUE NECESITAS",
      subtitle: "Tema 2",
      description: "• ¿Cómo funcionan los prompts realmente? • Estructuras básicas y avanzadas de prompts • Aprende a crear tus propios prompts reutilizables • Identificación de actividades que pueden ser asistidas con IA (repetitivas, secuenciales) • Ejemplos: redacción, ideas, análisis, etc",
      project: "N/A",
      skills: ["Funcionamiento de prompts", "Estructuras de prompts", "Prompts reutilizables", "Identificación de actividades asistidas por IA"],
      duration: "Tema 2"
    },
    {
      id: "03",
      title: "HERRAMIENTAS QUE MEJORAN TU PRODUCTIVIDAD",
      subtitle: "Tema 3",
      description: "ChatGPT (versión gratuita): • Funcionalidades básicas: Chat, Dictado por voz, Live, compartir chats • Herramientas: Investigación profunda, búsqueda en internet, Lienzo, carga de archivos, conexión con Google Drive y One Drive • Sora para creación de imágenes y videos • GPT Store: biblioteca de asistentes personalizados creados por la comunidad • Casos de uso: o Automatización de tareas frecuentes: emails, resúmenes, propuestas, informes, borradores de trabajos académicos, ensayos o Análisis de datos: análisis de archivos en Excel, códigos de programación, procesamiento de imágenes o Creación de material audiovisual: imágenes, flyers, otros • ChatGPT de pago: Proyectos, Custom GPT, Sora, Codex, Tareas, Conectores (Gmail, Calendario, Drive, Outlook, otros) • Mini proyecto: Usar un archivo Excel, un documento PDF y una noticia online, para genera un informe ejecutivo. Gemini (versión gratuita) • Funcionalidades básicas: Chat, Dictado por voz • Herramientas: Investigación profunda, búsqueda en internet, Canvas, generación de imágenes, carga de archivos, conexión con el ecosistema de Google (correos, calendario, Drive, Youtube) • Crearás tus propios ChatBots (GEMS) con memoria e instrucciones personalizadas. • Prototipado rápido y creativo: página web, infografía y APPs. • Gemini de pago: VEO 3, más potencia de uso • Mini proyecto: Crea una página de presentación de tu proyecto profesional o tesis. Notebook LM (versión gratuita): • Analizarás archivos en múltiples formatos (PDF, YouTube, audio, texto, páginas web y más). • Crearás "carpetas inteligentes" para consultas más precisas y reducirás las alucinaciones de la IA. • Generarás resúmenes, guías de estudio y notas automáticamente. • Diseñarás mapas mentales interactivos para visualizar estructuras de documentos. • Crearás audios estilo podcast comentando tus propios documentos. • Interactuarás en tiempo real con la IA sobre tus archivos ("modo live"). • Mini proyecto: Carga tu portafolio de trabajos, CV o documentos académicos, y crea una conversación con tu archivo para armar una presentación profesional o responder preguntas tipo entrevista. Google AI Studio (versión gratuita) • Entorno de pruebas de todos los modelos de IA de Google • Stream: habla, comparte tu cámara y comparte tu pantalla en tiempo real • Creación de contenido: imágenes, texto a voz, videos de 8 segundos (VEO 2) • Aprenderás a buscar información actualizada en internet usando Gemini 2.5 (la última actualización). • Usarás el modelo Gemini 2.0 Flash (Image Generation) para editar imágenes de manera creativa (quitar/agregar elementos, cambiar colores, etc.). • Podrás conversar en vivo con IA mediante voz para mejorar idiomas o resolver consultas (función Stream - Talk). • Aprenderás a compartir tu pantalla en tiempo real para que la IA te guíe paso a paso en tareas específicas (función Stream – Share Screen). • Podrás usar tu cámara web para nuevas interacciones en vivo con IA (función Stream- Webcam). • Crea videos de 8 segundos con VEO 2 • Crea voz a partir de texto (modelo TTS)",
      project: "Mini proyecto: Usar un archivo Excel, un documento PDF y una noticia online, para genera un informe ejecutivo. Mini proyecto: Crea una página de presentación de tu proyecto profesional o tesis. Mini proyecto: Carga tu portafolio de trabajos, CV o documentos académicos, y crea una conversación con tu archivo para armar una presentación profesional o responder preguntas tipo entrevista.",
      skills: ["ChatGPT", "Gemini", "Notebook LM", "Google AI Studio", "Prompts", "Análisis de datos", "Creación de contenido", "Automatización", "Productividad con IA"],
      duration: "Tema 3"
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