function describeCities(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describeCities("Karachi", "Pakistan");
describeCities("Mumbai", "India");
describeCities("Quetta");
