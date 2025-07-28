const BenefitsSection = () => {
  const benefits = [
    {
      question: "¿Quieres trabajar menos horas?",
      answer: "Automatiza tareas repetitivas con IA. Tu tiempo vale más",
      icon: "⏰"
    },
    {
      question: "¿Quieres ganar más dinero?",
      answer: "Aprende a usar IA para producir más en menos tiempo y con mejor calidad",
      icon: "💰"
    },
    {
      question: "¿Temes quedarte atrás en un mundo que cambia rápido?",
      answer: "Anticipate: prepárate ahora y conviertete en el profesional que todos buscan",
      icon: "🚀"
    }
  ];

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
              <span className="font-terminal text-sm text-muted-foreground">beneficios_checklist.exe</span>
            </div>

            <div className="text-center mb-12">
              <div className="terminal-text">
                <h2 className="font-pixel text-3xl md:text-4xl mb-4 neon-glow">
                  ¿POR QUÉ LLEVAR ESTE CURSO?
                </h2>
              </div>
              <div className="font-terminal text-xl text-accent">
                <span className="blink">▋</span> Si respondes afirmativo a lo siguiente, este curso es para ti...
              </div>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-muted p-6 pixel-border hover:bg-background transition-all duration-300 group cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="text-center">
                      <span className="text-3xl">{benefit.icon}</span>
                    </div>
                    
                    <div className="font-terminal text-xl md:text-2xl text-primary group-hover:neon-glow transition-all duration-300">
                      {benefit.question}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-secondary text-xl">✓</span>
                      <span className="font-terminal text-lg text-accent">
                        {benefit.answer}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-background p-6 pixel-border">
              <div className="text-center">
                <div className="font-terminal text-xl text-primary mb-4">
                  <span className="blink">▋</span> RESULTADO DEL ANÁLISIS:
                </div>
                <div className="font-pixel text-lg text-accent">
                  PRODUCTIVIDAD ACTUAL: <span className="text-destructive">25%</span>
                </div>
                <div className="font-pixel text-lg text-primary neon-glow mt-2">
                  PRODUCTIVIDAD POST-CURSO: <span className="text-secondary">250%</span>
                </div>
                <div className="font-terminal text-sm text-muted-foreground mt-4">
                  ⚠️ No actualizar = quedarse atrás
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;