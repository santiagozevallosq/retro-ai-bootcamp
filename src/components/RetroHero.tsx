import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";

const RetroHero = () => {
  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent("Hola! Quiero inscribirme en el Curso Práctico: Productividad 10X usando IA");
    window.open(`https://wa.me/51934086161?text=${message}`, '_blank');
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
            <span className="font-sans text-sm text-muted-foreground"> </span>
          </div>

          {/* Main Content */}
          <div className="space-y-8">

            <div className="my-8">
              <CountdownTimer targetDate="2025-08-23T00:00:00" />
            </div>

            <div className="terminal-text">
              <div className="font-sans text-sm mb-2"> </div>
              <div className="font-sans text-3xl md:text-5xl lg:text-6xl leading-tight mb-4">
                CURSO PRÁCTICO:
                <br />
                <span className="neon-glow">PRODUCTIVIDAD 10X</span>
                <br />
                USANDO INTELIGENCIA ARTIFICIAL
              </div>
            </div>

            <div className="font-sans text-xl md:text-2xl text-secondary max-w-3xl mx-auto">
              <span className="blink">▋</span> IA a tu medida: sabemos que quieres trabajar menos horas, ganar más y no quedarte atrás. Aquí aprenderás a usar la inteligencia artificial de forma estratégica, eligiendo las herramientas que realmente transforman tu día a día. 
              <br />
               
            </div>

            <div className="space-y-4">
              <div className="font-sans text-accent">
                {'>'}  Estado: <span className="text-primary">INSCRIPCIONES ABIERTAS</span>
              </div>
              <div className="font-sans text-accent">
                {'>'}  Modalidad: <span className="text-primary">VIRTUAL EN VIVO</span>
              </div>
              <div className="font-sans text-accent">
                {'>'}  Oferta por lanzamiento: <span className="text-primary">S/ 150</span>
              </div>
              <div className="font-sans text-accent">
                {'>'}  Duración: <span className="text-primary">10 HORAS</span>
              </div>
              <div className="font-sans text-accent">
                {'>'}  Horario: <span className="text-primary">Sábados y domingos, 10am- 12m</span>
              </div>              
              <div className="font-sans text-accent">
                {'>'}  Inicio: <span className="text-primary">23 DE AGOSTO</span>
              </div>
            </div>


            <Button 
              onClick={handleWhatsAppRedirect}
              className="cyber-button font-sans text-lg px-8 py-4 mt-8"
            >
              INSCRÍBETE AHORA AQUÍ
            </Button>

            <div className="font-sans text-sm text-muted-foreground mt-4">
              ⚡ Cupos limitados • Acceso inmediato al Whatsapp del curso • Certificado (opcional)
            </div>
          </div>
        </div>
      </div>

      {/* Background Matrix Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="font-sans text-xs text-primary leading-none">
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
