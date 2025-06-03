import React, { useCallback } from 'react';
import { usePaystackPayment } from 'react-paystack';
import { Button } from '@/components/ui/button';
import { CreditCard, Shield, Lock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface PaystackPaymentProps {
  amount: number;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  onSuccess: (reference: any) => void;
  onClose: () => void;
  disabled?: boolean;
}

const PaystackPayment: React.FC<PaystackPaymentProps> = ({
  amount,
  email,
  firstName,
  lastName,
  phone,
  onSuccess,
  onClose,
  disabled = false
}) => {
  const { toast } = useToast();

  // Paystack configuration with your provided public key
  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: amount * 100, // Paystack expects amount in kobo (pesewas for GHS)
    publicKey: 'pk_test_8808c1f796840bcc9fbc7d52d737dc3edf015501',
    currency: 'GHS',
    channels: ['card', 'bank', 'ussd', 'qr', 'mobile_money'],
    metadata: {
      custom_fields: [
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: `${firstName} ${lastName}`
        },
        {
          display_name: "Phone Number",
          variable_name: "phone_number",
          value: phone
        }
      ]
    },
    onClose: () => {
      toast({
        title: "Payment Cancelled",
        description: "You cancelled the payment process",
        variant: "destructive",
      });
      onClose();
    }
  };

  const initializePayment = usePaystackPayment(config);

  const handlePayment = useCallback(() => {
    initializePayment((reference: any) => {
      toast({
        title: "Payment Successful!",
        description: `Payment completed with reference: ${reference.reference}`,
      });
      onSuccess(reference);
    });
  }, [initializePayment, onSuccess, toast]);

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="bg-gradient-to-r from-spa-green/10 to-spa-green-dark/10 rounded-lg p-6 border border-spa-green/20">
        <div className="flex items-center justify-center mb-4">
          <img 
            src="https://paystack.com/assets/img/logo/paystack-blue.svg" 
            alt="Paystack" 
            className="h-8"
          />
        </div>
        
        <div className="text-center space-y-2 mb-6">
          <h3 className="text-lg font-semibold text-spa-green-dark">Secure Payment</h3>
          <p className="text-sm text-gray-600">
            Pay securely with Paystack - Ghana's leading payment platform
          </p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600">Amount:</span>
            <span className="font-semibold text-spa-green-dark">
              GH₵{amount.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600">Email:</span>
            <span className="text-sm text-gray-800">{email}</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-600">Customer:</span>
            <span className="text-sm text-gray-800">{firstName} {lastName}</span>
          </div>
        </div>

        <Button
          onClick={handlePayment}
          disabled={disabled}
          className="w-full bg-gradient-to-r from-spa-green to-spa-green-dark hover:from-spa-green-dark hover:to-spa-green text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
        >
          <CreditCard className="mr-2 h-5 w-5" />
          Pay with Paystack
        </Button>
      </div>

      <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
        <div className="flex items-center space-x-1">
          <Shield className="h-4 w-4" />
          <span>Secure</span>
        </div>
        <div className="flex items-center space-x-1">
          <Lock className="h-4 w-4" />
          <span>Encrypted</span>
        </div>
        <div className="flex items-center space-x-1">
          <CreditCard className="h-4 w-4" />
          <span>PCI Compliant</span>
        </div>
      </div>

      <div className="text-center">
        <p className="text-xs text-gray-500">
          Test mode: Use test cards for transactions
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Supported: Cards, Bank Transfer, Mobile Money, USSD
        </p>
      </div>
    </div>
  );
};

export default PaystackPayment;
