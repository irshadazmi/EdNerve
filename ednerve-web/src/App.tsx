import { useEffect, useState } from "react";
import { checkApiHealth } from "./services/health-service";

function App() {
  const [status, setStatus] = useState("Checking API...");

  useEffect(() => {
    checkApiHealth()
      .then((data) => {
        setStatus(`API Status: ${data.status}`);
      })
      .catch((error) => {
        console.error("API connection failed:", error);
        setStatus("Unable to connect to API");
      });
  }, []);

  return (
    <div>
      <h1>OolaEdNerve</h1>
      <p>{status}</p>
    </div>
  );
}

export default App;