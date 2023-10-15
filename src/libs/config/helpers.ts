import { ContactFormData } from "@/app/contact/page";
import { CartItem } from "../types";
import { CheckoutFormData } from "@/app/checkout/page";
import { useLoaderStore } from "../store";

export const calculateTotal = (cartItems: CartItem[]): number => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.subtotal;
    });
    return total;
  };





  export function sendContact(data: ContactFormData) {
    const apiEndpoint = '/api/contact';
  
    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
      })
      .catch((err) => {
        alert(err);
      });


      // console.log(data);
  }


  export function sendOrder(data: any) {
 

    console.log(data)
    const apiEndpoint = '/api/order';
  
    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
   
      })
      .catch((err) => {
        alert(err);
      });


      // console.log(data);
  }