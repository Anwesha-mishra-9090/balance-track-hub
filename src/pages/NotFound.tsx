
import { useNavigate } from 'react-router-dom';
import { Joystick } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-5 max-w-md mx-auto p-8 border border-accent rounded-lg neon-border animate-pulse-glow">
        <h1 className="text-6xl font-bold text-glow text-secondary">GAME OVER</h1>
        <h2 className="text-2xl font-medium">404 - LEVEL NOT FOUND</h2>
        <p className="text-muted-foreground">The level you're looking for doesn't exist or has been moved to another arcade.</p>
        <div className="mt-6">
          <button 
            onClick={() => navigate('/')} 
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-lg font-bold text-accent-foreground hover:bg-accent/90 transition-colors neon-border"
          >
            <Joystick className="mr-2" />
            RETURN TO MAIN MENU
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
