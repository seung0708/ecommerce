# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    Product.create(
        {title:"Titanic[VHS]", image:"https://www.pinterest.ca/pin/391742867588578667/", description: "Decent Condition Titanic Video Cassette Tape", price: 10.99, quantity:100},
        {title:"Star Wars Special Edition Box[VHS]", image:"https://i.ebayimg.com/images/g/TA4AAOSwUXBa-iab/s-l1600.jpg", description:"Video Cassette Tape of the 1997 Star Wars Trilogy Special Edition Box Set", price: 20.99, quantity: 100}
        {title:"The Terminator[VHS]", image:"https://no.pinterest.com/pin/340373684329411117/", description:"Video Cassette Tape of the 1984 Terminator Movie", price:10.99, quantity:100}
        {title:"Terminator 2: Judgement Day[VHS]", image:"https://pic.ebid.net/upload_original/6/4/9/uo_1454601716-11023-152.jpg", description:"Video Cassette Tape of the 1991 Terminator 2 Movie", price: 30.99, quantity:100}
        {title:"Toy Story 2[VHS]", image:"https://i.etsystatic.com/7880499/r/il/1e87e2/2521851489/il_1140xN.2521851489_ckh8.jpg", description:"Original VHS of the 1999 Toy Story 2 Pixar Movie", price:25.99, quantity:100}
        {title:"Toy Story[VHS]", image:"https://images.bonanzastatic.com/afu/images/b2ce/6276/4e77_9317359912/__12.jpg", description:"Original VHS of the 1995 Toy Story Pixar Movie", price:27.99, quantity:100}
        {title:"Mighty Morphin Power Rangers Movie[VHS]", image:"https://images-na.ssl-images-amazon.com/images/I/51CM49B7PFL._AC_SY445_.jpg", description:"The first VHS Power Rangers Might Morphin 1995 Movie" , price:5.62, quantity:100}
        {title:"Baman Forever[VHS]", image:"https://i.etsystatic.com/7880499/r/il/c5e337/2518264749/il_794xN.2518264749_mq1e.jpg", description:"Val Kilmer's Batman Forever 1995 VHS", price: 14.93, quantity:100}
        {title:"Beautiful Mind[VHS]", image:"https://images-na.ssl-images-amazon.com/images/I/41FCQA555ML._AC_SY445_.jpg", description:"Russell Crowes Beautiful Mind 2002 VHS", price:3.79, quantity:100}
        {title:"The Shawshank Redemption", image:"https://images-na.ssl-images-amazon.com/images/I/512G9J05RJL._AC_SY445_.jpg", description:"Tim Robbins and Morgan Freeman's Shawshank Redemption 1997 VHS", price: 6.99, quantity:100}

    )