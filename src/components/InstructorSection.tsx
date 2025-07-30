import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import instructorImage from "@/assets/foto_profesional.jpg";

const InstructorSection = () => {
  const handleLinkedInRedirect = () => {
    window.open('https://www.linkedin.com/in/santiago-zevallos-b6a29b44/', '_blank');
  };

  const handleTikTokRedirect = () => {
    window.open('https://www.tiktok.com/@santiagoinvierte', '_blank'); // Reemplaza con tu usuario
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
              <span className="font-terminal text-sm text-muted-foreground">perfil_docente.sys</span>
            </div>

            <div className="text-center space-y-8">
              <div className="terminal-text">
                <h2 className="font-pixel text-2xl md:text-3xl mb-4 neon-glow">
                  ¿QUIÉN DICTA EL TALLER?
                </h2>
              </div>

              <div className="space-y-6 font-terminal text-lg">
                <div className="bg-muted p-6 pixel-border">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={instructorImage} alt="Santiago Zevallos" />
                  </Avatar>
                  <div className="text-primary text-xl mb-4">
                    <span className="blink">▋</span> SANTIAGO ZEVALLOS
                  </div>
                  <div className="text-accent mb-2">
                    {'>'}  Actualmente consultor en diseño e implementación de proyectos y capacitaciones en IA en el sector público.
                  </div>
                  <div className="text-accent mb-2">
                    {'>'}  Economista PUCP, magister en Finanzas y estudiante de la maestría en Inteligencia Artificial en la UPC.
                  </div>
                  <div className="text-accent mb-2">
                    {'>'}  Más de 10 años de experiencia laboral y 3 años como docente universitario (UPC y UTP).
                  </div>
                  <div className="text-accent">
                    {'>'}  Especializado en el uso de herramientas de IA Generativa (ChatGPT4, Gemini Pro, Google AI Studio, Notebook LM, otros), automatizaciones non-code, low code (n8n), lenguajes de programación (python) y más. 
                  </div>
                </div>

                <div className="bg-muted p-4 pixel-border">
                  <div className="font-terminal text-sm italic">
                    "Mi propósito es democratizar el uso de la IA.<br />
                    <span className="text-primary">Quiero que cualquier profesional, sin importar su nivel técnico, pueda automatizar tareas, tomar mejores decisiones y multiplicar su productividad."</span>
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <Button 
                    onClick={handleLinkedInRedirect}
                    className="cyber-button font-pixel text-base px-6 py-3"
                    variant="outline"
                  >
                    CONECTAR EN LINKEDIN
                  </Button>
                  <Button 
                    onClick={handleTikTokRedirect}
                    className="cyber-button font-pixel text-base px-6 py-3"
                    variant="outline"
                  >
                    SEGUIR EN TIKTOK
                  </Button>
                </div>

                <div className="font-terminal text-xs text-muted-foreground">
                  🔗 Ver perfiles completos
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
