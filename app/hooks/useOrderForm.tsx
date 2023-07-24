import { useRef, useState, ChangeEvent, useEffect } from 'react';

interface IPrices {
  [key: string]: number;
}

interface IQuantities {
  [key: string]: number;
}

export function useOrderForm() {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [isAgreementChecked, setAgreementChecked] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [total, setTotal] = useState(0);
  const prices: IPrices = {
    hard_wood_100: 2000,
    hard_wood_50: 2200,
    hard_wood_33: 2300,
    soft_wood_100: 1400,
    soft_wood_50: 1600,
    soft_wood_33: 1700,
  };
  const [quantities, setQuantities] = useState<IQuantities>({
    hard_wood_100: 0,
    hard_wood_50: 0,
    hard_wood_33: 0,
    soft_wood_100: 0,
    soft_wood_50: 0,
    soft_wood_33: 0,
  });

  const [personalData, setPersonalData] = useState({
    user_name: '',
    user_sureName: '',
    user_phone: '',
    user_email: '',
    user_address: '',
    user_city: '',
    user_psc: ''
  });

  const handlePersonalDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPersonalData({
      ...personalData,
      [e.target.name]: e.target.value
    });
  };

  const handleAgreementChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAgreementChecked(e.target.checked);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newQuantities = {
      ...quantities,
      [name]: Number(value),
    };
    setQuantities(newQuantities);
    let newTotal = 0;
    for (let key in newQuantities) {
      newTotal += newQuantities[key] * prices[key];
    }
    setTotal(newTotal);
  };

  const resetForm = () => {
    setQuantities({
      hard_wood_100: 0,
      hard_wood_50: 0,
      hard_wood_33: 0,
      soft_wood_100: 0,
      soft_wood_50: 0,
      soft_wood_33: 0,
    });
    setPersonalData({
      user_name: '',
      user_sureName: '',
      user_phone: '',
      user_email: '',
      user_address: '',
      user_city: '',
      user_psc: ''
    });
    setTotal(0);
    setAgreementChecked(false);
  };

  useEffect(() => {
    if (isFormSubmitted) {
      const timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isFormSubmitted]);

  return {
    isFormSubmitted, setFormSubmitted, isAgreementChecked, setAgreementChecked, form,
    total, setTotal, prices, quantities, setQuantities, personalData, setPersonalData,
    handlePersonalDataChange, handleAgreementChange, handleChange, resetForm
  }
}