const AchievementsSection = () => {
  const achievements = [
    "Automatizar 80% de tareas repetitivas",
    "Crear contenido 5x más rápido",
    "Analizar datos en segundos",
    "Generar propuestas profesionales automáticamente",
    "Optimizar procesos sin programar",
    "Dominar 10+ herramientas de IA",
    "Crear tu asistente IA personalizado",
    "Implementar workflows inteligentes"
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
                <h2 className="font-pixel text-2xl md:text-3xl mb-4 neon-glow">
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

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-card p-4 pixel-border hover:bg-muted transition-all duration-300 group"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-primary text-xl group-hover:scale-110 transition-transform duration-300">
                      {'>'}
                    </div>
                    <div className="font-terminal text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                      {achievement}
                    </div>
                    <div className="ml-auto text-secondary">
                      <span className="blink">█</span>
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