// jshint esversion: 6

// initialise jquery
$(document).ready(function() {
    
    // fullpage initialisation
    new fullpage("#fullpage", {
        // license used - open source
        licenseKey: "gplv3-license",
        autoScrolling: true,
        scrollHorizontally: true,
        controlArrows: true,
        fixedElement: "#navbar"
    });

});

// alert("working"); // alert test

const vinyls = [
    {
        id: 1,
        name: "Minecraft Volume Alpha",
        artist: "Various",
        price: "$44.99",
        genre: "Soundtrack",
        image: "https://www.jbhifi.co.nz/cdn/shop/files/439333-Product-0-I-638494777528331293_aaa4363b-a6b5-4cbc-b4dc-db1f2e914f38.jpg?v=1716443407",
    },
    {
        id: 2,
        name: "Rumours",
        artist: "Fleetwood Mac",
        price: "$52.99",
        genre: "Rock",
        image: "https://www.jbhifi.co.nz/cdn/shop/files/440510-Product-0-I-638518117358226305.jpg?v=1716214989",
    },
    {
        id: 3,
        name: "Cowboy Carter",
        artist: "Beyonce",
        price: "$72.99",
        genre: "Pop",
        image: "https://www.jbhifi.co.nz/cdn/shop/files/438543-Product-0-I-638476903806290050.jpg?v=1712093646",
    },
    {
        id: 4,
        name: "SOS",
        artist: "Sza",
        price: "$57.99",
        genre: "RnB",
        image: "https://www.jbhifi.co.nz/cdn/shop/products/423931-Product-0-I-638240379183152429_691dafb8-238e-460a-9570-7fb585c7a7b1.jpg?v=1695418183",
    },
    {
        id: 5,
        name: "American Teen",
        artist: "Khalid",
        price: "$47.99",
        genre: "RnB",
        image: "https://www.jbhifi.co.nz/cdn/shop/products/335290-Product-0-I-638240327707016339_bbad9b7f-3dff-43a5-bcb6-5ee8592c69ce.jpg?v=1697085496",
    },
    {
        id: 6,
        name: "Lost In Translation",
        artist: "Various",
        price: "$39.99",
        genre: "Soundtrack",
        image: "https://www.jbhifi.co.nz/cdn/shop/products/406576-Product-0-I-638312109029572569.jpg?v=1695614169",
    },
    {
        id: 7,
        name: "The 1975",
        artist: "The 1975",
        price: "$65.99",
        genre: "Alternative",
        image: "https://www.jbhifi.co.nz/cdn/shop/products/420538-Product-0-I-638240339268806574_aaf62e7b-e0b0-44ed-8930-213cb02fd708.jpg?v=1696450417",
    },
    {
        id: 8,
        name: "If I Can't Have Love, I Want Power",
        artist: "Halsey",
        price: "$30.99",
        genre: "Pop",
        image: "https://www.jbhifi.co.nz/cdn/shop/products/398969-Product-0-I-638240333080717450_c9bfd134-804a-4951-aeac-72079c72bd20.jpg?v=1697020645",
    },
    {
        id: 9,
        name: "17",
        artist: "Xxxtentacion",
        price: "$37.99",
        genre: "Hip Hop",
        image: "https://www.jbhifi.co.nz/cdn/shop/products/358114-Product-0-I-638240326875284811_13eb7a71-7aeb-4839-8da5-eb706bbc6e72.jpg?v=1696201235",
    },
    {
        id: 10,
        name: "Igor",
        artist: "Tyler The Creator",
        price: "$39.99",
        genre: "Hip Hop",
        image: "https://www.jbhifi.co.nz/cdn/shop/products/372796-Product-0-I-638312078406020997.jpg?v=1695611110",
    },
    {
        id: 11,
        name: "K-12",
        artist: "Melanie Martinez",
        price: "$77.99",
        genre: "Pop",
        image: "https://www.jbhifi.co.nz/cdn/shop/products/372796-Product-0-I-638312078406020997.jpg?v=1695611110",
    },
    {
        id: 12,
        name: "Changesonebowie",
        artist: "David Bowie",
        price: "$31.99",
        genre: "Rock",
        image: "https://www.jbhifi.co.nz/cdn/shop/products/317049-Product-0-I-638289893301870369_790b45a7-5c68-49b2-8161-cc2e355d919e.jpg?v=1697085256",
    },
    {
        id: 13,
        name: "Random Access Memories",
        artist: "Daft Punk",
        price: "$47.99",
        genre: "Electronic",
        image: "https://www.jbhifi.co.nz/cdn/shop/products/228574-Product-0-I-638289891650293267_f28b9996-8dee-4139-91e2-0d110c46c321.jpg?v=1695593256",
    },
    {
        id: 14,
        name: "24K Magic",
        artist: "Bruno Mars",
        price: "$69.99",
        genre: "Pop",
        image: "https://www.jbhifi.co.nz/cdn/shop/files/438473-Product-0-I-638488242605157002.jpg?v=1713227525",
    },
    {
        id: 15,
        name: "Dead Club City",
        artist: "Nothing But Thieves",
        price: "$87.99",
        genre: "Alternative",
        image: "https://www.jbhifi.co.nz/cdn/shop/products/437787-Product-0-I-638453279402832299.jpg?v=1709731210",
    },
    {
        id: 16,
        name: "Heaven Knows",
        artist: "Pinkpantheress",
        price: "$52.99",
        genre: "Pop",
        image: "https://www.jbhifi.co.nz/cdn/shop/products/433000-Product-0-I-638345255422195242.jpg?v=1698928815",
    },
    {
        id: 17,
        name: "crybaby",
        artist: "Lil Peep",
        price: "$46.99",
        genre: "Hip Hop",
        image: "https://www.jbhifi.co.nz/cdn/shop/products/436622-Product-0-I-638430790985867131.jpg?v=1707482350",
    },
    {
        id: 18,
        name: "Remain In Light",
        artist: "Talking Heads",
        price: "$49.99",
        genre: "Rock",
        image: "https://www.jbhifi.co.nz/cdn/shop/products/431635-Product-0-I-638318182203000911_1560d373-06a9-4962-8fe1-503aacdd13a3.jpg?v=1696221487",
    },
    {
        id: 19,
        name: "Hunting High & Low",
        artist: "A-Ha",
        price: "$49.99",
        genre: "Rock",
        image: "https://www.jbhifi.co.nz/cdn/shop/products/429650-Product-0-I-638295732002682073_a6db128a-9b2a-4d76-b1b0-45e0815c164e.jpg?v=1695435014",
    },
    {
        id: 20,
        name: "Heaven Up Here",
        artist: "Echo & The Bunnymen",
        price: "$26.99",
        genre: "Alternative",
        image: "https://www.jbhifi.co.nz/cdn/shop/products/401986-Product-0-I-638240333816926208_cb2189e0-e249-4e95-ad19-64d131c243e2.jpg?v=1696999537",
    }
    
]

// initialise swiper js
const swiper = new Swiper(".swiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


