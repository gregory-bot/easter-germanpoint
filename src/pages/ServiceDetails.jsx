import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
const germanSpecialties = [
    {
      id: 'gs1',
      title: 'German Sausage Platter',
      price: 1200,
      description: 'Assorted German sausages',
      image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      id: 'gs2',
      title: 'Wiener Schnitzel',
      price: 1300,
      description: 'Served with your Choice of Fries, Potato or Green Salad & tartar sauce',
      image: 'https://images.unsplash.com/photo-1599921841143-819065a55cc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      id: 'gs3',
      title: 'Hunter Style Schnitzel',
      price: 1300,
      description: 'Topped with mushroom sauce. Served with your Choice of fries or mashed potato',
      image: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
  ];


const breakfast = [
    {
      id: 'bf1',
      title: 'Breakfast',
      price: 900,
      description: 'Bacon, Eggs, Sausages, Beans & Toast',
      image: 'https://images.unsplash.com/photo-1588503823575-2744851a4b56?q=80&w=3203&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];


  const soups = [
      {
        id: 's1',
        title: 'Tomato Soup',
        price: 600,
        description: 'Classic tomato soup',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        id: 's2',
        title: 'Beef Goulash',
        price: 900,
        description: 'Served with baguette slices',
        image: 'https://images.unsplash.com/photo-1633436374961-09b92742047b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        id: 's3',
        title: 'Vegetable Soup',
        price: 400,
        description: 'A healthy and hearty vegetable soup',
        image: 'https://plus.unsplash.com/premium_photo-1700673590238-a0e3a3795ae2?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 's4',
        title: 'Wonton Soup',
        price: 500,
        description: 'Delicious wonton soup with your choice of filling',
        options: ['Vegetable', 'Chicken', 'Pork', 'Prawn'],
        image: 'https://images.unsplash.com/photo-1559948271-7d5c98d2e951?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 's5',
        title: 'Hot & Sour Soup',
        price: 500,
        description: 'A tangy and spicy soup with your choice of filling',
        options: ['Vegetable', 'Chicken'],
        image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: 's6',
        title: 'Noodle Soup',
        price: 1250,
        description: 'Flavorful noodle soup with your choice of protein',
        options: ['Chicken', 'Pork', 'Beef'],
        image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
    ];


    const lightMealsAndSnacks = [
        {
          id: 'lm1',
          title: 'Chips',
          price: 350,
          description: 'Classic French fries',
          image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          id: 'lm2',
          title: 'Roast Potatoes',
          price: 500,
          description: 'Crispy roasted potatoes',
          image: 'https://images.unsplash.com/photo-1592837101613-35f33e978e2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          id: 'lm3',
          title: 'Fried Veg Samosa (large)',
          price: 100,
          description: 'Vegetable-filled pastry',
          image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          id: 'lm4',
          title: 'Sausage Beef / Pork',
          price: 100,
          description: 'Choice of beef or pork sausage',
          image: 'https://images.unsplash.com/photo-1588347785102-2944ba63d0c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          id: 'lm5',
          title: 'Hotdog Beef or Pork',
          price: 500,
          description: 'Classic hotdog with choice of meat',
          image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          id: 'lm6',
          title: 'Chicken Nuggets with Chips',
          price: 600,
          description: 'Crispy chicken nuggets served with fries',
          image: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
      ];


      const chicken = [
        {
          id: 'ch1',
          title: 'Grilled Chicken',
          price: 1200,
          description: 'Served with sautéed onions and tomatoes',
          image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          id: 'ch2',
          title: 'Quarter Chicken',
          price: 650,
          description: 'Grilled quarter chicken',
          image: 'https://plus.unsplash.com/premium_photo-1695931841253-1e17e7ed59b5?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          id: 'ch3',
          title: 'Half Chicken',
          price: 950,
          description: 'Grilled half chicken',
          image: 'https://images.unsplash.com/photo-1598515214146-dab39da1243d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          id: 'ch4',
          title: 'Chicken Burger with Cheese',
          price: 850,
          description: 'Garnished with sautéed onions and tomatoes',
          image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          id: 'ch5',
          title: 'Butter Chicken (Murgh Mahal)',
          price: 1250,
          description: 'Chicken Breast Cubes in spicy, rich tomato, butter and cream gravy',
          image: 'https://images.pexels.com/photos/9967258/pexels-photo-9967258.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
          id: 'ch6',
          title: 'Chicken Tikka Masala',
          price: 1250,
          description: 'Tandoored Chicken Breast Cubes in a spicy masala gravy',
          image: 'https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 'ch7',
          title: 'Coconut Cream Chicken',
          price: 1250,
          description: 'Chicken Breast Cubes in a creamy coconut enriched gravy',
          image: 'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 'ch8',
          title: 'Chicken Vindaloo',
          price: 1250,
          description: 'Chicken Breast Cubes in hot tangy vindaloo gravy',
          image: 'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg',
        },
        {
          id: 'ch9',
          title: 'Dry Chili Garlic Chicken',
          price: 1250,
          description: 'Chicken Breast Cubes cooked with spices, garlic, chili, tomato, and onion',
          image: 'https://images.pexels.com/photos/2232433/pexels-photo-2232433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 'ch10',
          title: 'Chicken Korma',
          price: 1250,
          description: 'Chicken Breast Cubes in creamy cashew nut gravy',
          image: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg',
        },
        {
          id: 'ch11',
          title: 'Palak Chicken',
          price: 1250,
          description: 'Chicken Breast Cubes in tomato, onions, spinach, and spices',
          image: 'https://images.pexels.com/photos/10078268/pexels-photo-10078268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        // New Items
        {
          id: 'ch12',
          title: 'Sweet and Sour Chicken',
          price: 1150,
          description: 'Chicken cooked in a tangy sweet and sour sauce.',
          image: 'https://images.pexels.com/photos/5848527/pexels-photo-5848527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 'ch13',
          title: 'Honey Chili Chicken',
          price: 1150,
          description: 'Crispy chicken tossed in honey and chili sauce.',
          image: 'https://images.pexels.com/photos/5339083/pexels-photo-5339083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 'ch14',
          title: 'Schezuan Chicken',
          price: 1150,
          description: 'Spicy chicken cooked in a flavorful Schezuan sauce.',
          image: 'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 'ch15',
          title: 'Dry Chili Chicken',
          price: 1150,
          description: 'Chicken stir-fried with dry chili and spices.',
          image: 'https://images.pexels.com/photos/10309473/pexels-photo-10309473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 'ch16',
          title: 'Gong Bao Chicken',
          price: 1150,
          description: 'Chicken stir-fried with peanuts and chili in a savory sauce.',
          image: 'https://images.pexels.com/photos/14855139/pexels-photo-14855139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 'ch17',
          title: 'Chicken with Garlic & Ginger',
          price: 1150,
          description: 'Chicken stir-fried with garlic and ginger for a fragrant flavor.',
          image: 'https://images.pexels.com/photos/10277948/pexels-photo-10277948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 'ch18',
          title: 'Chicken with Cashew Nuts',
          price: 1150,
          description: 'Chicken stir-fried with cashew nuts and vegetables.',
          image: 'https://images.pexels.com/photos/1603896/pexels-photo-1603896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
          id: 'ch19',
          title: 'Chicken in Black Bean Sauce',
          price: 1150,
          description: 'Chicken cooked in a savory black bean sauce.',
          image: 'https://images.pexels.com/photos/27556985/pexels-photo-27556985/free-photo-of-traditional-caribbean-cuisine.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
          id: 'ch20',
          title: 'Chicken Sizzler',
          price: 1250,
          description: 'Sizzling chicken served with vegetables and spices.',
          image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
      ];



        const fish = [
          {
            id: 'f1',
            title: 'Fish and Chips',
            price: 1300,
            description: 'Traditional British Fish & Chips',
            image: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          },
          {
            id: 'f2',
            title: 'Grilled Prawns',
            price: 1700,
            description: 'Plain, Pili Pili or Garlic',
            image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          },
          {
            id: 'f3',
            title: 'Calamari',
            price: 950,
            description: 'Grilled or deep fried',
            image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          },
          {
            id: 'f4',
            title: 'Grilled Tilapia Fillet',
            price: 1350,
            description: 'Lemon or spicy',
            image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          },
          {
            id: 'f5',
            title: 'Fish Fingers',
            price: 800,
            description: 'Served with your Choice of parsley potatoes, rice, fries or salad',
            image: 'https://images.unsplash.com/photo-1600271801401-65fe5f623a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          },
            {
              id: 'f6',
              title: 'Fish Masala',
              price: 1300,
              description: 'Tilapia fillet cooked in special masala gravy',
              image: 'https://images.pexels.com/photos/29161607/pexels-photo-29161607/free-photo-of-sushi-boat-platter-with-varied-rolls-and-sashimi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            },
            {
              id: 'f7',
              title: 'Dry Chili Garlic Fish',
              price: 1300,
              description: 'Tilapia fillet cooked with spices, garlic, chili, tomato, and onion',
              image: 'https://images.pexels.com/photos/8995209/pexels-photo-8995209.jpeg?auto=compress&cs=tinysrgb&w=800',
            },
            {
              id: 'f8',
              title: 'Dry Chili Garlic Prawns',
              price: 1650,
              description: 'Prawns cooked with spices, garlic, chili, tomato, and onion',
              image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=800',
            },
            {
              id: 'f9',
              title: 'Coconut Cream Prawns',
              price: 1650,
              description: 'Prawns cooked in creamy coconut enriched gravy',
              image: 'https://images.pexels.com/photos/5272102/pexels-photo-5272102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            },
        ]; 

        const salads = [
          {
            id: 'sld1',
            title: 'Greek Salad',
            price: 800,
            description: 'With Feta Cheese',
            image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          },
          {
            id: 'sld2',
            title: 'Chicken Salad',
            price: 800,
            description: 'Fresh salad with grilled chicken',
            image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          },
        ];


        const lambAndPork = [
          {
            id: 'lp1',
            title: 'Lamb Chops',
            price: 1150,
            description: 'Served with your Choice of roast or mashed potatoes, vegetables & gravy',
            image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          },
          {
            id: 'lp2',
            title: 'Pork Chops',
            price: 1250,
            description: 'Served with your Choice of mashed or roast potatoes, veg & gravy',
            image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          },
        ];


        const vegetarianDishes = [
          {
            id: 'vd1',
            title: 'Paneer Tikka',
            price: 1150,
            description: 'Tandoored Cottage Cheese Cubes marinated in spices',
            image: 'https://images.pexels.com/photos/2741461/pexels-photo-2741461.jpeg',
          },
          {
            id: 'vd2',
            title: 'Makhani Paneer',
            price: 1150,
            description: 'Paneer in a spicy, rich tomato, butter and cream gravy',
            image: 'https://images.pexels.com/photos/28674541/pexels-photo-28674541/free-photo-of-delicious-paneer-tikka-in-rich-tomato-gravy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'vd3',
            title: 'Palak Paneer',
            price: 1150,
            description: 'Cubes of cottage cheese with ground spinach and spices',
            image: 'https://images.pexels.com/photos/4958731/pexels-photo-4958731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'vd4',
            title: 'Dry Chili Garlic Paneer',
            price: 1150,
            description: 'Paneer cooked in spices, garlic, chili, tomato, and onion',
            image: 'https://images.pexels.com/photos/10522937/pexels-photo-10522937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'vd5',
            title: 'Dahl Makhani',
            price: 800,
            description: 'Black lentils cooked in a spicy creamy sauce',
            image: 'https://images.pexels.com/photos/5410403/pexels-photo-5410403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
        ];


        const cocktails = [
          {
            id: 'ct1',
            title: 'Margarita',
            price: 850,
            description: 'Classic tequila cocktail with lime and a salted rim',
            image: 'https://images.pexels.com/photos/5433721/pexels-photo-5433721.jpeg?auto=compress&cs=tinysrgb&w=800',
          },
          {
            id: 'ct2',
            title: 'Mojito',
            price: 750,
            description: 'Refreshing blend of rum, mint, lime, and soda',
            image: 'https://images.pexels.com/photos/12591350/pexels-photo-12591350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'ct3',
            title: 'Pina Colada',
            price: 900,
            description: 'Tropical cocktail with pineapple, coconut cream, and rum',
            image: 'https://images.pexels.com/photos/24870656/pexels-photo-24870656/free-photo-of-a-drink-with-a-pineapple-garnish-and-a-white-rim.jpeg?auto=compress&cs=tinysrgb&w=800',
          },
          {
            id: 'ct4',
            title: 'Old Fashioned',
            price: 950,
            description: 'Whiskey cocktail with bitters, sugar, and an orange twist',
            image: 'https://images.pexels.com/photos/8346711/pexels-photo-8346711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'ct5',
            title: 'Cosmopolitan',
            price: 800,
            description: 'Vodka, cranberry juice, triple sec, and lime for a zesty flavor',
            image: 'https://images.pexels.com/photos/1304542/pexels-photo-1304542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
        ];

        const indianWraps = [
          {
            id: 'iw1',
            title: 'Murg Malai / Chicken Tikka / Masala',
            price: 1050,
            description: '',
            image: 'https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=800',
          },
          {
            id: 'iw2',
            title: 'Paneer Tikka Wrap',
            price: 950,
            description: '',
            image: 'https://images.pexels.com/photos/29125420/pexels-photo-29125420/free-photo-of-mexican-wraps-and-fries-with-dipping-sauces.jpeg?auto=compress&cs=tinysrgb&w=800',
          },
        ];

        const bbq = [
          {
            id: 'bbq1',
            title: 'Chicken Tikka Boneless',
            price: 1200,
            description: '',
            image: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'bbq2',
            title: 'Tandoori Chicken on the Bone (Half)',
            price: 1200,
            description: '',
            image: 'https://images.pexels.com/photos/5031943/pexels-photo-5031943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'bbq3',
            title: 'Tandoori Chicken on the Bone (Full)',
            price: 1800,
            description: '',
            image: 'https://images.pexels.com/photos/20371522/pexels-photo-20371522/free-photo-of-meat-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'bbq4',
            title: 'Shish Kebab',
            price: 1150,
            description: '',
            image: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg',
          },
          {
            id: 'bbq5',
            title: 'Chooza Chicken',
            price: 1800,
            description: '',
            image: 'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'bbq6',
            title: 'Paneer Tikka',
            price: 1050,
            description: '',
            image: 'https://images.pexels.com/photos/2741461/pexels-photo-2741461.jpeg',
          },
          {
            id: 'bbq7',
            title: 'Tandoori Vegetable Seek',
            price: 800,
            description: '',
            image: 'https://images.pexels.com/photos/2092916/pexels-photo-2092916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
        ];

        const muttonDishes = [
          {
            id: 'md1',
            title: 'Mutton Tikka Masala',
            price: 1150,
            description: 'Tandoored Mutton cubes in special masala sauce',
            image: 'https://images.pexels.com/photos/6419694/pexels-photo-6419694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'md2',
            title: 'Mutton Vindaloo',
            price: 1150,
            description: 'Mutton cubes cooked in hot spicy vindaloo sauce',
            image: 'https://images.pexels.com/photos/18852549/pexels-photo-18852549/free-photo-of-hand-holding-meal-with-meat-on-bone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'md3',
            title: 'Dry Chili Garlic Mutton',
            price: 1150,
            description: 'Mutton slices cooked with spices, garlic, chili, tomato, and onion',
            image: 'https://plus.unsplash.com/premium_photo-1689596509991-fd47c16f3e7a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          {
            id: 'md4',
            title: 'Keema Mattar',
            price: 1150,
            description: 'Mutton mince cooked with peas and masala',
            image: 'https://images.pexels.com/photos/5409014/pexels-photo-5409014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'md5',
            title: 'Coconut Cream Mutton',
            price: 1150,
            description: 'Mutton cubes in a creamy coconut enriched gravy',
            image: 'https://images.pexels.com/photos/6123071/pexels-photo-6123071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
        ];

        const ricePilauBiryani = [
          {
            id: 'rb1',
            title: 'Plain Basmati Rice',
            price: 300,
            description: '',
            image: 'https://images.pexels.com/photos/8250738/pexels-photo-8250738.jpeg?auto=compress&cs=tinysrgb&w=800',
          },
          {
            id: 'rb2',
            title: 'Mutton Biryani',
            price: 950,
            description: '',
            image: 'https://images.pexels.com/photos/9609863/pexels-photo-9609863.jpeg',
          },
          {
            id: 'rb3',
            title: 'Chicken Biryani',
            price: 950,
            description: '',
            image: 'https://images.pexels.com/photos/23830980/pexels-photo-23830980/free-photo-of-close-up-of-a-dish-with-rice-and-chicken.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
            {
              id: 'rb4',
              title: 'Steamed Rice',
              price: 300,
              description: 'Fluffy and perfectly steamed white rice.',
              image: 'https://images.pexels.com/photos/8423376/pexels-photo-8423376.png?auto=compress&cs=tinysrgb&w=800',
            },
            {
              id: 'rb5',
              title: 'Egg Fried Rice',
              price: 450,
              description: 'Fried rice with scrambled eggs and light seasoning.',
              image: 'https://images.pexels.com/photos/28503596/pexels-photo-28503596/free-photo-of-delicious-egg-fried-rice-in-blue-bowl.jpeg?auto=compress&cs=tinysrgb&w=800',
            },
            {
              id: 'rb6',
              title: 'Vegetable Fried Rice',
              price: 450,
              description: 'Fried rice with fresh vegetables and aromatic spices.',
              image: 'https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=800',
            },
            {
              id: 'rb7',
              title: 'Chicken Fried Rice',
              price: 650,
              description: 'Fried rice with tender chicken pieces and flavorful spices.',
              image: 'https://images.pexels.com/photos/28041439/pexels-photo-28041439/free-photo-of-plate-with-spicy-instant-noodles-white-rice-fried-chicken-with-sambal-cucumber-and-tomato-a-packet-of-indomie-mi-goreng-rasa-ayam-geprek-noodles-is-placed-next-to-the-plate.jpeg?auto=compress&cs=tinysrgb&w=800',
            },
            {
              id: 'rb8',
              title: 'Beef Fried Rice',
              price: 650,
              description: 'Fried rice with tender beef slices and a savory touch.',
              image: 'https://images.pexels.com/photos/29160634/pexels-photo-29160634/free-photo-of-flavorful-shrimp-fried-rice-with-vegetables.jpeg?auto=compress&cs=tinysrgb&w=800',
            },
        ];

        const naans = [
          {
            id: 'n1',
            title: 'Plain Naan / Roti',
            price: 200,
            description: '',
            image: 'https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'n2',
            title: 'Butter Naan',
            price: 250,
            description: '',
            image: 'https://images.pexels.com/photos/28497406/pexels-photo-28497406/free-photo-of-delicious-indian-curry-with-naan-bread.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'n3',
            title: 'Garlic Naan',
            price: 250,
            description: '',
            image: 'https://images.pexels.com/photos/12737799/pexels-photo-12737799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'n4',
            title: 'Cheese Naan',
            price: 350,
            description: '',
            image: 'https://images.pexels.com/photos/23547666/pexels-photo-23547666/free-photo-of-rice-with-chicken-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=800',
          },
          {
            id: 'n5',
            title: 'Garlic Chili Cheese Naan',
            price: 350,
            description: '',
            image: 'https://images.pexels.com/photos/815525/pexels-photo-815525.jpeg?auto=compress&cs=tinysrgb&w=800',
          },
        ];

        const vegetarianAndNonVegetarianDishes = [
          // Vegetarian Items
          {
            id: 'vd1',
            title: 'Paneer Tikka',
            price: 1150,
            description: 'Tandoored Cottage Cheese Cubes marinated in spices',
            image: 'https://images.pexels.com/photos/2741461/pexels-photo-2741461.jpeg',
          },
          {
            id: 'vd2',
            title: 'Makhani Paneer',
            price: 1150,
            description: 'Paneer in a spicy, rich tomato, butter and cream gravy',
            image: 'https://images.pexels.com/photos/28674541/pexels-photo-28674541/free-photo-of-delicious-paneer-tikka-in-rich-tomato-gravy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'vd3',
            title: 'Palak Paneer',
            price: 1150,
            description: 'Cubes of cottage cheese with ground spinach and spices',
            image: 'https://images.pexels.com/photos/4958731/pexels-photo-4958731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'vd4',
            title: 'Dry Chili Garlic Paneer',
            price: 1150,
            description: 'Paneer cooked in spices, garlic, chili, tomato, and onion',
            image: 'https://images.pexels.com/photos/10522937/pexels-photo-10522937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'vd5',
            title: 'Dahl Makhani',
            price: 800,
            description: 'Black lentils cooked in a spicy creamy sauce',
            image: 'https://images.pexels.com/photos/5410403/pexels-photo-5410403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'vd6',
            title: 'Fried Spring Rolls (Vegetables)',
            price: 400,
            description: '',
            image: 'https://images.pexels.com/photos/840216/pexels-photo-840216.jpeg?auto=compress&cs=tinysrgb&w=800',
          },
          {
            id: 'vd7',
            title: 'Fried Dumplings (Vegetables)',
            price: 400,
            description: '',
            image: 'https://images.pexels.com/photos/7287715/pexels-photo-7287715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'vd8',
            title: 'Steamed Dumplings (Vegetables)',
            price: 400,
            description: '',
            image: 'https://images.pexels.com/photos/24709066/pexels-photo-24709066/free-photo-of-dumplings-served-in-wooden-bowl.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
            {
              id: 'vd9',
              title: 'Dry Chili Garlic Mushrooms',
              price: 750,
              description: '',
              image: 'https://images.pexels.com/photos/16068590/pexels-photo-16068590/free-photo-of-a-bowl-of-ramen-with-meat-and-eggs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            },
            {
              id: 'vd10',
              title: 'Stir Fry Mixed Vegetables',
              price: 600,
              description: '',
              image: 'https://images.pexels.com/photos/10398944/pexels-photo-10398944.jpeg?auto=compress&cs=tinysrgb&w=800',
            },
            {
              id: 'vd11',
              title: 'Vegetable Sizzler',
              price: 750,
              description: '',
              image: 'https://images.pexels.com/photos/20350178/pexels-photo-20350178/free-photo-of-food-on-plate.jpeg?auto=compress&cs=tinysrgb&w=800',
            },
        
          // Non-Vegetarian Items
          {
            id: 'vd12',
            title: 'Fried Spring Rolls (Chicken)',
            quantity: '4 pieces',
            price: 400,
            description: '',
            image: 'https://images.pexels.com/photos/14849252/pexels-photo-14849252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'vd13',
            title: 'Fried Dumplings (Chicken, Pork or Prawn)',
            quantity: '4 pieces',
            price: 400,
            description: '',
            image: 'https://images.pexels.com/photos/27819681/pexels-photo-27819681/free-photo-of-a-platter-with-meat-vegetables-and-onions-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'vd14',
            title: 'Steamed Dumplings (Chicken, Pork or Prawn)',
            quantity: '4 pieces',
            price: 400,
            description: '',
            image: 'https://images.pexels.com/photos/2098120/pexels-photo-2098120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'vd15',
            title: 'Crispy Chicken Wings with Garlic & Chili',
            price: 950,
            description: '',
            image: 'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'vd16',
            title: 'Prawn Tempura',
            quantity: '6 pieces',
            price: 1450,
            description: '',
            image: 'https://images.pexels.com/photos/3622477/pexels-photo-3622477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'vd17',
            title: 'Deep-fried Pork Spare Ribs',
            price: 1150,
            description: '',
            image: 'https://images.pexels.com/photos/16014262/pexels-photo-16014262/free-photo-of-fries-meat-and-sausages.jpeg?auto=compress&cs=tinysrgb&w=800',
          },
        ];

        const beefAndPork = [
          // Beef Items
          {
            id: 'bp1',
            title: 'Shredded Beef with Chili Sauce',
            price: 1150,
            description: 'Tender shredded beef cooked in a spicy chili sauce.',
            image: 'https://images.pexels.com/photos/8697520/pexels-photo-8697520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'bp2',
            title: 'Beef in Oyster Sauce',
            price: 1150,
            description: 'Beef slices cooked in a rich oyster sauce.',
            image: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'bp3',
            title: 'Beef in Black Bean Sauce',
            price: 1150,
            description: 'Beef cooked with black bean sauce for a savory flavor.',
            image: 'https://images.pexels.com/photos/2098116/pexels-photo-2098116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'bp4',
            title: 'Beef with Green Pepper',
            price: 1150,
            description: 'Beef stir-fried with fresh green peppers.',
            image: 'https://images.pexels.com/photos/19503835/pexels-photo-19503835/free-photo-of-mouth-watering-meat-with-vegetables.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'bp5',
            title: 'Dry Chili Beef',
            price: 1150,
            description: 'Beef cooked with dry chili for a spicy kick.',
            image: 'https://images.pexels.com/photos/13749940/pexels-photo-13749940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'bp6',
            title: 'Beef Chop Suey',
            price: 1150,
            description: 'Beef stir-fried with mixed vegetables in a savory sauce.',
            image: 'https://images.pexels.com/photos/17772829/pexels-photo-17772829/free-photo-of-meat-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=800',
          },
          {
            id: 'bp7',
            title: 'Beef Sizzler',
            price: 1250,
            description: 'Sizzling beef served with vegetables and spices.',
            image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
        
          // Pork Items
          {
            id: 'bp8',
            title: 'Sweet & Sour Pork',
            price: 1200,
            description: 'Pork cooked in a sweet and sour sauce with vegetables.',
            image: 'https://images.pexels.com/photos/15797951/pexels-photo-15797951/free-photo-of-stir-fried-sweet-and-sour-sauce-with-vegetables-in-a-white-dish-on-a-white-isolated-background-thai-food-top-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'bp9',
            title: 'Shredded Pork',
            price: 1200,
            description: 'Shredded pork stir-fried with spices and vegetables.',
            image: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800',
          },
          {
            id: 'bp10',
            title: 'Pork Sizzler',
            price: 1300,
            description: 'Sizzling pork served with vegetables and spices.',
            image: 'https://images.pexels.com/photos/236887/pexels-photo-236887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
        ];

        const seafoodChowMeinAndPasta = [
          // Seafood Items
          {
            id: 'sf1',
            title: 'Sweet and Sour Prawns',
            price: 1550,
            description: 'Prawns cooked in a tangy sweet and sour sauce.',
            image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'sf2',
            title: 'Prawns with Hot Garlic Sauce & Vegetables',
            price: 1550,
            description: 'Prawns stir-fried with hot garlic sauce and fresh vegetables.',
            image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Placeholder image
          },
          {
            id: 'sf3',
            title: 'Dry Chili Garlic Calamari',
            price: 1000,
            description: 'Calamari cooked with dry chili and garlic for a spicy kick.',
            image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Placeholder image
          },
        
          // Chow Mein Items
          {
            id: 'cm1',
            title: 'Vegetable Noodles',
            price: 750,
            description: 'Stir-fried noodles with fresh vegetables.',
            image: 'https://images.pexels.com/photos/5848496/pexels-photo-5848496.jpeg?auto=compress&cs=tinysrgb&w=800',
          },
          {
            id: 'cm2',
            title: 'Pork Noodles',
            price: 1050,
            description: 'Stir-fried noodles with tender pork slices.',
            image: 'https://images.pexels.com/photos/698549/pexels-photo-698549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          },
          {
            id: 'cm3',
            title: 'Chicken Noodles',
            price: 1050,
            description: 'Stir-fried noodles with flavorful chicken pieces.',
            image: 'https://images.pexels.com/photos/19264273/pexels-photo-19264273/free-photo-of-close-up-of-meal-in-bowl.jpeg?auto=compress&cs=tinysrgb&w=800',
          },
          {
            id: 'cm4',
            title: 'Beef Noodles',
            price: 1050,
            description: 'Stir-fried noodles with tender beef slices.',
            image: 'https://images.pexels.com/photos/2591594/pexels-photo-2591594.jpeg?auto=compress&cs=tinysrgb&w=800',
          },
        
          // Pasta Items
          {
            id: 'pa1',
            title: 'Spaghetti Bolognaise',
            price: 750,
            description: 'Classic spaghetti with rich bolognaise sauce and Parmesan cheese.',
            image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          },
          {
            id: 'pa2',
            title: 'Spaghetti Diablo',
            price: 650,
            description: 'Spaghetti with olive oil, garlic, fresh chilies, and Parmesan cheese.',
            image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          },
        ];

function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize navigate

  // Function to get the service items based on the service ID
  const getServiceItems = (serviceId) => {
    switch (serviceId) {
      case '1': return germanSpecialties;
      case '2': return breakfast ;
      case '3': return soups;
      case '4': return lightMealsAndSnacks;
      case '5': return chicken;
      case '6': return fish;
      case '7': return salads;
      case '8': return lambAndPork;
      case '9': return vegetarianDishes;
      case '10': return cocktails;
      case '11': return indianWraps;
      case '12': return bbq;
      case '13': return muttonDishes;
      case '14': return ricePilauBiryani;
      case '15': return naans;
      case '16': return vegetarianAndNonVegetarianDishes;
      case '17': return beefAndPork;
      case '18': return seafoodChowMeinAndPasta;   
      default: return [];
    }
  };

  const serviceItems = getServiceItems(id);

  const handleBookService = (serviceId) => {
    navigate(`/book-appointment?service=${serviceId}`); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl mb-8">Available Services</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {serviceItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs">
              <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute top-0 left-0 w-full h-full object-contain transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleBookService(item.id)} // Pass the service ID
                    className="bg-red-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors duration-300"
                  >
                    Book Service
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;