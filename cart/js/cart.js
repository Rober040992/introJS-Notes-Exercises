/**
 * @typedef {Object} Product
 * @property {string} name - The name of the product.
 * @property {number} price - The price of the product.
 * @property {number} quantity - The quantity of the product.
 */

/**
 * @typedef {Object} Discount
 * @property {Product} product - The product the discount is applied to.
 * @property {number} discount - The discount percentage applied to the product.
 */
const cart = () => {
  // products = [{ name: 'T-shirt', price: 20, quantity: 2 }, { name: 'Cap', price: 5, quantity: 3 }];
  /**
   * Array of product objects in the cart.
   * @type {Product[]}
   */
  let products = [];
  // discounts = [{ product: { name: 'T-shirt', price: 20, quantity: 2 }, discount: 10 }];
  /**
   * Array of discount objects applied to products.
   * @type {Discount[]}
   */
  let discounts = [];
  
  /**
   * Adds a product to the cart.
   * @param {Product} product - The product to add to the cart.
   */
  const addToCart = (product) => {
    products = [...products,product]// products = products.push(product)
  };

  /**
   * Gets the list of products in the cart.
   * @returns {Product[]} The list of products in the cart.
   */
  const getCart = () => {
    return products;
  };

  /**
   * Gets the list of discounts applied to the cart.
   * @returns {Discount[]} The list of discounts applied to the cart.
   */
  const getDiscounts = () => {
    return discounts;
  };

  /**
   * Get the total price of the products in the cart.
   * @returns {number} The total price of the products in the cart.
   */
  const getTotal = () => {
    const result = products.reduce((accum, product) => {
      return accum + (product.price * product.quantity);
    }, 0);
    return result;
  };

  /**
   * Applies a discount to a product in the cart.
   * @param {string} productName - The name of the product to apply the discount to.
   * @param {string} discount - The discount percentage to apply.
   * @throws {Error} If the product is not found in the cart.
   */
  const applyDiscount = (productName, discount) => {
    // buscar el producto
    const product = products.find(product => product.name === productName);
    // lanzar error si no lo tenemos
    if (!product) {
      throw new Error('No existe ese producto');
    }
    // guardar el nuevo descuento con su producto
    discounts = [...discounts, {
      discount: parseInt(discount),
      product,
    }];
    // aplicar descuento al producto seleccionado
    products = products.map((productItem) => {
      if (productItem.name === product.name) {
        const discountNumber = parseInt(discount);
        const priceDiscount = productItem.price * (discountNumber / 100);
        const price = productItem.price - priceDiscount;
        return {
          ...productItem,
          price,
        };
      }
      return productItem;
    });
  };

  /**
   * Removes a product from the cart and any discounts associated with it.
   * @param {string} productName - The name of the product to remove.
   */
  const removeProduct = (productName) => {
    //usamos filter para eliminar elementos de una array;
    products = products.filter(product => {
      if(product.name === productName) return false; //si el nombre del producto es igual que al nombre del producto que me pasan => eliminado, si no 
      return true
      //return product.name !== productName; //si el nombre del producto es igual que al nombre del producto que me pasan => eliminado
    })
    discounts = discounts.filter(discountElement => {
      return discountElement.product.name !== productName;
    });
  };

  /**
   * Removes a discount applied to a product in the cart.
   * @param {string} productName - The name of the product to remove the discount from.
   */
  const removeDiscount = (productName) => {
    //buscar el producto
    const removeDiscount = discounts.find(discountElement => {
      return discountElement.product.name === productName;
    });
    //borrar el discount del array
    discounts = discounts.filter(discountElement => discountElement.product.name != productName)
    //cambiar el precio del producto que tenia ese descuento
    products = products.map(product => {
      if (removeDiscount.product.name === product.name){
        return {
          ...product,
          price: removeDiscount.product.price,
        }
      }
    });
  };

  return { addToCart, getCart, applyDiscount, getDiscounts, removeDiscount, removeProduct, getTotal };
};

export default cart;