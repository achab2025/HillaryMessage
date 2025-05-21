
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CreditCard, Calendar, ShieldCheck, User } from "lucide-react";

interface PaymentInfo {
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

interface PaymentFormProps {
  paymentInfo: PaymentInfo;
  setPaymentInfo: React.Dispatch<React.SetStateAction<PaymentInfo>>;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ paymentInfo, setPaymentInfo }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Format card number with spaces
    if (name === "cardNumber") {
      const formattedValue = value
        .replace(/\s/g, "")
        .match(/.{1,4}/g)
        ?.join(" ")
        .substr(0, 19) || "";
        
      setPaymentInfo(prev => ({
        ...prev,
        [name]: formattedValue
      }));
      return;
    }
    
    // Format expiry date
    if (name === "expiryDate") {
      const cleaned = value.replace(/\D/g, "");
      let formatted = cleaned;
      
      if (cleaned.length > 2) {
        formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
      }
      
      setPaymentInfo(prev => ({
        ...prev,
        [name]: formatted.substr(0, 5)
      }));
      return;
    }
    
    // Format CVV (numbers only, max 4 digits)
    if (name === "cvv") {
      const cleaned = value.replace(/\D/g, "");
      setPaymentInfo(prev => ({
        ...prev,
        [name]: cleaned.substr(0, 4)
      }));
      return;
    }
    
    setPaymentInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="cardholderName" className="text-spa-green-dark">Cardholder Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-2.5 h-5 w-5 text-spa-green" />
            <Input
              id="cardholderName"
              name="cardholderName"
              value={paymentInfo.cardholderName}
              onChange={handleChange}
              placeholder="John Doe"
              className="pl-10 border-spa-beige focus-visible:ring-spa-green"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="cardNumber" className="text-spa-green-dark">Card Number</Label>
          <div className="relative">
            <CreditCard className="absolute left-3 top-2.5 h-5 w-5 text-spa-green" />
            <Input
              id="cardNumber"
              name="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={handleChange}
              placeholder="0000 0000 0000 0000"
              className="pl-10 border-spa-beige focus-visible:ring-spa-green"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiryDate" className="text-spa-green-dark">Expiry Date</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-spa-green" />
              <Input
                id="expiryDate"
                name="expiryDate"
                value={paymentInfo.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                className="pl-10 border-spa-beige focus-visible:ring-spa-green"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cvv" className="text-spa-green-dark">CVV</Label>
            <div className="relative">
              <ShieldCheck className="absolute left-3 top-2.5 h-5 w-5 text-spa-green" />
              <Input
                id="cvv"
                name="cvv"
                value={paymentInfo.cvv}
                onChange={handleChange}
                placeholder="123"
                className="pl-10 border-spa-beige focus-visible:ring-spa-green"
                required
              />
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-2 mt-6">
          <img src="https://cdn.hubtel.com/shared/images/public/hubtel-logo.svg" alt="Hubtel" className="h-6 sm:h-8" />
          <span className="font-medium text-xs sm:text-sm text-gray-600">Secure payment powered by Hubtel</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
