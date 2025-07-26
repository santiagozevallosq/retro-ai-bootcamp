import { Button } from "@/components/ui/button";

const RetroHero = () => {
  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent("Hola! Me interesa el Curso Práctico: Productividad 10X usando IA");
    window.open(`https://wa.me/YOUR_PHONE_NUMBER?text=${message}`, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative scanlines bg-gradient-to-b from-background via-background to-muted">
      <div className="container mx-auto px-4 text-center">
        <div className="retro-window p-8 max-w-4xl mx-auto">
          {/* Terminal Header */}
          <div className="flex items-center justify-between mb-6 border-b border-primary pb-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-destructive rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
            <span className="font-terminal text-sm text-muted-foreground">AI_BOOTCAMP.exe</span>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <div className="terminal-text">
              <div className="font-terminal text-sm mb-2">$ iniciar_curso.sh</div>
              <div className="font-pixel text-3xl md:text-5xl lg:text-6xl leading-tight mb-4">
                CURSO PRÁCTICO:
                <br />
                <span className="neon-glow">PRODUCTIVIDAD 10X</span>
                <br />
                USANDO INTELIGENCIA ARTIFICIAL
              </div>
            </div>

            <div className="font-terminal text-xl md:text-2xl text-secondary max-w-3xl mx-auto">
              <span className="blink">▋</span> Este no es otro curso más donde aprendes muchas herramientas de IA sin uso claro.
              <br />
              Aquí aprenderás a identificar tus necesidades reales y elegir la herramienta que se ajusta a ti.
            </div>

            <div className="space-y-4">
              <div className="font-terminal text-accent">
                {'>'}  Estado: <span className="text-primary">INSCRIPCIONES ABIERTAS</span>
              </div>
              <div className="font-terminal text-accent">
                {'>'}  Modalidad: <span className="text-secondary">ONLINE + PRÁCTICO</span>
              </div>
              <div className="font-terminal text-accent">
                {'>'}  Duración: <span className="text-primary">3 SEMANAS INTENSIVAS</span>
              </div>
            </div>

            <Button 
              onClick={handleWhatsAppRedirect}
              className="cyber-button font-pixel text-lg px-8 py-4 mt-8"
            >
              INSCRÍBETE AHORA
            </Button>

            <div className="font-terminal text-sm text-muted-foreground mt-4">
              ⚡ Plazas limitadas • Acceso inmediato • Certificado incluido
            </div>
          </div>
        </div>
      </div>

      {/* Background Matrix Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="font-terminal text-xs text-primary leading-none">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="animate-pulse">
              {Math.random().toString(36).substring(2, 15)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RetroHero;