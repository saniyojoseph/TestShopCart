//----------------------------------------------------------------
// store (contains the products)
//
function store() {
    this.products = [
        new product("APL", "HTC", "Model:Desire ", 12, 9.0, 0, 2, 0, 1, 2),
        new product("AVC", "Samsung", "Model:A5", 16, 6, 0, 1, 1, 1, 2),
        new product("BAN", "Motorola","Model:Moto Max", 4, 5, 0, 2, 1, 2, 2),
        new product("FIG", "HTC", "Model:Desire plus", 10, 4, 0, 0, 0, 1, 2),
        new product("GRF", "LG", "Model:Sharp", 11, 5, 4, 4, 1, 1, 1),
        new product("GRP", "Lenovo", "Model:Phab Plus", 8, 8, 0, 3, 0, 1, 1),
        new product("PAP", "LG", "Model:G4", 5, 3, 3, 4, 2, 2, 2),
        new product("PCH", "Motorola", "Model:M2", 19, 7, 1, 2, 0, 1, 2),
        new product("STR", "Samsung", "Model:J7", 7, 4, 0, 4, 1, 1, 2),
        new product("TNG", "Oppo", "Model:Selfie Cam", 8, 5, 3, 4, 1, 1, 2),
        new product("WML", "Lenovo", "Model:K4 note", 4, 9, 4, 4, 0, 1, 1)
    ];
    this.dvaCaption = [
        "Negligible",
        "Low",
        "Average",
        "Good",
        "Great"
    ];
    this.dvaRange = [
        "below 5%",
        "between 5 and 10%",
        "between 10 and 20%",
        "between 20 and 40%",
        "above 40%"
    ];
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
