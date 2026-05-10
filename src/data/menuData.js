const menuItems = [
  // ───────────── STARTERS ─────────────
  {
    id: 1,
    name: "Shami Kebab",
    category: "Starters",
    price: 350,
    description:
      "Tender minced beef patties blended with aromatic spices and chana dal, shallow-fried to golden perfection. Served with mint chutney.",
    image: "https://media.istockphoto.com/id/2263506037/photo/shami-kebab-with-green-chutney-and-onion.webp?a=1&b=1&s=612x612&w=0&k=20&c=I56nVs2g9U4Y5ebHX0vmLcf_JxAsCEi0u5bRqjlx5W4=",
    isVeg: false,
  },
  {
    id: 2,
    name: "Dahi Bhalle",
    category: "Starters",
    price: 280,
    description:
      "Soft lentil dumplings soaked in creamy yogurt, drizzled with tangy tamarind chutney and a sprinkle of chaat masala.",
    image: "https://tse3.mm.bing.net/th/id/OIP.iCYLlw_JvqPhxfSAH7WmdAHaEt?pid=Api&h=220&P=0",
    isVeg: true,
  },
  {
    id: 3,
    name: "Chicken Tikka",
    category: "Starters",
    price: 550,
    description:
      "Juicy chicken pieces marinated overnight in yogurt and secret spices, char-grilled in a traditional clay oven (tandoor).",
    image: "https://images.unsplash.com/photo-1697155836250-e3ba3a24fbd5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoaWNrZW4lMjB0aWtrYXxlbnwwfHwwfHx8MA%3D%3D",
    isVeg: false,
  },
  {
    id: 4,
    name: "Aloo Samosa",
    category: "Starters",
    price: 70,
    description:
      "Crispy golden pastry filled with spiced potatoes and green peas. A beloved Pakistani street-food classic — served hot with ketchup.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
    isVeg: true,
  },

  // ───────────── MAINS ─────────────
  {
    id: 5,
    name: "Chicken Karahi",
    category: "Mains",
    price: 950,
    description:
      "A bold, tomato-based gravy slow-cooked with chicken, ginger, green chillies, and freshly cracked black pepper. Cooked in a traditional iron wok.",
    image: "https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbiUyMGthcmhhaXxlbnwwfHwwfHx8MA%3D%3D",
    isVeg: false,
  },
  {
    id: 6,
    name: "Mutton Rogan Josh",
    category: "Mains",
    price: 1200,
    description:
      "Slow-braised tender mutton in a rich Kashmiri red gravy with whole spices. Aromatic, deeply flavored, and fall-off-the-bone tender.",
    image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&q=80",
    isVeg: false,
  },
  {
    id: 7,
    name: "Palak Paneer",
    category: "Mains",
    price: 680,
    description:
      "Fresh cottage cheese cubes simmered in a vibrant spinach gravy seasoned with cumin, garlic, and a touch of cream.",
    image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFsYWslMjBwYW5lZXJ8ZW58MHx8MHx8fDA%3D",
    isVeg: true,
  },
  {
    id: 8,
    name: "Beef Nihari",
    category: "Mains",
    price: 1100,
    description:
      "The king of Pakistani breakfasts — now served all day. Slow-cooked beef shank in an intensely spiced broth topped with fresh ginger, coriander, and lime.",
    image: "https://media.istockphoto.com/id/504338599/photo/tender-beef-nihari.webp?a=1&b=1&s=612x612&w=0&k=20&c=3cGYJoHYdLWri5vpqJGzPzuEMlmn2Yk8cyM65cumJbw=",
    isVeg: false,
  },

  // ───────────── DESI SPECIALS ─────────────
  {
    id: 9,
    name: "Chicken Biryani",
    category: "Desi",
    price: 750,
    description:
      "Fragrant basmati rice layered with spiced chicken, saffron, caramelized onions, and fresh mint. Dum-cooked to smoky perfection.",
    image: "https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.webp?a=1&b=1&s=612x612&w=0&k=20&c=a8j_p9BkWtsSX7WkcqeetigH8PYWXGayIGto9GiehNY=",
    isVeg: false,
  },
  {
    id: 10,
    name: "Haleem",
    category: "Desi",
    price: 580,
    description:
      "A slow-cooked blend of wheat, barley, lentils, and tender beef — the ultimate Pakistani comfort food, garnished with fried onions and lime.",
    image: "https://images.unsplash.com/photo-1512010151537-2cf5c638ad51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFsZWVtfGVufDB8fDB8fHww",
    isVeg: false,
  },
  {
    id: 11,
    name: "Daal Makhani",
    category: "Desi",
    price: 420,
    description:
      "Black lentils slow-simmered overnight with butter, cream, and aromatic spices. Rich, velvety, and deeply satisfying.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80",
    isVeg: true,
  },
  {
    id: 12,
    name: "Seekh Kebab Platter",
    category: "Desi",
    price: 880,
    description:
      "Minced beef mixed with herbs and spices, skewered and grilled on hot coals. Served with naan, raita, and fresh salad.",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&q=80",
    isVeg: false,
  },

  // ───────────── BEVERAGES ─────────────
  {
    id: 13,
    name: "Mango Lassi",
    category: "Beverages",
    price: 220,
    description:
      "Chilled blended yogurt with sweet Sindhri mangoes and a hint of cardamom. Refreshing and authentic.",
    image: "https://tse4.mm.bing.net/th/id/OIP.QHvuqotNByswIGK_V_8_VgHaLH?pid=Api&h=220&P=0",
   
  },
  {
    id: 14,
    name: "Kashmiri Chai",
    category: "Beverages",
    price: 180,
    description:
      "Pink milk tea brewed with Kashmiri green tea leaves, cardamom, and cinnamon — topped with crushed pistachios and almonds.",
    image: "https://tse1.mm.bing.net/th/id/OIP.2LgjUX3dioGuLGHBZOCR4QHaDP?pid=Api&h=220&P=0",
 
  },
  { id: 15,
     name: "Cola",
      category: "Beverages",
       price: 100,
       description:"Classic carbonated cola drink-sweet and refreshing.Perfect for quenching your thirst with a fizzy drink",
       image:"https://images.unsplash.com/photo-1716800586014-fea19e9453fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGF8ZW58MHx8MHx8fDA%3D"
      },
  { id: 16, 
    name: "Juice",
     category: "Beverages", 
     price: 150,
      description: "Freshly squeezed fruit juice — a healthy and refreshing choice." ,
      image:"https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anVpY2V8ZW58MHx8MHx8fDA%3D"
    },
  { id: 17, 
    name: "Tea",
     category: "Beverages", 
     price: 80,
      description: "A comforting cup of tea — perfect for any time of day.",
      image:"https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsayUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D"
     },
  { id: 18,
     name: "Coffee",
      category: "Beverages",
       price: 120,
        description: "Rich and aromatic coffee — a great way to start your day." ,
        image:"https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVsfGVufDB8fDB8fHww"
      },

  // ───────────── DESSERTS ─────────────
  
  { id:19, 
    name: "Cake",
     category: "Desserts", 
     price: 200,
     description: "A delicious cake — perfect for any sweet tooth.",
     image:"https://plus.unsplash.com/premium_photo-1690214491960-d447e38d0bd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  { id: 20, name: "Ice Cream", category: "Desserts", price: 150 ,
    description:"A creamy and refreshing ice cream - a perfect treat to cool down on a hot day.",
    image:"https://plus.unsplash.com/premium_photo-1661427159078-9d85039e99b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGljZSUyMGNyZWFtfGVufDB8fDB8fHww"
  },
  { id: 21,
     name: "Brownie", 
     category: "Desserts", 
     price: 180,
    description:" A rich and fudgy brownie - a perfect indulgence for chocolate lovers.",
    image:"https://plus.unsplash.com/premium_photo-1716152295675-595f7a5a1d54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJvd25pZXxlbnwwfHwwfHx8MA%3D%3D"
   },
 
  {
    
    id: 22,
    name: "Gulab Jamun",
    category: "Desserts",
    price: 200,
    description:
      "Soft, spongy milk-solid dumplings soaked in rose-cardamom sugar syrup. Served warm — a true Pakistani classic.",
    image: "https://media.istockphoto.com/id/163064596/photo/gulab-jamun.webp?a=1&b=1&s=612x612&w=0&k=20&c=F_5_AgCdrsecO13W-wiuCZAwYZPBpN3UETTyYtQQlLM=",
    isVeg: true,
  },
  {
    id: 23,
    name: "Kheer",
    category: "Desserts",
    price: 250,
    description:
      "Creamy rice pudding slow-cooked in full-cream milk with sugar, cardamom, and saffron — garnished with rose petals and pistachios.",
    image: "https://media.istockphoto.com/id/1480827583/photo/rice-pudding-served-in-clay-bowl-indian-rice-kheer-with-nuts-on-a-wooden-background-popular.webp?a=1&b=1&s=612x612&w=0&k=20&c=bfzo9QG6cVivIOLBI10Cyxi-MfGTq0E8tQbpEZvglLM=",
    isVeg: true,
  },
  {
    id: 24,
    name: "Gajar Ka Halwa",
    category: "Desserts",
    price: 280,
    description:
      "Slow-cooked grated carrots in ghee, whole milk, and sugar — rich, warming, and irresistible. Best enjoyed in winter.",
    image: "https://media.istockphoto.com/id/1356499309/photo/gajar-ka-halwa-carrot-halwa-is-a-carrot-based-sweet-dessert-pudding-from-the-indian.webp?a=1&b=1&s=612x612&w=0&k=20&c=6vpUoTN-FWrndrQH4mOUWBQVCKHMIuu3lA0YbeZK-T0=",
    isVeg: true,
  },
];

export default menuItems;