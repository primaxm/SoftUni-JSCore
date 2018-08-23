function moviePrices([movie, day]) {
  
    day = day.toLowerCase();
    movie = movie.toLowerCase();

    var kuku = {
        monday : {"the godfather" : 12, "schindler's list" : 8.50, "casablanca" : 8, "the wizard of oz" : 10 },
        tuesday : {"the godfather" : 10, "schindler's list" : 8.50, "casablanca" : 8, "the wizard of oz" : 10 },
        wednesday : {"the godfather" : 15, "schindler's list" : 8.50, "casablanca" : 8, "the wizard of oz" : 10 },
        thursday : {"the godfather" : 12.5, "schindler's list" : 8.50, "casablanca" : 8, "the wizard of oz" : 10 },
        friday : {"the godfather" : 15, "schindler's list" : 8.50, "casablanca" : 8, "the wizard of oz" : 10 },
        saturday : {"the godfather" : 25, "schindler's list" : 15, "casablanca" : 10, "the wizard of oz" : 15 },
        sunday : {"the godfather" : 30, "schindler's list" : 15, "casablanca" : 10, "the wizard of oz" : 15 }
    }

    if (kuku.hasOwnProperty(day)) {

        return kuku[day.trim()][movie];
    } else {
        return "error";
    }


}

console.log(moviePrices(["The Godfather", "thursday"]));



