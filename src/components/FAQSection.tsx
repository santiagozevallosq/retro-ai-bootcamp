import { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Necesito experiencia previa en IA?",
      answer: "No. Este curso está diseñado para principiantes."
    },
    {
      question: "¿Cuánto tiempo necesito dedicar por semana?",
      answer: "Solo 4 horas por semana. El curso está optimizado para profesionales y estudiantes ocupados que quieren resultados."
    },
    {
      question: "¿Las herramientas tienen costo adicional?",
      answer: "No. En el curso se usa herramientas gratuitas."
    },
    {
      question: "¿Puedo aplicarlo a mis actividades diarias?",
      answer: "Sí. El objetivo es que puedas adaptar las herramientas de IA a tus necesidades."
    },
    {
      question: "¿Qué pasa si no puedo asistir en vivo?",
      answer: "Todas las clases en vivo se graban. Tendrás acceso al contenido grabado en y podrás verlo cuando quieras."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="retro-window p-8">
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-6 border-b border-primary pb-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-destructive rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <span className="font-terminal text-sm text-muted-foreground">faq_terminal.exe</span>
            </div>

            <div className="text-center mb-12">
              <div className="terminal-text">
                <h2 className="font-pixel text-2xl md:text-3xl mb-4 neon-glow">
                  PREGUNTAS FRECUENTES
                </h2>
              </div>
              <div className="font-terminal text-lg text-accent">
                <span className="blink">▋</span> Ejecutando resolución de dudas...
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="retro-window p-0 overflow-hidden cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Question Header */}
                  <div className="flex items-center justify-between p-4 border-b border-primary bg-muted hover:bg-card transition-colors duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-primary font-terminal">
                        {openFAQ === index ? '[-]' : '[+]'}
                      </span>
                      <span className="font-terminal text-lg text-foreground">
                        {faq.question}
                      </span>
                    </div>
                    <div className="text-accent blink">
                      {openFAQ === index ? '▼' : '▶'}
                    </div>
                  </div>

                  {/* Answer Content */}
                  {openFAQ === index && (
                    <div className="p-4 bg-card animate-fade-in">
                      <div className="font-terminal text-base text-foreground">
                        <span className="text-secondary">{'>'}  </span>
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Terminal Footer */}
            <div className="mt-12 bg-muted p-6 pixel-border">
              <div className="text-center">
                <div className="font-terminal text-lg text-primary mb-4">
                  ¿Tienes más preguntas?
                </div>
                <div className="font-terminal text-sm text-accent">
                  <span className="blink">▋</span> Escríbenos por WhatsApp y te respondemos al instante
                </div>
                <div className="font-terminal text-xs text-muted-foreground mt-2">
                  📱 Soporte 24/7 disponible
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;