import aiInstructor from "@/assets/ai-instructor.jpg";

const AIStorySection = () => {
  return (
    <section className="py-16 bg-card relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="retro-window p-8">
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-6 border-b border-primary pb-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-destructive rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <span className="font-terminal text-sm text-muted-foreground">mi_historia_IA.txt</span>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Story Content */}
              <div className="space-y-6">
                <div className="terminal-text">
                  <h2 className="font-pixel text-2xl md:text-3xl mb-6 neon-glow">
                    MI HISTORIA CON LA IA
                  </h2>
                </div>

                <div className="font-terminal text-lg space-y-4 text-foreground">
                  <p>
                    <span className="text-accent">{'>'}  init_story.exe</span>
                  </p>
                  <p>
                    Hace 3 años trabajaba 12+ horas diarias como cualquier profesional. 
                    <span className="text-primary"> Todo cambió cuando descubrí el poder de la IA.</span>
                  </p>
                  <p>
                    <span className="text-secondary">▶ Primeros experimentos:</span> ChatGPT para emails
                  </p>
                  <p>
                    <span className="text-secondary">▶ Evolución:</span> Automatizaciones completas
                  </p>
                  <p>
                    <span className="text-secondary">▶ Resultado:</span> <span className="text-primary neon-glow">3x más productivo</span>
                  </p>
                  <p>
                    <span className="text-accent">{'>'}  status: MISIÓN_COMPLETADA</span>
                  </p>
                </div>

                <div className="bg-muted p-4 pixel-border">
                  <div className="font-terminal text-sm">
                    <div className="text-primary">💡 REVELACIÓN:</div>
                    <div className="mt-2">
                      "La IA no reemplaza tu trabajo,<br />
                      <span className="text-accent">reemplaza tu manera de trabajar"</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="retro-window p-4">
                  <div className="flex items-center justify-between mb-4 border-b border-primary pb-2">
                    <span className="font-terminal text-xs text-muted-foreground">instructor.jpg</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full blink"></div>
                    </div>
                  </div>
                  <img 
                    src={aiInstructor} 
                    alt="AI Instructor" 
                    className="w-full pixel-art rounded-none"
                  />
                  <div className="mt-4 font-terminal text-xs text-accent">
                    {'>'}  rendering: AI_EXPERT.exe
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

export default AIStorySection;