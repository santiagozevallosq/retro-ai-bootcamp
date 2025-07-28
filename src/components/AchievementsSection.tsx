const AchievementsSection = () => {
  const achievements = [
    {
      title: "QUÉ LOGRARÁS",
      items: [
        "Aprenderás a comunicarte de manera efectiva con la IA. Descubrirás qué tareas puedes optimizar con IA (y cómo hacerlo).",
        "Mejorarás tus resultados con menos esfuerzo. Aumentarás la calidad, velocidad e impacto en tu trabajo."
      ],
      icon: "🎯"
    },
    {
      title: "REQUISITOS",
      items: [
        "Ninguno"
      ],
      icon: "✅"
    },
    {
      title: "PÚBLICO",
      items: [
        "A todos los que quieren incrementar su productividad mediante el uso de la Inteligencia Artificial Generativa.",
        "Idealmente para profesionales y estudiantes universitarios que quieren multiplicar su productividad con IA sin programación avanzada y con casos prácticos."
      ],
      icon: "👥"
    }
  ];

  return (
    <section className="py-16 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="retro-window p-8">
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-6 border-b border-primary pb-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-destructive rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <span className="font-terminal text-sm text-muted-foreground">objetivos_curso.sh</span>
            </div>

            <div className="text-center mb-12">
              <div className="terminal-text">
                <h2 className="font-pixel text-3xl md:text-4xl mb-4 neon-glow">
                  ¿QUÉ LOGRARÁS?
                </h2>
              </div>
              <div className="font-terminal text-lg text-accent mb-4">
                {'>'}  compilando objetivos_aprendizaje.exe
              </div>
              <div className="font-terminal text-sm text-muted-foreground">
                <span className="blink">▋</span> Cargando habilidades del futuro...
              </div>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-muted p-6 pixel-border hover:bg-background transition-all duration-300 group cursor-pointer"
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="space-y-4">
                    <div className="text-center">
                      <span className="text-4xl">{achievement.icon}</span>
                    </div>
                    
                    <div className="font-pixel text-xl text-primary group-hover:neon-glow transition-all duration-300 text-center">
                      {achievement.title}
                    </div>
                    
                    <div className="space-y-3">
                      {achievement.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-2">
                          <span className="text-secondary text-lg mt-1">▸</span>
                          <span className="font-terminal text-base text-foreground leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-muted p-6 pixel-border text-center">
                <div className="text-primary text-3xl mb-2">⚡</div>
                <div className="font-pixel text-lg text-accent">VELOCIDAD</div>
                <div className="font-terminal text-sm text-muted-foreground mt-2">
                  10x más rápido
                </div>
              </div>

              <div className="bg-muted p-6 pixel-border text-center">
                <div className="text-secondary text-3xl mb-2">🎯</div>
                <div className="font-pixel text-lg text-accent">PRECISIÓN</div>
                <div className="font-terminal text-sm text-muted-foreground mt-2">
                  Resultados exactos
                </div>
              </div>

              <div className="bg-muted p-6 pixel-border text-center">
                <div className="text-accent text-3xl mb-2">🧠</div>
                <div className="font-pixel text-lg text-accent">INTELIGENCIA</div>
                <div className="font-terminal text-sm text-muted-foreground mt-2">
                  IA como copiloto
                </div>
              </div>
            </div>

            <div className="mt-8 bg-background p-6 pixel-border">
              <div className="font-terminal text-center">
                <div className="text-primary text-lg mb-2">
                  [STATUS]: MISIÓN_ACTIVADA
                </div>
                <div className="text-accent text-sm">
                  🎮 ¡Es hora de subir de nivel!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;