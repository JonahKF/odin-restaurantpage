function menuPage() {
    const container = document.getElementById("content");
    container.textContent = "";

    
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("img-container");
    imgDiv.classList.add("menu-page");
    container.appendChild(imgDiv);
    const img = document.createElement("img");
    imgDiv.appendChild(img);


    const menuLogoContainer = document.createElement("div");
    menuLogoContainer.classList.add("menu-logo-container");
    container.appendChild(menuLogoContainer);

    const storeName = document.createElement("h1");
    storeName.textContent = "Our Menu";
    menuLogoContainer.appendChild(storeName);

    const catchCopy = document.createElement("div");
    catchCopy.textContent = "Delivery Available to Kamakura and Zushi Addresses";
    catchCopy.classList.add("catch-copy");
    menuLogoContainer.appendChild(catchCopy);


    const deliveryContainer = document.createElement("div");
    deliveryContainer.classList.add("delivery-container");
    container.appendChild(deliveryContainer);

    const deliveryText = document.createElement("div");
    deliveryText.textContent = "Ordering delivery? Add to cart below.";
    deliveryContainer.appendChild(deliveryText);

    const deliveryButton = document.createElement("button");
    deliveryButton.textContent = "See our MENU and order";
    deliveryButton.classList.add("delivery-btn");
    deliveryContainer.appendChild(deliveryButton);


    const menuHead = document.createElement("h3");
    menuHead.textContent = "Our Online MENU";
    container.appendChild(menuHead);

    const menuHR = document.createElement("hr");
    container.appendChild(menuHR);


    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    container.appendChild(menuContainer);

    //Menu Items - Sandwiches
    const menuCategoryOne = document.createElement("div");
    menuCategoryOne.classList.add("menu-category");
    menuCategoryOne.textContent = "Our Handcrafted Sandwiches";
    menuContainer.appendChild(menuCategoryOne);

    const menuItemGridOne = document.createElement("div");
    menuItemGridOne.classList.add("menu-item-grid");
    menuContainer.appendChild(menuItemGridOne);


    const sandwichOne = document.createElement("div");
    sandwichOne.classList.add("menu-item");
    menuItemGridOne.appendChild(sandwichOne);
    const innerFlexOne = document.createElement("div");
    sandwichOne.appendChild(innerFlexOne);
    const innerItemAndPriceFlexOne = document.createElement("div");
    innerItemAndPriceFlexOne.classList.add("menu-inner-flex");
    innerFlexOne.appendChild(innerItemAndPriceFlexOne);
    const menuItemOne = document.createElement("div");
    menuItemOne.textContent = "Italian Combo";
    innerItemAndPriceFlexOne.appendChild(menuItemOne);
    const menuItemOnePrice = document.createElement("div");
    menuItemOnePrice.textContent = "¥1200";
    innerItemAndPriceFlexOne.appendChild(menuItemOnePrice);
    const menuItemDescriptionOne = document.createElement("div");
    menuItemDescriptionOne.textContent = "Genoa salami, pepperoni, cappy ham, provolone, lettuce, tomato, onion, roasted red peppers, olive oil and vinegar.";
    innerFlexOne.appendChild(menuItemDescriptionOne);

    const sandwichTwo = document.createElement("div");
    sandwichTwo.classList.add("menu-item");
    menuItemGridOne.appendChild(sandwichTwo);
    const innerFlexTwo = document.createElement("div");
    sandwichTwo.appendChild(innerFlexTwo);
    const innerItemAndPriceFlexTwo = document.createElement("div");
    innerItemAndPriceFlexTwo.classList.add("menu-inner-flex");
    innerFlexTwo.appendChild(innerItemAndPriceFlexTwo);
    const menuItemTwo = document.createElement("div");
    menuItemTwo.textContent = "The Spicy Jack";
    innerItemAndPriceFlexTwo.appendChild(menuItemTwo);
    const menuItemTwoPrice = document.createElement("div");
    menuItemTwoPrice.textContent = "¥1100";
    innerItemAndPriceFlexTwo.appendChild(menuItemTwoPrice);
    const menuItemDescriptionTwo = document.createElement("div");
    menuItemDescriptionTwo.textContent = "Chicken cutlet, pepperjack cheese, hot sauce, lettuce, tomato, onion, roasted red peppers.";
    innerFlexTwo.appendChild(menuItemDescriptionTwo);

    const sandwichThree = document.createElement("div");
    sandwichThree.classList.add("menu-item");
    menuItemGridOne.appendChild(sandwichThree);
    const innerFlexThree = document.createElement("div");
    sandwichThree.appendChild(innerFlexThree);
    const innerItemAndPriceFlexThree = document.createElement("div");
    innerItemAndPriceFlexThree.classList.add("menu-inner-flex");
    innerFlexThree.appendChild(innerItemAndPriceFlexThree);
    const menuItemThree = document.createElement("div");
    menuItemThree.textContent = "The Shonan Experience";
    innerItemAndPriceFlexThree.appendChild(menuItemThree);
    const menuItemThreePrice = document.createElement("div");
    menuItemThreePrice.textContent = "¥900";
    innerItemAndPriceFlexThree.appendChild(menuItemThreePrice);
    const menuItemDescriptionThree = document.createElement("div");
    menuItemDescriptionThree.textContent = "Shirasu whitebait, capers, onion, shiso, crispy bacon";
    innerFlexThree.appendChild(menuItemDescriptionThree);

    const sandwichFour = document.createElement("div");
    sandwichFour.classList.add("menu-item");
    menuItemGridOne.appendChild(sandwichFour);
    const innerFlexFour = document.createElement("div");
    sandwichFour.appendChild(innerFlexFour);
    const innerItemAndPriceFlexFour = document.createElement("div");
    innerItemAndPriceFlexFour.classList.add("menu-inner-flex");
    innerFlexFour.appendChild(innerItemAndPriceFlexFour);
    const menuItemFour = document.createElement("div");
    menuItemFour.textContent = "New York Pastrami Classic";
    innerItemAndPriceFlexFour.appendChild(menuItemFour);
    const menuItemFourPrice = document.createElement("div");
    menuItemFourPrice.textContent = "¥2000";
    innerItemAndPriceFlexFour.appendChild(menuItemFourPrice);
    const menuItemDescriptionFour = document.createElement("div");
    menuItemDescriptionFour.textContent = "Hot pastrami, Swiss cheese, spicy brown mustard, pickles, and rye bread.";
    innerFlexFour.appendChild(menuItemDescriptionFour);

    const sandwichFive = document.createElement("div");
    sandwichFive.classList.add("menu-item");
    menuItemGridOne.appendChild(sandwichFive);
    const innerFlexFive = document.createElement("div");
    sandwichFive.appendChild(innerFlexFive);
    const innerItemAndPriceFlexFive = document.createElement("div");
    innerItemAndPriceFlexFive.classList.add("menu-inner-flex");
    innerFlexFive.appendChild(innerItemAndPriceFlexFive);
    const menuItemFive = document.createElement("div");
    menuItemFive.textContent = "Turkey Club Supreme";
    innerItemAndPriceFlexFive.appendChild(menuItemFive);
    const menuItemFivePrice = document.createElement("div");
    menuItemFivePrice.textContent = "¥1800";
    innerItemAndPriceFlexFive.appendChild(menuItemFivePrice);
    const menuItemDescriptionFive = document.createElement("div");
    menuItemDescriptionFive.textContent = "Roasted turkey breast, crispy bacon, lettuce, tomato, avocado, and mayonnaise.";
    innerFlexFive.appendChild(menuItemDescriptionFive);

    const sandwichSix = document.createElement("div");
    sandwichSix.classList.add("menu-item");
    menuItemGridOne.appendChild(sandwichSix);
    const innerFlexSix = document.createElement("div");
    sandwichSix.appendChild(innerFlexSix);
    const innerItemAndPriceFlexSix = document.createElement("div");
    innerItemAndPriceFlexSix.classList.add("menu-inner-flex");
    innerFlexSix.appendChild(innerItemAndPriceFlexSix);
    const menuItemSix = document.createElement("div");
    menuItemSix.textContent = "Roast Beef Melt";
    innerItemAndPriceFlexSix.appendChild(menuItemSix);
    const menuItemSixPrice = document.createElement("div");
    menuItemSixPrice.textContent = "¥1200";
    innerItemAndPriceFlexSix.appendChild(menuItemSixPrice);
    const menuItemDescriptionSix = document.createElement("div");
    menuItemDescriptionSix.textContent = "Thinly sliced roast beef, cheddar cheese, sautéed onions, horseradish sauce, and a sesame seed roll.";
    innerFlexSix.appendChild(menuItemDescriptionSix);


    //Menu Items - Bagels
    const menuCategoryTwo = document.createElement("div");
    menuCategoryTwo.classList.add("menu-category");
    menuCategoryTwo.textContent = "New York Style Boiled Bagels";
    menuContainer.appendChild(menuCategoryTwo);

    const menuItemGridTwo = document.createElement("div");
    menuItemGridTwo.classList.add("menu-item-grid");
    menuContainer.appendChild(menuItemGridTwo);

    const bagelSeven = document.createElement("div");
    bagelSeven.classList.add("menu-item");
    menuItemGridTwo.appendChild(bagelSeven);
    const innerFlexSeven = document.createElement("div");
    bagelSeven.appendChild(innerFlexSeven);
    const innerItemAndPriceFlexSeven = document.createElement("div");
    innerItemAndPriceFlexSeven.classList.add("menu-inner-flex");
    innerFlexSeven.appendChild(innerItemAndPriceFlexSeven);
    const menuItemSeven = document.createElement("div");
    menuItemSeven.textContent = "The Briny Lox";
    innerItemAndPriceFlexSeven.appendChild(menuItemSeven);
    const menuItemSevenPrice = document.createElement("div");
    menuItemSevenPrice.textContent = "¥1000";
    innerItemAndPriceFlexSeven.appendChild(menuItemSevenPrice);
    const menuItemDescriptionSeven = document.createElement("div");
    menuItemDescriptionSeven.textContent = "Cream cheese, smoked salmon, capers, red onion.";
    innerFlexSeven.appendChild(menuItemDescriptionSeven);

    const bagelEight = document.createElement("div");
    bagelEight.classList.add("menu-item");
    menuItemGridTwo.appendChild(bagelEight);
    const innerFlexEight = document.createElement("div");
    bagelEight.appendChild(innerFlexEight);
    const innerItemAndPriceFlexEight = document.createElement("div");
    innerItemAndPriceFlexEight.classList.add("menu-inner-flex");
    innerFlexEight.appendChild(innerItemAndPriceFlexEight);
    const menuItemEight = document.createElement("div");
    menuItemEight.textContent = "Classic Breakfast";
    innerItemAndPriceFlexEight.appendChild(menuItemEight);
    const menuItemEightPrice = document.createElement("div");
    menuItemEightPrice.textContent = "¥900";
    innerItemAndPriceFlexEight.appendChild(menuItemEightPrice);
    const menuItemDescriptionEight = document.createElement("div");
    menuItemDescriptionEight.textContent = "Bacon, cheddar cheese, scrambled eggs, avocado.";
    innerFlexEight.appendChild(menuItemDescriptionEight);

    const bagelNine = document.createElement("div");
    bagelNine.classList.add("menu-item");
    menuItemGridTwo.appendChild(bagelNine);
    const innerFlexNine = document.createElement("div");
    bagelNine.appendChild(innerFlexNine);
    const innerItemAndPriceFlexNine = document.createElement("div");
    innerItemAndPriceFlexNine.classList.add("menu-inner-flex");
    innerFlexNine.appendChild(innerItemAndPriceFlexNine);
    const menuItemNine = document.createElement("div");
    menuItemNine.textContent = "The Downtown";
    innerItemAndPriceFlexNine.appendChild(menuItemNine);
    const menuItemNinePrice = document.createElement("div");
    menuItemNinePrice.textContent = "¥800";
    innerItemAndPriceFlexNine.appendChild(menuItemNinePrice);
    const menuItemDescriptionNine = document.createElement("div");
    menuItemDescriptionNine.textContent = "Egg salad, tomato, crispy bacon.";
    innerFlexNine.appendChild(menuItemDescriptionNine);

    const bagelTen = document.createElement("div");
    bagelTen.classList.add("menu-item");
    menuItemGridTwo.appendChild(bagelTen);
    const innerFlexTen = document.createElement("div");
    bagelTen.appendChild(innerFlexTen);
    const innerItemAndPriceFlexTen = document.createElement("div");
    innerItemAndPriceFlexTen.classList.add("menu-inner-flex");
    innerFlexTen.appendChild(innerItemAndPriceFlexTen);
    const menuItemTen = document.createElement("div");
    menuItemTen.textContent = "Cinnamon Raisin Special";
    innerItemAndPriceFlexTen.appendChild(menuItemTen);
    const menuItemTenPrice = document.createElement("div");
    menuItemTenPrice.textContent = "¥950";
    innerItemAndPriceFlexTen.appendChild(menuItemTenPrice);
    const menuItemDescriptionTen = document.createElement("div");
    menuItemDescriptionTen.textContent = "Peanut butter, banana, honey, cinnamon.";
    innerFlexTen.appendChild(menuItemDescriptionTen);


}

export { menuPage }