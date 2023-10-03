// Tracking.tsx
interface TrackerProps {
    trackedProducts: string[];
  }
  
  function Tracker({ trackedProducts }: TrackerProps) {
      return (
        <div>
          <h1>Product Tracking</h1>
          <div>
            {trackedProducts.length === 0 ? (
              <p>No products being tracked.</p>
            ) : (
              <ul>
                {trackedProducts.map(product => <li key={product}>{product}</li>)}
              </ul>
            )}
          </div>
        </div>
      );
  }
  
  export default Tracker;
  