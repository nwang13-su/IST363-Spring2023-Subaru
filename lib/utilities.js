export function filterAllVehicleTypes(vehiclesData) {
    let uniqueVehicleTypes = [];

    const filteredTypes = vehiclesData.map((vehicle) => {
        const { vehicleTypes } = vehicle.node.vehicleInformation;
        //avoid duplicates
        vehicleTypes.forEach((vehicleType) => {

            if (!uniqueVehicleTypes.includes(vehicleType)) {
                uniqueVehicleTypes.push(vehicleType);
            }
        });
    });
    return uniqueVehicleTypes;
}

export function convertPriceToFormattedString(price) {
    //turn 19999 to $19,999

    //turn 19999 to [1,9,9,9,9];
    let priceArray = price.toString().split('');

    for(let i = priceArray.length-3; i > 0; i -= 3){
        priceArray.splice(i, 0, ',');
    }
    return '$' + priceArray.join('');
}