
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { User, Mail, Phone } from "lucide-react";

interface GuestInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface GuestDetailsFormProps {
  guestInfo: GuestInfo;
  setGuestInfo: React.Dispatch<React.SetStateAction<GuestInfo>>;
}

const GuestDetailsForm: React.FC<GuestDetailsFormProps> = ({ guestInfo, setGuestInfo }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGuestInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name*</Label>
          <div className="relative">
            <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              id="firstName"
              name="firstName"
              value={guestInfo.firstName}
              onChange={handleChange}
              placeholder="John"
              className="pl-10"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name*</Label>
          <div className="relative">
            <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              id="lastName"
              name="lastName"
              value={guestInfo.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className="pl-10"
              required
            />
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email Address*</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <Input
            id="email"
            name="email"
            type="email"
            value={guestInfo.email}
            onChange={handleChange}
            placeholder="john.doe@example.com"
            className="pl-10"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number*</Label>
        <div className="relative">
          <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <Input
            id="phone"
            name="phone"
            value={guestInfo.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            className="pl-10"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default GuestDetailsForm;
