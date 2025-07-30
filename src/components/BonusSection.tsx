import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";

const BonusSection = () => {
  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent("¡Quiero asegurar mi lugar en el curso con el bonus incluido!");
    window.open(`https://wa.me/51934086161?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="retro-window p-8 relative">
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-6 border-b border-primary pb-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-destructive rounded-full blink"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <span className="font-terminal text-sm text-muted-foreground">oferta_limitada.exe</span>
            </div>

            <div className="text-center mb-8">
              <div className="terminal-text">
                <h2 className="font-pixel text-2xl md:text-3xl mb-4 neon-glow">
                  ⚠️ OFERTA LIMITADA ⚠️
                </h2>
              </div>
              <div className="font-terminal text-lg text-destructive">
                <span className="blink">▋</span> ALERTA: Solo para los primeros 10 inscritos
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="mb-8">
              <div className="bg-muted p-6 pixel-border">
                 <CountdownTimer targetDate="2025-08-29T00:00:00" />
              </div>
            </div>

            {/* Bonus Content */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="retro-window p-6">
                  <div className="font-terminal text-lg text-primary mb-4">
                    🎁 BONUS EXCLUSIVO:
                  </div>
                  <div className="space-y-3 font-terminal text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-secondary">✓</span>
                      <span>Guía: "Prompts Que Cambiarán Tu Vida"</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-secondary">✓</span>
                      <span>1 hora de asesoría virtual 1 a 1</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-secondary">✓</span>
                      <span>Acceso a comunidad de Whatsapp de por vida</span>
                    </div>

                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="retro-window p-6">
                  <div className="font-terminal text-lg text-accent mb-4">
                    💰 VALOR TOTAL:
                  </div>
                  <div className="space-y-2 font-terminal">
                    <div className="flex justify-between text-sm">
                      <span>Curso:</span>
                      <span className="text-primary">S/ 250</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Guía de Prompts:</span>
                      <span className="text-primary">S/ 100</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Asesoría individual 1:1:</span>
                      <span className="text-primary">S/ 100</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Comunidad VIP:</span>
                      <span className="text-primary">S/ 50</span>
                    </div>
                    <div className="border-t border-primary pt-2 mt-2">
                      <div className="flex justify-between font-pixel text-lg">
                        <span className="text-destructive line-through">VALOR: S/ 500</span>
                      </div>
                      <div className="flex justify-between font-pixel text-xl text-primary neon-glow">
                        <span>HOY: S/ 150</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button 
                onClick={handleWhatsAppRedirect}
                className="cyber-button font-pixel text-lg px-8 py-4 mb-4"
              >
                🚀 ASEGURAR MI LUGAR AHORA
              </Button>
              
              <div className="font-terminal text-sm text-muted-foreground">
                ⏱️ Cupos limitados 
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
