function createCar(manufacturer, modelName, ...options) {
    const carInfo = {
        manufacturer,
        modelName,
    };
    // Iterate through the options and add them to the carInfo object
    for (const option of options) {
        const keys = Object.keys(option);
        for (const key of keys) {
            carInfo[key] = option[key];
        }
    }
    return carInfo;
}
// Call the function with required information and additional details
const car = createCar("Toyota", "Camry", { color: "blue", year: 2023 });
console.log(car);
export {};
