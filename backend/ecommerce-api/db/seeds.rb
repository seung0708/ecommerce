# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.create(
  [
    {title:"Titanic[VHS]", image:"https://images-na.ssl-images-amazon.com/images/I/71ZTV6TTC6L._AC_SY445_.gif", description: "Decent Condition Titanic Video Cassette Tape", price: 10.90},
    {title:"Star Wars Special Edition Box[VHS]", image:"https://i.ebayimg.com/images/g/TA4AAOSwUXBa-iab/s-l1600.jpg", description:"Video Cassette Tape of the 1997 Star Wars Trilogy Special Edition Box Set", price: 20.99},
    {title:"The Terminator[VHS]", image:"https://images-na.ssl-images-amazon.com/images/I/510R8ADFV0L._AC_SY445_.jpg", description:"Video Cassette Tape of the 1984 Terminator Movie", price:10.90},
    {title:"Terminator 2: Judgement Day[VHS]", image:"https://pic.ebid.net/upload_original/6/4/9/uo_1454601716-11023-152.jpg", description:"Video Cassette Tape of the 1991 Terminator 2 Movie", price: 30.90},
    {title:"Toy Story[VHS]", image:"https://images.bonanzastatic.com/afu/images/b2ce/6276/4e77_9317359912/__12.jpg", description:"Original VHS of the 1995 Toy Story Pixar Movie", price:27.99},
    {title:"Mighty Morphin Power Rangers Movie[VHS]", image:"https://images-na.ssl-images-amazon.com/images/I/51CM49B7PFL._AC_SY445_.jpg", description:"The first VHS Power Rangers Might Morphin 1995 Movie", price:5.6},
    {title:"Beautiful Mind[VHS]", image:"https://images-na.ssl-images-amazon.com/images/I/41FCQA555ML._AC_SY445_.jpg", description:"Russell Crowes Beautiful Mind 2002 VHS", price:3.70},
    {title:"The Shawshank Redemption", image:"https://images-na.ssl-images-amazon.com/images/I/512G9J05RJL._AC_SY445_.jpg", description:"Tim Robbins and Morgan Freeman's Shawshank Redemption 1997 VHS", price: 6.90}
  ] 
)