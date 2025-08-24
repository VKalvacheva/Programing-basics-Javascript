function pcStore(cpuPriceUSD, gpuPriceUSD, ramPriceUSD, ramCount, discountPercent) {
    const exchangeRate = 1.57; 

    let cpuPrice = cpuPriceUSD * exchangeRate;
    let gpuPrice = gpuPriceUSD * exchangeRate;
    let ramPrice = ramPriceUSD * exchangeRate * ramCount; 

    cpuPrice = cpuPrice * (1 - discountPercent);
    gpuPrice = gpuPrice * (1 - discountPercent);

    
    const totalPrice = cpuPrice + gpuPrice + ramPrice;

    console.log(`Money needed - ${totalPrice.toFixed(2)} leva.`);
}