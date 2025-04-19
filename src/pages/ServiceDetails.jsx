import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 
const germanSpecialties = [
    {
      id: 'gs1',
      title: 'German Sausage Platter',
      price: 1200,
      description: 'Assorted German sausages',
      image: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'gs2',
      title: 'Wiener Schnitzel',
      price: 1300,
      description: 'Served with your Choice of Fries, Potato or Green Salad & tartar sauce',
      image: 'https://images.pexels.com/photos/1352274/pexels-photo-1352274.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'gs3',
      title: 'Hunter Style Schnitzel',
      price: 1300,
      description: 'Topped with mushroom sauce. Served with your Choice of fries or mashed potato',
      image: 'https://media.istockphoto.com/id/2194703335/photo/chicken-tomato-mozzarella-with-breaded-chicken-tomato-sauce-cheese-salad-potato-and-corn-food.jpg?b=1&s=612x612&w=0&k=20&c=_X-emb_1SSWwXtTnsZE1-1B3UYsyxSs9eUoFT7EtB2c=',
    },
  ];


const breakfast = [
    {
      id: 'bf1',
      title: 'Breakfast',
      price: 900,
      description: 'Bacon, Eggs, Sausages, Beans & Toast',
      image: 'https://images.pexels.com/photos/18580150/pexels-photo-18580150/free-photo-of-full-english-breakfast-with-fried-eggs-sausages-and-bacon.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];


  const soups = [
      {
        id: 's1',
        title: 'Tomato Soup',
        price: 600,
        description: 'Classic tomato soup',
        image: 'https://images.pexels.com/photos/1618888/pexels-photo-1618888.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 's2',
        title: 'Beef Goulash',
        price: 900,
        description: 'Served with baguette slices',
        image: 'https://images.pexels.com/photos/31673756/pexels-photo-31673756/free-photo-of-delicious-plate-of-beef-stir-fry-with-vegetables.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 's3',
        title: 'Vegetable Soup',
        price: 400,
        description: 'A healthy and hearty vegetable soup',
        image: 'https://images.pexels.com/photos/2664221/pexels-photo-2664221.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 's4',
        title: 'Wonton Soup',
        price: 500,
        description: 'Delicious wonton soup with your choice of filling',
        options: ['Vegetable', 'Chicken', 'Pork', 'Prawn'],
        image: 'https://images.pexels.com/photos/31653133/pexels-photo-31653133/free-photo-of-delicious-curry-dish-in-tokyo-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 's5',
        title: 'Hot & Sour Soup',
        price: 500,
        description: 'A tangy and spicy soup with your choice of filling',
        options: ['Vegetable', 'Chicken'],
        image: 'https://media.istockphoto.com/id/1333237441/photo/hot-and-sour-soup.jpg?b=1&s=612x612&w=0&k=20&c=LiMq4Y6MFBS2Aiuxm3Dsq-5X0bkI8VPo48z8C7WJgnU=',
      },
      {
        id: 's6',
        title: 'Noodle Soup',
        price: 1250,
        description: 'Flavorful noodle soup with your choice of protein',
        options: ['Chicken', 'Pork', 'Beef'],
        image: 'https://images.pexels.com/photos/2591594/pexels-photo-2591594.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
    ];


    const lightMealsAndSnacks = [
        {
          id: 'lm1',
          title: 'Chips',
          price: 350,
          description: 'Classic French fries',
          image: 'https://i.postimg.cc/8crBFdWR/jklive.jpg',
        },
        {
          id: 'lm2',
          title: 'Roast Potatoes',
          price: 500,
          description: 'Crispy roasted potatoes',
          image: 'https://images.pexels.com/photos/15264024/pexels-photo-15264024/free-photo-of-food-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          id: 'lm3',
          title: 'Fried Veg Samosa (large)',
          price: 100,
          description: 'Vegetable-filled pastry',
          image: 'https://media.istockphoto.com/id/486236459/photo/squash-and-goat-cheese-croissant.jpg?b=1&s=612x612&w=0&k=20&c=IR1Bv-Nu9mHV2Rf8cuekiY7VrzxNA6gRlWOtQFeiJww=',
        },
        {
          id: 'lm4',
          title: 'Sausage Beef / Pork',
          price: 100,
          description: 'Choice of beef or pork sausage',
          image: 'https://images.pexels.com/photos/8279981/pexels-photo-8279981.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          id: 'lm5',
          title: 'Hotdog Beef or Pork',
          price: 500,
          description: 'Classic hotdog with choice of meat',
          image: 'https://images.pexels.com/photos/27599999/pexels-photo-27599999/free-photo-of-loaded-hot-dog.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          id: 'lm6',
          title: 'Chicken Nuggets with Chips',
          price: 600,
          description: 'Crispy chicken nuggets served with fries',
          image: 'https://i.postimg.cc/FRJmGQCX/er.jpg',
        },
      ];


      const chicken = [
        {
          id: 'ch1',
          title: 'Grilled Chicken',
          price: 1200,
          description: 'Served with sautéed onions and tomatoes',
          image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          id: 'ch2',
          title: 'Quarter Chicken',
          price: 650,
          description: 'Grilled quarter chicken',
          image: 'https://media.istockphoto.com/id/1969817520/photo/dinner-or-lunch-oven-roasted-chicken-leg-quarter-with-fresh-valerian-or-corn-salad-with.jpg?b=1&s=612x612&w=0&k=20&c=5bnWfslG1hs2TS8THnfmmca4xVCwzS5ADWmIMDWDxs8=',
        },
        {
          id: 'ch3',
          title: 'Half Chicken',
          price: 950,
          description: 'Grilled half chicken',
          image: 'https://images.pexels.com/photos/27953852/pexels-photo-27953852/free-photo-of-top-view-of-chicken-meat.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          id: 'ch4',
          title: 'Chicken Burger with Cheese',
          price: 850,
          description: 'Garnished with sautéed onions and tomatoes',
          image: 'https://i.postimg.cc/fyj7jz2y/fgf.jpg',
        },
        {
          id: 'ch5',
          title: 'Butter Chicken (Murgh Mahal)',
          price: 1250,
          description: 'Chicken Breast Cubes in spicy, rich tomato, butter and cream gravy',
          image: 'https://images.pexels.com/photos/9967258/pexels-photo-9967258.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          id: 'ch6',
          title: 'Chicken Tikka Masala',
          price: 1250,
          description: 'Tandoored Chicken Breast Cubes in a spicy masala gravy',
          image: 'https://images.pexels.com/photos/9609840/pexels-photo-9609840.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          id: 'ch7',
          title: 'Coconut Cream Chicken',
          price: 1250,
          description: 'Chicken Breast Cubes in a creamy coconut enriched gravy',
          image: 'https://media.istockphoto.com/id/613897944/photo/chicken-leg-in-spicy-and-sweet-yellow-curry-on-dish.jpg?b=1&s=612x612&w=0&k=20&c=AnGZG1emWxjvPoLyjZxQCPKLtgYwXOYcmMRRMlOa-O0=',
        },
        {
          id: 'ch8',
          title: 'Chicken Vindaloo',
          price: 1250,
          description: 'Chicken Breast Cubes in hot tangy vindaloo gravy',
          image: 'https://images.pexels.com/photos/31653135/pexels-photo-31653135/free-photo-of-close-up-of-thai-red-curry-with-vegetables.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          id: 'ch9',
          title: 'Dry Chili Garlic Chicken',
          price: 1250,
          description: 'Chicken Breast Cubes cooked with spices, garlic, chili, tomato, and onion',
          image: 'https://images.pexels.com/photos/2232433/pexels-photo-2232433.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          id: 'ch10',
          title: 'Chicken Korma',
          price: 1250,
          description: 'Chicken Breast Cubes in creamy cashew nut gravy',
          image: 'https://images.pexels.com/photos/31683414/pexels-photo-31683414/free-photo-of-elegant-dinner-setting-with-wine-and-chicken.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          id: 'ch11',
          title: 'Palak Chicken',
          price: 1250,
          description: 'Chicken Breast Cubes in tomato, onions, spinach, and spices',
          image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        // New Items
        {
          id: 'ch12',
          title: 'Sweet and Sour Chicken',
          price: 1150,
          description: 'Chicken cooked in a tangy sweet and sour sauce.',
          image: 'https://media.istockphoto.com/id/2206963994/photo/long-stewed-tender-pork-ribs-stewed-soft-pork-in-sweet-and-sour-sauce.jpg?s=612x612&w=0&k=20&c=qZxGI9WJlIXfaFn1-LbhtCdPUJ-DsWFgPZm77_CKYiI=',
        },
        {
          id: 'ch13',
          title: 'Honey Chili Chicken',
          price: 1150,
          description: 'Crispy chicken tossed in honey and chili sauce.',
          image: 'https://media.istockphoto.com/id/1285462667/photo/fried-chicken-wings-with-sweet-chili-sauce-on-white-paper.jpg?s=612x612&w=0&k=20&c=pQgXFNW-BUEi5lT_b6sahe7y3OUoOtA0CQ89yvfvBas=',
        },
        {
          id: 'ch14',
          title: 'Schezuan Chicken',
          price: 1150,
          description: 'Spicy chicken cooked in a flavorful Schezuan sauce.',
          image: 'https://media.istockphoto.com/id/1265685983/photo/yu-shiang-chicken-with-garlic-sauce.jpg?b=1&s=612x612&w=0&k=20&c=aFPl6VKqEUd0f5G0pp7aqVQtvvktfmlopb97EERlvSM=',
        },
        {
          id: 'ch15',
          title: 'Dry Chili Chicken',
          price: 1150,
          description: 'Chicken stir-fried with dry chili and spices.',
          image: 'https://images.pexels.com/photos/11806779/pexels-photo-11806779.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          id: 'ch16',
          title: 'Gong Bao Chicken',
          price: 1150,
          description: 'Chicken stir-fried with peanuts and chili in a savory sauce.',
          image: 'https://media.istockphoto.com/id/691433382/photo/chinese-cuisine.jpg?s=612x612&w=0&k=20&c=F3Kov0ZVaZKKyBaHwoQ71qxESo5FW_iq05tBManTHWQ=',
        },
        {
          id: 'ch17',
          title: 'Chicken with Garlic & Ginger',
          price: 1150,
          description: 'Chicken stir-fried with garlic and ginger for a fragrant flavor.',
          image: 'https://media.istockphoto.com/id/2196515608/photo/karahi-chicken-is-a-popular-dish-from-the-south-asia-chicken-is-slow-cooked-with-tomatoes-and.jpg?s=612x612&w=0&k=20&c=xxGSv-HJS795hitSZC-KptnRCIttcKsWQpRDq4ZLwc8=',
        },
        {
          id: 'ch18',
          title: 'Chicken with Cashew Nuts',
          price: 1150,
          description: 'Chicken stir-fried with cashew nuts and vegetables.',
          image: 'https://media.istockphoto.com/id/1283560181/photo/homemade-chinese-cashew-chicken.jpg?s=612x612&w=0&k=20&c=LPqepjE7e58Ql82aHcXNFJrn0HcAMvvKUbwmm7_Z-rg=',
        },
        {
          id: 'ch19',
          title: 'Chicken in Black Bean Sauce',
          price: 1150,
          description: 'Chicken cooked in a savory black bean sauce.',
          image: 'https://media.istockphoto.com/id/147311469/photo/chicken-and-peppers-in-black-bean-sauce.jpg?s=612x612&w=0&k=20&c=rRlgyFrQb0aNpMkkjiHiQEXWKdmhtvLthZ5w9dyYjhA=',
        },
        {
          id: 'ch20',
          title: 'Chicken Sizzler',
          price: 1250,
          description: 'Sizzling chicken served with vegetables and spices.',
          image: 'https://media.istockphoto.com/id/698608188/photo/chicken-wings-on-sizzler-dish.jpg?s=612x612&w=0&k=20&c=ZLw59XVtwlMIKPV5JgpcwsFjj0MuGV9uGB3NtvDFxyY=',
        },
      ];



        const fish = [
          {
            id: 'f1',
            title: 'Fish and Chips',
            price: 1300,
            description: 'Traditional British Fish & Chips',
            image: 'https://i.postimg.cc/FRJmGQCX/er.jpg',
          },
          {
            id: 'f2',
            title: 'Grilled Prawns',
            price: 1700,
            description: 'Plain, Pili Pili or Garlic',
            image: 'https://images.pexels.com/photos/8352805/pexels-photo-8352805.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'f3',
            title: 'Calamari',
            price: 950,
            description: 'Grilled or deep fried',
            image: 'https://images.pexels.com/photos/4869328/pexels-photo-4869328.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'f4',
            title: 'Grilled Tilapia Fillet',
            price: 1350,
            description: 'Lemon or spicy',
            image: 'https://images.pexels.com/photos/27643019/pexels-photo-27643019/free-photo-of-a-steak-and-potatoes-on-a-plate-with-a-fork.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'f5',
            title: 'Fish Fingers',
            price: 800,
            description: 'Served with your Choice of parsley potatoes, rice, fries or salad',
            image: 'https://media.istockphoto.com/id/1285969355/photo/crispy-fish-stick-tacos-with-creamy-coleslaw-fries-and-tarter-sauce.jpg?s=612x612&w=0&k=20&c=2yhGsn3xAXV6mwOIgSvp7tFFoZ8KjPTGVYJyRk2u4eM=',
          },
            {
              id: 'f6',
              title: 'Fish Masala',
              price: 1300,
              description: 'Tilapia fillet cooked in special masala gravy',
              image: 'https://media.istockphoto.com/id/503103377/photo/curry-with-fish-head-and-okra.jpg?s=612x612&w=0&k=20&c=zIbdvfeQyVOTqr_trcpKYGvERWSy3tig65rNop5rSTM=',
            },
            {
              id: 'f7',
              title: 'Dry Chili Garlic Fish',
              price: 1300,
              description: 'Tilapia fillet cooked with spices, garlic, chili, tomato, and onion',
              image: 'https://media.istockphoto.com/id/2187814158/photo/pan-seared-fish-in-spicy-sauce.jpg?s=612x612&w=0&k=20&c=QqCIZprMRQ8GnPkRW-L_ymqnTo1ot28TmvCmH28Ny4Q=',
            },
            {
              id: 'f8',
              title: 'Dry Chili Garlic Prawns',
              price: 1650,
              description: 'Prawns cooked with spices, garlic, chili, tomato, and onion',
              image: 'https://media.istockphoto.com/id/1661663571/photo/roasted-shrimp-with-chili-and-salt-in-white-plate.jpg?s=612x612&w=0&k=20&c=ErnEvAvPuRMZLy0x6nNmns7mk_PVskd3IdsX-IuYsgs=',
            },
            {
              id: 'f9',
              title: 'Coconut Cream Prawns',
              price: 1650,
              description: 'Prawns cooked in creamy coconut enriched gravy',
              image: 'https://media.istockphoto.com/id/1273496620/photo/decorated-homemade-delicious-spicy-shrimp-fried-with-herbs-pakria-and-secret-recipe-red-hot.jpg?b=1&s=612x612&w=0&k=20&c=nU6kd09wLPlMOj3Q4ZxJxdphf5AdVA1i55MSTbdekaA=',
            },
        ]; 

        const salads = [
          {
            id: 'sld1',
            title: 'Greek Salad',
            price: 800,
            description: 'With Feta Cheese',
            image: 'https://images.pexels.com/photos/12474263/pexels-photo-12474263.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'sld2',
            title: 'Chicken Salad',
            price: 800,
            description: 'Fresh salad with grilled chicken',
            image: 'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
        ];


        const lambAndPork = [
          {
            id: 'lp1',
            title: 'Lamb Chops',
            price: 1150,
            description: 'Served with your Choice of roast or mashed potatoes, vegetables & gravy',
            image: 'https://images.pexels.com/photos/5638535/pexels-photo-5638535.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'lp2',
            title: 'Pork Chops',
            price: 1250,
            description: 'Served with your Choice of mashed or roast potatoes, veg & gravy',
            image: 'https://images.pexels.com/photos/8862767/pexels-photo-8862767.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
        ];


        const vegetarianDishes = [
          {
            id: 'vd1',
            title: 'Paneer Tikka',
            price: 1150,
            description: 'Tandoored Cottage Cheese Cubes marinated in spices',
            image: 'https://images.pexels.com/photos/578009/pexels-photo-578009.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'vd2',
            title: 'Makhani Paneer',
            price: 1150,
            description: 'Paneer in a spicy, rich tomato, butter and cream gravy',
            image: 'https://media.istockphoto.com/id/836277050/photo/indian-food-or-indian-curry-in-a-copper-brass-serving-bowl.jpg?b=1&s=612x612&w=0&k=20&c=VU-u3JUEmcEIiBpdDUxWJ3s_bj5Wb_GZPx7TYPnGIts=',
          },
          {
            id: 'vd3',
            title: 'Palak Paneer',
            price: 1150,
            description: 'Cubes of cottage cheese with ground spinach and spices',
            image: 'https://images.pexels.com/photos/30858402/pexels-photo-30858402/free-photo-of-delicious-paneer-tikka-masala-dish-close-up.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'vd4',
            title: 'Dry Chili Garlic Paneer',
            price: 1150,
            description: 'Paneer cooked in spices, garlic, chili, tomato, and onion',
            image: 'https://images.pexels.com/photos/31649751/pexels-photo-31649751/free-photo-of-delicious-thai-tom-yum-soup-in-ceramic-bowl.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'vd5',
            title: 'Dahl Makhani',
            price: 800,
            description: 'Black lentils cooked in a spicy creamy sauce',
            image: 'https://images.pexels.com/photos/6544378/pexels-photo-6544378.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
        ];


        const cocktails = [
          {
            id: 'ct1',
            title: 'Margarita',
            price: 850,
            description: 'Classic tequila cocktail with lime and a salted rim',
            image: 'https://media.istockphoto.com/id/957885008/photo/homemade-spicy-margarita-with-limes.jpg?b=1&s=612x612&w=0&k=20&c=REaMiiTkwgoCw7MpJyH2n3Tq_Hl1zipgHb0y2mi2miY=',
          },
          {
            id: 'ct2',
            title: 'Mojito',
            price: 750,
            description: 'Refreshing blend of rum, mint, lime, and soda',
            image: 'https://i.postimg.cc/0ygng4m9/54.jpg',
          },
          {
            id: 'ct3',
            title: 'Pina Colada',
            price: 900,
            description: 'Tropical cocktail with pineapple, coconut cream, and rum',
            image: 'https://images.pexels.com/photos/28525186/pexels-photo-28525186/free-photo-of-refreshing-pineapple-cherry-cocktail-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'ct4',
            title: 'Old Fashioned',
            price: 950,
            description: 'Whiskey cocktail with bitters, sugar, and an orange twist',
            image: 'https://media.istockphoto.com/id/928321158/photo/old-fashioned-classic-cocktail-drink-in-crystal-glass-on-bar-counter.jpg?b=1&s=612x612&w=0&k=20&c=bha9eZPtnv49GjFg7RhLAv0QS0dioc3jrl52YS5Zehk=',
          },
          {
            id: 'ct5',
            title: 'Cosmopolitan',
            price: 800,
            description: 'Vodka, cranberry juice, triple sec, and lime for a zesty flavor',
            image: 'https://media.istockphoto.com/id/890771104/photo/an-alcoholic-cosmopolitan-cocktail-is-on-the-bar-space-for-text.jpg?b=1&s=612x612&w=0&k=20&c=IvMOSuLBFTNygx3AQAAR92NmerVpctXXGMUKGogVMWE=',
          },
        ];

        const indianWraps = [
          {
            id: 'iw1',
            title: 'Murg Malai / Chicken Tikka / Masala',
            price: 1050,
            description: 'A flavorful Indian dish with tender chicken marinated in creamy yogurt, spices, and grilled to perfection.',
            image: 'https://images.pexels.com/photos/9609840/pexels-photo-9609840.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'iw2',
            title: 'Paneer Tikka Wrap',
            price: 950,
            description: 'A delicious wrap filled with marinated paneer tikka, fresh vegetables, and flavorful spices.',
            image: 'https://images.pexels.com/photos/28674541/pexels-photo-28674541/free-photo-of-delicious-paneer-tikka-in-rich-tomato-gravy.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
        ];

        const bbq = [
          {
            id: 'bbq1',
            title: 'Chicken Tikka Boneless',
            price: 1200,
            description: 'Tender boneless chicken pieces marinated in yogurt and spices, grilled to perfection.',
            image: 'https://media.istockphoto.com/id/812470140/photo/chicken-malai-tikka-boneless-piece.jpg?b=1&s=612x612&w=0&k=20&c=NZ2_9JEjSmoMFedIeMWE04lRgmbv4jFTmmORni0UwRw=',
          },
          {
            id: 'bbq2',
            title: 'Tandoori Chicken on the Bone (Half)',
            price: 1200,
            description: 'Half portion of chicken marinated in yogurt and spices, cooked in a traditional tandoor for a smoky flavor.',
            image: 'https://images.pexels.com/photos/20371522/pexels-photo-20371522/free-photo-of-meat-on-plate.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'bbq3',
            title: 'Tandoori Chicken on the Bone (Full)',
            price: 1800,
            description: 'Full portion of chicken marinated in yogurt and spices, cooked in a traditional tandoor for a smoky flavor.',
            image: 'https://images.pexels.com/photos/8156645/pexels-photo-8156645.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'bbq4',
            title: 'Shish Kebab',
            price: 1150,
            description: 'Juicy and flavorful skewered meat grilled to perfection, served with vegetables.',
            image: 'https://images.pexels.com/photos/18330987/pexels-photo-18330987/free-photo-of-roasted-meat-with-vegetables.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'bbq5',
            title: 'Chooza Chicken',
            price: 1800,
            description: 'Whole spring chicken marinated in spices and grilled to perfection, offering a tender and flavorful experience.',
            image: 'https://media.istockphoto.com/id/1250374109/photo/honey-mustard-chicken.jpg?b=1&s=612x612&w=0&k=20&c=3o0lF3t3dImHgxRvVe3-2n-mXXVlg1qx4Et6LMXJkWw=',
          },
          {
            id: 'bbq6',
            title: 'Paneer Tikka',
            price: 1050,
            description: 'Tandoored Cottage Cheese Cubes marinated in spices, grilled to perfection for a smoky flavor.',
            image: 'https://images.pexels.com/photos/28674541/pexels-photo-28674541/free-photo-of-delicious-paneer-tikka-in-rich-tomato-gravy.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'bbq7',
            title: 'Tandoori Vegetable Seek',
            price: 800,
            description: 'Skewered vegetables marinated in spices and grilled to perfection for a smoky flavor.',
            image: 'https://i.postimg.cc/FRJmGQCX/er.jpg',
          },
        ];

        const muttonDishes = [
          {
            id: 'md1',
            title: 'Mutton Tikka Masala',
            price: 1150,
            description: 'Tandoored Mutton cubes in special masala sauce',
            image: 'https://images.pexels.com/photos/9609863/pexels-photo-9609863.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'md2',
            title: 'Mutton Vindaloo',
            price: 1150,
            description: 'Mutton cubes cooked in hot spicy vindaloo sauce',
            image: 'https://images.pexels.com/photos/28674566/pexels-photo-28674566/free-photo-of-spicy-lamb-curry-in-traditional-indian-brass-pot.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'md3',
            title: 'Dry Chili Garlic Mutton',
            price: 1150,
            description: 'Mutton slices cooked with spices, garlic, chili, tomato, and onion',
            image: 'https://images.pexels.com/photos/9609846/pexels-photo-9609846.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'md4',
            title: 'Keema Mattar',
            price: 1150,
            description: 'Mutton mince cooked with peas and masala',
            image: 'https://images.pexels.com/photos/9609842/pexels-photo-9609842.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'md5',
            title: 'Coconut Cream Mutton',
            price: 1150,
            description: 'Mutton cubes in a creamy coconut enriched gravy',
            image: 'https://media.istockphoto.com/id/1204372700/photo/indian-mutton-stew.jpg?s=612x612&w=0&k=20&c=7NEP7RucM0z1jK5nykeLl9fyGy_w_xI_Jpq6QpqcS6c=',
          },
        ];

        const ricePilauBiryani = [
          {
            id: 'rb1',
            title: 'Plain Basmati Rice',
            price: 300,
            description: 'Fluffy and aromatic plain basmati rice, perfect as a side dish.',
            image: 'https://media.istockphoto.com/id/504339251/photo/vege-rice.jpg?b=1&s=612x612&w=0&k=20&c=drrdDQteL89Ahf0pCapR7m88sJFSm71FtKc80zHilgg=',
          },
          {
            id: 'rb2',
            title: 'Mutton Biryani',
            price: 950,
            description: 'Aromatic basmati rice cooked with tender mutton, spices, and herbs for a flavorful experience.',
            image: 'https://media.istockphoto.com/id/1407172002/photo/indian-spicy-mutton-biryani-with-raita-and-gulab-jamun-served-in-a-dish-side-view-on-grey.jpg?b=1&s=612x612&w=0&k=20&c=LEUaMePexxkYMUZct9RW01l4ZuQdxjY-hCfiMOAFUvU=',
          },
          {
            id: 'rb3',
            title: 'Chicken Biryani',
            price: 950,
            description: 'Aromatic basmati rice cooked with tender chicken, spices, and herbs for a flavorful experience.',
            image: 'https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?b=1&s=612x612&w=0&k=20&c=2CBPkgQI2PiNySSNi1tvwVSYFqOBgfgrgDPCyelIVrk=',
          },
            {
              id: 'rb4',
              title: 'Steamed Rice',
              price: 300,
              description: 'perfectly steamed white rice.',
              image: 'https://images.pexels.com/photos/31393429/pexels-photo-31393429/free-photo-of-delicious-natto-on-steamed-rice-in-black-bowl.jpeg?auto=compress&cs=tinysrgb&w=600',
            },
            {
              id: 'rb5',
              title: 'Egg Fried Rice',
              price: 450,
              description: 'Fried rice with scrambled eggs and light seasoning.',
              image: 'https://images.pexels.com/photos/28503587/pexels-photo-28503587/free-photo-of-delicious-fried-rice-with-egg-and-vegetables.jpeg?auto=compress&cs=tinysrgb&w=600',
            },
            {
              id: 'rb6',
              title: 'Vegetable Fried Rice',
              price: 450,
              description: 'Fried rice with fresh vegetables and aromatic spices.',
              image: 'https://images.pexels.com/photos/28041439/pexels-photo-28041439/free-photo-of-plate-with-spicy-instant-noodles-white-rice-fried-chicken-with-sambal-cucumber-and-tomato-a-packet-of-indomie-mi-goreng-rasa-ayam-geprek-noodles-is-placed-next-to-the-plate.jpeg?auto=compress&cs=tinysrgb&w=600',
            },
            {
              id: 'rb7',
              title: 'Chicken Fried Rice',
              price: 650,
              description: 'Fried rice with tender chicken pieces and flavorful spices.',
              image: 'https://images.pexels.com/photos/28041439/pexels-photo-28041439/free-photo-of-plate-with-spicy-instant-noodles-white-rice-fried-chicken-with-sambal-cucumber-and-tomato-a-packet-of-indomie-mi-goreng-rasa-ayam-geprek-noodles-is-placed-next-to-the-plate.jpeg?auto=compress&cs=tinysrgb&w=600',
            },
            {
              id: 'rb8',
              title: 'Beef Fried Rice',
              price: 650,
              description: 'Fried rice with tender beef slices and a savory touch.',
              image: 'https://images.pexels.com/photos/28503582/pexels-photo-28503582/free-photo-of-delicious-peruvian-lomo-saltado-with-fries.jpeg?auto=compress&cs=tinysrgb&w=600',
            },
        ];

        const naans = [
          {
            id: 'n1',
            title: 'Plain Naan / Roti',
            price: 200,
            description: 'Soft and fluffy traditional Indian bread, perfect to pair with curries and gravies.',
            image: 'https://media.istockphoto.com/id/2047358972/photo/capati-bread-served-with-fish-head-curry-sauce.jpg?s=612x612&w=0&k=20&c=JpDMPgmfK59u1swYzjBjKHAY0F_MoOPbX8DiD3QS2oc=',
          },
          {
            id: 'n2',
            title: 'Butter Naan',
            price: 250,
            description: 'Soft and fluffy naan brushed with melted butter, perfect to complement any curry or gravy.',
            image: 'https://images.pexels.com/photos/12737918/pexels-photo-12737918.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'n3',
            title: 'Garlic Naan',
            price: 250,
            description: 'perfect to pair with curries and gravies.',
            image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'n4',
            title: 'Cheese Naan',
            price: 350,
            description: 'naan stuffed with melted cheese, perfect to enjoy with curries or as a standalone treat.',
            image: 'https://media.istockphoto.com/id/1488020473/photo/indian-bread-naan-on-a-silver-tray.jpg?s=612x612&w=0&k=20&c=gRUt2dlW8OOSJoGyQOqGK4Afqq5tYZUjd-8ZMpU51w0=',
          },
          {
            id: 'n5',
            title: 'Garlic Chili Cheese Naan',
            price: 350,
            description: 'infused with garlic, chili, and stuffed with melted cheese, offering a flavorful and spicy twist.',
            image: 'https://images.pexels.com/photos/10771363/pexels-photo-10771363.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
        ];

        const vegetarianAndNonVegetarianDishes = [
          // Vegetarian Items
          {
            id: 'vd1',
            title: 'Paneer Tikka',
            price: 1150,
            description: 'Tandoored Cottage Cheese Cubes marinated in spices',
            image: 'https://images.pexels.com/photos/2580464/pexels-photo-2580464.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'vd2',
            title: 'Makhani Paneer',
            price: 1150,
            description: 'Paneer in a spicy, rich tomato, butter and cream gravy',
            image: 'https://media.istockphoto.com/id/969085490/photo/indian-food-or-indian-curry-in-a-copper-brass-serving-bowl.jpg?b=1&s=612x612&w=0&k=20&c=xnuW-PfsbQbCwhQzulirNNLxD0GvOZMUu-xnPsIhdsc=',
          },
          {
            id: 'vd3',
            title: 'Palak Paneer',
            price: 1150,
            description: 'Cubes of cottage cheese with ground spinach and spices',
            image: 'https://images.pexels.com/photos/9609842/pexels-photo-9609842.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'vd4',
            title: 'Dry Chili Garlic Paneer',
            price: 1150,
            description: 'Paneer cooked in spices, garlic, chili, tomato, and onion',
            image: 'https://media.istockphoto.com/id/1401110499/photo/a-closeup-shot-of-homemade-chilly-paneer-hot-spicy-dry-cheese-recipe-india.jpg?s=612x612&w=0&k=20&c=sHl_Z2GrFTGllw9FbYNraE6FkBP2mc0YNB5gAThu6uo=',
          },
          {
            id: 'vd5',
            title: 'Dahl Makhani',
            price: 800,
            description: 'Black lentils cooked in a spicy creamy sauce',
            image: 'https://images.pexels.com/photos/6544378/pexels-photo-6544378.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'vd6',
            title: 'Fried Spring Rolls (Vegetables)',
            price: 400,
            description: 'Crispy fried spring rolls filled with a delicious mix of fresh vegetables.',
            image: 'https://media.istockphoto.com/id/1313085999/photo/fried-vegetable-spring-rolls-with-sweet-chili-and-soya-sauce-on-wooden-board.jpg?b=1&s=612x612&w=0&k=20&c=ekLeAqBH_TWGEgYPKezeV_0npWt7AWS6_hBCKO_M-AM=',
          },
          {
            id: 'vd7',
            title: 'Fried Dumplings (Vegetables)',
            price: 400,
            description: 'Crispy fried dumplings filled with a savory mix of fresh vegetables.',
            image: 'https://images.pexels.com/photos/7287721/pexels-photo-7287721.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'vd8',
            title: 'Steamed Dumplings (Vegetables)',
            price: 400,
            description: 'flavorful steamed dumplings filled with a savory mix of fresh vegetables.',
            image: 'https://media.istockphoto.com/id/2057807759/photo/bao-buns-with-pork-belly-and-vegetable-asian-cuisine.jpg?s=612x612&w=0&k=20&c=CYzYTTfEmyN8cBWas0OglzGtV__RIGobmGrnJGP-fiw=',
          },
            {
              id: 'vd9',
              title: 'Dry Chili Garlic Mushrooms',
              price: 750,
              description: 'Mushrooms stir-fried with garlic, chili, and spices for a flavorful and spicy dish.',
              image: 'https://images.pexels.com/photos/16068666/pexels-photo-16068666/free-photo-of-a-bowl-of-ramen-with-an-egg-and-meat.jpeg?auto=compress&cs=tinysrgb&w=600',
            },
            {
              id: 'vd10',
              title: 'Stir Fry Mixed Vegetables',
              price: 600,
              description: 'A colorful mix of fresh vegetables stir-fried with aromatic spices for a healthy and flavorful dish.',
              image: 'https://images.pexels.com/photos/10398945/pexels-photo-10398945.jpeg?auto=compress&cs=tinysrgb&w=600',
            },
            {
              id: 'vd11',
              title: 'Vegetable Sizzler',
              price: 750,
              description: 'A sizzling platter of mixed vegetables cooked with aromatic spices, served hot and flavorful.',
              image: 'https://images.pexels.com/photos/20350178/pexels-photo-20350178/free-photo-of-food-on-plate.jpeg?auto=compress&cs=tinysrgb&w=600',
            },
        
          // Non-Vegetarian Items
          {
            id: 'vd12',
            title: 'Fried Spring Rolls (Chicken)',
            quantity: '4 pieces',
            price: 400,
            description: 'Crispy fried spring rolls filled with a savory mix of chicken and spices.',
            image: 'https://images.pexels.com/photos/14686443/pexels-photo-14686443.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'vd13',
            title: 'Fried Dumplings (Chicken, Pork or Prawn)',
            quantity: '4 pieces',
            price: 400,
            description: 'Crispy fried dumplings filled with a savory mix of chicken, pork, or prawn.',
            image: 'https://images.pexels.com/photos/27953851/pexels-photo-27953851/free-photo-of-juicy-chicken-meat.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'vd14',
            title: 'Steamed Dumplings (Chicken, Pork or Prawn)',
            quantity: '4 pieces',
            price: 400,
            description: 'flavorful steamed dumplings filled with a savory mix of chicken, pork, or prawn.',
            image: 'https://media.istockphoto.com/id/1455357733/photo/wontons.jpg?s=612x612&w=0&k=20&c=wIqf3FE-fjrDNZ43gji5i9kYbLFBOhI7mlIMoFsaVGk=',
          },
          {
            id: 'vd15',
            title: 'Crispy Chicken Wings with Garlic & Chili',
            price: 950,
            description: 'Crispy chicken wings tossed in a flavorful garlic and chili sauce.',
            image: 'https://media.istockphoto.com/id/1327216075/photo/grilled-spicy-chili-chicken-wings-on-a-plate.jpg?s=612x612&w=0&k=20&c=Xx0huJh1ZaBd8f5YVXIIc9RFDjO-sMYzuHmOb3U-vhg=',
          },
          {
            id: 'vd16',
            title: 'Prawn Tempura',
            price: 1450,
            description: 'served with a dipping sauce.',
            image: 'https://images.pexels.com/photos/17628584/pexels-photo-17628584/free-photo-of-close-up-of-chicken-fingers.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'vd17',
            title: 'Deep-fried Pork Spare Ribs',
            price: 1150,
            description: 'Crispy and flavorful pork spare ribs deep-fried to perfection.',
            image: 'https://images.pexels.com/photos/27953851/pexels-photo-27953851/free-photo-of-juicy-chicken-meat.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
        ];

        const beefAndPork = [
          // Beef Items
          {
            id: 'bp1',
            title: 'Shredded Beef with Chili Sauce',
            price: 1150,
            description: 'Tender shredded beef cooked in a spicy chili sauce.',
            image: 'https://images.pexels.com/photos/2425075/pexels-photo-2425075.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'bp2',
            title: 'Beef in Oyster Sauce',
            price: 1150,
            description: 'Beef slices cooked in a rich oyster sauce.',
            image: 'https://media.istockphoto.com/id/1486076379/photo/chinese-beef-stew-with-oyster-sauce-with-onion-bamboo-and-wok-sauteed-vegetables-on-white.jpg?b=1&s=612x612&w=0&k=20&c=uktp_Ph-LdLNSRqBT9K8vtwOYm_WMiMHIPlrQBmEd58=',
          },
          {
            id: 'bp3',
            title: 'Beef in Black Bean Sauce',
            price: 1150,
            description: 'Beef cooked with black bean sauce for a savory flavor.',
            image: 'https://images.pexels.com/photos/5638538/pexels-photo-5638538.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'bp4',
            title: 'Beef with Green Pepper',
            price: 1150,
            description: 'Beef stir-fried with fresh green peppers.',
            image: 'https://images.pexels.com/photos/30991499/pexels-photo-30991499/free-photo-of-traditional-turkish-iskender-kebab-plate.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'bp5',
            title: 'Dry Chili Beef',
            price: 1150,
            description: 'Beef cooked with dry chili for a spicy kick.',
            image: 'https://images.pexels.com/photos/7474163/pexels-photo-7474163.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'bp6',
            title: 'Beef Chop Suey',
            price: 1150,
            description: 'Beef stir-fried with mixed vegetables in a savory sauce.',
            image: 'https://images.pexels.com/photos/17772829/pexels-photo-17772829/free-photo-of-meat-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'bp7',
            title: 'Beef Sizzler',
            price: 1250,
            description: 'Sizzling beef served with vegetables and spices.',
            image: 'https://images.pexels.com/photos/31673756/pexels-photo-31673756/free-photo-of-delicious-plate-of-beef-stir-fry-with-vegetables.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
        
          // Pork Items
          {
            id: 'bp8',
            title: 'Sweet & Sour Pork',
            price: 1200,
            description: 'Pork cooked in a sweet and sour sauce with vegetables.',
            image: 'https://media.istockphoto.com/id/1190603474/photo/sweet-and-sour-fried-pork-tenderloin.jpg?b=1&s=612x612&w=0&k=20&c=0Z_m91m-1k_9X-9aYaO4Lw2juQoRY2codQlYesF4sd0=',
          },
          {
            id: 'bp9',
            title: 'Shredded Pork',
            price: 1200,
            description: 'Shredded pork stir-fried with spices and vegetables.',
            image: 'https://images.pexels.com/photos/236887/pexels-photo-236887.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'bp10',
            title: 'Pork Sizzler',
            price: 1300,
            description: 'Sizzling pork served with vegetables and spices.',
            image: 'https://media.istockphoto.com/id/864466450/photo/restaurant-environment-honey-pork-rib-steak-with-herb-served-on-white-plate-dish-with-fresh.jpg?b=1&s=612x612&w=0&k=20&c=T3uW6HPnGApZrI442nQN_jHNNxOTKqf_vxdh-DVumOY=',
          },
        ];

        const seafoodChowMeinAndPasta = [
          // Seafood Items
          {
            id: 'sf1',
            title: 'Sweet and Sour Prawns',
            price: 1550,
            description: 'Prawns cooked in a tangy sweet and sour sauce.',
            image: 'https://media.istockphoto.com/id/1425178165/photo/boiled-zhrimp-and-mixed-vegetable-in-spicy-and-sour-prange-curry-soup-with-fried-pork-belly.jpg?s=612x612&w=0&k=20&c=-arqtXOm_a9cfWHCtuR2MOu9Hf1fk55KGd572p_xZHw=',
          },
          {
            id: 'sf2',
            title: 'Prawns with Hot Garlic Sauce & Vegetables',
            price: 1550,
            description: 'Prawns stir-fried with hot garlic sauce and fresh vegetables.',
            image: 'https://images.pexels.com/photos/4871232/pexels-photo-4871232.jpeg?auto=compress&cs=tinysrgb&w=600', // Placeholder image
          },
          {
            id: 'sf3',
            title: 'Dry Chili Garlic Calamari',
            price: 1000,
            description: 'Calamari cooked with dry chili and garlic for a spicy kick.',
            image: 'https://images.pexels.com/photos/8934959/pexels-photo-8934959.jpeg?auto=compress&cs=tinysrgb&w=600', // Placeholder image
          },
        
          // Chow Mein Items
          {
            id: 'cm1',
            title: 'Vegetable Noodles',
            price: 750,
            description: 'Stir-fried noodles with fresh vegetables.',
            image: 'https://images.pexels.com/photos/29039066/pexels-photo-29039066/free-photo-of-delicious-rigatoni-pasta-in-tomato-sauce.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'cm2',
            title: 'Pork Noodles',
            price: 1050,
            description: 'Stir-fried noodles with tender pork slices.',
            image: 'https://images.pexels.com/photos/15615002/pexels-photo-15615002/free-photo-of-beef-meal-on-plate.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'cm3',
            title: 'Chicken Noodles',
            price: 1050,
            description: 'Stir-fried noodles with flavorful chicken pieces.',
            image: 'https://images.pexels.com/photos/28460868/pexels-photo-28460868/free-photo-of-delicious-chicken-noodles-in-blue-ceramic-bowl.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          {
            id: 'cm4',
            title: 'Beef Noodles',
            price: 1050,
            description: 'Stir-fried noodles with tender beef slices.',
            image: 'https://images.pexels.com/photos/13065204/pexels-photo-13065204.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
        
          // Pasta Items
          {
            id: 'pa1',
            title: 'Spaghetti Bolognaise',
            price: 750,
            description: 'Classic spaghetti with rich bolognaise sauce and Parmesan cheese.',
            image: 'https://media.istockphoto.com/id/2188828018/photo/spaghetti-bolognese-pasta-with-minced-meat-and-vegetables-horizontal-side-view-on-wooden.jpg?s=612x612&w=0&k=20&c=hnJNidls0axH8BVAvsydUFo3jDgNqLWGr2_B_RygQ2U=',
          },
          {
            id: 'pa2',
            title: 'Spaghetti Diablo',
            price: 650,
            description: 'Spaghetti with olive oil, garlic, fresh chilies, and Parmesan cheese.',
            image: 'https://media.istockphoto.com/id/620966272/photo/spaghetti.jpg?s=612x612&w=0&k=20&c=X9qgnBnGln__lI11_pcc6o92W7w_4roRebDmqmE3w4Q=',
          },
        ];

        function ServiceDetails() {
          const { id } = useParams();
          const { addToCart } = useCart(); // Access the addToCart function from the context
        
          // Function to get the service items based on the service ID
          const getServiceItems = (serviceId) => {
            switch (serviceId) {
              case '1': return germanSpecialties;
              case '2': return breakfast;
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
        
          return (
            <div className="min-h-screen bg-gray-50 pt-20 pb-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl mb-8">Available Items</h1>
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
                        <p className="text-gray-800 font-bold mb-3">Price: Ksh {item.price}</p>
                        <div className="flex justify-end">
                          <button
                            onClick={() => addToCart(item)} // Use the addToCart function
                            className="bg-red-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors duration-300"
                          >
                            Add to Cart
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