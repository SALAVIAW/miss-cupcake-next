import { MdDelete, GiCupcake, ImCart } from "react-icons/md";
import Image from "next/image";

const ItemCart = ({ product }) => {
  // Ajustar modelo de nome das classes

  return (
    <>
      <section>
        <h1>My Products</h1>
        <p>2</p>
      </section>
      <section className="modal_cart_item" key={ product.id }>
        <figure className="modal_cart_image">
          <Image src={ product.image } alt={ product.name } width={200} height={200} />
        </figure>
        <section className="modal_cart_details">
          <h2>Product Name</h2>
          <p>Product Description</p>
          <MdDelete />
        </section>
        <section className="modal_cart_quantity">
          <input type="button" value="-" />
          <input type="text" value="1" />
          <input type="button" value="+" />
        </section>
      </section>
      <button
        type="submit"
      >
        <ImCart /> Comprar
      </button>
    </>
  )
}

export default ItemCart;