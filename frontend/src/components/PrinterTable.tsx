import React, { useState, useEffect } from 'react';

interface Printer {
  id: number;
  brand: string;
  model: string;
  // ... add other fields as needed
}

const PrinterTable: React.FC = () => {
  const [printers, setPrinters] = useState<Printer[]>([]);

  useEffect(() => {
    fetch("/printers")
      .then(response => response.json())
      .then(data => setPrinters(data))
      .catch(error => console.error("Error fetching printers:", error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Brand</th>
          <th>Model</th>
          {/* ... add other headers as needed */}
        </tr>
      </thead>
      <tbody>
        {printers.map(printer => (
          <tr key={printer.id}>
            <td>{printer.id}</td>
            <td>{printer.brand}</td>
            <td>{printer.model}</td>
            {/* ... add other columns as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PrinterTable;
