import React, { useState } from 'react';
import './App.css';

const App = () => {
    const initialProducts = [
        { id: 1, name: 'Leche', price:   1.50, image: 'images/pr1.png' },
        { id: 2, name: 'Jugo de fresa', price: 1.00, image: 'images/pr2.png' },
        { id: 3, name: 'chocolate larin', price: 2.00, image: 'images/pr3.png' },
        { id: 4, name: 'jugo de uva', price: 2.50, image: 'images/pr4.png' },
        { id: 5, name: 'chocolate', price: 2.00, image: 'images/pr5.png' },
        { id: 6, name: 'Nature heart', price: 2.60, image: 'images/pr6.png' },
        { id: 7, name: 'galletas gamesa', price: 3.00, image: 'images/pr7.png' },
        { id: 8, name: 'Leche santa clara', price: 3.50, image: 'images/pr8.png' },
        { id: 9, name: 'Xiocolat', price: 4.00, image: 'images/pr9.png' },
        { id: 10, name: 'Crunch', price: 3.50, image: 'images/pr10.png' },
        { id: 11, name: 'La costeña', price: 5.00, image: 'images/pr11.png' },
        { id: 12, name: 'Asanitas', price: 1.00, image: 'images/pr12.png' }
    ];

    const [products, setProducts] = useState(initialProducts.slice(0, 8));
    const [cartItems, setCartItems] = useState([]);
    const [currentItem, setCurrentItem] = useState(8);

    const loadMore = () => {
        const nextItem = currentItem + 4;
        setProducts(initialProducts.slice(0, nextItem));
        setCurrentItem(nextItem);
    };

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <div>
            <header className="header">
                <div className="menu container">
                    <a href="#" className="logo">logo</a>
                    <input type="checkbox" id="menu" />
                    <label htmlFor="menu">
                        <img src="images/menu.png" className="menu-icono" alt="menu" />
                    </label>
                    <nav className="navbar">
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Servicio</a></li>
                            <li><a href="#">Productos</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </nav>
                    <div>
                        <ul>
                            <li className="submenu">
                                <img id="img-carrito" src="images/car.svg" alt="carrito" />
                                <div id="carrito">
                                    <table id="lista-carrito">
                                        <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Eliminar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems.map(item => (
                                                <tr key={item.id}>
                                                    <td><img src={item.image} width="100" height="150px" alt={item.name} /></td>
                                                    <td>{item.name}</td>
                                                    <td>${item.price}</td>
                                                    <td>
                                                        <a href="#" className="borrar" onClick={() => removeFromCart(item.id)}>X</a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <a href="#" id="vaciar-carrito" onClick={clearCart}>Vaciar carrito</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="header-content container">
                    <div className="header-txt">
                        <span>Bienvenido a nuestra tienda</span>
                        <h1>Ofertas Especiales</h1>
                        <p>descuentos del 50% en todos los productos seleccionados</p>
                        <div className="butons">
                            <a href="#" className="btn-1">Información</a>
                            <a href="#" className="btn-1">Leer más</a>
                        </div>
                    </div>
                    <div className="header-img">
                        <img src="images/bag.png" alt="bolsa" />
                    </div>
                </div>
            </header>

            <section className="oferts-container">
                <div className="oferts-1 b1">
                    <div className="oferts-txt">
                        <h3>Vegetales</h3>
                        <a href="#">Leer más</a>
                    </div>
                    <div className="oferts-img">
                        <img src="images/s1.png" alt="oferta 1" />
                    </div>
                </div>

                <div className="oferts-1 b2">
                    <div className="oferts-txt">
                        <h3>Frutas y Verduras</h3>
                        <a href="#">Leer más</a>
                    </div>
                    <div className="oferts-img">
                        <img src="images/s2.png" alt="oferta 2" />
                    </div>
                </div>

                <div className="oferts-1 b3">
                    <div className="oferts-txt">
                        <h3>Lacteos</h3>
                        <a href="#">Leer más</a>
                    </div>
                    <div className="oferts-img">
                        <img src="images/s3.png" alt="oferta 3" />
                    </div>
                </div>
            </section>

            <main className="products container">
                <h2>Productos</h2>
                <div className="box-container" id="lista-1">
                    {products.map(product => (
                        <div className="box" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div className="products-txt">
                                <h3>{product.name}</h3>
                                <p className="precio">${product.price}</p>
                                <a 
                                    href="#" 
                                    className="agregar-carrito btn-3" 
                                    onClick={() => addToCart(product)} 
                                    data-id={product.id}
                                >
                                    Agregar al carrito
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                {currentItem < initialProducts.length && (
                    <div className="btn-2" id="load-more" onClick={loadMore}>
                        Cargar más
                    </div>
                )}
            </main>

            <section className="testimonial container">
                <span>Testimoniales</span>
                <h2>Qué opinan nuestros clientes</h2>
                <div className="testimonial-content">
                    <div className="testimonial-1">
                        <p>Es una de las mejores tiendas.</p>
                        <img src="images/starts.png" alt="estrellas" />
                        <h4>Rosa Yepez</h4>
                    </div>
                    <div className="testimonial-1">
                        <p>Sus productos son de buena calidad y Naturales</p>
                        <img src="images/starts.png" alt="estrellas" />
                        <h4>Solanlly Yepez</h4>
                    </div>
                </div>
            </section>

            
        </div>
    );
};

export default App;
