import React from 'react';
import '../styles/Pages.css';

import Icon1 from '../assets/icons/PrinterIcon.svg';
import Icon2 from '../assets/icons/ScannerIcon.svg';
import Icon3 from '../assets/icons/RobotIcon.svg';

function Overview() {
    return (
        <div className="overview">
            <section className="model-section">
                <h2>Model</h2>
                <div className="model-content">
                    <div className="text-grid">
                        <div>Item 1</div><div>Item 2</div>
                        <div>Item 3</div><div>Item 4</div>
                        <div>Item 5</div><div>Item 6</div>
                        <div>Item 7</div><div>Item 8</div>
                        <div>Item 9</div><div>Item 10</div>
                    </div>
                    <img src={Icon1} alt="Sample Model" className="model-image" />
                </div>
                <div className="icons">
                    <img src={Icon1} alt="Icon1" />
                    <img src={Icon2} alt="Icon2" />
                    <img src={Icon3} alt="Icon3" />
                </div>
            </section>
            <section className="description-section">
                <h2>Description</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium elit eu orci congue, a fermentum ex posuere. 
                    Praesent in tincidunt libero. Nulla facilisi. Suspendisse potenti.
                </p>
            </section>
            <section className="specifications-section">
                <h2>Specifications</h2>
                <ul>
                    <li>Specification 1</li>
                    <li>Specification 2</li>
                    <li>Specification 3</li>
                    {/* ... add more specifications as necessary */}
                </ul>
            </section>
        </div>
    );
}

export default Overview;
