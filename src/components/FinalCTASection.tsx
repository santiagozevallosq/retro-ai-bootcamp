import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent("¡Estoy listo/a para transformar mi productividad con IA! Quiero inscribirme al curso.");
    window.open(`https://wa.me/YOUR_PHONE_NUMBER?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 bg-card relative">
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
              <span className="font-terminal text-sm text-muted-foreground">decision_final.exe</span>
            </div>

            <div className="text-center space-y-8">
              <div className="terminal-text">
                <h2 className="font-pixel text-2xl md:text-4xl mb-6 neon-glow">
                  ¿ESTÁS LISTO PARA EL FUTURO?
                </h2>
              </div>

              <div className="font-terminal text-lg space-y-4">
                <p className="text-accent">
                  <span className="blink">▋</span> La IA no es el futuro... es el presente.
                </p>
                <p className="text-foreground">
                  Mientras otros siguen trabajando de la forma tradicional,
                  <br />
                  <span className="text-primary neon-glow">tú tendrás la ventaja competitiva.</span>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-muted p-6 pixel-border">
                  <div className="text-destructive font-terminal text-lg mb-4">
                    ❌ SIN EL CURSO:
                  </div>
                  <ul className="space-y-2 font-terminal text-sm text-left">
                    <li>• Seguir trabajando 12+ horas</li>
                    <li>• Competir con precios bajos</li>
                    <li>• Estrés y agotamiento constante</li>
                    <li>• Quedarte atrás tecnológicamente</li>
                    <li>• Perder oportunidades laborales</li>
                  </ul>
                </div>

                <div className="bg-muted p-6 pixel-border">
                  <div className="text-primary font-terminal text-lg mb-4 neon-glow">
                    ✓ CON EL CURSO:
                  </div>
                  <ul className="space-y-2 font-terminal text-sm text-left">
                    <li>• Trabajar 4-6 horas máximo</li>
                    <li>• Ofrecer servicios premium</li>
                    <li>• Más tiempo para tu vida personal</li>
                    <li>• Ser el experto que todos buscan</li>
                    <li>• Multiplicar tus ingresos</li>
                  </ul>
                </div>
              </div>

              <div className="bg-background p-6 pixel-border">
                <div className="font-terminal text-lg">
                  <div className="text-accent mb-4">⚡ ÚLTIMA OPORTUNIDAD:</div>
                  <div className="text-primary">
                    Este precio y bonuses solo están disponibles HOY.
                  </div>
                  <div className="text-secondary text-sm mt-2">
                    Mañana el precio vuelve a $497 sin bonuses.
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleWhatsAppRedirect}
                className="cyber-button font-pixel text-xl px-12 py-6"
              >
                🚀 INSCRÍBETE AHORA
              </Button>

              <div className="space-y-2 font-terminal text-sm text-muted-foreground">
                <div>✅ Garantía de 30 días</div>
                <div>✅ Acceso inmediato</div>
                <div>✅ Comunidad incluida</div>
                <div>✅ Certificado al finalizar</div>
              </div>

              <div className="bg-muted p-4 pixel-border">
                <div className="font-terminal text-xs">
                  <div className="text-primary">ADVERTENCIA_SISTEMA:</div>
                  <div className="text-accent mt-1">
                    "La revolución IA ya comenzó. O te subes al tren, o te quedas en la estación."
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

export default FinalCTASection;