// jshint esversion: 6

// initialise jquery
$(document).ready(function() {
    
    // fullpage initialisation
    new fullpage("#fullpage", {
        // license used - open source
        licenseKey: "gplv3-license",
        autoScrolling: true,
        scrollHorizontally: false,
        controlArrows: false,
        fixedElement: "#navbar",
        fitToSection: true,
    });

});

// initialise swiper js
const swiper = new Swiper(".swiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const vinyls = [
    {
        id: 1,
        name: "Minecraft Volume Alpha",
        artist: "Various",
        price: "$44.99",
        genre: "Soundtrack",
        image: ["https://www.jbhifi.co.nz/cdn/shop/files/439333-Product-0-I-638494777528331293_aaa4363b-a6b5-4cbc-b4dc-db1f2e914f38.jpg?v=1716443407", "https://www.jbhifi.co.nz/cdn/shop/files/439333-Product-1-I-638520401402187483.jpg?v=1716443407"],
    },
    {
        id: 2,
        name: "Rumours",
        artist: "Fleetwood Mac",
        price: "$52.99",
        genre: "Rock",
        image: ["https://www.jbhifi.co.nz/cdn/shop/files/440510-Product-0-I-638518117358226305.jpg?v=1716214989", "https://images.unsplash.com/photo-1602848597941-0d3d3a2c1241?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    },
    {
        id: 3,
        name: "Cowboy Carter",
        artist: "Beyonce",
        price: "$72.99",
        genre: "Pop",
        image: ["https://www.jbhifi.co.nz/cdn/shop/files/438543-Product-0-I-638476903806290050.jpg?v=1712093646", "https://www.jbhifi.co.nz/cdn/shop/files/438543-Product-1-I-638476903804926003.jpg?v=1712093646"],
    },
    {
        id: 4,
        name: "SOS",
        artist: "Sza",
        price: "$57.99",
        genre: "RnB",
        image: ["https://www.jbhifi.co.nz/cdn/shop/products/423931-Product-0-I-638240379183152429_691dafb8-238e-460a-9570-7fb585c7a7b1.jpg?v=1695418183", "https://www.jbhifi.co.nz/cdn/shop/products/423931-Product-1-I-638240379266825362_68117cd1-fa96-4267-b224-9ce314069e37.jpg?v=1695418183"],
    },
    {
        id: 5,
        name: "American Teen",
        artist: "Khalid",
        price: "$47.99",
        genre: "RnB",
        image: ["https://www.jbhifi.co.nz/cdn/shop/products/335290-Product-0-I-638240327707016339_bbad9b7f-3dff-43a5-bcb6-5ee8592c69ce.jpg?v=1697085496", "https://images.unsplash.com/photo-1602848597239-b63398805e3f?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    },
    {
        id: 6,
        name: "Lost In Translation",
        artist: "Various",
        price: "$39.99",
        genre: "Soundtrack",
        image: ["https://www.jbhifi.co.nz/cdn/shop/products/406576-Product-0-I-638312109029572569.jpg?v=1695614169", "https://images.unsplash.com/photo-1602848597239-b63398805e3f?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    },
    {
        id: 7,
        name: "The 1975",
        artist: "The 1975",
        price: "$65.99",
        genre: "Alternative",
        image: ["https://www.jbhifi.co.nz/cdn/shop/products/420538-Product-0-I-638240339268806574_aaf62e7b-e0b0-44ed-8930-213cb02fd708.jpg?v=1696450417", "https://images.unsplash.com/photo-1602848597239-b63398805e3f?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    },
    {
        id: 8,
        name: "Everything Is Going To Be OK",
        artist: "Gogo Penguin",
        price: "$41.99",
        genre: "Electronic",
        image: ["https://www.jbhifi.co.nz/cdn/shop/products/423881-Product-0-I-638240379102385633_1f06f851-9bcd-4c10-8c1f-831cb57e2a94.jpg?v=1697089483", "https://www.jbhifi.co.nz/cdn/shop/products/423881-Product-1-I-638240379103028310_16e6bf86-ace5-48bf-b3d4-729e159f3bad.jpg?v=1697089483"],
    },
    {
        id: 9,
        name: "17",
        artist: "Xxxtentacion",
        price: "$37.99",
        genre: "Hip Hop",
        image: ["https://www.jbhifi.co.nz/cdn/shop/products/358114-Product-0-I-638240326875284811_13eb7a71-7aeb-4839-8da5-eb706bbc6e72.jpg?v=1696201235", "https://images.unsplash.com/photo-1602848597239-b63398805e3f?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    },
    {
        id: 10,
        name: "Igor",
        artist: "Tyler The Creator",
        price: "$39.99",
        genre: "Hip Hop",
        image: ["https://www.jbhifi.co.nz/cdn/shop/products/372796-Product-0-I-638312078406020997.jpg?v=1695611110", "https://images.unsplash.com/photo-1602848597941-0d3d3a2c1241?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    },
    {
        id: 11,
        name: "K-12",
        artist: "Melanie Martinez",
        price: "$77.99",
        genre: "Pop",
        image: ["https://www.jbhifi.co.nz/cdn/shop/files/439249-Product-1-I-638520467405420202.jpg?v=1716450006", "https://images.unsplash.com/photo-1602848597239-b63398805e3f?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    },
    {
        id: 12,
        name: "Changesonebowie",
        artist: "David Bowie",
        price: "$31.99",
        genre: "Rock",
        image: ["https://www.jbhifi.co.nz/cdn/shop/products/317049-Product-0-I-638289893301870369_790b45a7-5c68-49b2-8161-cc2e355d919e.jpg?v=1697085256", "https://images.unsplash.com/photo-1602848597239-b63398805e3f?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    },
    {
        id: 13,
        name: "Random Access Memories",
        artist: "Daft Punk",
        price: "$47.99",
        genre: "Electronic",
        image: ["https://www.jbhifi.co.nz/cdn/shop/products/228574-Product-0-I-638289891650293267_f28b9996-8dee-4139-91e2-0d110c46c321.jpg?v=1695593256", "https://www.jbhifi.co.nz/cdn/shop/products/422319-Product-1-I-638240339738382678_54f8c53f-81e0-409a-9a2d-c0f4072978d5.jpg?v=1697013683"],
    },
    {
        id: 14,
        name: "24K Magic",
        artist: "Bruno Mars",
        price: "$69.99",
        genre: "Pop",
        image: ["https://www.jbhifi.co.nz/cdn/shop/files/438473-Product-0-I-638488242605157002.jpg?v=1713227525", "https://www.jbhifi.co.nz/cdn/shop/files/438473-Product-1-I-638488242606145991.jpg?v=1713227525"],
    },
    {
        id: 15,
        name: "Dead Club City",
        artist: "Nothing But Thieves",
        price: "$87.99",
        genre: "Alternative",
        image: ["https://www.jbhifi.co.nz/cdn/shop/products/437787-Product-0-I-638453279402832299.jpg?v=1709731210", "https://images.unsplash.com/photo-1608481860536-b226f691fadd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    },
    {
        id: 16,
        name: "Heaven Knows",
        artist: "Pinkpantheress",
        price: "$52.99",
        genre: "Pop",
        image: ["https://www.jbhifi.co.nz/cdn/shop/products/433000-Product-0-I-638345255422195242.jpg?v=1698928815", "https://images.unsplash.com/photo-1602848597239-b63398805e3f?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    },
    {
        id: 17,
        name: "crybaby",
        artist: "Lil Peep",
        price: "$46.99",
        genre: "Hip Hop",
        image: ["https://www.jbhifi.co.nz/cdn/shop/products/436622-Product-0-I-638430790985867131.jpg?v=1707482350", "https://images.unsplash.com/photo-1602848597239-b63398805e3f?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    },
    {
        id: 18,
        name: "Remain In Light",
        artist: "Talking Heads",
        price: "$49.99",
        genre: "Rock",
        image: ["https://www.jbhifi.co.nz/cdn/shop/products/431635-Product-0-I-638318182203000911_1560d373-06a9-4962-8fe1-503aacdd13a3.jpg?v=1696221487", "https://www.jbhifi.co.nz/cdn/shop/products/431635-Product-1-I-638318182203829912.jpg?v=1696221487"],
    },
    {
        id: 19,
        name: "Hunting High & Low",
        artist: "A-Ha",
        price: "$49.99",
        genre: "Rock",
        image: ["https://www.jbhifi.co.nz/cdn/shop/products/429650-Product-0-I-638295732002682073_a6db128a-9b2a-4d76-b1b0-45e0815c164e.jpg?v=1695435014", "https://www.jbhifi.co.nz/cdn/shop/products/429650-Product-1-I-638295732003801165_9a75b009-dc71-42a2-b610-c1c193a06237.jpg?v=1695435014"],
    },
    {
        id: 20,
        name: "Heaven Up Here",
        artist: "Echo & The Bunnymen",
        price: "$26.99",
        genre: "Alternative",
        image: ["https://www.jbhifi.co.nz/cdn/shop/products/401986-Product-0-I-638240333816926208_cb2189e0-e249-4e95-ad19-64d131c243e2.jpg?v=1696999537", "https://www.jbhifi.co.nz/cdn/shop/products/401986-Product-1-I-638240333811796843_6b0fc459-3c74-4047-8e3a-0e278e05f9c7.jpg?v=1696999537"],
    }
    
];

// form validation
// click event on submit button 
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    // set up regular epressions
    const usernameRegex = /^[a-zA-Z0-9]{5,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // get input form elements
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
})

// get elements first - genre filter
const genreFilterButton = document.getElementById("genreFilter");

// on click for genre filter
genreFilterButton.addEventListener("change", function() {
    filterAndPopulateVinylCards();
    console.log(genreFilterButton.value);
});

// function for genre filtering
function filterVinyls() {
    const filteredVinyls = vinyls.filter(vinyl => {

        // change to lowercase
        const vinylGenre = vinyl.genre.toLowerCase();
        const vinylGenreFilterValue = genreFilterButton.value.toLowerCase();

        // if statements
        if (vinylGenreFilterValue && !vinylGenre.includes(vinylGenreFilterValue)) {
            return false;
        }

        return true;

    });

    // return as filtered
    return filteredVinyls;
}

// filter and repopulate cards
function filterAndPopulateVinylCards() {
    const filteredVinyls = filterVinyls();
    populateVinylContainer(filteredVinyls);
}

// initial population
function populateVinylContainer(vinyls) {

    // get vinyls container first
    const vinylMainContainer = document.getElementById("vinylContainer");

    // clear existing content first
    vinylMainContainer.innerHTML = "";

    // function for populating
    vinyls.forEach(vinyl => {
        const vinylCard = `
        <div class="vinyl-item-card">
            
            <!-- swiper slider main container -->
            <div class="swiper">

                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                
                    <!-- Slides -->
                    <div class="swiper-slide"><img src="${vinyl.image[0]}" alt="${vinyl.name} image 1" class="vinyl-item-image"></div>
                    <div class="swiper-slide"><img src="${vinyl.image[1]}" alt="${vinyl.name} image 2" class="vinyl-item-image"></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>

            <!-- vinyl item details -->
            <div class="vinyl-item-details">

                <h2>${vinyl.name}</h2>
                <h4>${vinyl.artist}</h4>

                <div class="vinyl-item-small-details">
                    <h3>${vinyl.price}</h3>
                    <h5>${vinyl.genre}</h5>
                </div>
            </div>
        </div>
        `;

        // append card to the main vinyl container
        vinylMainContainer.innerHTML += vinylCard;

    });

    // re-initialise swiper
    const swiper = new Swiper(".swiper", {
        direction: "vertical",
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


}

// callback to the populate function
populateVinylContainer(vinyls);




