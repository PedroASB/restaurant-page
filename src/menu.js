function dishFactory(name, price, description) {
    return {name, price, description};
}

function createLabel(name, price, description) {
    const label = document.createElement("div");
    const nameDiv = document.createElement("div");
    const priceDiv = document.createElement("div");
    const descriptionDiv = document.createElement("div");
    
    nameDiv.classList.add("name");
    nameDiv.innerText = name;
    
    priceDiv.classList.add("price");
    priceDiv.innerText = price;
    
    descriptionDiv.classList.add("description");
    descriptionDiv.innerText = description;
    
    label.classList.add("label");
    label.appendChild(nameDiv);
    label.appendChild(priceDiv);
    label.appendChild(descriptionDiv);

    return label;
}

function createCategory(title, dishes) {
    const category = document.createElement("div");
    const header = document.createElement("h3");

    category.classList.add("category");
    header.innerText = title;
    category.appendChild(header);

    dishes.forEach((dish) => {
        const label = createLabel(dish.name, dish.price, dish.description);
        category.appendChild(label);
    });
    
    return category;
}

function createAllCategories() {
    const categories = [];

    const appetizers = [
        dishFactory("Onion Rings", "$6.50", "Crispy golden-fried onion rings with house dipping sauce"),
        dishFactory("French Fries", "$4.50", "Hand-cut fries, available classic or with cheese & bacon"),
        dishFactory("Mozzarella Sticks", "$7.00", "Breaded mozzarella with marinara sauce"),
        dishFactory("Chicken Tenders", "$8.00", "Lightly breaded strips served with honey mustard")
    ];

    const burgers = [
        dishFactory("Classic Cheeseburger", "$10.50", "Beef patty, American cheese, lettuce, tomato, pickles & house sauce"),
        dishFactory("Bacon Burger", "$11.50", "Smoked bacon, cheddar, lettuce, tomato & BBQ sauce"),
        dishFactory("BBQ Chicken Burger", "$11.00", "Grilled chicken breast, cheddar, crispy onions, lettuce & smoky BBQ sauce"),
        dishFactory("Veggie Burger", "$10.50", "Grilled vegetable patty with lettuce, tomato & avocado"),
        dishFactory("Mushroom Swiss Burger", "$11.50", "Sautéed mushrooms, Swiss cheese & garlic mayo"),
        dishFactory("Blue Cheese Burger", "$12.00", "Beef patty, blue cheese crumbles, caramelized onions & arugula"),
        dishFactory("Spicy Jalapeño Burger", "$11.50", "Beef patty, pepper jack cheese, jalapeños, lettuce, tomato & chipotle mayo")
    ];

    const sandwiches = [
        dishFactory("Club Sandwich", "$10.50", "Triple-layered with turkey, ham, bacon, lettuce, tomato & mayo"),
        dishFactory("Philly Cheesesteak", "$12.00", "Thinly sliced steak, onions, peppers & provolone on a hoagie roll"),
        dishFactory("Grilled Cheese", "$7.50", "Toasted bread with melted American cheese"),
        dishFactory("BLT", "$8.50", "Bacon, lettuce, tomato & mayo on toasted bread")
    ];

    const salads = [
        dishFactory("Caesar Salad", "$8.50", "Romaine lettuce, parmesan, croutons & Caesar dressing"),
        dishFactory("House Salad", "$7.50", "Mixed greens, tomato, cucumber, onions & vinaigrette"),
        dishFactory("Chicken Cobb Salad", "$11.50", "Grilled chicken, avocado, bacon, egg, tomato & blue cheese dressing")
    ];

    const desserts = [
        dishFactory("Ice Cream Sundae", "$5.50", "Vanilla ice cream, hot fudge, whipped cream & cherry"),
        dishFactory("Banana Split", "$6.50", "Vanilla, chocolate & strawberry scoops with banana, syrup & nuts"),
        dishFactory("New York Cheesecake", "$6.50", "Classic baked cheesecake with berry sauce"),
        dishFactory("Apple Pie", "$5.50", "Served warm with vanilla ice cream")
    ];

    const drinks = [
        dishFactory("Milkshakes", "$5.50", "Vanilla, chocolate, strawberry or cookies & cream"),
        dishFactory("Soft Drinks", "$2.50", "Coca-Cola, root beer, Sprite & more"),
        dishFactory("Lemonade", "$3.00", "Classic or pink"),
        dishFactory("Iced Tea", "$2.50", "Freshly brewed, sweetened or unsweetened"),
        dishFactory("Coffee", "$2.50", "Freshly brewed")
    ];

    categories.push(createCategory("Appetizers", appetizers));
    categories.push(createCategory("Burgers", burgers));
    categories.push(createCategory("Sandwiches", sandwiches));
    categories.push(createCategory("Salads", salads));
    categories.push(createCategory("Desserts", desserts));
    categories.push(createCategory("Drinks", drinks));

    return categories;
}

function switchToMenu() {
    const content = document.querySelector("#content");
    const menuHeader = document.createElement("h2");
    const categories = createAllCategories();
    menuHeader.innerText = "Menu";
    
    // Updates the content box
    content.innerHTML = "";
    content.className = "menu";
    content.appendChild(menuHeader);
    categories.forEach((category) => {
        content.appendChild(category);
    });
}

export { switchToMenu };