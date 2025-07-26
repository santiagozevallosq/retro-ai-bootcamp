import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const BonusSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent("¡Quiero asegurar mi lugar en el curso con el bonus incluido!");
    window.open(`https://wa.me/YOUR_PHONE_NUMBER?text=${message}`, '_blank');
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
                <div className="text-center mb-4">
                  <div className="font-terminal text-accent text-sm mb-2">
                    TIEMPO RESTANTE PARA BONUS:
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                  {[
                    { label: "DÍAS", value: timeLeft.days },
                    { label: "HRS", value: timeLeft.hours },
                    { label: "MIN", value: timeLeft.minutes },
                    { label: "SEG", value: timeLeft.seconds }
                  ].map((item, index) => (
                    <div key={index} className="retro-window p-3 text-center">
                      <div className="font-pixel text-xl text-primary neon-glow">
                        {item.value.toString().padStart(2, '0')}
                      </div>
                      <div className="font-terminal text-xs text-accent mt-1">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
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
                      <span>Guía: "100 Prompts Que Cambiarán Tu Vida"</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-secondary">✓</span>
                      <span>1 hora de consultoría personalizada</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-secondary">✓</span>
                      <span>Acceso a comunidad VIP de por vida</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-secondary">✓</span>
                      <span>Templates de automatización premium</span>
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
                      <span>Curso Principal:</span>
                      <span className="text-primary">$497</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Guía de Prompts:</span>
                      <span className="text-primary">$97</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Consultoría 1:1:</span>
                      <span className="text-primary">$200</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Comunidad VIP:</span>
                      <span className="text-primary">$47/mes</span>
                    </div>
                    <div className="border-t border-primary pt-2 mt-2">
                      <div className="flex justify-between font-pixel text-lg">
                        <span className="text-destructive line-through">VALOR: $841</span>
                      </div>
                      <div className="flex justify-between font-pixel text-xl text-primary neon-glow">
                        <span>HOY: $197</span>
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
                ⏱️ Solo quedan 3 cupos disponibles
              </div>
            </div>

            {/* Status Bar */}
            <div className="mt-8 bg-muted p-4 pixel-border">
              <div className="flex justify-between items-center font-terminal text-xs">
                <span className="text-accent">{'>'}  cupos_disponibles: 3/10</span>
                <span className="text-primary blink">URGENTE</span>
                <span className="text-secondary">descuento: 76%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;