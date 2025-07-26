import { Button } from "@/components/ui/button";

const InstructorSection = () => {
  const handleLinkedInRedirect = () => {
    window.open('https://linkedin.com/in/YOUR_PROFILE', '_blank');
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
              <span className="font-terminal text-sm text-muted-foreground">instructor_profile.sys</span>
            </div>

            <div className="text-center space-y-8">
              <div className="terminal-text">
                <h2 className="font-pixel text-2xl md:text-3xl mb-4 neon-glow">
                  ¿QUIÉN DICTA EL TALLER?
                </h2>
              </div>

              <div className="space-y-6 font-terminal text-lg">
                <div className="bg-muted p-6 pixel-border">
                  <div className="text-primary text-xl mb-4">
                    <span className="blink">▋</span> [TU_NOMBRE_AQUÍ]
                  </div>
                  <div className="text-accent mb-2">
                    {'>'}  rol: AI_PRODUCTIVITY_EXPERT
                  </div>
                  <div className="text-accent mb-2">
                    {'>'}  experiencia: 5+ AÑOS EN TECH
                  </div>
                  <div className="text-accent">
                    {'>'}  especialidad: AUTOMATIZACIÓN_IA
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card p-4 pixel-border">
                    <div className="text-secondary text-sm mb-2">LOGROS:</div>
                    <ul className="space-y-2 text-left">
                      <li className="text-primary">✓ 500+ profesionales capacitados</li>
                      <li className="text-primary">✓ Consultor en empresas Fortune 500</li>
                      <li className="text-primary">✓ Speaker en conferencias tech</li>
                      <li className="text-primary">✓ Creador de 20+ automatizaciones IA</li>
                    </ul>
                  </div>

                  <div className="bg-card p-4 pixel-border">
                    <div className="text-secondary text-sm mb-2">EXPERTISE:</div>
                    <ul className="space-y-2 text-left">
                      <li className="text-accent">◈ ChatGPT Advanced</li>
                      <li className="text-accent">◈ Claude AI</li>
                      <li className="text-accent">◈ Automatización con Zapier</li>
                      <li className="text-accent">◈ Prompt Engineering</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-muted p-4 pixel-border">
                  <div className="font-terminal text-sm italic">
                    "Mi misión es democratizar el acceso a la IA.<br />
                    <span className="text-primary">Que cada profesional pueda 10x su productividad."</span>
                  </div>
                </div>

                <Button 
                  onClick={handleLinkedInRedirect}
                  className="cyber-button font-pixel text-base px-6 py-3"
                  variant="outline"
                >
                  CONECTAR EN LINKEDIN
                </Button>

                <div className="font-terminal text-xs text-muted-foreground">
                  🔗 Ver perfil completo y recomendaciones
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;