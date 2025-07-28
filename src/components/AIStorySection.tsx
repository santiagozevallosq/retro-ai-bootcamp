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
                    Hace 3 años, era un usuario más. Probaba herramientas de IA y me parecían imperfectas, o en todo caso no quería invertir ni tiempo ni dinero en aprender. Pero al explorar más, decidí adquirir las versiones de pago, mejoré la forma de hacer consultas (prompts) a los modelos de IA Generativa y descubrí su verdadero potencial.
                    
                  </p>
                  <p>
                    Lo que empezó por curiosidad se convirtió en una transformación: implementé ideas en mi trabajo, optimicé actividades diarias, llevé cursos especializados y profundicé en programación, automatización de flujos y agentes de IA.
                    
                  </p>
                  <p>
                    El avance de la IA es imparable y quienes no dominen al menos lo básico, quedarán muy rezagados.
                    
                  </p>
                  <p>
                    Por eso te invito a abrir tu visión: explora, prueba, equivócate y descubre cómo la IA puede hacer una gran diferencia en tu vida personal y profesional. No necesitas programar (al menos en este punto); solo necesitas curiosidad, creatividad y ganas de aprender.
                    
                  </p>
                </div>

                <div className="bg-muted p-4 pixel-border">
                  <div className="font-terminal text-sm">
                    <div className="text-primary">💡 REVELACIÓN:</div>
                    <div className="mt-2">
                      "La IA no reemplaza tu trabajo, reemplaza tu manera de trabajar"<br />
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