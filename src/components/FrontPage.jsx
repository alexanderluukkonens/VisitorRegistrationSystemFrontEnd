import { useState } from 'react';
import "../css/FrontPage.css";

export function FrontPage() {

  // Create state-variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Create API call to register visitor and return success or failure messages
  const handleSubmit = async () => {

    // Display loading state
    setIsLoading(true);

    try {

      // Create POST request to registor visitor API 
      const response = await fetch('https://alexander-cloud-based-functions.azurewebsites.net/api/RegisterVisitor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Name: name,
          Email: email
        })
      });


      if (response.ok) {

        const sucessmessage = await response.text();
        alert(sucessmessage);

        // Clear all input after succesful registration
        setName('');
        setEmail('');
      } else {

        const errorMessage = await response.text();
        alert(errorMessage);
      }

    } catch (error) {

      alert('Something went wrong, try again.');
      console.error('Network error:', error);
    } finally {

      // hide loading state when request is done
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="frontpage-container">
        <h1 className="heading">Welcome!
          Register you visit here
        </h1>

        <div className="content">
          <input
            required
            maxLength={"30"}
            placeholder="Enter your full name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading}
          />


          <input
            required
            maxLength={"50"}
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />


          <button
            className="check-in-button"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Checking in...' : 'Check In!'}
          </button>
        </div>
      </div>
    </>
  );
}