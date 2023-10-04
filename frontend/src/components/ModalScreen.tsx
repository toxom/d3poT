import React from 'react';
import { Transition } from 'react-transition-group';
import '../App.css'; // Import your CSS

// Import the necessary components.
import Prices from '../pages/Prices';
import Alternatives from '../pages/Alternatives';
import ProsCons from '../pages/ProsCons';
import VideoReview from '../pages/VideoReview';
import Reviews from '../pages/Reviews';
import Comparison from '../pages/Comparison';
import Overview from '../pages/Overview';


interface ModalScreenProps {
    selectedContent: string | null;
  }
  type TransitionState = "entering" | "entered" | "exiting" | "exited";

  const ModalScreen: React.FC<ModalScreenProps> = ({ selectedContent }) => {
    const ContentComponent = () => {
      switch (selectedContent) {
        case 'Overview':
            return <Overview />;
        case 'Prices':
          return <Prices />;
        case 'Alternatives':
          return <Alternatives />;
        case 'Pros & Cons':
          return <ProsCons />;
        case 'Video Reviews':
          return <VideoReview />;
        case 'Reviews':
          return <Reviews />;
        case 'Comparison':
          return <Comparison />;
        default:
            return <Overview />;
      }
    };
  
    return (
        <Transition in={selectedContent !== null} timeout={300} unmountOnExit>
            {(state: TransitionState) => (
                <div className={`modal-${state}`}>
                    <ContentComponent />
                </div>
            )}
        </Transition>
    );
}

export default ModalScreen;
