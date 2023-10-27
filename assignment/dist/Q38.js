function describeCity(city, country = "Default Country") {
    console.log(`${city} is in ${country}.`);
}
// Call the function for three different cities
describeCity("Karachi", "Pakistan");
describeCity("New York"); // Uses the default country
describeCity("Paris", "France");
export {};
