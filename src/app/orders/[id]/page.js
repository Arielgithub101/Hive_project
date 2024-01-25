'use client';
import {CartContext, cartProductPrice} from "@/components/AppContext";
import AddressInputs from "@/components/layout/AddressInputs";
import SectionHeaders from "@/components/layout/SectionHeaders";
import CartProduct from "@/components/menu/CartProduct";
import {useParams} from "next/navigation";
import {useContext, useEffect, useState} from "react";

export default function OrderPage() {
  const {clearCart} = useContext(CartContext);
  const [order, setOrder] = useState();
  const [loadingOrder, setLoadingOrder] = useState(true);
  const {id} = useParams();
  useEffect(() => {
    if (typeof window.console !== "undefined") {
      if (window.location.href.includes('clear-cart=1')) {
        clearCart();
      }
    }
    if (id) {
      setLoadingOrder(true);
      fetch('/api/orders?_id='+id).then(res => {
        res.json().then(orderData => {
          setOrder(orderData);
          setLoadingOrder(false);
        });
      })
    }
  }, []);

  let subtotal = 0;
  if (order?.cartProducts) {
    for (const product of order?.cartProducts) {
      subtotal += cartProductPrice(product);
    }
  }

  return (
    <section className="max-w-2xl mx-auto mt-8">
      <div className="text-center">
        <SectionHeaders mainHeader="Your order" />
        <div className="mt-4 mb-8">
          <p>תודה על הזמנתך !!.</p>
          <p>נתקשר אליך ונודיע כאשר השליח פיםמס🛵☎📞</p>
          <p>אמייל עם פרטי ההזמנה נשלח אליך,אנא וודא שקיבלת ,המשך יום נעים!🍕😊🍕</p>
        </div>
      </div>
      {loadingOrder && (
        <div>😁🔃טוען נתונים...</div>
      )}
      {order && (
        <div className="grid md:grid-cols-2 md:gap-16">
          <div>
            {order.cartProducts.map(product => (
              <CartProduct key={product._id} product={product} />
            ))}
            <div className="text-right py-2 text-gray-500">
              סכום בניים:
              <span className="text-black font-bold inline-block w-8">₪{subtotal}</span>
              <br />
              משלוח:
              <span className="text-black font-bold inline-block w-8">₪5</span>
              <br />
              סכום סופי:
              <span className="text-black font-bold inline-block w-8">
                ₪{subtotal + 5}
              </span>
            </div>
          </div>
          <div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <AddressInputs
                disabled={true}
                addressProps={order}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}