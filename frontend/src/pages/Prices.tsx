import React, { useState } from 'react';
import '../styles/Pages.css';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings'; // The gear icon
import axios from 'axios';


const Prices: React.FC = () => {

  // This function will be called when the gear icon button is clicked
  // const handleScrapeRequest = () => {
  //   axios.post('http://localhost:5000/start-scraper', {
  //     url: 'https://www.softasoft.com/', 
  //     search_text: 'Developers',
  //     // ... any other required data
  //   })
  //   .then((response: any) => {
  //     console.log(response.data);
  //     // Handle successful scraper start if needed
  //     if (response.data.status === "Scraping completed.") {
  //      // Fetch the scraped data
  //      axios.get('http://localhost:5000/get-scraped-data')
  //       .then(dataResponse => {
  //         setScrapedData(dataResponse.data);  // Set the scraped data to state
  //       });
  //     }



  //   })
  //   .catch((error: any) => {
  //     console.error('Error starting the scraper:', error);
  //   });
  // };

  const [scrapedData, setScrapedData] = useState<any[]>([]);

  return (
    <div className="content-prices">
      <h2>Prices</h2>
      {/* <IconButton onClick={handleScrapeRequest} color="primary" aria-label="start scraper">
          <SettingsIcon />
      </IconButton> */}


      <section className="price-history">
        <h3>Price History Chart</h3>
        <div className="chart-placeholder">
          {/* This is a placeholder for the price history chart. */}
          Chart will go here.
        </div>
      </section>

      <section className="markets">
        <h3>Markets</h3>
        <table>
          <thead>
            <tr>
              <th>Shop Name</th>
              <th>Price</th>
              <th>Availability</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <tr key={index}>
                <td>Shop {index + 1}</td>
                <td>$100 + {index}</td>
                <td>In Stock</td>
                <td>4.{index} stars</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Shop Name</th>
              <th>Price</th>
              <th>Availability</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {scrapedData.map((data, index) => (
              <tr key={index}>
                <td>{data.shopName}</td>
                <td>{data.price}</td>
                <td>{data.availability}</td>
                <td>{data.rating}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </section>
    </div>
  );
}

export default Prices;
