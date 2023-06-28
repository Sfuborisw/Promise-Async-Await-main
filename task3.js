// Task 3: using https://restcountries.eu/ API,
// get country where alpha3Code = col

const fetchData = async () => {
    const timeout = 1000; // Set the timeout value in milliseconds (e.g., 5000ms = 5 seconds)
  
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Timeout')); // Reject the promise after the timeout
      }, timeout);
    });
  
    const dataPromise = fetch('https://restcountries.eu/rest/v2/alpha/col')
      .then((res) => res.json());
  
    try {
      const country = await Promise.race([dataPromise, timeoutPromise]);
  
      console.log(country);
    } catch (error) {
    //   console.error(error);
      console.log("error", error);

    }
  };
  
  fetchData();
  